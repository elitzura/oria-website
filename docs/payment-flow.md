# תהליך התשלום — ORIA AI

מסמך זה מתאר את כל מסלול התשלום, מרגע שהמשתמש לוחץ "רכישה" ועד כניסה לאפליקציה.

---

## ארכיטקטורה כללית

```
Browser (checkout page)
  │
  │  POST /api/initiate-payment
  ▼
Next.js (Vercel)  ──────────────────►  Morning API
  │                                    /account/token
  │                                    /payments/form
  │
  │  { paymentUrl }
  ▼
Browser — מציג iframe עם טופס תשלום של Morning
  │
  │  המשתמש מזין פרטי כרטיס אשראי ומשלם
  ▼
Morning
  │
  ├──► POST /api/payment-notify  ──►  n8n  ──►  DB + HubSpot
  │         (server-to-server)
  │
  └──► redirect iframe ──►  /checkout/payment-result
                                   │
                                   │  window.top.location.href
                                   ▼
                             /welcome?token=SESSION
                                   │
                                   │  GET /api/session-lookup  (polling)
                                   ▼
                                  n8n ──► loginUrl
                                   │
                                   ▼
                             כניסה לאפליקציה
```

---

## שלב 1 — טופס פרטים אישיים (`/checkout`)

**קובץ:** `app/checkout/page.jsx`

המשתמש ממלא:
- שם פרטי + משפחה (חובה)
- כתובת דוא"ל (חובה, ולידציה)
- מספר טלפון (חובה)
- שם קליניקה (אופציונלי)
- אישור תנאי שימוש (חובה)

לחיצה על "המשך לתשלום" שולחת `POST /api/initiate-payment`.

---

## שלב 2 — יצירת טופס תשלום (`/api/initiate-payment`)

**קובץ:** `app/api/initiate-payment/route.js`

### מה קורה בשרת:

**1. ולידציה**
- שם, מייל תקין, פלאן (`basic` / `premium`)
- אם חסר — מחזיר 400

**2. אותנטיקציה מול Morning**
```
POST https://api.greeninvoice.co.il/api/v1/account/token
Body: { id: MORNING_API_ID, secret: MORNING_API_SECRET }
Response: { token: "JWT..." }
```
הטוקן משמש לבקשה הבאה בלבד (לא נשמר — קצר חיים).

**3. יצירת `sessionToken`**
```js
crypto.randomUUID()  // e.g. "a1b2c3d4-..."
```
הטוקן מוטמע ב-`successUrl` וב-`custom` — Morning יחזיר אותו בחזרה.
זה מה שמחבר בין התשלום לחשבון שייווצר.

**4. יצירת טופס תשלום**
```
POST https://api.greeninvoice.co.il/api/v1/payments/form
Authorization: Bearer {JWT}
Body:
{
  description: "מנוי ORIA AI",
  type: 320,
  lang: "he",
  currency: "ILS",
  vatType: 0,
  amount: 129,
  maxPayments: 1,
  client: { name, emails: [email], phone, add: true },
  income: [{ description: "מנוי MIND PREMIUM", quantity: 1, price: 129, ... }],
  successUrl: "https://oria.ai/checkout/payment-result?token=SESSION&status=success",
  failureUrl: "https://oria.ai/checkout/payment-result?status=failed",
  notifyUrl:  "https://oria.ai/api/payment-notify",
  custom:     "SESSION_TOKEN"
}
```

**5. תגובה לבראוזר**
```json
{ "errorCode": 0, "paymentUrl": "https://app.greeninvoice.co.il/..." }
```

### מפות שגיאות:
| מצב | status | תגובה |
|-----|--------|--------|
| env vars חסרים | 500 | Server is not configured |
| ולידציה נכשלה | 400 | Invalid payment request |
| Morning auth נכשל | 500 | הודעת שגיאה בעברית |
| Morning form נכשל | 500 | הודעת שגיאה בעברית |

---

## שלב 3 — iframe תשלום

**קובץ:** `app/checkout/page.jsx`

כשחוזר `paymentUrl`:
- הטופס נעלם
- מוצג spinner
- iframe נטען עם ה-URL של Morning
- ה-step indicator עובר ל"תשלום"

המשתמש מזין כרטיס אשראי בתוך ה-iframe (hosted page של Morning — לא נוגעים בפרטי כרטיס).

---

## שלב 4 — notification מ-Morning (`/api/payment-notify`)

**קובץ:** `app/api/payment-notify/route.js`

Morning שולח POST לנקודה זו **server-to-server** כשהתשלום מסתיים (הצלחה או כישלון).

**חשוב:** תמיד מחזיר 200 — Morning מבצע retries על כל תגובה שאינה 200.

### מה קורה:
1. מקבל את ה-body הגולמי מ-Morning
2. מעביר אותו ל-n8n: `POST {N8N_BASE_URL}/webhook/payment-notify`
3. n8n מאמת את התשלום חזרה מול Morning (לפי document ID)
4. n8n יוצר משתמש ב-DB, מעדכן HubSpot, שומר `loginUrl` לפי `sessionToken`

### אבטחה:
> **⚠️ חשוב:** n8n חייב לאמת את ה-notification מול Morning לפני פעולה.
> לא לסמוך על payload בלבד — לקרוא `GET /documents/{id}` מ-Morning ולוודא שהתשלום אכן הושלם.
> זה מונע fake notifications שיוצרים חשבונות חינם.

### payload שמגיע מ-Morning (דוגמה):
```json
{
  "id": "DOCUMENT_ID",
  "type": 320,
  "status": 1,
  "amount": 129,
  "custom": "SESSION_TOKEN",
  ...
}
```
השדה `custom` מכיל את ה-`sessionToken` שנוצר בשלב 2.

---

## שלב 5 — יציאה מה-iframe (`/checkout/payment-result`)

**קובץ:** `app/checkout/payment-result/page.jsx`

Morning מפנה את ה-iframe לדף זה:
- הצלחה: `/checkout/payment-result?token=SESSION&status=success`
- כישלון: `/checkout/payment-result?status=failed`

הדף מוציא את המשתמש מה-iframe דרך:
```js
window.top.location.href = '/welcome?token=SESSION'  // הצלחה
window.top.location.href = '/checkout?failed=1'       // כישלון
```

---

## שלב 6 — המתנה לחשבון (`/welcome`)

**קובץ:** `app/welcome/page.jsx`

מבצע polling ל-`GET /api/session-lookup?token=SESSION` כל 2 שניות.

**קובץ:** `app/api/session-lookup/route.js` — מעביר ל-n8n.

n8n מחפש רשומה לפי ה-`sessionToken`. ברגע ש-`payment-notify` עיבד את התשלום ושמר `loginUrl`, ה-polling מקבל:
```json
{ "loginUrl": "https://app.oriamind.ai/login?token=..." }
```

המשתמש מועבר לאפליקציה.

**timeout:** 30 ניסיונות × 2 שניות = 60 שניות מקסימום.

---

## סכמת env variables

### Vercel (Next.js — server-side בלבד):
| משתנה | תיאור | חובה |
|--------|--------|------|
| `MORNING_API_ID` | מזהה ה-API של Morning | ✅ |
| `MORNING_API_SECRET` | סוד ה-API של Morning | ✅ |
| `SITE_URL` | `https://oria.ai` — לבניית callback URLs | ✅ |
| `N8N_BASE_URL` | כתובת שרת n8n | ✅ |
| `N8N_SITE_TOKEN` | טוקן אבטחה ל-n8n | ✅ |

### n8n:
| משתנה | תיאור |
|--------|--------|
| `X-Site-Token` header | מאמת שהבקשה הגיעה מהאתר שלנו |

---

## n8n Webhooks

### `POST /webhook/payment-notify`
מקבל notification מ-Morning (דרך `/api/payment-notify`).

**לוגיקה מומלצת:**
1. חלץ `custom` (= sessionToken) ו-`id` (= document ID) מה-body
2. קרא `GET /documents/{id}` מ-Morning עם ה-JWT — **אמת שהתשלום הושלם**
3. צור משתמש ב-DB עם `{ email, name, phone, plan, sessionToken }`
4. צור `loginUrl`
5. שמור `{ sessionToken → loginUrl }` לפולינג
6. עדכן HubSpot: contact עם `plan`, `payment_status: paid`, תאריך

### `GET /webhook/session-lookup?token=SESSION`
מחפש `loginUrl` לפי `sessionToken`.

**תגובה כשמוכן:**
```json
{ "loginUrl": "https://app.oriamind.ai/login?token=..." }
```
**תגובה כשעדיין ממתין:**
```json
{ "status": "pending" }
```

---

## קבצים רלוונטיים

| קובץ | תפקיד |
|------|--------|
| `app/checkout/page.jsx` | טופס פרטים + iframe תשלום |
| `app/api/initiate-payment/route.js` | auth + יצירת טופס ב-Morning |
| `app/api/payment-notify/route.js` | מקבל webhook מ-Morning, מעביר ל-n8n |
| `app/checkout/payment-result/page.jsx` | יוצא מה-iframe לאחר תשלום |
| `app/api/session-lookup/route.js` | polling — מחפש loginUrl ב-n8n |
| `app/welcome/page.jsx` | דף המתנה לחשבון |
| `app/thank-you/page.jsx` | דף אישור סופי |

---

## בדיקה end-to-end

1. הוסף env vars ל-`.env.local` (ראה `.env.example`)
2. הרץ `npm run dev`
3. עבור ל-`http://localhost:3000/checkout?plan=mind-premium`
4. מלא פרטים → "המשך לתשלום"
5. בדוק network tab — `POST /api/initiate-payment` חייב להחזיר `{ errorCode: 0, paymentUrl: "https://app.greeninvoice.co.il/..." }`
6. ה-iframe נטען עם טופס Morning
7. השתמש בכרטיס הבדיקה של Morning לתשלום מדומה
8. בדוק n8n execution log — `payment-notify` חייב להופיע
9. `/welcome` מקבל `loginUrl` ומעביר לאפליקציה
10. בדוק כישלון: תשלום כושל → `/checkout?failed=1` → banner שגיאה
