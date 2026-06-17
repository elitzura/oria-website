import Link from 'next/link';
import StaticPageLayout from '../../components/StaticPageLayout';

export const metadata = {
  title: 'מחירים - ORIA AI',
  description: 'בחרו את המסלול המתאים לכם. מתחילים חינם, משדרגים כשרוצים.',
};

const IconFreemium = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

const IconPremium = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const IconClinic = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <path d="M9 3v18"/>
    <path d="M3 9h6"/>
    <path d="M3 15h6"/>
    <path d="M15 3v18"/>
    <path d="M15 9h6"/>
    <path d="M15 15h6"/>
  </svg>
);

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
        .plan-icon {
          width: 60px;
          height: 60px;
          background: var(--gradient-primary);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          box-shadow: 0 8px 24px rgba(98,93,229,0.22);
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
        }
        .pricing-card:hover .plan-icon {
          transform: translateY(-4px) scale(1.06);
          box-shadow: 0 14px 32px rgba(98,93,229,0.32);
        }
        .plan-icon svg {
          width: 28px;
          height: 28px;
          stroke: white;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .clinic-card .plan-icon {
          background: rgba(255,255,255,0.18);
          box-shadow: 0 8px 24px rgba(0,0,0,0.18);
        }
        .early-bird-hook {
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          border: 1.5px solid #f59e0b;
          border-radius: 10px;
          padding: 0.6rem 0.9rem;
          margin-bottom: 1rem;
          font-size: 0.82rem;
          color: #92400e;
          line-height: 1.45;
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
        }
        .early-bird-hook .bonus-icon { flex-shrink: 0; font-size: 1rem; margin-top: 1px; }
        #pricing-grid {
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 22px !important;
          max-width: 980px;
          margin: 0 auto;
        }
        @media (max-width: 860px) { #pricing-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { #pricing-grid { grid-template-columns: 1fr !important; } }
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
              <div className="plan-icon"><IconFreemium /></div>
              <div className="pricing-header">
                <h2 style={{ fontSize: '1.3rem' }}>FREEMIUM</h2>
                <p className="pricing-desc">להרגיש את ORIA לפני שמחליטים - בלי לשלם שקל</p>
              </div>
              <div className="pricing-price">
                <span className="amount" style={{ fontSize: '2rem', letterSpacing: '-1px' }}>חינם</span>
                <span className="period" style={{ display: 'block', fontSize: '0.78rem', color: '#aaa', marginTop: '2px' }}>לתמיד, ללא כרטיס אשראי</span>
              </div>
              <div className="freemium-limit">
                <span className="bonus-icon">🔓</span>
                <span>כל הפיצ'רים של PREMIUM - מוגבל ל-3 מטופלים פעילים. שדרוג בקליק בכל רגע.</span>
              </div>
              <ul className="pricing-features">
                <li><span className="check">✓</span> יומן פגישות דיגיטלי</li>
                <li><span className="check">✓</span> ניהול תשלומים וגבייה</li>
                <li><span className="check">✓</span> תזכורות בוואטסאפ ובמייל</li>
                <li><span className="check">✓</span> סוכני AI - סיכום פגישות וניתוח תובנות</li>
                <li><span className="check">✓</span> עד 3 מטופלים פעילים</li>
              </ul>
              <a href="https://app.oriamind.ai/register" className="btn btn-outline btn-block" style={{ textAlign: 'center' }}>התחילו חינם</a>
            </div>

            {/* MIND PREMIUM */}
            <div className="pricing-card featured premium-star">
              <div className="popular-badge">הכי פופולרי</div>
              <div className="plan-icon"><IconPremium /></div>
              <div className="pricing-header">
                <h2 style={{ fontSize: '1.3rem' }}>MIND PREMIUM</h2>
                <p className="pricing-desc">ניהול קליניקה מלא - AI, וואטסאפ, דוחות ותמיכה אישית</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#bbb', textDecoration: 'line-through', letterSpacing: '-0.5px' }}>₪289</span>
                <span style={{ background: 'linear-gradient(90deg,#625DE5,#48B7FF)', color: '#fff', fontWeight: 800, fontSize: '0.8rem', padding: '0.2rem 0.7rem', borderRadius: '20px', letterSpacing: '0.02em' }}>חוסכים ₪190/חודש</span>
              </div>
              <div className="pricing-price">
                <span className="currency">₪</span><span className="amount">99</span><span className="period">/חודש</span>
              </div>
              <div className="early-bird-hook">
                <span className="bonus-icon">🐦</span>
                <span><strong>Early Bird:</strong> המחיר שמור ל-100 המצטרפים הראשונים בלבד.</span>
              </div>
              <ul className="pricing-features">
                <li><span className="check">✓</span> מטופלים ללא הגבלה</li>
                <li><span className="check">✓</span> ניהול תשלומים וגבייה</li>
                <li><span className="check">✓</span> סוכני AI מרובים - ניהול קליניקה מלא</li>
                <li><span className="check">✓</span> תזכורות ועדכונים בוואטסאפ למטופלים</li>
                <li><span className="check">✓</span> ניתוח תובנות ודפוסים קליניים</li>
                <li><span className="check">✓</span> דוחות התקדמות אוטומטיים</li>
                <li><span className="check">✓</span> תמיכה בצ'אט ובטלפון</li>
              </ul>
              <a href="https://app.oriamind.ai/register" className="btn btn-primary btn-block" style={{ textAlign: 'center' }}>רכישה ←</a>
            </div>

            {/* Clinic */}
            <div className="pricing-card clinic-card">
              <div className="plan-icon"><IconClinic /></div>
              <div className="pricing-header">
                <h2 style={{ fontSize: '1.3rem' }}>קליניקות ומרכזים</h2>
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
            <span>FREEMIUM חינם לתמיד - ללא כרטיס אשראי</span>
            <span>ביטול מיידי בכל עת דרך האפליקציה</span>
            <span>תמיכה בעברית - צוות ישראלי</span>
            <span>מחיר השקה - יעלה בקרוב</span>
          </div>
        </div>
      </section>
    </StaticPageLayout>
  );
}
