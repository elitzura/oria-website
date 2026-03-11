'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const PLANS = {
  mind: {
    id: 'mind',
    apiPlan: 'basic',
    name: 'MIND 🧠',
    badge: 'מחיר השקה — חוסכים ₪60/חודש',
    desc: 'כשרוצים שהמערכת תתחיל לעבוד בשבילכם',
    price: 129,
    originalPrice: 189,
    features: [
      'מטופלים ללא הגבלה',
      'ניהול תשלומים וגבייה',
      'תזכורות פגישות אוטומטיות במייל',
      'סוכן AI אחד: סיכום פגישות ומעקב מטופל',
      'תמיכה במייל',
    ],
  },
  'mind-premium': {
    id: 'mind-premium',
    apiPlan: 'premium',
    name: 'MIND PREMIUM ⚡',
    badge: 'הכי פופולרי — חוסכים ₪90/חודש ⭐',
    desc: 'כשרוצים שהקליניקה תנהל את עצמה',
    price: 199,
    originalPrice: 289,
    features: [
      'כל מה שב-MIND',
      'סוכני AI מרובים — ניהול קליניקה מלא',
      'תזכורות ועדכונים בוואטסאפ למטופלים',
      'ניתוח תובנות ודפוסים קליניים',
      'דוחות התקדמות אוטומטיים',
      "תמיכה בצ'אט ובטלפון",
    ],
  },
};

function Field({ id, label, required, errors, children }) {
  return (
    <div className={`form-group${errors[id] ? ' has-error' : ''}`}>
      <label htmlFor={id}>{label} {required && <span className="req">*</span>}</label>
      {children}
      {errors[id] && <div className="err-msg">{errors[id]}</div>}
    </div>
  );
}

function CheckoutForm() {
  const searchParams = useSearchParams();
  const planKey = searchParams.get('plan') || 'mind-premium';
  const plan = PLANS[planKey] || PLANS['mind-premium'];
  const failedParam = searchParams.get('failed');

  const [fields, setFields] = useState({ firstName: '', lastName: '', email: '', phone: '', clinicName: '' });
  const [errors, setErrors] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [globalError, setGlobalError] = useState(failedParam === '1' ? 'התשלום לא הושלם. אנא נסו שוב או השתמשו בכרטיס אחר.' : '');

  useEffect(() => { document.body.classList.remove('loading'); }, []);

  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const validate = () => {
    const errs = {};
    if (!fields.firstName.trim()) errs.firstName = 'שדה חובה';
    if (!fields.lastName.trim()) errs.lastName = 'שדה חובה';
    if (!isValidEmail(fields.email)) errs.email = 'אנא הזינו כתובת דוא"ל תקינה';
    if (!fields.phone.trim()) errs.phone = 'שדה חובה';
    if (!termsAccepted) errs.terms = 'יש לאשר את תנאי השימוש כדי להמשיך';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGlobalError('');
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch('/api/initiate-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${fields.firstName.trim()} ${fields.lastName.trim()}`,
          email: fields.email.trim(),
          phone: fields.phone.trim(),
          plan: plan.apiPlan,
        }),
      });
      if (!res.ok) throw new Error(`שגיאת שרת: ${res.status}`);
      const data = await res.json();
      if (data.errorCode !== 0 || !data.paymentUrl) throw new Error(data.message || 'לא הצלחנו להתחיל את תהליך התשלום. אנא נסו שוב.');
      window.location.href = data.paymentUrl;
    } catch (err) {
      setLoading(false);
      setGlobalError(err.message || 'משהו השתבש. אנא נסו שוב או צרו קשר עם התמיכה.');
    }
  };

  return (
    <>
      <style>{`
        *{box-sizing:border-box}
        body{background:#f5f5fb;min-height:100vh}
        .checkout-header{background:#fff;border-bottom:1px solid #eae9f8;padding:.85rem 2rem;position:fixed;top:0;left:0;right:0;z-index:200;display:flex;align-items:center;justify-content:space-between}
        .checkout-header .logo-img{height:38px;width:auto}
        .checkout-steps{display:flex;align-items:center;gap:.5rem;font-size:.83rem;color:#bbb}
        .checkout-steps .step{display:flex;align-items:center;gap:.35rem}
        .checkout-steps .step.active{color:#625DE5;font-weight:700}
        .checkout-steps .step .num{width:22px;height:22px;border-radius:50%;background:#eae9f8;color:#625DE5;font-weight:700;font-size:.78rem;display:flex;align-items:center;justify-content:center}
        .checkout-steps .step.active .num{background:#625DE5;color:#fff}
        .checkout-steps .sep{color:#ddd;font-size:.9rem}
        .checkout-wrap{max-width:980px;margin:0 auto;padding:100px 1.5rem 4rem;display:grid;grid-template-columns:1fr 360px;gap:1.75rem;align-items:start}
        .form-card{background:#fff;border-radius:18px;padding:2.25rem 2rem;box-shadow:0 4px 24px rgba(98,93,229,.07)}
        .form-card h1{font-size:1.45rem;font-weight:800;color:#171938;margin:0 0 .3rem}
        .form-card .form-subtitle{color:#888;font-size:.9rem;margin:0 0 2rem}
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
        .form-group{margin-bottom:1.2rem}
        .form-group label{display:block;font-size:.875rem;font-weight:600;color:#2d2d5e;margin-bottom:.4rem}
        .form-group label .req{color:#E5907A;margin-right:2px}
        .form-group label .opt{color:#aaa;font-weight:400;font-size:.8rem}
        .form-group input{width:100%;padding:.78rem 1rem;border:1.5px solid #e2e1f5;border-radius:10px;font-size:.97rem;font-family:inherit;color:#171938;background:#fafafa;transition:border-color .18s,box-shadow .18s;direction:rtl}
        .form-group input[dir=ltr]{text-align:right}
        .form-group input:focus{outline:none;border-color:#625DE5;box-shadow:0 0 0 3px rgba(98,93,229,.13);background:#fff}
        .form-group .err-msg{display:none;color:#e05a5a;font-size:.78rem;margin-top:.3rem}
        .form-group.has-error .err-msg{display:block}
        .form-group.has-error input{border-color:#e05a5a}
        .terms-row{display:flex;align-items:flex-start;gap:.75rem;background:#f4f3fd;border-radius:12px;padding:1rem 1.1rem;margin-top:.5rem;cursor:pointer}
        .terms-row input[type=checkbox]{width:18px;height:18px;flex-shrink:0;margin-top:2px;accent-color:#625DE5;cursor:pointer}
        .terms-row label{font-size:.875rem;color:#555;line-height:1.55;cursor:pointer}
        .terms-row label a{color:#625DE5;text-decoration:underline}
        .submit-area{margin-top:1.75rem}
        .submit-area .btn{width:100%;padding:1rem;font-size:1.05rem;font-weight:700;border-radius:12px;letter-spacing:.01em}
        .secure-note{text-align:center;font-size:.78rem;color:#bbb;margin-top:.75rem;display:flex;align-items:center;justify-content:center;gap:.4rem}
        .plan-card{background:linear-gradient(145deg,#625DE5 0%,#48B7FF 100%);border-radius:18px;padding:1.75rem;color:#fff;position:sticky;top:90px}
        .plan-badge{background:rgba(255,255,255,.22);border-radius:20px;padding:.22rem .8rem;font-size:.78rem;font-weight:700;display:inline-block;margin-bottom:1rem}
        .plan-name{font-family:'Montserrat',sans-serif;font-size:1.9rem;font-weight:800;margin:0 0 .2rem;letter-spacing:-.02em}
        .plan-desc{font-size:.88rem;opacity:.82;margin:0 0 1.35rem}
        .trial-tag{background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.3);border-radius:10px;padding:.65rem 1rem;font-size:.84rem;display:flex;align-items:center;gap:.5rem;margin-bottom:1.1rem}
        .price-box{background:rgba(255,255,255,.15);border-radius:12px;padding:1rem 1.2rem;margin-bottom:1.35rem;display:flex;align-items:baseline;flex-wrap:wrap;gap:.2rem}
        .price-box .p-cur{font-size:1.15rem;font-weight:700}
        .price-box .p-num{font-size:2.4rem;font-weight:800;line-height:1}
        .price-box .p-per{font-size:.9rem;opacity:.8}
        .price-box .p-note{font-size:.78rem;opacity:.75;width:100%;margin-top:.2rem}
        .price-box .p-orig{width:100%;font-size:.8rem;opacity:.6;text-decoration:line-through;margin-bottom:2px}
        .plan-features{list-style:none;padding:0;margin:0 0 1.35rem}
        .plan-features li{display:flex;align-items:center;gap:.55rem;padding:.38rem 0;font-size:.88rem}
        .plan-features li .chk{background:rgba(255,255,255,.25);border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:.65rem;flex-shrink:0}
        .plan-change{text-align:center;border-top:1px solid rgba(255,255,255,.2);padding-top:1rem}
        .plan-change a{color:rgba(255,255,255,.72);font-size:.82rem;text-decoration:underline}
        .plan-change a:hover{color:#fff}
        .form-error-global{background:#fee;color:#c00;padding:1rem;border-radius:10px;margin-bottom:1rem;text-align:center;font-size:.9rem}
        @media(max-width:760px){.checkout-wrap{grid-template-columns:1fr;padding-top:80px}.plan-card{position:static;order:-1}.form-row{grid-template-columns:1fr}.checkout-steps .label{display:none}}
      `}</style>

      <header className="checkout-header">
        <Link href="/">
          <picture>
            <source srcSet="/logos/3.webp" type="image/webp" />
            <img src="/logos/3.png" alt="ORIA AI" className="logo-img" />
          </picture>
        </Link>
        <div className="checkout-steps">
          <div className="step active"><div className="num">1</div><span className="label">פרטים אישיים</span></div>
          <div className="sep">›</div>
          <div className="step"><div className="num">2</div><span className="label">תשלום</span></div>
          <div className="sep">›</div>
          <div className="step"><div className="num">3</div><span className="label">אישור</span></div>
        </div>
      </header>

      <main>
        <div className="checkout-wrap">
          <div className="form-card">
            <h1>פרטי הרשמה</h1>
            <p className="form-subtitle">שלב אחד לפני התשלום — מלאו את הפרטים ונמשיך</p>

            {globalError && <div className="form-error-global">{globalError}</div>}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <Field id="firstName" label="שם פרטי" required errors={errors}>
                  <input type="text" id="firstName" value={fields.firstName} onChange={(e) => { setFields({ ...fields, firstName: e.target.value }); setErrors({ ...errors, firstName: '' }); setGlobalError(''); }} placeholder="ישראל" autoComplete="given-name" />
                </Field>
                <Field id="lastName" label="שם משפחה" required errors={errors}>
                  <input type="text" id="lastName" value={fields.lastName} onChange={(e) => { setFields({ ...fields, lastName: e.target.value }); setErrors({ ...errors, lastName: '' }); setGlobalError(''); }} placeholder="ישראלי" autoComplete="family-name" />
                </Field>
              </div>
              <Field id="email" label='כתובת דוא"ל' required errors={errors}>
                <input type="email" id="email" value={fields.email} onChange={(e) => { setFields({ ...fields, email: e.target.value }); setErrors({ ...errors, email: '' }); setGlobalError(''); }} placeholder="name@example.com" autoComplete="email" dir="ltr" />
              </Field>
              <Field id="phone" label="מספר טלפון" required errors={errors}>
                <input type="tel" id="phone" value={fields.phone} onChange={(e) => { setFields({ ...fields, phone: e.target.value }); setErrors({ ...errors, phone: '' }); setGlobalError(''); }} placeholder="050-0000000" autoComplete="tel" />
              </Field>
              <div className="form-group">
                <label htmlFor="clinicName">שם הקליניקה / מרכז <span className="opt">(אופציונלי)</span></label>
                <input type="text" id="clinicName" value={fields.clinicName} onChange={(e) => setFields({ ...fields, clinicName: e.target.value })} placeholder="שם הקליניקה שלכם" autoComplete="organization" />
              </div>
              <div className={`form-group${errors.terms ? ' has-error' : ''}`}>
                <div className="terms-row">
                  <input type="checkbox" id="termsAccept" checked={termsAccepted} onChange={(e) => { setTermsAccepted(e.target.checked); setErrors({ ...errors, terms: '' }); }} />
                  <label htmlFor="termsAccept">
                    קראתי ואני מסכים/ה ל<Link href="/privacy" target="_blank">מדיניות הפרטיות</Link> של ORIA AI. אני מאשר/ת שאני בן/בת 18 ומעלה.
                  </label>
                </div>
                {errors.terms && <div className="err-msg" style={{ marginTop: '0.4rem' }}>{errors.terms}</div>}
              </div>
              <div className="submit-area">
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'אנא המתינו...' : 'המשך לתשלום ←'}
                </button>
                <p className="secure-note">🔒 חיבור מאובטח SSL &nbsp;·&nbsp; לא נשמור פרטי כרטיס אשראי</p>
              </div>
            </form>
          </div>

          <div className="plan-card">
            <div className="plan-badge">{plan.badge}</div>
            <div className="plan-name">{plan.name}</div>
            <p className="plan-desc">{plan.desc}</p>
            <div className="trial-tag">🎁 <span>14 ימי ניסיון חינם — ללא כרטיס אשראי</span></div>
            <div className="price-box">
              {plan.originalPrice && <span className="p-orig">₪{plan.originalPrice}/חודש</span>}
              <span className="p-cur">₪</span>
              <span className="p-num">{plan.price}</span>
              <span className="p-per">/חודש</span>
              <span className="p-note">לאחר תקופת הניסיון</span>
            </div>
            <ul className="plan-features">
              {plan.features.map((f, i) => (
                <li key={i}><span className="chk">✓</span>{f}</li>
              ))}
            </ul>
            <div className="plan-change">
              <Link href="/#pricing">← שנה חבילה</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>טוען...</div>}>
      <CheckoutForm />
    </Suspense>
  );
}
