import Link from 'next/link';
import FeaturePageLayout from '../../../components/FeaturePageLayout';

export const metadata = { title: 'המוח השני — הכנה לפגישה ב-30 שניות | ORIA AI' };

export default function SecondBrainPage() {
  return (
    <>
      <style>{`
        .feature-page-hero{background:linear-gradient(160deg,#1e1060 0%,#2a2560 50%,var(--primary) 100%);padding:140px 1.5rem 80px;position:relative;overflow:hidden}
        .feature-page-hero::before{content:'';position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(165,152,255,.15) 0%,transparent 70%);bottom:-100px;right:-100px;pointer-events:none}
        .feature-hero-inner{max-width:820px;margin:0 auto;position:relative;z-index:2}
        .feature-back{display:inline-flex;align-items:center;gap:.4rem;color:rgba(255,255,255,.6);font-size:.9rem;font-weight:500;text-decoration:none;margin-bottom:1.5rem;transition:color .2s}
        .feature-back:hover{color:white}.feature-back::before{content:'→'}
        .feature-hero-tags{display:flex;gap:.5rem;margin-bottom:1.25rem;flex-wrap:wrap}
        .fh-tag{font-size:.78rem;font-weight:700;padding:.25rem .75rem;border-radius:100px;letter-spacing:.05em}
        .fh-tag-purple{background:rgba(165,152,255,.25);color:#c4b9ff}.fh-tag-gray{background:rgba(255,255,255,.12);color:rgba(255,255,255,.75)}
        .feature-page-hero h1{font-size:clamp(2rem,5vw,3.25rem);font-weight:800;color:white;line-height:1.15;margin-bottom:1.25rem}
        .feature-page-hero h1 em{font-style:normal;color:#c4b9ff}
        .feature-page-hero .lead{font-size:1.2rem;color:rgba(255,255,255,.78);line-height:1.7;max-width:640px}
        .stat-row{display:flex;gap:2rem;margin-top:2.5rem;flex-wrap:wrap}
        .stat-item{text-align:center}
        .stat-num{font-size:2.5rem;font-weight:800;color:#c4b9ff;font-family:'Montserrat',sans-serif;line-height:1}
        .stat-label{font-size:.85rem;color:rgba(255,255,255,.6);margin-top:.25rem}
        .feature-body{max-width:820px;margin:0 auto;padding:72px 1.5rem 96px}
        .section-label{font-size:.8rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--primary);margin-bottom:.75rem}
        h2.feature-section-title{font-size:1.65rem;font-weight:800;color:var(--dark);margin-bottom:1rem;line-height:1.3}
        .body-text{font-size:1rem;color:var(--gray-700);line-height:1.75;margin-bottom:1.25rem}
        .timeline-card{background:white;border:1px solid var(--gray-200);border-radius:var(--radius-xl);overflow:hidden;margin:2rem 0;box-shadow:var(--shadow-sm)}
        .timeline-card-header{background:var(--light);padding:1rem 1.5rem;border-bottom:1px solid var(--gray-200);display:flex;align-items:center;gap:.75rem}
        .patient-avatar{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--secondary));color:white;font-weight:700;font-size:.9rem;display:flex;align-items:center;justify-content:center}
        .patient-name{font-weight:700;color:var(--dark);font-size:.95rem}
        .patient-meta{font-size:.8rem;color:var(--gray-500)}
        .timeline-item{padding:1.25rem 1.5rem;border-bottom:1px solid var(--gray-100);display:flex;gap:1rem;align-items:flex-start}
        .timeline-item:last-child{border-bottom:none}
        .timeline-date{font-size:.78rem;font-weight:600;color:var(--gray-400);white-space:nowrap;min-width:70px;padding-top:2px}
        .timeline-text{font-size:.92rem;color:var(--gray-700);line-height:1.55}
        .timeline-text strong{color:var(--dark)}
        .timeline-highlight{display:inline-block;background:rgba(98,93,229,.1);color:var(--primary);font-size:.78rem;font-weight:700;padding:.15rem .6rem;border-radius:100px;margin-top:.3rem}
        .prep-box{background:linear-gradient(135deg,rgba(98,93,229,.08),rgba(72,183,255,.08));border:1px solid rgba(98,93,229,.2);border-radius:var(--radius-lg);padding:1.25rem 1.5rem;margin:2rem 0}
        .prep-box-title{font-size:.78rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--primary);margin-bottom:.75rem}
        .prep-item{display:flex;gap:.6rem;align-items:flex-start;font-size:.92rem;color:var(--dark);line-height:1.5;margin-bottom:.5rem}
        .prep-item::before{content:'✓';color:var(--primary);font-weight:700;flex-shrink:0}
        .feature-quote{border-right:3px solid var(--primary);padding:1rem 1.5rem;margin:2rem 0;background:var(--light);border-radius:0 var(--radius-md) var(--radius-md) 0}
        .feature-quote p{font-size:1.05rem;font-style:italic;color:var(--dark);line-height:1.65;margin-bottom:.5rem}
        .feature-quote cite{font-size:.85rem;color:var(--gray-500);font-style:normal}
        .how-steps{display:flex;flex-direction:column;gap:0;margin:2.5rem 0}
        .how-step{display:flex;gap:1.5rem;padding:1.75rem 0;border-bottom:1px solid var(--gray-200);align-items:flex-start}
        .how-step:last-child{border-bottom:none}
        .step-num-circle{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--secondary));color:white;font-size:1rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-family:'Montserrat',sans-serif}
        .how-step-body h3{font-size:1.1rem;font-weight:700;color:var(--dark);margin-bottom:.4rem}
        .how-step-body p{font-size:.95rem;color:var(--gray-600);line-height:1.65}
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
              <span className="fh-tag fh-tag-purple">ליבה</span>
              <span className="fh-tag fh-tag-gray">ינואר 2026</span>
            </div>
            <h1>המוח השני —<br />הכנה לפגישה <em>תוך 30 שניות</em></h1>
            <p className="lead">ORIA זוכרת מה קרה לפני 3 פגישות, מזהה דפוסים חוזרים, ומציגה לכם תקציר חכם לפני כל מפגש. מגיעים ממוקדים — בלי לנבור בדפים.</p>
            <div className="stat-row">
              <div className="stat-item"><div className="stat-num">30″</div><div className="stat-label">הכנה לפגישה</div></div>
              <div className="stat-item"><div className="stat-num">100%</div><div className="stat-label">זיכרון רצף טיפולי</div></div>
              <div className="stat-item"><div className="stat-num">0</div><div className="stat-label">נבירה בדפים</div></div>
            </div>
          </div>
        </section>

        <article className="feature-body">
          <p className="section-label">הבעיה</p>
          <h2 className="feature-section-title">אתם מחזיקים עשרות מטופלים בראש. זה לא ייתכן.</h2>
          <p className="body-text">לכל מטופל יש עולם שלם — דינמיקות, דפוסים, מה שנאמר לפני חודש, מה שהובטח לעקוב. כשהמידע מפוזר בין מחברות, קבצים וזיכרון, המאמץ לשחזר את הרצף גוזל אנרגיה שאמורה ללכת לטיפול.</p>
          <div className="feature-quote">
            <p>"אני רוצה להגיע לכל פגישה בחדות, אבל ארגון הידע בין לבין גוזל ממני המון כוח."</p>
            <cite>— מיכל, פסיכולוגית קלינית, משתתפת פיילוט</cite>
          </div>

          <p className="section-label" style={{ marginTop: '2.5rem' }}>מה ORIA עושה</p>
          <h2 className="feature-section-title">ציר זמן חכם שמכין אתכם לכל פגישה</h2>
          <p className="body-text">ORIA בונה מתוך הסיכומים שלכם ציר זמן חי לכל מטופל. לפני כל פגישה — תקציר חכם מוכן לכם:</p>

          <div className="timeline-card">
            <div className="timeline-card-header">
              <div className="patient-avatar">ד׳</div>
              <div><div className="patient-name">ד' — פגישה #8</div><div className="patient-meta">היום, 10:00 ⋅ סיכום מ-ORIA</div></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">פגישה 7</div>
              <div className="timeline-text"><strong>תמת נטישה</strong> — עלתה בפעם השלישית. המטופל קישר לדמות האמא. נשאר פתוח לחקירת הקשר עם האב.<br /><span className="timeline-highlight">דפוס חוזר</span></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">פגישה 6</div>
              <div className="timeline-text">דיווח על מריבה עם הבוס. בחן קשר לדינמיקת סמכות. הגיע עם רמת חרדה גבוהה, עזב יציב יותר.</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">לפגישה הזו</div>
              <div className="timeline-text"><strong>⚡ לבדוק:</strong> קשר עם האב — המטופל ביקש לחזור לנושא. האם הרמת החרדה ירדה מאז פגישה 6?<br /><span className="timeline-highlight">מוצע לעקוב</span></div>
            </div>
          </div>

          <p className="section-label">מה בדיוק תקבלו</p>
          <h2 className="feature-section-title">לפני כל פגישה — תקציר מוכן</h2>
          <div className="prep-box">
            <div className="prep-box-title">תקציר הכנה לפגישה — ORIA</div>
            <div className="prep-item">איפה עצרתם בפגישה האחרונה</div>
            <div className="prep-item">אילו נושאים דורשים מעקב</div>
            <div className="prep-item">דפוסים חוזרים שזוהו לאורך הטיפול</div>
            <div className="prep-item">שאלות ממוקדות שאפשר לפתוח איתן</div>
            <div className="prep-item">מצב רגשי בסיום הפגישה הקודמת</div>
          </div>

          <div className="how-steps" style={{ marginTop: '1.5rem' }}>
            {[
              { n: 1, title: '5 דקות לפגישה — פותחים את ORIA', text: 'בוחרים את המטופל מהיומן ומקבלים את התקציר החכם מוכן. שום חיפוש, שום נבירה.' },
              { n: 2, title: 'ORIA מצליבה עם כל הפגישות הקודמות', text: 'היא מזהה דפוסים, מה השתנה, מה חוזר, ומה אמרתם שתעקבו — ומביאה לכם תמונה מלאה.' },
              { n: 3, title: 'נכנסים לפגישה ממוקדים ונוכחים', text: 'אין מה לזכור. אין מה לחפש. הראש פנוי לאדם שמולכם.' },
            ].map((s) => (
              <div className="how-step" key={s.n}>
                <div className="step-num-circle">{s.n}</div>
                <div className="how-step-body"><h3>{s.title}</h3><p>{s.text}</p></div>
              </div>
            ))}
          </div>

          <div className="cta-inline">
            <h3>רוצים שהמוח השני יעבוד בשבילכם?</h3>
            <p>הצטרפו לפיילוט — ו-ORIA תתחיל לבנות את הזיכרון הקליני שלכם מהפגישה הראשונה.</p>
            <Link href="/#pricing" className="btn btn-primary">הצטרפו לפיילוט</Link>
          </div>

          <div className="feature-nav">
            <Link href="/features/brain-dump"><span className="nav-dir">← פיצ'ר קודם</span><span className="nav-title">Brain Dump</span></Link>
            <Link href="/features/reports" style={{ textAlign: 'left' }}><span className="nav-dir">פיצ'ר הבא →</span><span className="nav-title">דוחות פיננסיים</span></Link>
          </div>
        </article>
      </FeaturePageLayout>
    </>
  );
}
