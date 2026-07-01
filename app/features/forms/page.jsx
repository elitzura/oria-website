import Link from 'next/link';
import FeaturePageLayout from '../../../components/FeaturePageLayout';

export const metadata = { title: 'טפסים דיגיטליים - שולחים למטופל, עוקבים בתיק | ORIA AI' };

export default function FormsFeaturePage() {
  return (
    <>
      <style>{`
        .feature-page-hero{background:linear-gradient(160deg,var(--dark) 0%,#7c2d12 60%,#E5907A 100%);padding:140px 1.5rem 80px;position:relative;overflow:hidden}
        .feature-page-hero::before{content:'';position:absolute;width:450px;height:450px;border-radius:50%;background:radial-gradient(circle,rgba(229,144,122,.22) 0%,transparent 70%);top:-80px;right:-80px;pointer-events:none}
        .feature-hero-inner{max-width:820px;margin:0 auto;position:relative;z-index:2}
        .feature-back{display:inline-flex;align-items:center;gap:.4rem;color:rgba(255,255,255,.6);font-size:.9rem;font-weight:500;text-decoration:none;margin-bottom:1.5rem;transition:color .2s}
        .feature-back:hover{color:white}.feature-back::before{content:'→'}
        .feature-hero-tags{display:flex;gap:.5rem;margin-bottom:1.25rem;flex-wrap:wrap}
        .fh-tag{font-size:.78rem;font-weight:700;padding:.25rem .75rem;border-radius:100px;letter-spacing:.05em}
        .fh-tag-coral{background:rgba(255,200,150,.2);color:#fde8c8}
        .fh-tag-new{background:rgba(34,197,94,.2);color:#86efac}
        .feature-page-hero h1{font-size:clamp(2rem,5vw,3.25rem);font-weight:800;color:white;line-height:1.15;margin-bottom:1.25rem}
        .feature-page-hero h1 em{font-style:normal;color:#fde8c8}
        .feature-page-hero .lead{font-size:1.2rem;color:rgba(255,255,255,.78);line-height:1.7;max-width:640px}
        .stat-row{display:flex;gap:2rem;margin-top:2.5rem;flex-wrap:wrap}
        .stat-item{text-align:center}
        .stat-num{font-size:2.5rem;font-weight:800;color:#fde8c8;font-family:'Montserrat',sans-serif;line-height:1}
        .stat-label{font-size:.85rem;color:rgba(255,255,255,.6);margin-top:.25rem}
        .feature-body{max-width:820px;margin:0 auto;padding:72px 1.5rem 96px}
        .section-label{font-size:.8rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--primary);margin-bottom:.75rem}
        h2.feature-section-title{font-size:1.65rem;font-weight:800;color:var(--dark);margin-bottom:1rem;line-height:1.3}
        .body-text{font-size:1rem;color:var(--gray-700);line-height:1.75;margin-bottom:1.25rem}
        .how-steps{display:flex;flex-direction:column;gap:0;margin:2.5rem 0}
        .how-step{display:flex;gap:1.5rem;padding:1.75rem 0;border-bottom:1px solid var(--gray-200);align-items:flex-start}
        .how-step:last-child{border-bottom:none}
        .step-num-circle{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#E5907A,var(--primary));color:white;font-size:1rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-family:'Montserrat',sans-serif}
        .how-step-body h3{font-size:1.1rem;font-weight:700;color:var(--dark);margin-bottom:.4rem}
        .how-step-body p{font-size:.95rem;color:var(--gray-600);line-height:1.65}
        .feature-quote{border-right:3px solid #E5907A;padding:1rem 1.5rem;margin:2rem 0;background:var(--light);border-radius:0 var(--radius-md) var(--radius-md) 0}
        .feature-quote p{font-size:1.05rem;font-style:italic;color:var(--dark);line-height:1.65;margin-bottom:.5rem}
        .feature-quote cite{font-size:.85rem;color:var(--gray-500);font-style:normal}
        /* Patient file mockup */
        .file-mockup{background:white;border:1px solid var(--gray-200);border-radius:var(--radius-xl);box-shadow:var(--shadow-sm);margin:2.5rem 0;overflow:hidden}
        .file-mockup-header{background:var(--light);padding:1rem 1.5rem;border-bottom:1px solid var(--gray-200);display:flex;align-items:center;gap:.75rem}
        .file-mockup-avatar{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#E5907A,var(--primary));display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:.9rem;flex-shrink:0}
        .file-mockup-name{font-weight:700;color:var(--dark);font-size:.95rem}
        .file-mockup-sub{font-size:.78rem;color:var(--gray-400)}
        .file-mockup-body{padding:1.25rem 1.5rem}
        .form-entry{display:flex;align-items:center;gap:1rem;padding:.9rem 0;border-bottom:1px solid var(--gray-100)}
        .form-entry:last-child{border-bottom:none}
        .form-entry-score{width:44px;height:44px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.9rem;font-family:'Montserrat',sans-serif}
        .score-high{background:rgba(220,38,38,.1);color:#dc2626}
        .score-mid{background:rgba(245,158,11,.15);color:#d97706}
        .score-low{background:rgba(34,197,94,.12);color:#16a34a}
        .form-entry-body{flex:1}
        .form-entry-title{font-size:.92rem;font-weight:600;color:var(--dark)}
        .form-entry-date{font-size:.78rem;color:var(--gray-400);margin-top:.15rem}
        .form-entry-status{font-size:.72rem;font-weight:700;padding:.2rem .6rem;border-radius:100px;background:#dcfce7;color:#16a34a;flex-shrink:0}
        .checklist{list-style:none;padding:0;margin:1.5rem 0}
        .checklist li{display:flex;gap:.75rem;align-items:flex-start;padding:.5rem 0;font-size:.97rem;color:var(--gray-700);line-height:1.55}
        .checklist li::before{content:'✓';color:#c2410c;font-weight:800;font-size:1.1rem;flex-shrink:0;margin-top:.05rem}
        .template-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:2rem 0}
        .template-card{background:var(--light);border-radius:var(--radius-md);padding:1.1rem 1.25rem;border:1px solid var(--gray-200)}
        .template-card h4{font-size:.95rem;font-weight:700;color:var(--dark);margin-bottom:.3rem}
        .template-card p{font-size:.85rem;color:var(--gray-600);line-height:1.5}
        .cta-inline{background:var(--light);border-radius:var(--radius-xl);padding:2rem;text-align:center;margin:2.5rem 0}
        .cta-inline h3{font-size:1.25rem;font-weight:700;color:var(--dark);margin-bottom:.5rem}
        .cta-inline p{font-size:.95rem;color:var(--gray-600);margin-bottom:1.25rem}
        .feature-nav{display:flex;justify-content:space-between;align-items:center;padding:2rem 0 0;border-top:1px solid var(--gray-200);gap:1rem}
        .feature-nav a{display:flex;flex-direction:column;gap:.2rem;text-decoration:none;color:var(--dark);font-weight:600;transition:color .2s}
        .feature-nav a:hover{color:var(--primary)}
        .feature-nav .nav-dir{font-size:.75rem;color:var(--gray-400);font-weight:400}
        .feature-nav .nav-title{font-size:1rem}
        @media(max-width:600px){.stat-row{gap:1.25rem}.feature-nav{flex-direction:column;align-items:flex-start}.template-grid{grid-template-columns:1fr}}
      `}</style>

      <FeaturePageLayout>
        <section className="feature-page-hero">
          <div className="feature-hero-inner">
            <Link href="/features" className="feature-back">חזרה לכל הפיצ'רים</Link>
            <div className="feature-hero-tags">
              <span className="fh-tag fh-tag-coral">מעקב טיפולי</span>
              <span className="fh-tag fh-tag-new">חדש - יולי 2026</span>
            </div>
            <h1>טפסים דיגיטליים -<br /><em>שולחים למטופל, עוקבים בתיק</em></h1>
            <p className="lead">מתארים בעברית לאיזה טופס אתם צריכים וה-AI בונה אותו תוך דקה - או בונים ידנית שדה-שדה. שולחים למטופל בלחיצה אחת, והתשובות נוחתות ישר בתיק שלו - ממוינות לפי תאריך, עם מגמה לאורך זמן.</p>
            <div className="stat-row">
              <div className="stat-item"><div className="stat-num">1</div><div className="stat-label">דקה ליצירת טופס</div></div>
              <div className="stat-item"><div className="stat-num">0</div><div className="stat-label">העתק-הדבק בין מערכות</div></div>
              <div className="stat-item"><div className="stat-num">100%</div><div className="stat-label">מהתשובות נשמרות בתיק</div></div>
            </div>
          </div>
        </section>

        <article className="feature-body">
          <p className="section-label">הבעיה</p>
          <h2 className="feature-section-title">מה קורה למטופל בין פגישה לפגישה?</h2>
          <p className="body-text">הטיפול לא מתרחש רק בחדר. הוא נמשך בין המפגשים - במצב הרוח שמשתנה, בתרגילים שהמטופל אמור לתרגל, בתסמינים שעולים ויורדים. המחקר עקבי בעניין הזה: מגע קבוע עם המטופל בין הפגישות, גם אם קצר, מחזק את הברית הטיפולית, משפר היענות, ומקדם תוצאות טיפול טובות יותר.</p>
          <p className="body-text">אבל בפועל, שאלון PHQ-9 שנשלח בוואצאפ מסתיים בהעתק-הדבק ידני לתיק. שאלון שנשלח בגוגל פורמס יושב בגיליון נפרד שאף אחד לא פותח. וטופס משוב שהודפס בסוף פגישה - נשאר במגירה.</p>

          <div className="feature-quote">
            <p>"שלחתי שאלון חרדה בוואצאפ, קיבלתי תשובה, והעתקתי אותה ידנית לתיק. בפעם הבאה כבר לא זכרתי אם בכלל שלחתי לו את זה לפני חודש."</p>
            <cite>- דנה, עובדת סוציאלית קלינית</cite>
          </div>

          <p className="section-label" style={{ marginTop: '2.5rem' }}>למה זה משנה</p>
          <h2 className="feature-section-title">אינטראקציה רציפה = טיפול שמצליח</h2>
          <p className="body-text">כשמטופל ממלא טופס מעקב קבוע - מצב רוח, שינה, רמת חרדה - הוא נשאר מעורב בתהליך גם מחוץ לחדר, והמטפל מגיע לפגישה עם תמונה עדכנית ולא רק עם זיכרון מהשבוע שעבר. זו לא רק נוחות טכנית: זו הבדל בין טיפול שמגיב לרגע לבין טיפול שעוקב אחרי מגמה - ורואה שיפור, או מזהה החמרה, הרבה לפני שהיא מגיעה למשבר.</p>

          <p className="section-label" style={{ marginTop: '2.5rem' }}>איך זה עובד</p>
          <h2 className="feature-section-title">מטופס לתיק - בלי שלב ידני באמצע</h2>
          <div className="how-steps">
            {[
              { n: 1, title: 'בונים טופס תוך דקה עם AI', text: 'מתארים בעברית מה רוצים לשאול - "שאלון קליטה עם היסטוריה ומטרות טיפול" או "מעקב שינה שבועי" - וה-AI בונה טופס מוכן לשליחה. אפשר גם לערוך ידנית שדה-שדה: טקסט, בחירה מרובה, סולם דירוג.' },
              { n: 2, title: 'שולחים למטופל בלחיצה אחת', text: 'קישור אישי נשלח ישירות מהתיק שלו - בוואצאפ, באימייל, או שניהם. המטופל פותח מהנייד, בלי הרשמה ובלי סיסמה.' },
              { n: 3, title: 'המטופל ממלא בזמנו החופשי', text: 'הטופס מותאם לנייד, קצר וברור. אין הדפסה, אין סריקה, אין קובץ שצריך להעביר בין אפליקציות.' },
              { n: 4, title: 'התשובות נכנסות לתיק אוטומטית', text: 'כל תשובה נשמרת בתיק המטופל עם תאריך, וכשאותו טופס נשלח שוב - רואים מגמה: השתפר, נשאר יציב, או דורש תשומת לב.' },
            ].map((s) => (
              <div className="how-step" key={s.n}>
                <div className="step-num-circle">{s.n}</div>
                <div className="how-step-body"><h3>{s.title}</h3><p>{s.text}</p></div>
              </div>
            ))}
          </div>

          <p className="section-label" style={{ marginTop: '2.5rem' }}>ככה זה נראה בתיק</p>
          <h2 className="feature-section-title">כל טופס שנשלח, כל תשובה שהתקבלה - במקום אחד</h2>
          <p className="body-text">בתיק המטופל רואים רשימה כרונולוגית של כל הטפסים שנשלחו ומולאו, עם ציון וסטטוס לכל אחד. אין צורך לחפש בין תיקיות או לזכור מה נשלח מתי.</p>

          <div className="file-mockup">
            <div className="file-mockup-header">
              <div className="file-mockup-avatar">רכ</div>
              <div>
                <div className="file-mockup-name">רונית כהן - טפסים ושאלונים</div>
                <div className="file-mockup-sub">3 טפסים נשלחו · 3 נענו</div>
              </div>
            </div>
            <div className="file-mockup-body">
              <div className="form-entry">
                <div className="form-entry-score score-low">4</div>
                <div className="form-entry-body">
                  <div className="form-entry-title">PHQ-9 - שאלון דיכאון</div>
                  <div className="form-entry-date">28.6.2026 · חודש לפני: 11</div>
                </div>
                <span className="form-entry-status">נענה ↓ שיפור</span>
              </div>
              <div className="form-entry">
                <div className="form-entry-score score-mid">9</div>
                <div className="form-entry-body">
                  <div className="form-entry-title">מעקב שינה שבועי</div>
                  <div className="form-entry-date">21.6.2026</div>
                </div>
                <span className="form-entry-status">נענה</span>
              </div>
              <div className="form-entry">
                <div className="form-entry-score score-low">2</div>
                <div className="form-entry-body">
                  <div className="form-entry-title">משוב אחרי פגישה</div>
                  <div className="form-entry-date">17.6.2026</div>
                </div>
                <span className="form-entry-status">נענה</span>
              </div>
            </div>
          </div>

          <p className="section-label" style={{ marginTop: '2.5rem' }}>איך בונים טופס</p>
          <h2 className="feature-section-title">מתארים ל-AI, או בונים בעצמכם</h2>
          <p className="body-text">אין צורך להתחיל מדף ריק ואין ספריית תבניות נעולה. פשוט מתארים בעברית מה אתם צריכים - "שאלון קליטה עם היסטוריה ומטרות טיפול", "PHQ-9 עם ציון אוטומטי", "מעקב שינה שבועי קצר" - וה-AI בונה עבורכם טופס מוכן לשליחה, עם השאלות והמבנה הנכונים. רוצים שליטה מלאה? עוברים לעריכה ידנית ומוסיפים, מסירים או משנים כל שדה.</p>
          <div className="template-grid">
            <div className="template-card"><h4>בנייה עם AI</h4><p>מתארים את הטופס שאתם צריכים בעברית חופשית, וה-AI מייצר אותו תוך דקה - כולל שאלות, סוגי תשובה וציון אם רלוונטי.</p></div>
            <div className="template-card"><h4>בנייה ידנית</h4><p>בונה טפסים גמיש עם שדות טקסט, בחירה מרובה וסולם דירוג - לשליטה מלאה כשרוצים טופס מותאם אישית לגמרי.</p></div>
          </div>

          <p className="section-label" style={{ marginTop: '2.5rem' }}>מה כלול</p>
          <h2 className="feature-section-title">הכל כבר שם - בלי הגדרות מסובכות</h2>
          <ul className="checklist">
            <li>בניית טופס עם AI - מתארים בעברית מה רוצים, מקבלים טופס מוכן לשליחה</li>
            <li>בונה טפסים ידני גמיש: שאלות טקסט, בחירה מרובה, סולם דירוג - לשליטה מלאה</li>
            <li>שליחה בלחיצה אחת ישירות מתיק המטופל - בוואצאפ, באימייל, או קישור ישיר</li>
            <li>כל התשובות נשמרות אוטומטית בתיק, ממוינות לפי תאריך</li>
            <li>תצוגת מגמה - רואים שיפור או החמרה לאורך זמן בטופס שחוזר על עצמו</li>
            <li>סטטוס ברור לכל טופס: נשלח, נצפה, נענה</li>
          </ul>

          <div className="cta-inline">
            <h3>רוצים שהמעקב ירוץ לבד בין הפגישות?</h3>
            <p>התחילו עכשיו וקבלו גישה לכל הפיצ'רים - כולל טפסים ומעקב מטופלים.</p>
            <Link href="https://app.oriamind.ai/register" className="btn btn-primary">התחילו עכשיו</Link>
          </div>

          <div className="feature-nav">
            <Link href="/features"><span className="nav-dir">← כל הפיצ'רים</span><span className="nav-title">חזרה לרשימה</span></Link>
            <Link href="/features/mobile" style={{ textAlign: 'left' }}><span className="nav-dir">פיצ'ר קודם →</span><span className="nav-title">ORIA בפלאפון</span></Link>
          </div>
        </article>
      </FeaturePageLayout>
    </>
  );
}
