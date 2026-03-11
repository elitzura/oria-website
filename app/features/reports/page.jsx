import Link from 'next/link';
import FeaturePageLayout from '../../../components/FeaturePageLayout';

export const metadata = { title: 'דוחות פיננסיים — שאלו בעברית, קבלו אקסל | ORIA AI' };

export default function ReportsPage() {
  return (
    <>
      <style>{`
        .feature-page-hero{background:linear-gradient(160deg,#2d1a0e 0%,#7c2d12 60%,#E5907A 100%);padding:140px 1.5rem 80px;position:relative;overflow:hidden}
        .feature-page-hero::before{content:'';position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(255,200,150,.15) 0%,transparent 70%);top:-60px;right:-60px;pointer-events:none}
        .feature-hero-inner{max-width:820px;margin:0 auto;position:relative;z-index:2}
        .feature-back{display:inline-flex;align-items:center;gap:.4rem;color:rgba(255,255,255,.6);font-size:.9rem;font-weight:500;text-decoration:none;margin-bottom:1.5rem;transition:color .2s}
        .feature-back:hover{color:white}.feature-back::before{content:'→'}
        .feature-hero-tags{display:flex;gap:.5rem;margin-bottom:1.25rem;flex-wrap:wrap}
        .fh-tag{font-size:.78rem;font-weight:700;padding:.25rem .75rem;border-radius:100px;letter-spacing:.05em}
        .fh-tag-coral{background:rgba(255,200,150,.2);color:#fde8c8}.fh-tag-green{background:rgba(34,197,94,.2);color:#86efac}
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
        .qa-card{background:var(--dark);border-radius:var(--radius-xl);padding:1.75rem;margin:2rem 0}
        .qa-row{margin-bottom:1.25rem}
        .qa-q{display:flex;align-items:flex-start;gap:.75rem;margin-bottom:.6rem}
        .qa-avatar{width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,.12);display:flex;align-items:center;justify-content:center;font-size:.75rem;color:rgba(255,255,255,.6);flex-shrink:0}
        .qa-bubble-q{background:rgba(255,255,255,.08);border-radius:8px 8px 8px 2px;padding:.65rem 1rem;font-size:.92rem;color:rgba(255,255,255,.85);line-height:1.5}
        .qa-a{display:flex;align-items:flex-start;gap:.75rem;justify-content:flex-end}
        .qa-avatar-oria{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#E5907A,var(--primary));display:flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:700;color:white;flex-shrink:0}
        .qa-bubble-a{background:linear-gradient(135deg,rgba(229,144,122,.2),rgba(98,93,229,.2));border:1px solid rgba(229,144,122,.3);border-radius:8px 8px 2px 8px;padding:.75rem 1rem;font-size:.92rem;color:rgba(255,255,255,.9);line-height:1.6}
        .qa-bubble-a strong{color:#fde8c8}
        .excel-mock{background:white;border-radius:var(--radius-lg);overflow:hidden;border:1px solid var(--gray-200);margin:2rem 0;box-shadow:var(--shadow-sm)}
        .excel-header-bar{background:#217346;padding:.65rem 1rem;display:flex;align-items:center;gap:.5rem}
        .excel-header-bar span{color:white;font-size:.85rem;font-weight:600}
        .excel-table{width:100%;border-collapse:collapse;font-size:.85rem}
        .excel-table th{background:#e8f5e9;color:#1b5e20;padding:.5rem .75rem;text-align:right;font-weight:700;border-bottom:1px solid #c8e6c9;white-space:nowrap}
        .excel-table td{padding:.45rem .75rem;border-bottom:1px solid var(--gray-100);color:var(--dark);white-space:nowrap}
        .excel-table tr:last-child td{border-bottom:none;font-weight:700;background:#f1f8e9}
        .excel-table td.amount{color:#16a34a;font-weight:600}.excel-table td.unpaid{color:#dc2626;font-weight:600}
        .feature-quote{border-right:3px solid #E5907A;padding:1rem 1.5rem;margin:2rem 0;background:var(--light);border-radius:0 var(--radius-md) var(--radius-md) 0}
        .feature-quote p{font-size:1.05rem;font-style:italic;color:var(--dark);line-height:1.65;margin-bottom:.5rem}
        .feature-quote cite{font-size:.85rem;color:var(--gray-500);font-style:normal}
        .questions-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:.75rem;margin:1.5rem 0}
        .question-chip{background:var(--light);border:1px solid var(--gray-200);border-radius:var(--radius-md);padding:.75rem 1rem;font-size:.88rem;color:var(--dark);display:flex;align-items:center;gap:.5rem}
        .question-chip::before{content:'💬';font-size:.9rem}
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
              <span className="fh-tag fh-tag-coral">ניהול</span>
              <span className="fh-tag fh-tag-green">חדש — פברואר 2026</span>
            </div>
            <h1>דוחות פיננסיים —<br /><em>שאלו בעברית, קבלו אקסל</em></h1>
            <p className="lead">שאלו "כמה הרווחתי בינואר?" ו-ORIA תיצור דוח מסודר עם גרפים וטבלאות — ותייצא לאקסל בלחיצה אחת.</p>
            <div className="stat-row">
              <div className="stat-item"><div className="stat-num">1</div><div className="stat-label">לחיצה לייצוא אקסל</div></div>
              <div className="stat-item"><div className="stat-num">0</div><div className="stat-label">ידע בחשבונאות נדרש</div></div>
              <div className="stat-item"><div className="stat-num">כל</div><div className="stat-label">נתון שתשאלו עליו</div></div>
            </div>
          </div>
        </section>

        <article className="feature-body">
          <p className="section-label">הבעיה</p>
          <h2 className="feature-section-title">בסוף החודש — ניירת. בתחילת השנה — עוד יותר ניירת.</h2>
          <p className="body-text">מי שילם? מי חייב? כמה הרווחתי השנה? הנתונים קיימים — אבל לאסוף אותם, לסדר, לחשב ולייצא לרואה חשבון? זה שעות. שעות שאפשר לתת לאנשים.</p>
          <div className="feature-quote">
            <p>"אני מוציאה בסוף כל חודש שעתיים על סיכומי תשלומים. זה המשמרת השנייה שלי — ואני לא נשלמת בשבילה."</p>
            <cite>— רחל, עובדת סוציאלית קלינית</cite>
          </div>

          <p className="section-label" style={{ marginTop: '2.5rem' }}>שאלו בעברית</p>
          <h2 className="feature-section-title">ORIA מבינה שאלות פיננסיות בשפה שלכם</h2>
          <p className="body-text">לא צריך דשבורדים מסובכים. פשוט שואלים — ו-ORIA מחזירה תשובה עם נתונים.</p>

          <div className="qa-card">
            {[
              { q: 'כמה הרווחתי בינואר לעומת דצמבר?', a: <span><strong>ינואר:</strong> ₪14,200 (32 פגישות) | <strong>דצמבר:</strong> ₪11,800 (26 פגישות)<br />עלייה של 20.3% — בעיקר בגלל 4 מטופלים חדשים. <a style={{ color: '#fde8c8' }}>ייצא לאקסל ↓</a></span> },
              { q: 'מי לא שילם יותר מחודשיים?', a: <span>נמצאו <strong>3 מטופלים</strong> עם חוב מעל 60 יום: ד' (₪900), מ' (₪600), ר' (₪1,200). <a style={{ color: '#fde8c8' }}>ייצא דוח חובות ↓</a></span> },
            ].map((item, i) => (
              <div className="qa-row" key={i}>
                <div className="qa-q"><div className="qa-avatar">את</div><div className="qa-bubble-q">{item.q}</div></div>
                <div className="qa-a"><div className="qa-bubble-a">{item.a}</div><div className="qa-avatar-oria">AI</div></div>
              </div>
            ))}
          </div>

          <p className="section-label">דוגמאות לשאלות</p>
          <h2 className="feature-section-title">מה אפשר לשאול?</h2>
          <div className="questions-grid">
            {['כמה הרווחתי החודש?','מי לא שילם?','כמה פגישות עשיתי בינואר?','מה ההכנסה הממוצעת לפגישה?','כמה פגישות ביטל כל מטופל?','תראי לי את כל התשלומים של מ\''].map((q) => (
              <div className="question-chip" key={q}>{q}</div>
            ))}
          </div>

          <div className="excel-mock">
            <div className="excel-header-bar"><span className="icon">📊</span><span>דוח הכנסות — ינואר 2026.xlsx</span></div>
            <div style={{ overflowX: 'auto' }}>
              <table className="excel-table">
                <thead><tr><th>מטופל</th><th>פגישות</th><th>שולם</th><th>חוב</th><th>סוג</th></tr></thead>
                <tbody>
                  <tr><td>ד'</td><td>4</td><td className="amount">₪1,600</td><td className="unpaid">₪400</td><td>פרטי</td></tr>
                  <tr><td>מ'</td><td>3</td><td className="amount">₪1,200</td><td>—</td><td>קופת חולים</td></tr>
                  <tr><td>ר'</td><td>5</td><td className="amount">₪2,000</td><td className="unpaid">₪500</td><td>פרטי</td></tr>
                  <tr><td>א'</td><td>4</td><td className="amount">₪1,600</td><td>—</td><td>פרטי</td></tr>
                  <tr><td colSpan="2"><strong>סה"כ</strong></td><td className="amount"><strong>₪6,400</strong></td><td className="unpaid"><strong>₪900</strong></td><td></td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="cta-inline">
            <h3>רוצים שהניירת הפיננסית תיגמר לבד?</h3>
            <p>הצטרפו לפיילוט — ORIA תתחיל לעקוב ולארגן את הנתונים הפיננסיים שלכם מהיום הראשון.</p>
            <Link href="/#pricing" className="btn btn-primary">הצטרפו לפיילוט</Link>
          </div>

          <div className="feature-nav">
            <Link href="/features/second-brain"><span className="nav-dir">← פיצ'ר קודם</span><span className="nav-title">המוח השני</span></Link>
            <Link href="/features/security-2fa" style={{ textAlign: 'left' }}><span className="nav-dir">פיצ'ר הבא →</span><span className="nav-title">אימות דו-שלבי</span></Link>
          </div>
        </article>
      </FeaturePageLayout>
    </>
  );
}
