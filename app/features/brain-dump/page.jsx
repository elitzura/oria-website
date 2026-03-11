import Link from 'next/link';
import FeaturePageLayout from '../../../components/FeaturePageLayout';

export const metadata = { title: 'Brain Dump — סיכום קליני ב-30 שניות | ORIA AI' };

export default function BrainDumpPage() {
  return (
    <>
      <style>{`
        .feature-page-hero{background:linear-gradient(160deg,var(--dark) 0%,#1a3a5c 100%);padding:140px 1.5rem 80px;position:relative;overflow:hidden}
        .feature-page-hero::before{content:'';position:absolute;width:450px;height:450px;border-radius:50%;background:radial-gradient(circle,rgba(72,183,255,.18) 0%,transparent 70%);top:-80px;left:-80px;pointer-events:none}
        .feature-hero-inner{max-width:820px;margin:0 auto;position:relative;z-index:2}
        .feature-back{display:inline-flex;align-items:center;gap:.4rem;color:rgba(255,255,255,.6);font-size:.9rem;font-weight:500;text-decoration:none;margin-bottom:1.5rem;transition:color .2s}
        .feature-back:hover{color:white}.feature-back::before{content:'→'}
        .feature-hero-tags{display:flex;gap:.5rem;margin-bottom:1.25rem;flex-wrap:wrap}
        .fh-tag{font-size:.78rem;font-weight:700;padding:.25rem .75rem;border-radius:100px;letter-spacing:.05em}
        .fh-tag-blue{background:rgba(72,183,255,.2);color:#7dd3fc}.fh-tag-green{background:rgba(34,197,94,.2);color:#86efac}
        .feature-page-hero h1{font-size:clamp(2rem,5vw,3.25rem);font-weight:800;color:white;line-height:1.15;margin-bottom:1.25rem}
        .feature-page-hero h1 em{font-style:normal;color:var(--secondary)}
        .feature-page-hero .lead{font-size:1.2rem;color:rgba(255,255,255,.78);line-height:1.7;max-width:640px}
        .stat-row{display:flex;gap:2rem;margin-top:2.5rem;flex-wrap:wrap}
        .stat-item{text-align:center}
        .stat-num{font-size:2.5rem;font-weight:800;color:var(--secondary);font-family:'Montserrat',sans-serif;line-height:1}
        .stat-label{font-size:.85rem;color:rgba(255,255,255,.6);margin-top:.25rem}
        .feature-body{max-width:820px;margin:0 auto;padding:72px 1.5rem 96px}
        .section-label{font-size:.8rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--primary);margin-bottom:.75rem}
        h2.feature-section-title{font-size:1.65rem;font-weight:800;color:var(--dark);margin-bottom:1rem;line-height:1.3}
        .body-text{font-size:1rem;color:var(--gray-700);line-height:1.75;margin-bottom:1.25rem}
        .how-steps{display:flex;flex-direction:column;gap:0;margin:2.5rem 0}
        .how-step{display:flex;gap:1.5rem;padding:1.75rem 0;border-bottom:1px solid var(--gray-200);align-items:flex-start}
        .how-step:last-child{border-bottom:none}
        .step-num-circle{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--secondary),var(--primary));color:white;font-size:1rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-family:'Montserrat',sans-serif}
        .how-step-body h3{font-size:1.1rem;font-weight:700;color:var(--dark);margin-bottom:.4rem}
        .how-step-body p{font-size:.95rem;color:var(--gray-600);line-height:1.65}
        .demo-card{background:var(--dark);border-radius:var(--radius-xl);padding:2rem;margin:2.5rem 0;font-family:'Heebo',sans-serif}
        .demo-header{display:flex;align-items:center;gap:.75rem;margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:1px solid rgba(255,255,255,.1)}
        .demo-dot{width:10px;height:10px;border-radius:50%}
        .demo-dot.r{background:#ff5f57}.demo-dot.y{background:#febc2e}.demo-dot.g{background:#28c840}
        .demo-title-bar{color:rgba(255,255,255,.4);font-size:.82rem;margin-right:auto}
        .demo-label{font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-bottom:.5rem}
        .demo-label.user{color:rgba(255,255,255,.5);text-align:left;direction:ltr}.demo-label.oria{color:var(--secondary)}
        .demo-user-msg{background:var(--primary);color:white;border-radius:12px 12px 4px 12px;padding:.85rem 1rem;font-size:.95rem;line-height:1.55;margin-bottom:1.25rem;max-width:85%}
        .demo-oria-msg{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:12px 12px 12px 4px;padding:1rem 1.15rem;font-size:.92rem;color:rgba(255,255,255,.88);line-height:1.7;margin-right:auto;max-width:90%}
        .demo-oria-msg strong{color:var(--secondary)}
        .demo-typing{display:inline-flex;gap:4px;align-items:center;margin-top:.5rem}
        .demo-typing span{width:6px;height:6px;background:var(--secondary);border-radius:50%;opacity:.4;animation:blinkDot 1.2s infinite}
        .demo-typing span:nth-child(2){animation-delay:.2s}.demo-typing span:nth-child(3){animation-delay:.4s}
        @keyframes blinkDot{0%,100%{opacity:.4}50%{opacity:1}}
        .feature-quote{border-right:3px solid var(--primary);padding:1rem 1.5rem;margin:2rem 0;background:var(--light);border-radius:0 var(--radius-md) var(--radius-md) 0}
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
              <span className="fh-tag fh-tag-blue">ליבה</span>
              <span className="fh-tag fh-tag-green">חדש — פברואר 2026</span>
            </div>
            <h1>Brain Dump —<br />סיכום קליני <em>ב-30 שניות</em></h1>
            <p className="lead">מקליטים דקה-שתיים אחרי הפגישה, מספרים בחופשיות מה קרה — ו-ORIA מחזירה סיכום קליני מסודר, בסגנון שלכם.</p>
            <div className="stat-row">
              <div className="stat-item"><div className="stat-num">30″</div><div className="stat-label">עד לסיכום מוכן</div></div>
              <div className="stat-item"><div className="stat-num">0</div><div className="stat-label">כתיבה ידנית</div></div>
              <div className="stat-item"><div className="stat-num">100%</div><div className="stat-label">בסגנון שלכם</div></div>
            </div>
          </div>
        </section>

        <article className="feature-body">
          <p className="section-label">הבעיה</p>
          <h2 className="feature-section-title">הסיכום הוא הדבר האחרון שמגיע לכם אחרי פגישה קשה</h2>
          <p className="body-text">מסיימים טיפול רגשית מנוקז — ועוד לפני שהמטופל עוזב את החדר, כבר מתחילים לחשוב על הסיכום. איך לנסח? מה היה חשוב? מה הבטחתם לעקוב? ואז הסיכום נדחה לסוף היום, כשהזיכרון כבר מטושטש.</p>
          <div className="feature-quote">
            <p>"במקום לסיים את היום, אני שוב מול המחשב בלילה. זה הרבה יותר מעייף ממה שזה אמור להיות."</p>
            <cite>— אורלי, קואצ'רית, משתתפת פיילוט</cite>
          </div>

          <p className="section-label" style={{ marginTop: '2.5rem' }}>איך זה עובד</p>
          <h2 className="feature-section-title">שלושה שלבים. לא יותר.</h2>
          <div className="how-steps">
            {[
              { n: 1, title: 'מקליטים בחופשיות', text: 'מיד אחרי הפגישה — מדברים בחופשיות לתוך האפליקציה. דקה-שתיים של ראשי פרקים, תחושות, מה שקרה. לא צריך לחשוב על ניסוח.' },
              { n: 2, title: 'ORIA מעבדת', text: 'תוך שניות, ORIA מתמללת, מארגנת ומנסחת סיכום קליני מסודר — כולל נושאים מרכזיים, רגשות שעלו, יעדים לפגישה הבאה, ומה דורש מעקב.' },
              { n: 3, title: 'אתם מאשרים ושומרים', text: 'הסיכום מגיע אליכם כטיוטה לעריכה. אתם בעלי ה-OK הסופי — שום דבר לא נשמר בלי האישור שלכם. עורכים אם צריך, ושומרים.' },
            ].map((s) => (
              <div className="how-step" key={s.n}>
                <div className="step-num-circle">{s.n}</div>
                <div className="how-step-body"><h3>{s.title}</h3><p>{s.text}</p></div>
              </div>
            ))}
          </div>

          <div className="demo-card">
            <div className="demo-header">
              <div className="demo-dot r"></div><div className="demo-dot y"></div><div className="demo-dot g"></div>
              <span className="demo-title-bar">ORIA AI — סיכום פגישה</span>
            </div>
            <p className="demo-label user">אתם</p>
            <div className="demo-user-msg">🎙️ [הקלטה — 1:47 דקות]<br />"היה מפגש קשה היום עם ד'. הגיע מבולבל, דיבר הרבה על האמא. עלתה שוב תמה של נטישה. נשאר עם שאלת-מחקר לגבי קשר עם האב..."</div>
            <p className="demo-label oria" style={{ marginTop: '1rem' }}>ORIA</p>
            <div className="demo-oria-msg">
              <strong>📋 סיכום פגישה — ד' | 18.2.2026</strong><br /><br />
              <strong>נושאים מרכזיים:</strong> תמת נטישה (חוזרת מפגישה 3), דינמיקה עם דמות אמהית, בלבול רגשי.<br /><br />
              <strong>נקודות מעקב:</strong> לחקור בפגישה הבאה את הקשר עם דמות האב — המטופל הביע סקרנות.<br /><br />
              <strong>מצב רגשי בסיום:</strong> מצב רגשי חלקי, נסגר חלקית. מומלץ בדיקת מצב בתחילת הפגישה הבאה.<br /><br />
              <div className="demo-typing"><span></span><span></span><span></span></div>
            </div>
          </div>

          <p className="section-label" style={{ marginTop: '2.5rem' }}>למה זה חשוב</p>
          <h2 className="feature-section-title">הסיכום לא נכתב בסוף היום — הוא מוכן תוך שניות</h2>
          <p className="body-text">כשהסיכום נדחה לסוף היום, נאבדים פרטים. הזיכרון מטשטש, העייפות מצטברת, והכתיבה הופכת להישרדות. Brain Dump מאפשר לכם לתעד ברגע הכי טרי — כשהכל עדיין חי — ולהשאיר את הניסוח ל-ORIA.</p>
          <p className="body-text">האודיו נמחק מיד לאחר התמלול. רק הטקסט המוצפן נשמר. ORIA לא מאמנת מודלים על הנתונים שלכם ולא משתפת אותם עם צד שלישי.</p>

          <div className="cta-inline">
            <h3>רוצים לנסות את Brain Dump?</h3>
            <p>הצטרפו לפיילוט וקבלו גישה לכל הפיצ'רים — כולל ליווי אישי של אביעד בהטמעה.</p>
            <Link href="/#pricing" className="btn btn-primary">הצטרפו לפיילוט</Link>
          </div>

          <div className="feature-nav">
            <Link href="/features"><span className="nav-dir">← כל הפיצ'רים</span><span className="nav-title">חזרה לרשימה</span></Link>
            <Link href="/features/second-brain" style={{ textAlign: 'left' }}><span className="nav-dir">פיצ'ר הבא →</span><span className="nav-title">המוח השני</span></Link>
          </div>
        </article>
      </FeaturePageLayout>
    </>
  );
}
