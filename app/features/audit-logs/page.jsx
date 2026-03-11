import Link from 'next/link';
import FeaturePageLayout from '../../../components/FeaturePageLayout';

export const metadata = { title: 'Audit Log — מי פתח את התיק? | ORIA AI' };

export default function AuditLogsPage() {
  return (
    <>
      <style>{`
        .feature-page-hero{background:linear-gradient(160deg,#0f1629 0%,#171938 60%,#1e2050 100%);padding:140px 1.5rem 80px;position:relative;overflow:hidden}
        .feature-page-hero::before{content:'';position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(98,93,229,.15) 0%,transparent 70%);top:-60px;left:-60px;pointer-events:none}
        .feature-hero-inner{max-width:820px;margin:0 auto;position:relative;z-index:2}
        .feature-back{display:inline-flex;align-items:center;gap:.4rem;color:rgba(255,255,255,.6);font-size:.9rem;font-weight:500;text-decoration:none;margin-bottom:1.5rem;transition:color .2s}
        .feature-back:hover{color:white}
        .feature-back::before{content:'→'}
        .feature-hero-tags{display:flex;gap:.5rem;margin-bottom:1.25rem;flex-wrap:wrap}
        .fh-tag{font-size:.78rem;font-weight:700;padding:.25rem .75rem;border-radius:100px;letter-spacing:.05em}
        .fh-tag-security{background:rgba(98,93,229,.25);color:#a598ff}
        .fh-tag-gray{background:rgba(255,255,255,.1);color:rgba(255,255,255,.7)}
        .feature-page-hero h1{font-size:clamp(2rem,5vw,3.25rem);font-weight:800;color:white;line-height:1.15;margin-bottom:1.25rem}
        .feature-page-hero h1 em{font-style:normal;color:#a598ff}
        .feature-page-hero .lead{font-size:1.2rem;color:rgba(255,255,255,.78);line-height:1.7;max-width:640px}
        .stat-row{display:flex;gap:2rem;margin-top:2.5rem;flex-wrap:wrap}
        .stat-item{text-align:center}
        .stat-num{font-size:2.5rem;font-weight:800;color:#a598ff;font-family:'Montserrat',sans-serif;line-height:1}
        .stat-label{font-size:.85rem;color:rgba(255,255,255,.6);margin-top:.25rem}
        .feature-body{max-width:820px;margin:0 auto;padding:72px 1.5rem 96px}
        .section-label{font-size:.8rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--primary);margin-bottom:.75rem}
        h2.feature-section-title{font-size:1.65rem;font-weight:800;color:var(--dark);margin-bottom:1rem;line-height:1.3}
        .body-text{font-size:1rem;color:var(--gray-700);line-height:1.75;margin-bottom:1.25rem}
        .log-mock{background:#0d1117;border-radius:12px;padding:1.5rem;margin:2rem 0;font-family:'Montserrat',monospace;box-shadow:0 24px 48px rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.06);overflow:hidden}
        .log-mock-header{display:flex;align-items:center;gap:.5rem;margin-bottom:1rem;padding-bottom:.75rem;border-bottom:1px solid rgba(255,255,255,.07)}
        .log-dot{width:10px;height:10px;border-radius:50%}
        .log-dot.red{background:#ff5f57}.log-dot.yellow{background:#ffbd2e}.log-dot.green{background:#28c840}
        .log-mock-title{font-size:.75rem;color:rgba(255,255,255,.35);margin-right:auto}
        .log-row{display:flex;align-items:center;gap:.75rem;padding:.6rem .5rem;border-radius:6px;margin-bottom:.35rem;font-size:.82rem;transition:background .2s;direction:ltr;text-align:left}
        .log-row:hover{background:rgba(255,255,255,.04)}
        .log-time{color:#8b949e;flex-shrink:0;width:90px}.log-user{color:#a598ff;flex-shrink:0;width:110px;font-weight:600}.log-action{color:#e6edf3;flex:1}.log-device{color:#58a6ff;flex-shrink:0;font-size:.75rem}
        .log-badge{font-size:.68rem;font-weight:700;padding:.15rem .5rem;border-radius:4px;flex-shrink:0}
        .badge-view{background:rgba(88,166,255,.15);color:#58a6ff}.badge-edit{background:rgba(165,144,255,.15);color:#a598ff}.badge-export{background:rgba(229,144,122,.15);color:#E5907A}
        .log-items{display:flex;flex-direction:column;gap:.75rem;margin:2rem 0}
        .log-item{display:flex;align-items:center;gap:1rem;background:white;border:1px solid var(--gray-200);border-radius:var(--radius-lg);padding:1rem 1.25rem;box-shadow:var(--shadow-xs)}
        .log-item-icon{width:44px;height:44px;border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;font-size:1.25rem;flex-shrink:0}
        .icon-purple-bg{background:rgba(98,93,229,.1)}.icon-blue-bg{background:rgba(72,183,255,.1)}.icon-coral-bg{background:rgba(229,144,122,.1)}.icon-green-bg{background:rgba(34,197,94,.1)}
        .log-item-body h4{font-size:.95rem;font-weight:700;color:var(--dark);margin-bottom:.2rem}
        .log-item-body p{font-size:.85rem;color:var(--gray-600);line-height:1.5}
        .log-item-check{margin-right:auto;color:var(--primary);font-size:1.1rem;font-weight:700}
        .feature-quote{border-right:3px solid var(--primary);padding:1rem 1.5rem;margin:2rem 0;background:rgba(98,93,229,.05);border-radius:0 var(--radius-md) var(--radius-md) 0}
        .feature-quote p{font-size:1.05rem;font-style:italic;color:var(--dark);line-height:1.65;margin-bottom:.5rem}
        .feature-quote cite{font-size:.85rem;color:var(--gray-500);font-style:normal}
        .law-box{background:var(--light);border:1px solid var(--gray-200);border-radius:var(--radius-lg);padding:1.5rem 1.75rem;margin:1.5rem 0}
        .law-box h4{font-size:1rem;font-weight:700;color:var(--dark);margin-bottom:.75rem}
        .law-box ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.5rem}
        .law-box li{font-size:.92rem;color:var(--gray-700);display:flex;gap:.6rem;align-items:flex-start}
        .law-box li::before{content:'▸';color:var(--primary);flex-shrink:0;margin-top:.1rem}
        .cta-inline{background:var(--light);border-radius:var(--radius-xl);padding:2rem;text-align:center;margin:2.5rem 0}
        .cta-inline h3{font-size:1.25rem;font-weight:700;color:var(--dark);margin-bottom:.5rem}
        .cta-inline p{font-size:.95rem;color:var(--gray-600);margin-bottom:1.25rem}
        .feature-nav{display:flex;justify-content:space-between;align-items:center;padding:2rem 0 0;border-top:1px solid var(--gray-200);gap:1rem}
        .feature-nav a{display:flex;flex-direction:column;gap:.2rem;text-decoration:none;color:var(--dark);font-weight:600;transition:color .2s}
        .feature-nav a:hover{color:var(--primary)}
        .feature-nav .nav-dir{font-size:.75rem;color:var(--gray-400);font-weight:400}
        .feature-nav .nav-title{font-size:1rem}
        @media(max-width:600px){.stat-row{gap:1.25rem}.feature-nav{flex-direction:column;align-items:flex-start}.log-device{display:none}}
      `}</style>

      <FeaturePageLayout>
        <section className="feature-page-hero">
          <div className="feature-hero-inner">
            <Link href="/features" className="feature-back">חזרה לכל הפיצ'רים</Link>
            <div className="feature-hero-tags">
              <span className="fh-tag fh-tag-security">אבטחה</span>
              <span className="fh-tag fh-tag-gray">פברואר 2026</span>
            </div>
            <h1>Audit Log —<br /><em>מי פתח את התיק הזה?</em></h1>
            <p className="lead">כל גישה לכל תיק מתועדת אוטומטית. מי נכנס, מתי, מאיזה מכשיר, מה שונה. ההגנה המשפטית שלכם מוכנה — בלי שתצטרכו לחשוב עליה.</p>
            <div className="stat-row">
              <div className="stat-item"><div className="stat-num">100%</div><div className="stat-label">תיעוד גישות אוטומטי</div></div>
              <div className="stat-item"><div className="stat-num">תיקון</div><div className="stat-label">13 — רגולציה ישראלית</div></div>
              <div className="stat-item"><div className="stat-num">ISO</div><div className="stat-label">27001 מאושר</div></div>
            </div>
          </div>
        </section>

        <article className="feature-body">
          <p className="section-label">למה זה חשוב</p>
          <h2 className="feature-section-title">השאלה שמטפלים שואלים בשקט</h2>
          <p className="body-text">"אם מטופל יתלונן שמסרתי את המידע שלו — איך אני מוכיח שלא עשיתי את זה?"</p>
          <p className="body-text">זו לא שאלה פרנואידית. זו שאלה של אחריות מקצועית אמיתית. ועד היום, לרוב המטפלים לא הייתה תשובה. עם Audit Log ב-ORIA AI — יש תשובה. לא "תאמינו לי". <strong>תיעוד.</strong></p>

          <div className="feature-quote">
            <p>"ועדת תלונות, בית דין אתי, עורך דין של מטופל — כולם יכולים לשאול: 'הראו לי מי ניגש לתיק.' עם Audit Logs אתם מראים תיעוד מלא. בלעדיהם — עונים 'תאמינו לי.'"</p>
            <cite>— אביעד אליצור, מייסד ORIA AI</cite>
          </div>

          <p className="section-label" style={{ marginTop: '2.5rem' }}>החוק מחייב</p>
          <h2 className="feature-section-title">לא בחירה — חובה משפטית</h2>
          <p className="body-text">תיקון 13 לחוק הגנת הפרטיות (בתוקף 2025) מחיל חובות כבדות על כל מי שמחזיק מאגר מידע רגיש. מידע פסיכולוגי ונפשי מוגדר <strong>מפורשות</strong> כמידע רגיש בחוק.</p>

          <div className="law-box">
            <h4>מה מחייב החוק?</h4>
            <ul>
              <li>תיעוד גישה — רישום מי גישה למידע, מתי, ומאיזה מכשיר</li>
              <li>ניטור חריגות — יכולת לזהות גישה חשודה או לא מורשית</li>
              <li>חוק זכויות החולה — מטופל יכול לדרוש לדעת מי ניגש לתיק שלו</li>
              <li>תיעוד שיתוף מידע — "לאן הועבר המידע" חובה משפטית לתעד</li>
            </ul>
          </div>

          <p className="section-label" style={{ marginTop: '2.5rem' }}>איך זה נראה בפועל</p>
          <h2 className="feature-section-title">לוג גישות בזמן אמת</h2>

          <div className="log-mock">
            <div className="log-mock-header">
              <div className="log-dot red"></div><div className="log-dot yellow"></div><div className="log-dot green"></div>
              <span className="log-mock-title">audit-log · תיק 1047 — יעל כ.</span>
            </div>
            <div className="log-row"><span className="log-time">09:14:22</span><span className="log-user">ד"ר מיכל ל.</span><span className="log-action">פתחה תיק לצפייה</span><span className="log-device">iPhone 15 Pro</span><span className="log-badge badge-view">VIEW</span></div>
            <div className="log-row"><span className="log-time">09:28:07</span><span className="log-user">ד"ר מיכל ל.</span><span className="log-action">הוסיפה סיכום פגישה #18</span><span className="log-device">iPhone 15 Pro</span><span className="log-badge badge-edit">EDIT</span></div>
            <div className="log-row"><span className="log-time">11:03:45</span><span className="log-user">ד"ר מיכל ל.</span><span className="log-action">צפתה בציר זמן טיפולי</span><span className="log-device">MacBook Pro</span><span className="log-badge badge-view">VIEW</span></div>
            <div className="log-row" style={{ background: 'rgba(229,144,122,0.06)' }}><span className="log-time">14:52:19</span><span className="log-user" style={{ color: '#E5907A' }}>— לא ידוע —</span><span className="log-action" style={{ color: '#E5907A' }}>ניסיון כניסה נכשל (IP חיצוני)</span><span className="log-device">דפדפן לא מוכר</span><span className="log-badge badge-export">ALERT</span></div>
          </div>

          <p className="section-label" style={{ marginTop: '2.5rem' }}>מה זה נותן לכם</p>
          <h2 className="feature-section-title">שלוש שכבות של שקט נפשי</h2>
          <div className="log-items">
            {[
              { icon: '⚖️', bg: 'icon-purple-bg', title: 'הגנה משפטית מלאה', text: 'ועדת תלונות, בית דין אתי, תביעה — לכל שאלה יש תיעוד מדויק. לא ניחושים. עובדות.' },
              { icon: '💬', bg: 'icon-blue-bg', title: 'שקיפות מול המטופל', text: '"מי יכול לראות מה שאמרתי?" — עכשיו יש תשובה שאפשר לגבות בעובדות ולבנות אמון אמיתי.' },
              { icon: '🏢', bg: 'icon-coral-bg', title: 'שליטה למנהלי מרכזים', text: 'לוודא שכל מטפל ניגש רק לתיקים בסמכותו, לזהות גישה חריגה, לייצר דוח לכל ביקורת רגולטורית.' },
              { icon: '🧘', bg: 'icon-green-bg', title: 'שקט נפשי שחוזר לחדר', text: 'האנרגיה שהלכה לדאגה ברקע — חוזרת לחדר הטיפולים. כשהכל מתועד, אין מה לדאוג.' },
            ].map((item, i) => (
              <div className="log-item" key={i}>
                <div className={`log-item-icon ${item.bg}`}>{item.icon}</div>
                <div className="log-item-body"><h4>{item.title}</h4><p>{item.text}</p></div>
                <div className="log-item-check">✓</div>
              </div>
            ))}
          </div>

          <div className="cta-inline">
            <h3>רוצים קליניקה עם הגנה משפטית מלאה?</h3>
            <p>הצטרפו לרשימת ההמתנה — כשהאפליקציה יוצאת, תקבלו חודש ראשון חינם.</p>
            <Link href="/#pricing" className="btn btn-primary">הצטרפו לרשימת ההמתנה</Link>
          </div>

          <div className="feature-nav">
            <Link href="/features/security-2fa"><span className="nav-dir">← פיצ'ר קודם</span><span className="nav-title">אימות דו-שלבי</span></Link>
            <Link href="/features" style={{ textAlign: 'left' }}><span className="nav-dir">כל הפיצ'רים →</span><span className="nav-title">חזרה לרשימה</span></Link>
          </div>
        </article>
      </FeaturePageLayout>
    </>
  );
}
