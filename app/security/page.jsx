'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import StaticPageLayout from '../../components/StaticPageLayout';

export default function SecurityPage() {
  const [showFormModal, setShowFormModal] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    document.body.classList.remove('loading');
    // Scroll-based fade-in for security sections
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          o.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.security-section,.security-card,.provider-card,.tip-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      obs.observe(el);
    });
    const handleKey = (e) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  const openModal = () => {
    setShowFormModal(true);
    document.body.style.overflow = 'hidden';
    if (iframeRef.current) iframeRef.current.src = 'https://form.jotform.com/260271674188059';
  };
  const closeModal = () => {
    setShowFormModal(false);
    document.body.style.overflow = '';
    if (iframeRef.current) iframeRef.current.src = '';
  };

  return (
    <>
      <style>{`
        .security-hero{background:linear-gradient(135deg,#171938 0%,#2a2d5a 50%,#171938 100%);padding:140px 0 80px;text-align:center;position:relative;overflow:hidden}
        .security-hero::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23625DE5' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");opacity:.5}
        .security-hero h1{color:white;font-size:2.8rem;margin-bottom:1rem;position:relative}
        .security-hero .subtitle{color:rgba(255,255,255,.85);font-size:1.25rem;max-width:700px;margin:0 auto;line-height:1.8;position:relative}
        .security-hero .shield-icon{font-size:4rem;margin-bottom:1.5rem;display:block;position:relative}
        .security-content{padding:80px 0;background:#fff}
        .security-section{max-width:900px;margin:0 auto 60px;padding:0 20px}
        .security-section:last-child{margin-bottom:0}
        .security-section h2{color:#171938;font-size:1.8rem;margin-bottom:1.5rem;display:flex;align-items:center;gap:12px}
        .security-section h2 .icon{font-size:2rem}
        .security-section h3{color:#625DE5;font-size:1.3rem;margin:2rem 0 1rem}
        .security-section p{color:#4a4a6a;line-height:1.9;margin-bottom:1rem;font-size:1.05rem}
        .security-section ul{list-style:none;padding:0;margin:1.5rem 0}
        .security-section ul li{position:relative;padding-right:35px;margin-bottom:1.2rem;color:#4a4a6a;line-height:1.8}
        .security-section ul li::before{content:'✓';position:absolute;right:0;top:0;width:24px;height:24px;background:linear-gradient(135deg,#625DE5,#48B7FF);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.8rem}
        .security-card{background:linear-gradient(135deg,#F2F2FC 0%,#fff 100%);border-radius:16px;padding:30px;margin:2rem 0;border:1px solid rgba(98,93,229,.1);box-shadow:0 4px 20px rgba(0,0,0,.05)}
        .security-card h4{color:#171938;font-size:1.15rem;margin-bottom:.8rem}
        .security-card p{margin-bottom:0;font-size:1rem}
        .highlight-box{background:linear-gradient(135deg,#625DE5 0%,#48B7FF 100%);color:white;padding:25px 30px;border-radius:12px;margin:2rem 0}
        .highlight-box strong{display:block;font-size:1.1rem;margin-bottom:.5rem}
        .highlight-box p{color:rgba(255,255,255,.95);margin:0}
        .providers-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin:2rem 0}
        .provider-card{background:#F2F2FC;border-radius:12px;padding:25px;text-align:center;transition:transform .3s,box-shadow .3s}
        .provider-card:hover{transform:translateY(-5px);box-shadow:0 10px 30px rgba(98,93,229,.15)}
        .provider-card .provider-icon{font-size:2.5rem;margin-bottom:1rem}
        .provider-card h4{color:#171938;margin-bottom:.5rem}
        .provider-card p{font-size:.95rem;margin:0}
        .tips-section{background:linear-gradient(135deg,#171938 0%,#2a2d5a 100%);padding:60px 0;margin-top:60px}
        .tips-section h2{color:white;text-align:center;margin-bottom:2rem}
        .tips-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;max-width:900px;margin:0 auto;padding:0 20px}
        .tip-card{background:rgba(255,255,255,.1);backdrop-filter:blur(10px);border-radius:12px;padding:25px;border:1px solid rgba(255,255,255,.1);transition:transform .3s,background .3s}
        .tip-card:hover{transform:translateY(-5px);background:rgba(255,255,255,.15)}
        .tip-card h4{color:#48B7FF;margin-bottom:.8rem;font-size:1.1rem}
        .tip-card p{color:rgba(255,255,255,.85);font-size:.95rem;line-height:1.7;margin:0}
        .contact-cta{text-align:center;padding:60px 20px;background:#F2F2FC}
        .contact-cta h3{color:#171938;font-size:1.5rem;margin-bottom:1rem}
        .contact-cta p{color:#4a4a6a;margin-bottom:2rem}
        .divider{height:1px;background:linear-gradient(90deg,transparent,rgba(98,93,229,.3),transparent);margin:40px 0}
        @media(max-width:768px){.security-hero h1{font-size:2rem}.security-hero .subtitle{font-size:1.1rem;padding:0 20px}.security-section h2{font-size:1.5rem}.providers-grid{grid-template-columns:1fr}}
      `}</style>

      <StaticPageLayout activeNav="security">
        <section className="security-hero">
          <div className="container">
            <span className="shield-icon">🛡️</span>
            <h1>האבטחה של <span className="brand-name">ORIA</span></h1>
            <p className="subtitle">השקט הנפשי שלך, הביטחון של המטופלים</p>
          </div>
        </section>

        <section className="security-content">
          <div className="security-section">
            <p style={{ fontSize: '1.15rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
              ב-<span className="brand-name">ORIA</span>, אנחנו מבינים שהמידע הרגיש ביותר נמצא בידיים שלנו. לכן, אבטחת המידע והפרטיות הם לא רק פיצ'ר עבורנו – הם התשתית עליה בנינו את הפלטפורמה.
            </p>
          </div>

          <div className="security-section">
            <h2><span className="icon">🔒</span> הנתונים שלך - רק שלך</h2>
            <h3>הפרדה מוחלטת בלב המערכת</h3>
            <p>בניגוד למערכות רגילות, ב-<span className="brand-name">ORIA</span> כל מטפל או מטפלת נמצאים ב"אי" דיגיטלי נפרד. ההפרדה הזו מוטמעת בשכבה העמוקה ביותר של בסיס הנתונים (טכנולוגיית Row-Level Security של Neon).</p>
            <div className="highlight-box">
              <strong>מה זה אומר עבורך?</strong>
              <p>גם אם תתרחש תקלה נדירה בקוד האתר, המנגנון הזה מבטיח שהמידע שלך פיזית לא יוכל להיחשף למשתמשים אחרים.</p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="security-section">
            <h2><span className="icon">🛡️</span> הגנה בשכבות: כיפת הברזל של המידע שלך</h2>
            <p>אנחנו מפעילים מספר שכבות הגנה עצמאיות הפועלות במקביל:</p>
            {[
              { title: 'הצפנה מלאה (End-to-End)', text: 'כל התקשורת בין המחשב שלך לשרתים שלנו מוצפנת בתקנים המחמירים ביותר (HTTPS/TLS).' },
              { title: 'מגן סייבר אקטיבי', text: 'אנחנו משתמשים בשירותי Cloudflare כדי לזהות ולחסום התקפות סייבר ובוטים זדוניים עוד לפני שהם מגיעים למערכת.' },
              { title: 'כניסה מאובטחת עם Google', text: 'ניתן להתחבר ל-ORIA באמצעות חשבון הגוגל שלך, וליהנות ממנגנוני הזיהוי והאבטחה המתקדמים בעולם של גוגל.' },
              { title: 'אימות דו-שלבי (2FA) ✓', text: <span>שכבת הגנה נוספת — קוד חד-פעמי מהנייד בכל כניסה. <Link href="/features/security-2fa" style={{ color: '#625DE5', fontWeight: 600 }}>קראו עוד ←</Link></span> },
              { title: 'Audit Log — תיעוד גישות אוטומטי ✓', text: <span>כל גישה לכל תיק מתועדת: מי נכנס, מתי, מאיזה מכשיר, מה שונה. <Link href="/features/audit-logs" style={{ color: '#625DE5', fontWeight: 600 }}>קראו עוד ←</Link></span> },
            ].map((c, i) => (
              <div className="security-card" key={i}><h4>{c.title}</h4><p>{c.text}</p></div>
            ))}
          </div>

          <div className="divider"></div>

          <div className="security-section">
            <h2><span className="icon">☁️</span> איפה המידע נשמר? תשתיות הענן המובילות בעולם</h2>
            <p>המידע שלך מוגן באמצעות טכנולוגיות הענן המתקדמות ביותר, תוך הפרדה חכמה בין סוגי הנתונים:</p>
            <div className="providers-grid">
              <div className="provider-card">
                <div className="provider-icon">🗄️</div>
                <h4>בסיס הנתונים</h4>
                <p><strong>Neon & AWS</strong></p>
                <p>המידע הטקסטואלי מנוהל על גבי תשתית Neon (PostgreSQL) המאובטחת, המופעלת על שרתי AWS באירופה.</p>
              </div>
              <div className="provider-card">
                <div className="provider-icon">📁</div>
                <h4>אחסון קבצים</h4>
                <p><strong>Google Cloud Platform</strong></p>
                <p>הקבצים נשמרים על שרתי גוגל – אותה תשתית המשרתת את Gmail ו-Drive.</p>
              </div>
              <div className="provider-card">
                <div className="provider-icon">🇮🇱</div>
                <h4>תאימות לחוק הישראלי</h4>
                <p><strong>חוק הגנת הפרטיות</strong></p>
                <p>כלל הנתונים מאוחסנים ומנוהלים בהתאם לדרישות חוק הגנת הפרטיות הישראלי ותיקון 13 לחוק.</p>
              </div>
            </div>
          </div>

        </section>

        <section className="tips-section">
          <div className="container">
            <h2>💡 כמה טיפים בשבילך</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '2rem' }}>אבטחה היא מאמץ משותף. הנה מה שאפשר לעשות כדי להגביר את ההגנה:</p>
            <div className="tips-grid">
              {[
                { title: '🔐 הפעילו אימות דו-שלבי', text: 'זהו המחסום היעיל ביותר נגד גניבת זהות.' },
                { title: '🔑 בחרו סיסמה חזקה', text: 'לפחות 12 תווים, המשלבים אותיות, מספרים וסימנים.' },
                { title: '🚪 זכרו להתנתק', text: 'בסיום העבודה, במיוחד אם אתם משתמשים במחשב שאינו אישי.' },
              ].map((t, i) => (
                <div className="tip-card" key={i}><h4>{t.title}</h4><p>{t.text}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <div className="container">
            <h3>יש לכם שאלות נוספות על אבטחת המידע?</h3>
            <p>אנחנו זמינים לכל שאלה במייל או בצ'אט.</p>
            <a href="https://wa.me/972524824210" target="_blank" rel="noreferrer" className="btn btn-primary">צרו קשר</a>
          </div>
        </section>
      </StaticPageLayout>

      {/* Form modal */}
      <div className={`form-modal${showFormModal ? ' active' : ''}`} onClick={(e) => e.target === e.currentTarget && closeModal()}>
        <div className="form-modal-content">
          <button className="form-modal-close" onClick={closeModal}>&times;</button>
          <iframe ref={iframeRef} src="" frameBorder="0" allowFullScreen />
        </div>
      </div>
    </>
  );
}
