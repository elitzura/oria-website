import Link from 'next/link';
import FeaturePageLayout from '../../../components/FeaturePageLayout';

export const metadata = { title: 'אימות דו-שלבי — כניסה מאובטחת | ORIA AI' };

export default function Security2faPage() {
  return (
    <>
      <style>{`
        .feature-page-hero{background:linear-gradient(160deg,#0f1629 0%,#171938 60%,#1e2d5a 100%);padding:140px 1.5rem 80px;position:relative;overflow:hidden}
        .feature-page-hero::before{content:'';position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(34,197,94,.12) 0%,transparent 70%);top:-60px;left:-60px;pointer-events:none}
        .feature-hero-inner{max-width:820px;margin:0 auto;position:relative;z-index:2}
        .feature-back{display:inline-flex;align-items:center;gap:.4rem;color:rgba(255,255,255,.6);font-size:.9rem;font-weight:500;text-decoration:none;margin-bottom:1.5rem;transition:color .2s}
        .feature-back:hover{color:white}.feature-back::before{content:'→'}
        .feature-hero-tags{display:flex;gap:.5rem;margin-bottom:1.25rem;flex-wrap:wrap}
        .fh-tag{font-size:.78rem;font-weight:700;padding:.25rem .75rem;border-radius:100px;letter-spacing:.05em}
        .fh-tag-security-g{background:rgba(34,197,94,.2);color:#86efac}.fh-tag-gray{background:rgba(255,255,255,.1);color:rgba(255,255,255,.7)}
        .feature-page-hero h1{font-size:clamp(2rem,5vw,3.25rem);font-weight:800;color:white;line-height:1.15;margin-bottom:1.25rem}
        .feature-page-hero h1 em{font-style:normal;color:#86efac}
        .feature-page-hero .lead{font-size:1.2rem;color:rgba(255,255,255,.78);line-height:1.7;max-width:640px}
        .stat-row{display:flex;gap:2rem;margin-top:2.5rem;flex-wrap:wrap}
        .stat-item{text-align:center}
        .stat-num{font-size:2.5rem;font-weight:800;color:#86efac;font-family:'Montserrat',sans-serif;line-height:1}
        .stat-label{font-size:.85rem;color:rgba(255,255,255,.6);margin-top:.25rem}
        .feature-body{max-width:820px;margin:0 auto;padding:72px 1.5rem 96px}
        .section-label{font-size:.8rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--primary);margin-bottom:.75rem}
        h2.feature-section-title{font-size:1.65rem;font-weight:800;color:var(--dark);margin-bottom:1rem;line-height:1.3}
        .body-text{font-size:1rem;color:var(--gray-700);line-height:1.75;margin-bottom:1.25rem}
        .phone-mock-wrapper{display:flex;justify-content:center;margin:2rem 0}
        .phone-mock{background:#1c1c1e;border-radius:36px;width:240px;padding:1.5rem 1.25rem;box-shadow:0 32px 64px rgba(0,0,0,.4),inset 0 0 0 1px rgba(255,255,255,.08);position:relative}
        .phone-mock::before{content:'';position:absolute;top:.75rem;left:50%;transform:translateX(-50%);width:60px;height:6px;background:rgba(255,255,255,.15);border-radius:3px}
        .phone-app-header{text-align:center;margin-bottom:1.25rem;margin-top:.5rem}
        .phone-app-icon{font-size:2rem}.phone-app-name{font-size:.75rem;color:rgba(255,255,255,.5);margin-top:.25rem}
        .otp-display{text-align:center;font-family:'Montserrat',monospace;font-size:2rem;font-weight:700;letter-spacing:.2em;color:#86efac;background:rgba(34,197,94,.08);border-radius:12px;padding:.75rem;margin-bottom:.75rem}
        .otp-timer-bar{height:4px;background:rgba(255,255,255,.1);border-radius:2px;overflow:hidden;margin-bottom:.5rem}
        .otp-timer-fill{height:100%;width:60%;background:linear-gradient(90deg,#86efac,#4ade80);border-radius:2px;animation:timerDrain 30s linear infinite}
        @keyframes timerDrain{from{width:100%}to{width:0%}}
        .otp-expires{text-align:center;font-size:.7rem;color:rgba(255,255,255,.35)}
        .security-layers{display:flex;flex-direction:column;gap:.75rem;margin:2rem 0}
        .security-layer{display:flex;align-items:center;gap:1rem;background:white;border:1px solid var(--gray-200);border-radius:var(--radius-lg);padding:1rem 1.25rem;box-shadow:var(--shadow-xs)}
        .layer-icon{width:44px;height:44px;border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;font-size:1.25rem;flex-shrink:0}
        .layer-icon.green{background:rgba(34,197,94,.1)}.layer-icon.blue{background:rgba(72,183,255,.1)}.layer-icon.purple{background:rgba(98,93,229,.1)}.layer-icon.orange{background:rgba(229,144,122,.1)}
        .layer-body h4{font-size:.95rem;font-weight:700;color:var(--dark);margin-bottom:.2rem}
        .layer-body p{font-size:.85rem;color:var(--gray-600);line-height:1.5}
        .layer-check{margin-right:auto;color:#16a34a;font-size:1.1rem;font-weight:700}
        .feature-quote{border-right:3px solid #16a34a;padding:1rem 1.5rem;margin:2rem 0;background:#f0fdf4;border-radius:0 var(--radius-md) var(--radius-md) 0}
        .feature-quote p{font-size:1.05rem;font-style:italic;color:var(--dark);line-height:1.65;margin-bottom:.5rem}
        .feature-quote cite{font-size:.85rem;color:var(--gray-500);font-style:normal}
        .cta-inline{background:var(--light);border-radius:var(--radius-xl);padding:2rem;text-align:center;margin:2.5rem 0}
        .cta-inline h3{font-size:1.25rem;font-weight:700;color:var(--dark);margin-bottom:.5rem}
        .cta-inline p{font-size:.95rem;color:var(--gray-600);margin-bottom:1.25rem}
        .feature-nav{display:flex;justify-content:space-between;align-items:center;padding:2rem 0 0;border-top:1px solid var(--gray-200);gap:1rem}
        .feature-nav a{display:flex;flex-direction:column;gap:.2rem;text-decoration:none;color:var(--dark);font-weight:600;transition:color .2s}
        .feature-nav a:hover{color:var(--primary)}
        .feature-nav .nav-dir{font-size:.75rem;color:var(--gray-400);font-weight:400}.feature-nav .nav-title{font-size:1rem}
        @media(max-width:600px){.stat-row{gap:1.25rem}.feature-nav{flex-direction:column;align-items:flex-start}}
      `}</style>

      <FeaturePageLayout>
        <section className="feature-page-hero">
          <div className="feature-hero-inner">
            <Link href="/features" className="feature-back">חזרה לכל הפיצ'רים</Link>
            <div className="feature-hero-tags">
              <span className="fh-tag fh-tag-security-g">אבטחה</span>
              <span className="fh-tag fh-tag-gray">פברואר 2026</span>
            </div>
            <h1>אימות דו-שלבי —<br /><em>המידע שלכם מוגן</em></h1>
            <p className="lead">קוד חד-פעמי מהנייד בכל כניסה. גם אם מישהו גנב את הסיסמה — המידע של המטופלים שלכם נשאר מאחורי שכבת הגנה נוספת.</p>
            <div className="stat-row">
              <div className="stat-item"><div className="stat-num">30″</div><div className="stat-label">תוקף הקוד</div></div>
              <div className="stat-item"><div className="stat-num">ISO</div><div className="stat-label">27001 מאושר</div></div>
              <div className="stat-item"><div className="stat-num">תיקון</div><div className="stat-label">13 — רגולציה ישראלית</div></div>
            </div>
          </div>
        </section>

        <article className="feature-body">
          <p className="section-label">למה זה חשוב</p>
          <h2 className="feature-section-title">סיסמה לבדה — לא מספיק. לא ב-2026.</h2>
          <p className="body-text">המידע שבקליניקה שלכם הוא מהרגיש ביותר שיש. שמות, סיפורים אישיים, אבחנות. אם מישהו גנב את הסיסמה — אימות דו-שלבי מוודא שבלי הנייד שלכם, אף אחד לא נכנס.</p>
          <div className="feature-quote">
            <p>"כשהבנתי שגם אם מישהו גנב את הסיסמה שלי — הוא לא יכול להיכנס בלי הנייד שלי — זה נתן לי שקט אמיתי."</p>
            <cite>— דניאל, מטפל CBT, משתתף פיילוט</cite>
          </div>

          <p className="section-label" style={{ marginTop: '2.5rem' }}>איך זה נראה</p>
          <h2 className="feature-section-title">קוד שמתחלף כל 30 שניות</h2>
          <p className="body-text">מתקינים את Google Authenticator (חינמי) על הנייד — ומקבלים קוד בן 6 ספרות שמתחלף כל 30 שניות. בכל כניסה ל-ORIA מזינים את הקוד, ונכנסים.</p>

          <div className="phone-mock-wrapper">
            <div className="phone-mock">
              <div className="phone-app-header">
                <div className="phone-app-icon">🔐</div>
                <div className="phone-app-name">Google Authenticator</div>
              </div>
              <div style={{ fontSize: '.7rem', color: 'rgba(255,255,255,.4)', marginBottom: '.5rem', textAlign: 'center' }}>ORIA AI — הקליניקה שלכם</div>
              <div className="otp-display">847 293</div>
              <div className="otp-timer-bar"><div className="otp-timer-fill"></div></div>
              <div className="otp-expires">מתחלף בעוד 18 שניות</div>
            </div>
          </div>

          <p className="section-label" style={{ marginTop: '2.5rem' }}>שכבות ההגנה</p>
          <h2 className="feature-section-title">אימות דו-שלבי הוא רק שכבה אחת</h2>
          <div className="security-layers">
            {[
              { cls: 'green', icon: '🔐', title: 'אימות דו-שלבי (2FA)', text: 'קוד חד-פעמי מהנייד. מתחלף כל 30 שניות. עם 10 קודי גיבוי למקרה חירום.' },
              { cls: 'blue', icon: '🔒', title: 'הצפנה מקצה לקצה', text: 'כל המידע מוצפן בכל רגע — גם בזמן העברה וגם באחסון. אף אחד מחוץ לקליניקה לא יכול לקרוא אותו.' },
              { cls: 'purple', icon: '🛡️', title: 'ISO 27001 — תקן אבטחת מידע בינלאומי', text: 'ORIA פועלת בהתאם לעקרונות תקן אבטחת המידע הבינלאומי, בליווי חברת אבטחה מתמחה.' },
              { cls: 'orange', icon: '📋', title: 'תיקון 13 לחוק הגנת הפרטיות', text: 'עמידה מלאה ברגולציה הישראלית. המידע שלכם נשמר בישראל ובשרתי AMAZON ו-GOOGLE המאושרים.' },
            ].map((l, i) => (
              <div className="security-layer" key={i}>
                <div className={`layer-icon ${l.cls}`}>{l.icon}</div>
                <div className="layer-body"><h4>{l.title}</h4><p>{l.text}</p></div>
                <div className="layer-check">✓</div>
              </div>
            ))}
          </div>

          <p className="body-text" style={{ marginTop: '1rem' }}>
            <strong>חשוב:</strong> האודיו של ה-Brain Dump נמחק מיד לאחר התמלול. ORIA לא מאמנת מודלים על הנתונים שלכם, ולא משתפת מידע עם צדדים שלישיים. כל תוצר שה-AI מפיק הוא טיוטה בלבד — ודורש את האישור שלכם לפני השמירה.
          </p>

          <div className="cta-inline">
            <h3>רוצים קליניקה מאובטחת מהיום הראשון?</h3>
            <p>הצטרפו לפיילוט — אבטחת המידע מוכנה ומוגדרת. אתם רק צריכים להיכנס.</p>
            <Link href="/#pricing" className="btn btn-primary">הצטרפו לפיילוט</Link>
          </div>

          <div className="feature-nav">
            <Link href="/features/reports"><span className="nav-dir">← פיצ'ר קודם</span><span className="nav-title">דוחות פיננסיים</span></Link>
            <Link href="/features" style={{ textAlign: 'left' }}><span className="nav-dir">כל הפיצ'רים →</span><span className="nav-title">חזרה לרשימה</span></Link>
          </div>
        </article>
      </FeaturePageLayout>
    </>
  );
}
