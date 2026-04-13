import Link from 'next/link';
import StaticPageLayout from '../../components/StaticPageLayout';

export const metadata = {
  title: 'מחירים — ORIA AI',
  description: 'בחרו את המסלול המתאים לכם. מתחילים חינם, משדרגים כשרוצים.',
};

export default function PricingPage() {
  return (
    <StaticPageLayout activeNav="pricing">
      <style>{`
        .launch-ribbon {
          background: linear-gradient(90deg, #f59e0b, #f97316);
          color: #fff;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 0.3rem 0.9rem;
          border-radius: 20px;
          display: inline-block;
          margin-bottom: 0.6rem;
        }
        .launch-bonus {
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          border: 1.5px solid #f59e0b;
          border-radius: 10px;
          padding: 0.65rem 0.9rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
          font-size: 0.82rem;
          color: #92400e;
          line-height: 1.45;
        }
        .launch-bonus .bonus-icon { flex-shrink: 0; font-size: 1rem; margin-top: 1px; }
        .freemium-limit {
          background: #f0fdf4;
          border: 1.5px solid #86efac;
          border-radius: 10px;
          padding: 0.6rem 0.9rem;
          margin-bottom: 1rem;
          font-size: 0.82rem;
          color: #166534;
          line-height: 1.45;
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
        }
        .freemium-limit .bonus-icon { flex-shrink: 0; font-size: 1rem; margin-top: 1px; }
        .pricing-card.premium-star {
          border: 2px solid #625DE5;
          box-shadow: 0 8px 40px rgba(98,93,229,.18);
        }
      `}</style>

      <section className="pricing-section" style={{ paddingTop: '7rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 800, color: '#171938', marginBottom: '0.6rem' }}>
              בחרו את המסלול שמתאים לכם
            </h1>
            <p className="section-subtitle">מתחילים חינם, משדרגים כשרוצים. ללא התחייבות.</p>
          </div>

          <div className="pricing-grid" id="pricing-grid">

            {/* FREEMIUM */}
            <div className="pricing-card">
              <span className="plan-icon">🌱</span>
              <div className="pricing-header">
                <h3 style={{ fontSize: '1.3rem' }}>FREEMIUM</h3>
                <p className="pricing-desc">להרגיש את ORIA לפני שמחליטים — בלי לשלם שקל</p>
              </div>
              <div className="pricing-price">
                <span className="amount" style={{ fontSize: '2rem', letterSpacing: '-1px' }}>חינם</span>
                <span className="period" style={{ display: 'block', fontSize: '0.78rem', color: '#aaa', marginTop: '2px' }}>לתמיד, ללא כרטיס אשראי</span>
              </div>
              <div className="freemium-limit">
                <span className="bonus-icon">🔓</span>
                <span>כל הפיצ'רים של PREMIUM — מוגבל ל-3 מטופלים פעילים. שדרוג בקליק בכל רגע.</span>
              </div>
              <ul className="pricing-features">
                <li><span className="check">✓</span> יומן פגישות דיגיטלי</li>
                <li><span className="check">✓</span> ניהול תשלומים וגבייה</li>
                <li><span className="check">✓</span> תזכורות בוואטסאפ ובמייל</li>
                <li><span className="check">✓</span> סוכני AI — סיכום פגישות וניתוח תובנות</li>
                <li><span className="check">✓</span> עד 3 מטופלים פעילים</li>
              </ul>
              <a href="https://clinic.therawiseai.com" className="btn btn-outline btn-block" style={{ textAlign: 'center' }}>התחילו חינם</a>
            </div>

            {/* MIND */}
            <div className="pricing-card featured">
              <div className="popular-badge">הכי פופולרי</div>
              <span className="plan-icon">🧠</span>
              <div className="pricing-header">
                <h3 style={{ fontSize: '1.3rem' }}>MIND</h3>
                <p className="pricing-desc">כשרוצים שהמערכת תתחיל לעבוד בשבילכם</p>
              </div>
              <span className="original-price">₪189/חודש</span>
              <span className="save-badge">מחיר השקה — חוסכים ₪60/חודש</span>
              <div className="pricing-price">
                <span className="currency">₪</span><span className="amount">129</span><span className="period">/חודש</span>
              </div>
              <div className="launch-bonus">
                <span className="bonus-icon">🎁</span>
                <span><strong>הטבת השקה:</strong> כל פיצ'רי PREMIUM פתוחים לחברי MIND — לזמן מוגבל בלבד.</span>
              </div>
              <ul className="pricing-features">
                <li><span className="check">✓</span> מטופלים ללא הגבלה</li>
                <li><span className="check">✓</span> ניהול תשלומים וגבייה</li>
                <li><span className="check">✓</span> תזכורות פגישות אוטומטיות במייל</li>
                <li><span className="check">✓</span> סוכן AI: סיכום פגישות ומעקב מטופל</li>
                <li><span className="check">✓</span> תמיכה במייל</li>
              </ul>
              <a href="https://clinic.therawiseai.com" className="btn btn-outline btn-block" style={{ textAlign: 'center' }}>רכישה ←</a>
            </div>

            {/* MIND PREMIUM */}
            <div className="pricing-card premium-star">
              <div className="launch-ribbon">⚡ עסקת השקה</div>
              <span className="plan-icon">👑</span>
              <div className="pricing-header">
                <h3 style={{ fontSize: '1.3rem' }}>MIND PREMIUM</h3>
                <p className="pricing-desc">הניהול המלא — במחיר MIND, לזמן מוגבל בלבד</p>
              </div>
              <span className="original-price">₪289/חודש</span>
              <span className="save-badge">במחיר MIND — חוסכים ₪160/חודש ⭐</span>
              <div className="pricing-price">
                <span className="currency">₪</span><span className="amount">129</span><span className="period">/חודש</span>
              </div>
              <ul className="pricing-features">
                <li><span className="check">✓</span> מטופלים ללא הגבלה</li>
                <li><span className="check">✓</span> סוכני AI מרובים — ניהול קליניקה מלא</li>
                <li><span className="check">✓</span> תזכורות ועדכונים בוואטסאפ למטופלים</li>
                <li><span className="check">✓</span> ניתוח תובנות ודפוסים קליניים</li>
                <li><span className="check">✓</span> דוחות התקדמות אוטומטיים</li>
                <li><span className="check">✓</span> תמיכה בצ'אט ובטלפון</li>
              </ul>
              <a href="https://clinic.therawiseai.com" className="btn btn-primary btn-block" style={{ textAlign: 'center' }}>רכישה ←</a>
            </div>

            {/* Clinic */}
            <div className="pricing-card clinic-card">
              <span className="plan-icon">🏢</span>
              <div className="pricing-header">
                <h3 style={{ fontSize: '1.3rem' }}>קליניקות ומרכזים</h3>
                <p className="pricing-desc">פתרון מותאם אישית למרכזים עם מטפלים מרובים</p>
              </div>
              <div className="pricing-price">
                <span className="original-price">מחיר אחיד לכולם? לא אצלנו.</span>
                <span className="amount" style={{ fontSize: '1.4rem', letterSpacing: '-0.5px' }}>מחיר בהתאמה</span>
                <span className="period">נדבר ונבנה יחד</span>
              </div>
              <ul className="pricing-features">
                <li><span className="check">✓</span> כל מה שב-MIND PREMIUM</li>
                <li><span className="check">✓</span> ריבוי מטפלים תחת קורת גג אחת</li>
                <li><span className="check">✓</span> דשבורד ניהולי למנהל/ת המרכז</li>
                <li><span className="check">✓</span> הרשאות והתאמה אישית מלאה</li>
                <li><span className="check">✓</span> ליווי הטמעה צמוד</li>
              </ul>
              <a href="https://wa.me/972524824210?text=היי, אשמח לשמוע על חבילת קליניקה של ORIA AI" target="_blank" rel="noreferrer" className="btn btn-block" style={{ textAlign: 'center' }}>דברו איתנו ←</a>
            </div>

          </div>

          <div className="pricing-trust">
            <span>FREEMIUM חינם לתמיד — ללא כרטיס אשראי</span>
            <span>ביטול מיידי בכל עת דרך האפליקציה</span>
            <span>תמיכה בעברית — צוות ישראלי</span>
            <span>מחיר השקה — יעלה בקרוב</span>
          </div>
        </div>
      </section>
    </StaticPageLayout>
  );
}
