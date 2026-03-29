'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function ThankYouWaitlistPage() {
  useEffect(() => {
    document.body.classList.remove('loading');
    // Confetti
    const colors = ['#625DE5','#48B7FF','#E5907A','#FFD700','#a598ff','#7ee8a2'];
    const wrap = document.getElementById('confettiWrap');
    if (wrap) {
      setTimeout(() => {
        for (let i = 0; i < 50; i++) {
          const p = document.createElement('div');
          p.className = 'confetti-piece';
          p.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*25}%;background:${colors[Math.floor(Math.random()*colors.length)]};width:${4+Math.random()*7}px;height:${4+Math.random()*7}px;border-radius:${Math.random()>.5?'50%':'2px'};animation-duration:${2.5+Math.random()*3}s;animation-delay:${Math.random()*1.2}s;`;
          wrap.appendChild(p);
        }
        setTimeout(() => { wrap.innerHTML = ''; }, 6000);
      }, 400);
    }
    // Animations
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(e => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add('animate-in'), +e.target.dataset.delay || 0); o.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in,.expect-card').forEach(el => { el.classList.add('fade-in'); obs.observe(el); });
    // Navbar
    const navbar = document.querySelector('.navbar');
    const handleScroll = () => navbar?.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const handleMenu = function() { document.querySelector('.nav-links')?.classList.toggle('active'); this.classList.toggle('active'); };
    menuBtn?.addEventListener('click', handleMenu);
    return () => { window.removeEventListener('scroll', handleScroll); menuBtn?.removeEventListener('click', handleMenu); };
  }, []);

  return (
    <>
      <style>{`
        .thankyou-hero{min-height:100vh;background:linear-gradient(160deg,#1a1650 0%,#2e2880 50%,#48B7FF 100%);display:flex;align-items:center;justify-content:center;padding:120px 1.5rem 80px;position:relative;overflow:hidden;text-align:center}
        .thankyou-hero::before{content:'';position:absolute;width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,rgba(72,183,255,.18) 0%,transparent 70%);top:-150px;right:-200px;pointer-events:none}
        .thankyou-hero::after{content:'';position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(98,93,229,.2) 0%,transparent 70%);bottom:-100px;left:-120px;pointer-events:none}
        .thankyou-inner{position:relative;z-index:2;max-width:680px;margin:0 auto}
        .bell-wrap{width:100px;height:100px;border-radius:50%;background:rgba(255,255,255,.12);border:2px solid rgba(255,255,255,.25);display:flex;align-items:center;justify-content:center;margin:0 auto 2rem;font-size:3rem;animation:bellRing 1.2s cubic-bezier(.36,.07,.19,.97) .3s 2 both}
        @keyframes bellRing{0%{transform:rotate(0)}10%{transform:rotate(12deg)}20%{transform:rotate(-10deg)}30%{transform:rotate(8deg)}40%{transform:rotate(-6deg)}50%{transform:rotate(0)}100%{transform:rotate(0)}}
        .badge-waitlist{display:inline-flex;align-items:center;gap:.5rem;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.25);color:rgba(255,255,255,.92);font-size:.9rem;font-weight:600;padding:.5rem 1.25rem;border-radius:100px;margin-bottom:1.75rem;backdrop-filter:blur(8px)}
        .thankyou-hero h1{font-size:clamp(2rem,5vw,3rem);font-weight:800;color:#fff;line-height:1.2;margin-bottom:1.25rem}
        .thankyou-hero h1 .highlight{background:linear-gradient(90deg,#fff,rgba(72,183,255,.85));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .thankyou-hero .subtitle{font-size:1.15rem;color:rgba(255,255,255,.82);line-height:1.75;max-width:560px;margin:0 auto 2.5rem}
        .promise-box{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:16px;padding:1.5rem 2rem;margin:0 auto 2rem;max-width:480px;backdrop-filter:blur(10px)}
        .promise-box p{color:rgba(255,255,255,.9);font-size:1rem;line-height:1.7;margin:0}
        .promise-box strong{color:#fff}
        .hero-actions{display:flex;flex-direction:column;align-items:center;gap:1rem}
        .hero-actions .btn{min-width:260px}
        .back-link{color:rgba(255,255,255,.6);font-size:.9rem;text-decoration:underline;text-underline-offset:3px;cursor:pointer;background:none;border:none;transition:color .2s}
        .back-link:hover{color:rgba(255,255,255,.9)}
        .expect-section{padding:80px 1.5rem;background:#fff}
        .expect-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.5rem;margin-top:3rem}
        .expect-card{background:#F2F2FC;border-radius:16px;padding:2rem 1.5rem;text-align:center;transition:transform .25s,box-shadow .25s}
        .expect-card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(98,93,229,.15)}
        .expect-icon{font-size:2.5rem;margin-bottom:1rem;display:block}
        .expect-card h3{font-size:1.05rem;font-weight:700;color:#171938;margin-bottom:.5rem}
        .expect-card p{font-size:.9rem;color:#666;line-height:1.6}
        .share-section{padding:72px 1.5rem;background:#F2F2FC;text-align:center}
        .share-card{background:#fff;border-radius:20px;padding:2.5rem 2rem;max-width:560px;margin:0 auto;box-shadow:0 8px 30px rgba(98,93,229,.1)}
        .share-card .icon-wrap{font-size:3rem;margin-bottom:1rem;display:block}
        .share-card h3{font-size:1.35rem;font-weight:700;color:#171938;margin-bottom:.75rem}
        .share-card p{color:#666;line-height:1.65;margin-bottom:1.5rem;font-size:.95rem}
        .share-btns{display:flex;gap:.75rem;justify-content:center;flex-wrap:wrap}
        .btn-whatsapp{display:inline-flex;align-items:center;gap:.6rem;background:#25D366;color:white;font-size:.95rem;font-weight:700;padding:.8rem 1.75rem;border-radius:100px;text-decoration:none;transition:background .25s,transform .25s;box-shadow:0 4px 16px rgba(37,211,102,.3)}
        .btn-whatsapp:hover{background:#1ebe5d;transform:translateY(-2px)}
        .btn-whatsapp svg{width:20px;height:20px;fill:white;flex-shrink:0}
        .back-strip{background:#171938;padding:52px 1.5rem;text-align:center}
        .back-strip h2{font-size:1.5rem;color:#fff;font-weight:700;margin-bottom:.75rem}
        .back-strip p{color:rgba(255,255,255,.65);margin-bottom:2rem;max-width:440px;margin-left:auto;margin-right:auto}
        .confetti-wrap{position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none;overflow:hidden;z-index:1}
        .confetti-piece{position:absolute;opacity:0;animation:confettiFall linear forwards}
        @keyframes confettiFall{0%{opacity:1;transform:translateY(-20px) rotate(0deg)}100%{opacity:0;transform:translateY(110vh) rotate(720deg)}}
        @media(max-width:640px){.expect-grid{grid-template-columns:1fr}.thankyou-hero{padding:100px 1rem 60px}.hero-actions .btn{min-width:auto;width:100%;max-width:320px}}
      `}</style>

      <nav className="navbar">
        <div className="container nav-container">
          <Link href="/" className="logo"><img src="/logos/3.png" alt="ORIA AI" className="logo-img" /></Link>
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
          <div className="bell-wrap">🔔</div>
          <div className="badge-waitlist"><span>✨</span><span>נרשמתם לרשימת ההמתנה של ORIA AI</span></div>
          <h1>אתם בפנים!<br /><span className="highlight">נעדכן אתכם ראשונים</span></h1>
          <p className="subtitle">תודה שהאמנתם בנו. כשהאפליקציה תיפתח לציבור הרחב - אתם תהיו הראשונים לדעת עליה. מבטיחים לא לאכזב.</p>
          <div className="promise-box">
            <p>📬 נשלח לכם הודעה ישירה ברגע שמתחילים.<br /><strong>אין ספאם, אין בולשיט - רק עדכון אחד שכדאי לחכות לו.</strong></p>
          </div>
          <div className="hero-actions">
            <a href="https://wa.me/972524824210" target="_blank" rel="noreferrer" className="btn btn-primary btn-large">💬 דברו איתנו בוואטסאפ</a>
            <Link href="/" className="back-link">חזרה לדף הבית</Link>
          </div>
        </div>
      </section>

      <section className="expect-section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">מה קורה עכשיו?</p>
            <h2>מה מצפה לכם<br /><span className="highlight">כחברי רשימת ההמתנה</span></h2>
          </div>
          <div className="expect-grid">
            <div className="expect-card fade-in" data-delay="0"><span className="expect-icon">🔔</span><h3>עדכון בהשקה</h3><p>תקבלו הודעה ישירה ברגע שהאפליקציה נפתחת לציבור. לפני כולם.</p></div>
            <div className="expect-card fade-in" data-delay="120"><span className="expect-icon">🎁</span><h3>הטבת השקה</h3><p>חברי רשימת ההמתנה יקבלו הטבה מיוחדת בהרשמה - תשארו קרובים.</p></div>
          </div>
        </div>
      </section>

      <section className="share-section">
        <div className="container">
          <div className="share-card">
            <span className="icon-wrap">🤝</span>
            <h3>יש לכם קולגה שגם הוא יאהב את זה?</h3>
            <p>ORIA AI נבנית עבור המטפלים שרוצים לחזור ללב הטיפול.<br />שתפו עמית שגם הוא יוכל להצטרף לרשימה.</p>
            <div className="share-btns">
              <a href="https://wa.me/?text=%D7%94%D7%99%D7%99%2C%20%D7%A9%D7%9E%D7%A2%D7%AA%D7%9D%20%D7%A2%D7%9C%20ORIA%20AI%3F%20%D7%A0%D7%A8%D7%A9%D7%9E%D7%AA%D7%99%20%D7%9C%D7%A8%D7%A9%D7%99%D7%9E%D7%AA%20%D7%94%D7%94%D7%9E%D7%AA%D7%A0%D7%94%3A%20https%3A%2F%2Fpilot.oriamind.ai" target="_blank" rel="noreferrer" className="btn-whatsapp">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                שתפו בוואטסאפ
              </a>
              <Link href="/" className="btn btn-outline">חזרה לדף הבית</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="back-strip">
        <div className="container">
          <h2>בינתיים, רוצים לדעת עוד?</h2>
          <p>גלו איך ORIA AI עובדת וכיצד היא יכולה לשנות את שגרת הקליניקה שלכם.</p>
          <Link href="/#solution" className="btn btn-primary" style={{ marginLeft: '0.75rem' }}>גלו את הפתרון</Link>
          <a href="https://wa.me/972524824210" target="_blank" rel="noreferrer" className="btn btn-outline">דברו איתנו</a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand"><Link href="/" className="logo"><img src="/logos/3.png" alt="ORIA AI" className="logo-img" /></Link><p>חוזרים ללב הטיפול. את השאר תשאירו ל-ORIA</p></div>
            <div className="footer-links">
              <div className="footer-col"><h4>המוצר</h4><ul><li><Link href="/#solution">תכונות</Link></li><li><Link href="/features">מה חדש</Link></li><li><Link href="/#pricing">מחירים</Link></li></ul></div>
              <div className="footer-col"><h4>החברה</h4><ul><li><Link href="/about">אודות</Link></li><li><a href="https://wa.me/972524824210" target="_blank" rel="noreferrer">צור קשר</a></li><li><a href="tel:+972524824210">📞 052-4824210</a></li></ul></div>
              <div className="footer-col"><h4>משפטי</h4><ul><li><Link href="/privacy">מדיניות פרטיות</Link></li><li><Link href="/security">אבטחת מידע</Link></li><li><Link href="/terms">תנאי שימוש</Link></li><li><Link href="/regulations">תקנון</Link></li></ul></div>
            </div>
          </div>
          <div className="footer-bottom"><p>© 2025 <span className="brand-name">ORIA</span> AI. כל הזכויות שמורות.</p></div>
        </div>
      </footer>
    </>
  );
}
