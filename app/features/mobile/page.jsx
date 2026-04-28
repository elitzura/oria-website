import Link from 'next/link';
import FeaturePageLayout from '../../../components/FeaturePageLayout';

export const metadata = { title: 'ORIA בפלאפון - ניהול הקליניקה מכל מקום | ORIA AI' };

export default function MobileFeaturePage() {
  return (
    <>
      <style>{`
        .feature-page-hero{background:linear-gradient(160deg,var(--dark) 0%,#1a2560 100%);padding:140px 1.5rem 80px;position:relative;overflow:hidden}
        .feature-page-hero::before{content:'';position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(98,93,229,.22) 0%,transparent 70%);top:-100px;right:-120px;pointer-events:none}
        .feature-page-hero::after{content:'';position:absolute;width:350px;height:350px;border-radius:50%;background:radial-gradient(circle,rgba(72,183,255,.14) 0%,transparent 70%);bottom:-80px;left:-60px;pointer-events:none}
        .feature-hero-inner{max-width:820px;margin:0 auto;position:relative;z-index:2}
        .feature-back{display:inline-flex;align-items:center;gap:.4rem;color:rgba(255,255,255,.6);font-size:.9rem;font-weight:500;text-decoration:none;margin-bottom:1.5rem;transition:color .2s}
        .feature-back:hover{color:white}.feature-back::before{content:'→'}
        .feature-hero-tags{display:flex;gap:.5rem;margin-bottom:1.25rem;flex-wrap:wrap}
        .fh-tag{font-size:.78rem;font-weight:700;padding:.25rem .75rem;border-radius:100px;letter-spacing:.05em}
        .fh-tag-blue{background:rgba(72,183,255,.2);color:#93c5fd}
        .fh-tag-purple{background:rgba(98,93,229,.25);color:#c4b5fd}
        .fh-tag-new{background:rgba(34,197,94,.2);color:#86efac}
        .feature-page-hero h1{font-size:clamp(2rem,5vw,3.25rem);font-weight:800;color:white;line-height:1.15;margin-bottom:1.25rem}
        .feature-page-hero h1 em{font-style:normal;color:#48B7FF}
        .feature-page-hero .lead{font-size:1.2rem;color:rgba(255,255,255,.78);line-height:1.7;max-width:640px}
        .stat-row{display:flex;gap:2rem;margin-top:2.5rem;flex-wrap:wrap}
        .stat-item{text-align:center}
        .stat-num{font-size:2.5rem;font-weight:800;color:#48B7FF;font-family:'Montserrat',sans-serif;line-height:1}
        .stat-label{font-size:.85rem;color:rgba(255,255,255,.6);margin-top:.25rem}
        .feature-body{max-width:820px;margin:0 auto;padding:72px 1.5rem 96px}
        .section-label{font-size:.8rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--primary);margin-bottom:.75rem}
        h2.feature-section-title{font-size:1.65rem;font-weight:800;color:var(--dark);margin-bottom:1rem;line-height:1.3}
        .body-text{font-size:1rem;color:var(--gray-700);line-height:1.75;margin-bottom:1.25rem}
        .how-steps{display:flex;flex-direction:column;gap:0;margin:2.5rem 0}
        .how-step{display:flex;gap:1.5rem;padding:1.75rem 0;border-bottom:1px solid var(--gray-200);align-items:flex-start}
        .how-step:last-child{border-bottom:none}
        .step-num-circle{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#625DE5,#48B7FF);color:white;font-size:1rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-family:'Montserrat',sans-serif}
        .how-step-body h3{font-size:1.1rem;font-weight:700;color:var(--dark);margin-bottom:.4rem}
        .how-step-body p{font-size:.95rem;color:var(--gray-600);line-height:1.65}

        /* Phone mockup */
        .phone-mockup-wrap{display:flex;justify-content:center;margin:2.5rem 0}
        .phone-frame{width:260px;background:#111827;border-radius:36px;padding:10px;box-shadow:0 24px 64px rgba(98,93,229,.3),0 8px 24px rgba(0,0,0,.35);position:relative}
        .phone-notch{width:90px;height:22px;background:#111827;border-radius:0 0 14px 14px;margin:0 auto 6px;position:relative;z-index:2}
        .phone-screen{background:#FAF9F7;border-radius:28px;overflow:hidden;min-height:420px}
        .phone-status-bar{background:white;padding:.4rem .9rem;display:flex;justify-content:space-between;align-items:center;font-size:.65rem;font-weight:600;color:#555;border-bottom:1px solid #eee}
        .phone-nav{background:white;padding:.6rem .9rem .5rem;display:flex;align-items:center;gap:.5rem;border-bottom:1px solid #eee}
        .phone-nav-logo{font-family:'Montserrat',sans-serif;font-weight:800;font-size:.85rem;color:#625DE5;letter-spacing:-.02em}
        .phone-content{padding:.75rem .9rem}
        .phone-greeting{font-size:.78rem;color:#888;margin-bottom:.2rem}
        .phone-name{font-size:1rem;font-weight:700;color:#171938;margin-bottom:.9rem}
        .phone-card{background:white;border-radius:14px;padding:.8rem 1rem;margin-bottom:.65rem;box-shadow:0 2px 8px rgba(98,93,229,.1);display:flex;align-items:center;gap:.7rem}
        .phone-card-icon{width:34px;height:34px;border-radius:10px;background:rgba(98,93,229,.1);display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .phone-card-icon svg{width:16px;height:16px;stroke:#625DE5;stroke-width:2;fill:none}
        .phone-card-title{font-size:.8rem;font-weight:700;color:#171938;margin-bottom:.1rem}
        .phone-card-sub{font-size:.7rem;color:#999}
        .phone-fab{position:absolute;bottom:18px;left:50%;transform:translateX(-50%);width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#625DE5,#48B7FF);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 14px rgba(98,93,229,.45)}
        .phone-fab svg{width:20px;height:20px;stroke:white;stroke-width:2.5;fill:none}
        .phone-bottom-bar{background:white;padding:.5rem .9rem .6rem;display:flex;justify-content:space-around;border-top:1px solid #eee;margin-top:.5rem}
        .phone-tab{display:flex;flex-direction:column;align-items:center;gap:.2rem;font-size:.58rem;color:#aaa;font-weight:600}
        .phone-tab.active{color:#625DE5}
        .phone-tab svg{width:18px;height:18px;stroke:currentColor;stroke-width:2;fill:none}
        .phone-pill{display:inline-block;background:rgba(98,93,229,.1);color:#625DE5;font-size:.62rem;font-weight:700;padding:.15rem .55rem;border-radius:100px;margin-top:.2rem}

        .feature-quote{border-right:3px solid var(--primary);padding:1rem 1.5rem;margin:2rem 0;background:var(--light);border-radius:0 var(--radius-md) var(--radius-md) 0}
        .feature-quote p{font-size:1.05rem;font-style:italic;color:var(--dark);line-height:1.65;margin-bottom:.5rem}
        .feature-quote cite{font-size:.85rem;color:var(--gray-500);font-style:normal}
        .checklist{list-style:none;padding:0;margin:1.5rem 0}
        .checklist li{display:flex;gap:.75rem;align-items:flex-start;padding:.5rem 0;font-size:.97rem;color:var(--gray-700);line-height:1.55}
        .checklist li::before{content:'✓';color:var(--primary);font-weight:800;font-size:1.1rem;flex-shrink:0;margin-top:.05rem}
        .cta-inline{background:var(--light);border-radius:var(--radius-xl);padding:2rem;text-align:center;margin:2.5rem 0}
        .cta-inline h3{font-size:1.25rem;font-weight:700;color:var(--dark);margin-bottom:.5rem}
        .cta-inline p{font-size:.95rem;color:var(--gray-600);margin-bottom:1.25rem}
        .feature-nav{display:flex;justify-content:space-between;align-items:center;padding:2rem 0 0;border-top:1px solid var(--gray-200);gap:1rem}
        .feature-nav a{display:flex;flex-direction:column;gap:.2rem;text-decoration:none;color:var(--dark);font-weight:600;transition:color .2s}
        .feature-nav a:hover{color:var(--primary)}
        .feature-nav .nav-dir{font-size:.75rem;color:var(--gray-400);font-weight:400}
        .feature-nav .nav-title{font-size:1rem}
        @media(max-width:600px){.stat-row{gap:1.25rem}.feature-nav{flex-direction:column;align-items:flex-start}.phone-mockup-wrap{transform:scale(.9);transform-origin:center top}}
      `}</style>

      <FeaturePageLayout>
        <section className="feature-page-hero">
          <div className="feature-hero-inner">
            <Link href="/features" className="feature-back">חזרה לכל הפיצ'רים</Link>
            <div className="feature-hero-tags">
              <span className="fh-tag fh-tag-blue">מובייל</span>
              <span className="fh-tag fh-tag-purple">ליבה</span>
              <span className="fh-tag fh-tag-new">חדש - אפריל 2026</span>
            </div>
            <h1><em>ORIA בפלאפון</em> -<br />ניהול הקליניקה מכל מקום</h1>
            <p className="lead">לא תמיד אתם ליד המחשב. ORIA עובדת מצוין בפלאפון - תיעדו, בדקו לוח שנה, שלחו תזכורות וכתבו סיכומים בין פגישה לפגישה, מכל מקום שאתם נמצאים.</p>
            <div className="stat-row">
              <div className="stat-item"><div className="stat-num">100%</div><div className="stat-label">Responsive - מותאם לכל מסך</div></div>
              <div className="stat-item"><div className="stat-num">30″</div><div className="stat-label">סיכום פגישה מהנייד</div></div>
              <div className="stat-item"><div className="stat-num">0</div><div className="stat-label">אפליקציות נפרדות להורדה</div></div>
            </div>
          </div>
        </section>

        <div className="feature-body">
          {/* The problem */}
          <div className="section-label">הבעיה</div>
          <h2 className="feature-section-title">המטפל הממוצע לא עובד ממשרד קבוע</h2>
          <p className="body-text">
            מרבית המטפלים העצמאיים רואים מטופלים בבוקר, מנהלים ארגונים בצהריים, ומגיעים לפגישת אחר הצהרים - כשהמחשב נשאר בבית. כלים שדורשים מחשב כדי לתפקד מאלצים אתכם לדחות תיעוד, לשכוח פרטים, ולחזור לשולחן בשביל דברים שאמורים להיות פשוטים.
          </p>
          <p className="body-text">
            ORIA נבנתה מהיום הראשון כ-Web App שעובד בדפדפן על כל מכשיר - פלאפון, טאבלט, מחשב. אותה חוויה, אותם נתונים, מכל מקום.
          </p>

          {/* Phone mockup */}
          <div className="phone-mockup-wrap">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="phone-status-bar">
                  <span>9:41</span>
                  <span style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#555" stroke="none"><path d="M1 6l5.5 5.5L12 6l5.5 5.5L23 6"/><path d="M1 6c2.76-3.48 6.54-5.5 11-5.5s8.24 2.02 11 5.5" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round"/></svg>
                    <svg width="14" height="10" viewBox="0 0 24 16" fill="#555" stroke="none"><rect x="1" y="1" width="18" height="14" rx="3" ry="3" fill="none" stroke="#555" strokeWidth="2"/><rect x="3" y="3" width="12" height="10" rx="1" fill="#555"/><path d="M21 6v4a2 2 0 0 0 0-4z" fill="#555"/></svg>
                  </span>
                </div>
                <div className="phone-nav">
                  <span className="phone-nav-logo">ORIA</span>
                  <span style={{ fontSize: '.7rem', color: '#aaa', marginRight: 'auto' }}>הקליניקה שלי</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                </div>
                <div className="phone-content">
                  <div className="phone-greeting">שלום,</div>
                  <div className="phone-name">ד"ר שרה לוי 👋</div>

                  <div className="phone-card">
                    <div className="phone-card-icon">
                      <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    </div>
                    <div>
                      <div className="phone-card-title">הפגישה הבאה</div>
                      <div className="phone-card-sub">דנה כהן - 14:00 היום</div>
                      <span className="phone-pill">הכנה מהירה ←</span>
                    </div>
                  </div>

                  <div className="phone-card">
                    <div className="phone-card-icon">
                      <svg viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/></svg>
                    </div>
                    <div>
                      <div className="phone-card-title">Brain Dump</div>
                      <div className="phone-card-sub">סיכום פגישת הבוקר</div>
                      <span className="phone-pill">הקליטו עכשיו ←</span>
                    </div>
                  </div>

                  <div className="phone-card">
                    <div className="phone-card-icon">
                      <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <div>
                      <div className="phone-card-title">12 מטופלים פעילים</div>
                      <div className="phone-card-sub">2 ממתינים לתיעוד</div>
                      <span className="phone-pill">לתיקים ←</span>
                    </div>
                  </div>
                </div>

                <div className="phone-bottom-bar">
                  <div className="phone-tab active">
                    <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    בית
                  </div>
                  <div className="phone-tab">
                    <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    יומן
                  </div>
                  <div className="phone-tab">
                    <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                    מטופלים
                  </div>
                  <div className="phone-tab">
                    <svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                    עוד
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="section-label" style={{ marginTop: '2.5rem' }}>איך זה עובד</div>
          <h2 className="feature-section-title">פותחים את הדפדפן - וזה פשוט עובד</h2>
          <div className="how-steps">
            <div className="how-step">
              <div className="step-num-circle">1</div>
              <div className="how-step-body">
                <h3>נכנסים מהדפדפן של הפלאפון</h3>
                <p>אין מה להוריד. נכנסים לאפליקציה בכל דפדפן מודרני ומתחברים - הממשק מזהה מסך קטן ומתאים את עצמו אוטומטית.</p>
                <a href="https://app.oriamind.ai" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '.35rem', marginTop: '.6rem', fontSize: '.85rem', fontWeight: 700, color: 'var(--primary)', background: 'rgba(98,93,229,.08)', border: '1px solid rgba(98,93,229,.2)', borderRadius: 'var(--radius-full)', padding: '.35rem .85rem', textDecoration: 'none' }}>פתחו את ORIA עכשיו ←</a>
              </div>
            </div>
            <div className="how-step">
              <div className="step-num-circle">2</div>
              <div className="how-step-body">
                <h3>מתקינים ישירות מהאתר - בלחיצה אחת</h3>
                <p>בכניסה הראשונה מהפלאפון, האתר מציע לכם להתקין את ORIA ישירות על מסך הבית. לוחצים "התקן עכשיו" - ומרגע זה ORIA פועלת כמו אפליקציה לכל דבר: אייקון על שולחן העבודה, פתיחה במסך מלא, ללא כרטיסיית דפדפן.</p>
              </div>
            </div>
            <div className="how-step">
              <div className="step-num-circle">3</div>
              <div className="how-step-body">
                <h3>עובדים בדיוק כמו במחשב</h3>
                <p>כל הפיצ'רים זמינים: Brain Dump בקלטת קולית, סקירת תיקי מטופלים, שליחת תזכורות, בדיקת לוח שנה, אישור תשלומים. הנתונים מסונכרנים בזמן אמת בין כל המכשירים שלכם.</p>
              </div>
            </div>
          </div>

          <div className="feature-quote">
            <p>"אני רואה מטופלים בשלושה מיקומים שונים בשבוע. שמחתי לגלות שאני יכולה לכתוב סיכום בין פגישות ישירות מהאייפון, בלי לחכות שאחזור הביתה."</p>
            <cite>- נועה, פסיכולוגית קלינית, תל אביב</cite>
          </div>

          {/* What works on mobile */}
          <div className="section-label" style={{ marginTop: '2.5rem' }}>מה עובד מהפלאפון</div>
          <h2 className="feature-section-title">הכל - בלי פשרות</h2>
          <ul className="checklist">
            <li>סקירת תיק מטופל והיסטוריית פגישות</li>
            <li>Brain Dump - הקלטה קולית וסיכום אוטומטי</li>
            <li>הכנה לפגישה עם המוח השני</li>
            <li>צפייה ועדכון לוח שנה ויומן</li>
            <li>שליחת תזכורות מיידיות בוואטסאפ ומייל</li>
            <li>ניהול תשלומים ואישור גבייה</li>
            <li>הוספת מטופלים חדשים</li>
            <li>צפייה בדוחות ונתוני הכנסות</li>
          </ul>

          <div className="cta-inline">
            <h3>מוכנים לנהל מכל מקום?</h3>
            <p>פתחו את ORIA עכשיו בפלאפון - ראו בעצמכם כמה פשוט זה.</p>
            <a href="https://app.oriamind.ai" className="btn btn-primary">פתחו עכשיו בפלאפון ←</a>
          </div>

          {/* Feature nav */}
          <div className="feature-nav">
            <Link href="/features/whatsapp-reminders">
              <span className="nav-dir">הפיצ'ר הקודם</span>
              <span className="nav-title">תזכורות חכמות ←</span>
            </Link>
            <Link href="/features/brain-dump" style={{ textAlign: 'left' }}>
              <span className="nav-dir">הפיצ'ר הבא</span>
              <span className="nav-title">→ Brain Dump</span>
            </Link>
          </div>
        </div>
      </FeaturePageLayout>
    </>
  );
}
