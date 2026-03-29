import Link from 'next/link';
import FeaturePageLayout from '../../../components/FeaturePageLayout';

export const metadata = { title: 'תזכורות חכמות — וואצאפ, אימייל ואישור הגעה | ORIA AI' };

export default function WhatsAppRemindersPage() {
  return (
    <>
      <style>{`
        .feature-page-hero{background:linear-gradient(160deg,var(--dark) 0%,#1a3a2a 100%);padding:140px 1.5rem 80px;position:relative;overflow:hidden}
        .feature-page-hero::before{content:'';position:absolute;width:450px;height:450px;border-radius:50%;background:radial-gradient(circle,rgba(37,211,102,.18) 0%,transparent 70%);top:-80px;left:-80px;pointer-events:none}
        .feature-hero-inner{max-width:820px;margin:0 auto;position:relative;z-index:2}
        .feature-back{display:inline-flex;align-items:center;gap:.4rem;color:rgba(255,255,255,.6);font-size:.9rem;font-weight:500;text-decoration:none;margin-bottom:1.5rem;transition:color .2s}
        .feature-back:hover{color:white}.feature-back::before{content:'→'}
        .feature-hero-tags{display:flex;gap:.5rem;margin-bottom:1.25rem;flex-wrap:wrap}
        .fh-tag{font-size:.78rem;font-weight:700;padding:.25rem .75rem;border-radius:100px;letter-spacing:.05em}
        .fh-tag-green{background:rgba(37,211,102,.2);color:#86efac}
        .fh-tag-new{background:rgba(34,197,94,.2);color:#86efac}
        .fh-tag-manage{background:rgba(229,144,122,.2);color:#fca5a5}
        .feature-page-hero h1{font-size:clamp(2rem,5vw,3.25rem);font-weight:800;color:white;line-height:1.15;margin-bottom:1.25rem}
        .feature-page-hero h1 em{font-style:normal;color:#25D366}
        .feature-page-hero .lead{font-size:1.2rem;color:rgba(255,255,255,.78);line-height:1.7;max-width:640px}
        .stat-row{display:flex;gap:2rem;margin-top:2.5rem;flex-wrap:wrap}
        .stat-item{text-align:center}
        .stat-num{font-size:2.5rem;font-weight:800;color:#25D366;font-family:'Montserrat',sans-serif;line-height:1}
        .stat-label{font-size:.85rem;color:rgba(255,255,255,.6);margin-top:.25rem}
        .feature-body{max-width:820px;margin:0 auto;padding:72px 1.5rem 96px}
        .section-label{font-size:.8rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--primary);margin-bottom:.75rem}
        h2.feature-section-title{font-size:1.65rem;font-weight:800;color:var(--dark);margin-bottom:1rem;line-height:1.3}
        .body-text{font-size:1rem;color:var(--gray-700);line-height:1.75;margin-bottom:1.25rem}
        .how-steps{display:flex;flex-direction:column;gap:0;margin:2.5rem 0}
        .how-step{display:flex;gap:1.5rem;padding:1.75rem 0;border-bottom:1px solid var(--gray-200);align-items:flex-start}
        .how-step:last-child{border-bottom:none}
        .step-num-circle{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#25D366,#128C7E);color:white;font-size:1rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-family:'Montserrat',sans-serif}
        .how-step-body h3{font-size:1.1rem;font-weight:700;color:var(--dark);margin-bottom:.4rem}
        .how-step-body p{font-size:.95rem;color:var(--gray-600);line-height:1.65}
        /* WhatsApp mockup */
        .wa-mockup{background:#e5ddd5;border-radius:var(--radius-xl);padding:1.5rem;margin:2.5rem 0;direction:rtl;font-family:'Heebo',sans-serif}
        .wa-header{background:#075e54;border-radius:var(--radius-md) var(--radius-md) 0 0;padding:.85rem 1.25rem;display:flex;align-items:center;gap:.75rem;margin:-1.5rem -1.5rem 1.5rem;color:white}
        .wa-avatar{width:36px;height:36px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0}
        .wa-contact-name{font-size:.95rem;font-weight:600}
        .wa-contact-sub{font-size:.75rem;opacity:.75}
        .wa-bubble{background:white;border-radius:12px 12px 4px 12px;padding:.85rem 1rem;font-size:.92rem;line-height:1.6;color:#1a1a1a;max-width:88%;box-shadow:0 1px 3px rgba(0,0,0,.1);margin-bottom:.75rem}
        .wa-bubble-from{background:#dcf8c6;border-radius:12px 12px 12px 4px;margin-right:auto;margin-left:0}
        .wa-bubble p{margin:0 0 .4rem 0}
        .wa-bubble p:last-child{margin-bottom:0}
        .wa-time{font-size:.72rem;color:#999;margin-top:.35rem;display:flex;justify-content:flex-end;align-items:center;gap:.25rem}
        .wa-divider{border:none;border-top:1px solid rgba(0,0,0,.08);margin:.75rem 0}
        .wa-btns{display:flex;gap:.5rem;flex-direction:column}
        .wa-btn{background:white;border:none;border-radius:8px;padding:.6rem 1rem;font-size:.88rem;font-weight:600;color:#25D366;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:.4rem;box-shadow:0 1px 2px rgba(0,0,0,.08)}
        .wa-btn.decline{color:#dc2626}
        .wa-status{font-size:.75rem;color:#555;background:rgba(0,0,0,.06);border-radius:100px;padding:.25rem .75rem;display:inline-flex;align-items:center;gap:.3rem;margin-top:.5rem}
        .feature-quote{border-right:3px solid #25D366;padding:1rem 1.5rem;margin:2rem 0;background:var(--light);border-radius:0 var(--radius-md) var(--radius-md) 0}
        .feature-quote p{font-size:1.05rem;font-style:italic;color:var(--dark);line-height:1.65;margin-bottom:.5rem}
        .feature-quote cite{font-size:.85rem;color:var(--gray-500);font-style:normal}
        .checklist{list-style:none;padding:0;margin:1.5rem 0}
        .checklist li{display:flex;gap:.75rem;align-items:flex-start;padding:.5rem 0;font-size:.97rem;color:var(--gray-700);line-height:1.55}
        .checklist li::before{content:'✓';color:#25D366;font-weight:800;font-size:1.1rem;flex-shrink:0;margin-top:.05rem}
        .cta-inline{background:var(--light);border-radius:var(--radius-xl);padding:2rem;text-align:center;margin:2.5rem 0}
        .cta-inline h3{font-size:1.25rem;font-weight:700;color:var(--dark);margin-bottom:.5rem}
        .cta-inline p{font-size:.95rem;color:var(--gray-600);margin-bottom:1.25rem}
        .feature-nav{display:flex;justify-content:space-between;align-items:center;padding:2rem 0 0;border-top:1px solid var(--gray-200);gap:1rem}
        .feature-nav a{display:flex;flex-direction:column;gap:.2rem;text-decoration:none;color:var(--dark);font-weight:600;transition:color .2s}
        .feature-nav a:hover{color:var(--primary)}
        .feature-nav .nav-dir{font-size:.75rem;color:var(--gray-400);font-weight:400}.feature-nav .nav-title{font-size:1rem}
        @media(max-width:600px){.stat-row{gap:1.25rem}.feature-nav{flex-direction:column;align-items:flex-start}.wa-btns{flex-direction:column}}
      `}</style>

      <FeaturePageLayout>
        <section className="feature-page-hero">
          <div className="feature-hero-inner">
            <Link href="/features" className="feature-back">חזרה לכל הפיצ'רים</Link>
            <div className="feature-hero-tags">
              <span className="fh-tag fh-tag-green">ניהול קליניקה</span>
              <span className="fh-tag fh-tag-new">חדש — מרץ 2026</span>
            </div>
            <h1>תזכורות חכמות —<br /><em>וואצאפ, אימייל, ואישור הגעה</em> בלחיצה אחת</h1>
            <p className="lead">ORIA שולחת תזכורות אוטומטיות לפגישה — בוואצאפ, באימייל, או בשניהם — ומטופלים מאשרים הגעה ישירות מהצ'אט. אתם לא צריכים לגעת בזה.</p>
            <div className="stat-row">
              <div className="stat-item"><div className="stat-num">0</div><div className="stat-label">שיחות תיאום ידניות</div></div>
              <div className="stat-item"><div className="stat-num">1</div><div className="stat-label">קליק לתזכורת ידנית</div></div>
              <div className="stat-item"><div className="stat-num">100%</div><div className="stat-label">עדכון אוטומטי במערכת</div></div>
            </div>
          </div>
        </section>

        <article className="feature-body">
          <p className="section-label">הבעיה</p>
          <h2 className="feature-section-title">כמה פעמים שלחתם תזכורת ידנית למטופל השבוע?</h2>
          <p className="body-text">הברזה של שעה אחרונה. טלפון שלא נענה. הודעת וואצאפ ששלחתם בידיים בין פגישה לפגישה. אלה לא "דברים שעושים" — אלה זמן שנגזל מהמשימה האמיתית שלכם.</p>
          <p className="body-text">הבעיה לא רק הזמן. היא גם הראש: "שלחתי? נשלח? האם הם מגיעים?" — שאלות שמנקזות ריכוז שהיה יכול להישאר בתוך החדר.</p>

          <div className="feature-quote">
            <p>"אני מבלה כל בוקר 20 דקות על שליחת תזכורות. זה לא הסיבה שלמדתי פסיכולוגיה."</p>
            <cite>— מיכל, פסיכולוגית קלינית</cite>
          </div>

          <p className="section-label" style={{ marginTop: '2.5rem' }}>איך זה עובד</p>
          <h2 className="feature-section-title">אוטומטי, חכם, ומאשר הגעה.</h2>
          <div className="how-steps">
            {[
              { n: 1, title: 'ORIA שולחת תזכורת אוטומטית', text: 'יום-יומיים לפני כל פגישה, ORIA שולחת הודעת תזכורת לבחירתכם — בוואצאפ, באימייל, או בשניהם. כלום לא מצריך ממכם פעולה.' },
              { n: 2, title: 'המטופל מאשר ישירות מהצ\'אט', text: 'ההודעה כוללת שני כפתורים: "מאשר.ת הגעה" ו"לא אוכל להגיע". לחיצה אחת מהמטופל — הסטטוס מתעדכן אוטומטית אצלכם במערכת.' },
              { n: 3, title: 'תזכורת ידנית? קליק ימני', text: 'לא תמיד רוצים לחכות לאוטומציה. לוחצים קליק ימני על כל פגישה ביומן ובוחרים "שלח תזכורת עכשיו" — ישירות לוואצאפ של המטופל.' },
              { n: 4, title: 'מעקב מסירה בזמן אמת', text: 'רואים בדיוק מה קרה לכל הודעה: נשלח, נמסר, נצפה. אין יותר "אולי הם לא ראו".' },
            ].map((s) => (
              <div className="how-step" key={s.n}>
                <div className="step-num-circle">{s.n}</div>
                <div className="how-step-body"><h3>{s.title}</h3><p>{s.text}</p></div>
              </div>
            ))}
          </div>

          <p className="section-label" style={{ marginTop: '2.5rem' }}>ככה זה נראה</p>
          <h2 className="feature-section-title">המטופל מקבל הודעה — ועונה בלחיצה אחת</h2>

          <div className="wa-mockup">
            <div className="wa-header">
              <div className="wa-avatar">🏥</div>
              <div>
                <div className="wa-contact-name">ORIA AI — הקליניקה שלי</div>
                <div className="wa-contact-sub">תזכורת פגישה</div>
              </div>
            </div>
            <div className="wa-bubble">
              <p>שלום 😊</p>
              <p>תזכורת לפגישתנו מחר, <strong>יום רביעי 12.3.2026 בשעה 17:00</strong> עם ד"ר מיכל כהן.</p>
              <p>אנא אשרו הגעה:</p>
              <hr className="wa-divider" />
              <div className="wa-btns">
                <button className="wa-btn">✅ מאשר.ת הגעה</button>
                <button className="wa-btn decline">❌ לא אוכל להגיע</button>
              </div>
              <div className="wa-time">17:23 ✓✓</div>
            </div>
            <div className="wa-bubble wa-bubble-from">
              <p>✅ מאשר.ת הגעה</p>
              <div className="wa-time">17:24 ✓✓</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span className="wa-status">✓ הסטטוס עודכן אוטומטית ב-ORIA</span>
            </div>
          </div>

          <p className="section-label" style={{ marginTop: '2.5rem' }}>מה כלול</p>
          <h2 className="feature-section-title">הכל כבר שם — בלי הגדרות מסובכות</h2>
          <ul className="checklist">
            <li>תזכורות אוטומטיות בוואצאפ ו/או אימייל — מתזמנות לפי יומן הפגישות שלכם</li>
            <li>תבניות WhatsApp מאושרות עם כפתורי "מאשר.ת הגעה" / "לא אוכל להגיע"</li>
            <li>עדכון סטטוס אוטומטי כשהמטופל עונה — אתם רואים הכל בזמן אמת</li>
            <li>מעקב מסירה: נשלח, נמסר, נצפה</li>
            <li>תזכורת ידנית בלחיצה אחת מהיומן — קליק ימני על כל פגישה</li>
            <li>בחירת ערוץ לכל מטופל: וואצאפ, אימייל, או שניהם</li>
          </ul>

          <div className="cta-inline">
            <h3>רוצים שהתזכורות ירוצו לבד?</h3>
            <p>הצטרפו לרשימת ההמתנה וקבלו גישה לכל הפיצ'רים כשהאפליקציה יוצאת — כולל תזכורות חכמות בוואצאפ.</p>
            <Link href="/#pricing" className="btn btn-primary">הצטרפו לרשימת ההמתנה</Link>
          </div>

          <div className="feature-nav">
            <Link href="/features"><span className="nav-dir">← כל הפיצ'רים</span><span className="nav-title">חזרה לרשימה</span></Link>
            <Link href="/features/reports" style={{ textAlign: 'left' }}><span className="nav-dir">פיצ'ר קודם →</span><span className="nav-title">דוחות פיננסיים</span></Link>
          </div>
        </article>
      </FeaturePageLayout>
    </>
  );
}
