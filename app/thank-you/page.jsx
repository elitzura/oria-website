'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function ThankYouPage() {
  useEffect(() => {
    document.body.classList.remove('loading');

    // Confetti
    const colors = ['#625DE5', '#48B7FF', '#E5907A', '#FFD700', '#a598ff', '#7ee8a2'];
    const wrap = document.getElementById('confettiWrap');
    if (wrap) {
      const launch = () => {
        for (let i = 0; i < 55; i++) {
          const p = document.createElement('div');
          p.className = 'confetti-piece';
          p.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 30}%;background:${colors[Math.floor(Math.random() * colors.length)]};width:${4 + Math.random() * 8}px;height:${4 + Math.random() * 8}px;border-radius:${Math.random() > 0.5 ? '50%' : '2px'};animation-duration:${2 + Math.random() * 3}s;animation-delay:${Math.random() * 1.5}s;`;
          wrap.appendChild(p);
        }
        setTimeout(() => { wrap.innerHTML = ''; }, 6000);
      };
      setTimeout(launch, 400);
    }

    // Scroll animations
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => entry.target.classList.add('animate-in'), +delay);
          o.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in, .step-card').forEach((el) => { el.classList.add('fade-in'); obs.observe(el); });

    // Navbar scroll
    const navbar = document.querySelector('.navbar');
    const handleScroll = () => navbar?.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // Mobile menu
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const handleMenu = function () {
      document.querySelector('.nav-links')?.classList.toggle('active');
      this.classList.toggle('active');
    };
    menuBtn?.addEventListener('click', handleMenu);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      menuBtn?.removeEventListener('click', handleMenu);
    };
  }, []);

  return (
    <>
      <style>{`
        .thankyou-hero{min-height:100vh;background:linear-gradient(160deg,#171938 0%,#2a2560 55%,#625DE5 100%);display:flex;align-items:center;justify-content:center;padding:120px 1.5rem 80px;position:relative;overflow:hidden;text-align:center}
        .thankyou-hero::before{content:'';position:absolute;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(72,183,255,.15) 0%,transparent 70%);top:-100px;left:-150px;pointer-events:none}
        .thankyou-hero::after{content:'';position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(229,144,122,.12) 0%,transparent 70%);bottom:-80px;right:-100px;pointer-events:none}
        .thankyou-inner{position:relative;z-index:2;max-width:720px;margin:0 auto}
        .checkmark-circle{width:96px;height:96px;border-radius:50%;background:linear-gradient(135deg,#625DE5 0%,#48B7FF 100%);display:flex;align-items:center;justify-content:center;margin:0 auto 2rem;box-shadow:0 0 0 16px rgba(98,93,229,.15),0 0 0 32px rgba(98,93,229,.07);animation:pulseRing 2.5s ease-out infinite}
        .checkmark-circle svg{width:48px;height:48px;stroke:white;stroke-width:3;fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:60;stroke-dashoffset:60;animation:drawCheck .6s ease-out .3s forwards}
        @keyframes pulseRing{0%{box-shadow:0 0 0 0 rgba(98,93,229,.3),0 0 0 0 rgba(98,93,229,.15)}70%{box-shadow:0 0 0 20px rgba(98,93,229,0),0 0 0 40px rgba(98,93,229,0)}100%{box-shadow:0 0 0 0 rgba(98,93,229,0),0 0 0 0 rgba(98,93,229,0)}}
        @keyframes drawCheck{to{stroke-dashoffset:0}}
        .thankyou-hero h1{font-size:clamp(2rem,5vw,3rem);font-weight:800;color:#fff;line-height:1.2;margin-bottom:1.25rem}
        .thankyou-hero h1 .highlight{background:linear-gradient(90deg,#48B7FF,#a598ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .thankyou-hero .subtitle{font-size:1.2rem;color:rgba(255,255,255,.82);line-height:1.7;max-width:580px;margin:0 auto 2.5rem}
        .badge-pilot{display:inline-flex;align-items:center;gap:.5rem;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:rgba(255,255,255,.9);font-size:.9rem;font-weight:600;padding:.5rem 1.25rem;border-radius:100px;margin-bottom:2rem;backdrop-filter:blur(8px)}
        .next-steps{padding:80px 1.5rem;background:#fff}
        .steps-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.5rem;margin-top:3rem}
        .step-card{background:#F2F2FC;border-radius:16px;padding:2rem 1.5rem;transition:transform .2s,box-shadow .2s}
        .step-card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(98,93,229,.15)}
        .step-number{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#625DE5,#48B7FF);color:white;font-size:1.1rem;font-weight:800;display:flex;align-items:center;justify-content:center;margin-bottom:1rem;font-family:'Montserrat',sans-serif}
        .step-card h3{font-size:1.1rem;font-weight:700;color:#171938;margin-bottom:.6rem}
        .step-card p{font-size:.95rem;color:#666;line-height:1.6}
        .whatsapp-section{background:#F2F2FC;padding:64px 1.5rem;text-align:center}
        .whatsapp-card{background:#fff;border-radius:20px;padding:2.5rem 2rem;max-width:560px;margin:0 auto;box-shadow:0 8px 30px rgba(98,93,229,.1)}
        .whatsapp-card .icon-wrap{font-size:3rem;margin-bottom:1rem;display:block}
        .whatsapp-card h3{font-size:1.4rem;font-weight:700;color:#171938;margin-bottom:.75rem}
        .whatsapp-card p{color:#666;line-height:1.65;margin-bottom:1.5rem}
        .btn-whatsapp{display:inline-flex;align-items:center;gap:.6rem;background:#25D366;color:white;font-size:1rem;font-weight:700;padding:.85rem 2rem;border-radius:100px;text-decoration:none;transition:background .2s,transform .2s;box-shadow:0 4px 16px rgba(37,211,102,.35)}
        .btn-whatsapp:hover{background:#1ebe5d;transform:translateY(-2px)}
        .btn-whatsapp svg{width:22px;height:22px;fill:white;flex-shrink:0}
        .proof-section{padding:72px 1.5rem;background:#fff}
        .proof-quote{max-width:680px;margin:0 auto;text-align:center}
        .proof-quote blockquote{font-size:1.25rem;font-weight:500;color:#171938;line-height:1.7;font-style:italic;margin-bottom:1.5rem;position:relative;padding:0 1.5rem}
        .proof-quote blockquote::before{content:'"';font-size:5rem;line-height:0;color:#625DE5;opacity:.15;position:absolute;top:1rem;right:-.25rem;font-family:Georgia,serif}
        .proof-author{display:flex;align-items:center;justify-content:center;gap:.75rem}
        .proof-author img{width:48px;height:48px;border-radius:50%;object-fit:cover}
        .proof-author-info{text-align:right}
        .proof-author-name{font-weight:700;color:#171938;font-size:.95rem}
        .proof-author-role{font-size:.85rem;color:#888}
        .back-section{background:#171938;padding:56px 1.5rem;text-align:center}
        .back-section h2{font-size:1.6rem;color:white;font-weight:700;margin-bottom:1.5rem}
        .back-section p{color:rgba(255,255,255,.7);margin-bottom:2rem;max-width:480px;margin-left:auto;margin-right:auto}
        .confetti-wrap{position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none;overflow:hidden;z-index:1}
        .confetti-piece{position:absolute;width:8px;height:8px;border-radius:2px;opacity:0;animation:confettiFall linear forwards}
        @keyframes confettiFall{0%{opacity:1;transform:translateY(-20px) rotate(0deg)}100%{opacity:0;transform:translateY(120vh) rotate(720deg)}}
        @media(max-width:640px){.steps-grid{grid-template-columns:1fr}.thankyou-hero{padding:100px 1rem 60px}}
      `}</style>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-container">
          <Link href="/" className="logo">
            <img src="/logos/3.png" alt="ORIA AI" className="logo-img" />
          </Link>
          <ul className="nav-links">
            <li><Link href="/#solution">הפתרון</Link></li>
            <li><Link href="/#pricing">מחירים</Link></li>
            <li><Link href="/security">אבטחה</Link></li>
            <li><Link href="/" className="btn btn-outline">חזרה לדף הבית</Link></li>
          </ul>
          <button className="mobile-menu-btn" aria-label="תפריט"><span></span><span></span><span></span></button>
        </div>
      </nav>

      <section className="thankyou-hero">
        <div className="confetti-wrap" id="confettiWrap"></div>
        <div className="thankyou-inner">
          <div className="checkmark-circle">
            <svg viewBox="0 0 52 52"><polyline points="14,27 22,36 38,18" /></svg>
          </div>
          <div className="badge-pilot"><span>🚀</span><span>מצטרף לפיילוט ORIA AI</span></div>
          <h1>ברוכים הבאים<br /><span className="highlight">לקבוצת החלוצים</span></h1>
          <p className="subtitle">ההרשמה שלכם התקבלה בהצלחה. אנחנו שמחים שבחרתם להיות חלק מהקבוצה הבונה את עתיד הניהול הקליני בישראל.</p>
          <Link href="/features" className="btn btn-primary btn-large">ראו מה כבר מוכן לכם</Link>
          <div style={{ marginTop: '1rem' }}>
            <a href="https://wa.me/972524824210" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', textDecoration: 'underline', textUnderlineOffset: '3px' }}>או דברו איתנו בוואטסאפ</a>
          </div>
        </div>
      </section>

      <section className="next-steps">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">מה קורה עכשיו?</p>
            <h2>השלבים הבאים בדרך<br /><span className="highlight">לשקט הנפשי בקליניקה</span></h2>
          </div>
          <div className="steps-grid">
            {[
              { n: 1, title: 'אנחנו יוצרים קשר', text: 'אביעד יצור איתכם קשר אישי בוואטסאפ תוך 48 שעות לתיאום שיחת היכרות קצרה.', delay: 0 },
              { n: 2, title: 'שיחת היכרות', text: 'נבין את הצרכים הספציפיים שלכם ונראה לכם בדיוק איך ORIA תיכנס לשגרת העבודה שלכם.', delay: 120 },
              { n: 3, title: 'גישה ראשונה למערכת', text: 'תקבלו גישה מוקדמת וליווי צמוד בהטמעה – ממש מותאם לקליניקה שלכם.', delay: 240 },
              { n: 4, title: 'אתם מעצבים את המוצר', text: 'הפידבק שלכם עובד ישירות למפת הדרכים. אתם לא רק משתמשים – אתם שותפים.', delay: 360 },
            ].map((s) => (
              <div className="step-card fade-in" data-delay={s.delay} key={s.n}>
                <div className="step-number">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="whatsapp-section">
        <div className="container">
          <div className="whatsapp-card">
            <span className="icon-wrap">💬</span>
            <h3>יש לכם שאלות? נשמח לשמוע</h3>
            <p>אביעד זמין אישית בוואטסאפ לכל שאלה, הסתייגות או סתם כדי להגיד שלום. אנחנו בונים את ORIA עם המטפלים, לא בשבילם.</p>
            <a href="https://wa.me/972524824210" target="_blank" rel="noreferrer" className="btn-whatsapp">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              שלחו לנו הודעה
            </a>
          </div>
        </div>
      </section>

      <section className="proof-section">
        <div className="container">
          <div className="proof-quote fade-in">
            <blockquote>אני רוצה להגיע לכל פגישה בחדות, אבל ארגון הידע בין לבין גוזל ממני המון כוח. ORIA נותנת לי את הזמן הזה חזרה.</blockquote>
            <div className="proof-author">
              <img src="/personas/מיכל.png" alt="מיכל" />
              <div className="proof-author-info">
                <div className="proof-author-name">מיכל</div>
                <div className="proof-author-role">פסיכולוגית קלינית, משתתפת פיילוט</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="back-section">
        <div className="container">
          <h2>רוצים לשתף קולגה?</h2>
          <p>יש לכם עמית שגם הוא ייהנה מ-ORIA? שלחו לו את הקישור – נשארו מקומות ספורים בפיילוט.</p>
          <Link href="/" className="btn btn-primary" style={{ marginLeft: '1rem' }}>חזרה לדף הבית</Link>
          <a href="https://wa.me/?text=%D7%94%D7%99%D7%99%2C%20%D7%A9%D7%9E%D7%A2%D7%AA%D7%9D%20%D7%A2%D7%9C%20ORIA%20AI%3F" target="_blank" rel="noreferrer" className="btn btn-outline">שתפו עמית בוואטסאפ</a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Link href="/" className="logo"><img src="/logos/3.png" alt="ORIA AI" className="logo-img" /></Link>
              <p>חוזרים ללב הטיפול. את השאר תשאירו ל-ORIA</p>
            </div>
            <div className="footer-links">
              <div className="footer-col"><h4>המוצר</h4><ul><li><Link href="/#solution">תכונות</Link></li><li><Link href="/#pricing">מחירים</Link></li></ul></div>
              <div className="footer-col"><h4>החברה</h4><ul><li><Link href="/about">אודות</Link></li><li><a href="https://wa.me/972524824210" target="_blank" rel="noreferrer">צור קשר</a></li></ul></div>
              <div className="footer-col"><h4>משפטי</h4><ul><li><Link href="/privacy">מדיניות פרטיות</Link></li><li><Link href="/security">אבטחת מידע</Link></li></ul></div>
            </div>
          </div>
          <div className="footer-bottom"><p>© 2025 <span className="brand-name">ORIA</span> AI. כל הזכויות שמורות.</p></div>
        </div>
      </footer>
    </>
  );
}
