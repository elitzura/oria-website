'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [paymentError, setPaymentError] = useState(false);
  const exitIntentShownRef = useRef(false);
  const pageLoadTimeRef = useRef(Date.now());

  useEffect(() => {
    // Remove loading state
    document.body.classList.remove('loading');

    // Failed payment redirect
    const params = new URLSearchParams(window.location.search);
    if (params.get('failed') === '1') {
      setPaymentError(true);
      history.replaceState(null, '', window.location.pathname + window.location.hash);
    }

    // Navbar scroll
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.querySelectorAll('a[href^="#"]').forEach((a) =>
      a.addEventListener('click', handleAnchorClick)
    );

    // Announcement bar → push navbar down
    const bar = document.getElementById('announcementBar');
    const navbar = document.querySelector('.navbar');
    if (bar && navbar) {
      if ('ResizeObserver' in window) {
        const ro = new ResizeObserver((entries) => {
          navbar.style.top = entries[0].contentRect.height + 'px';
        });
        ro.observe(bar);
      } else {
        navbar.style.top = bar.offsetHeight + 'px';
      }
    }

    // Scroll animations
    const setupAnimations = () => {
      const obs = new IntersectionObserver(
        (entries, o) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const delay = entry.target.dataset.delay || 0;
              setTimeout(() => entry.target.classList.add('animate-in'), +delay);
              o.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      document.querySelectorAll('.fade-in,.slide-up,.slide-right,.scale-in').forEach((el) => obs.observe(el));
      document.querySelectorAll('.section-header').forEach((el) => { el.classList.add('fade-in'); obs.observe(el); });
      document.querySelectorAll('.pain-card').forEach((el, i) => { el.classList.add('slide-up'); el.dataset.delay = i * 150; obs.observe(el); });
      document.querySelectorAll('.feature-card').forEach((el, i) => { el.classList.add('scale-in'); el.dataset.delay = i * 100; obs.observe(el); });
      document.querySelectorAll('.pricing-card').forEach((el, i) => { el.classList.add('slide-up'); el.dataset.delay = i * 150; obs.observe(el); });
      document.querySelectorAll('.comparison-row').forEach((el, i) => { el.classList.add('slide-right'); el.dataset.delay = i * 100; obs.observe(el); });
      document.querySelectorAll('.badge').forEach((el, i) => { el.classList.add('scale-in'); el.dataset.delay = i * 100; obs.observe(el); });
      document.querySelectorAll('.section-cta').forEach((el) => { el.dataset.delay = 300; obs.observe(el); });
      document.querySelectorAll('.floating-card').forEach((el, i) => { el.classList.add('scale-in'); el.dataset.delay = 500 + i * 200; obs.observe(el); });
      const persona = document.querySelector('.oria-persona');
      if (persona) { persona.classList.add('scale-in'); persona.dataset.delay = 300; obs.observe(persona); }
      const ctaContent = document.querySelector('.final-cta .cta-content');
      if (ctaContent) { ctaContent.classList.add('fade-in'); obs.observe(ctaContent); }
    };
    if ('requestIdleCallback' in window) {
      requestIdleCallback(setupAnimations, { timeout: 2000 });
    } else {
      requestAnimationFrame(() => setTimeout(setupAnimations, 0));
    }

    // Parallax
    const parallaxEls = document.querySelectorAll('.mirror-bg-shape');
    let ticking = false;
    const handleParallax = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          parallaxEls.forEach((el) => { el.style.transform = `translateY(${scrolled * 0.3}px)`; });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleParallax, { passive: true });

    // Exit intent – desktop
    const handleMouseLeave = (e) => {
      if (e.clientY <= 5) triggerExitIntent();
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    // Exit intent – mobile
    let lastScrollY = 0;
    let scrollUpStart = null;
    const handleScrollExit = () => {
      const currentY = window.scrollY;
      if (currentY < lastScrollY) {
        if (scrollUpStart === null) scrollUpStart = lastScrollY;
        if (currentY < 100 && scrollUpStart - currentY > 300) {
          triggerExitIntent();
          scrollUpStart = null;
        }
      } else {
        scrollUpStart = null;
      }
      lastScrollY = currentY;
    };
    window.addEventListener('scroll', handleScrollExit, { passive: true });

    // Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowExitIntent(false);
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleParallax);
      window.removeEventListener('scroll', handleScrollExit);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const triggerExitIntent = () => {
    if (exitIntentShownRef.current) return;
    if (sessionStorage.getItem('exitIntentShown')) return;
    if (Date.now() - pageLoadTimeRef.current < 4000) return;
    exitIntentShownRef.current = true;
    sessionStorage.setItem('exitIntentShown', 'true');
    setShowExitIntent(true);
  };

  const closeExitIntent = () => {
    setShowExitIntent(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      {/* Payment error banner */}
      {paymentError && (
        <div className="payment-error-banner visible">
          <span>⚠️ התשלום לא הושלם. אנא נסו שוב או השתמשו בכרטיס אחר.</span>
          <button className="close-btn" onClick={() => setPaymentError(false)} aria-label="סגור">✕</button>
        </div>
      )}

      {/* Announcement bar */}
      {showAnnouncement && (
        <div id="announcementBar" className="announcement-bar">
          <div className="announcement-inner">
            <span className="announcement-dot"></span>
            <span>ORIA AI זמינה עכשיו — בחרו מסלול והתחילו היום</span>
            <button className="announcement-cta" onClick={() => { setShowAnnouncement(false); document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' }); }}>הצטרפו עכשיו ←</button>
            <button className="announcement-close" onClick={() => setShowAnnouncement(false)} aria-label="סגור">✕</button>
          </div>
        </div>
      )}

      {/* Exit intent modal */}
      {showExitIntent && (
        <div className="exit-intent-modal active" onClick={(e) => e.target === e.currentTarget && closeExitIntent()}>
          <div className="exit-intent-content">
            <button className="exit-intent-close" onClick={closeExitIntent} aria-label="סגור">&times;</button>
            <div className="exit-intent-emoji">🚀</div>
            <h2 className="exit-intent-title">רגע לפני שאתם הולכים...</h2>
            <p className="exit-intent-subtitle"><span className="brand-name">ORIA AI</span> — התחילו לנהל את הקליניקה בחכמה!</p>
            <p className="exit-intent-body">בחרו מסלול עכשיו — FREEMIUM חינם לגמרי, ללא כרטיס אשראי.</p>
            <div className="exit-intent-actions">
              <Link href="/pricing" className="btn btn-primary" onClick={closeExitIntent}>ראו את המסלולים ←</Link>
              <button className="exit-intent-dismiss" onClick={closeExitIntent}>לא תודה</button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`navbar${navbarScrolled ? ' scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo">
            <picture>
              <source srcSet="/logos/3.webp" type="image/webp" />
              <img src="/logos/3.png" alt="ORIA AI" className="logo-img" width="240" height="240" decoding="async" />
            </picture>
          </a>
          <ul className={`nav-links${mobileMenuOpen ? ' active' : ''}`}>
            <li><a href="#solution">הפתרון</a></li>
            <li><Link href="/features">מה חדש</Link></li>
            <li><a href="#pricing">מחירים</a></li>
            <li><Link href="/security">אבטחה</Link></li>
            <li>
              <Link href="/pricing" className="btn btn-outline">התחילו עכשיו</Link>
            </li>
          </ul>
          <button className={`mobile-menu-btn${mobileMenuOpen ? ' active' : ''}`} aria-label="תפריט" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container hero-container">
            <div className="hero-content">
              <h1>הטיפול שלכם.<br /><span className="highlight">הבינה של <span className="brand-name">ORIA</span>.</span></h1>
              <p className="hero-subtitle">אנחנו בונים עבורכם זיכרון מקצועי חכם: המערכת שזוכרת, מסכמת ומארגנת עבורכם את כל מה שקורה בטיפול.</p>
              <p className="hero-subtitle">בואו לעצב יחד איתנו נבחרת של סוכני AI שמבינים לעומק את השפה הטיפולית, משחררים אתכם משעות של תיעוד ושומרים עבורכם על כל תובנה ורצף טיפולי.</p>
              <p className="hero-subtitle"><strong>ORIA AI זמינה עכשיו.</strong> בחרו מסלול והתחילו לנהל את הקליניקה בחכמה — FREEMIUM חינם לגמרי.</p>
              <div className="hero-cta">
                <Link href="/pricing" className="btn btn-primary btn-large">בחרו מסלול עכשיו ←</Link>
              </div>
              <p className="hero-disclaimer">FREEMIUM חינם לתמיד. ביטול מסלול בתשלום בכל עת, ללא התחייבות.</p>
            </div>
            <div className="hero-visual">
              <div className="hero-image">
                <div className="floating-card card-1"><div className="card-icon">📋</div><div className="card-text">סיכום פגישה נוצר</div></div>
                <div className="floating-card card-2"><div className="card-icon">🧠</div><div className="card-text">תובנה חדשה זוהתה</div></div>
                <div className="floating-card card-3"><div className="card-icon">✓</div><div className="card-text">המטופל מוכן לפגישה</div></div>
                <div className="oria-persona">
                  <picture>
                    <source srcSet="/personas/ORIAAI2.webp" type="image/webp" />
                    <img src="/personas/ORIAAI2.png" alt="ORIA AI - המוח השני שלך" fetchPriority="high" decoding="sync" width="480" height="402" />
                  </picture>
                  <div className="persona-glow"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-wave">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path d="M0,60 C360,120 720,0 1440,60 L1440,120 L0,120 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* Pain Points */}
        <section className="mirror-section">
          <div className="mirror-bg-shape"></div>
          <div className="container">
            <div className="section-header">
              <p className="section-eyebrow">האם זה מרגיש לכם מוכר?</p>
              <h2>אתם נותנים את הנשמה בטיפול.<br /><span className="highlight">מי דואג לכם כשאתם יוצאים מהחדר?</span></h2>
            </div>
            <div className="pain-points-wrapper">
              <div className="pain-card">
                <div className="pain-number">01</div>
                <div className="pain-content">
                  <h3>העבודה השקופה</h3>
                  <p>היום מסתיים, המשימות לא. במקום לנוח, את מוצאת את עצמך משחזרת פגישות מאוחר בלילה. המאמץ לתעד הכל כשהעייפות מצטברת הופך למטלה כבדה.</p>
                  <div className="pain-quote">
                    <div className="quote-avatar">
                      <picture><source srcSet="/personas/אורלי.webp" type="image/webp" /><img src="/personas/אורלי.png" alt="אורלי" loading="lazy" decoding="async" width="120" height="101" /></picture>
                    </div>
                    <div className="quote-content">
                      <span>במקום לסיים את היום, אני שוב מול המחשב בלילה. זה הרבה יותר מעייף ממה שזה אמור להיות.</span>
                      <div className="quote-author">- אורלי, קואצ'רית</div>
                    </div>
                  </div>
                </div>
                <div className="pain-line"></div>
              </div>
              <div className="pain-card">
                <div className="pain-number">02</div>
                <div className="pain-content">
                  <h3>המאמץ לשמור על הרצף</h3>
                  <p>להחזיק את כל הקצוות בראש. כשהמידע מפוזר בין מחברות לזיכרון, קשה לשלוט ברצף הטיפולי. המאמץ לזכור בדיוק איפה עצרתם גוזל ממך אנרגיה יקרה.</p>
                  <div className="pain-quote">
                    <div className="quote-avatar">
                      <picture><source srcSet="/personas/מיכל.webp" type="image/webp" /><img src="/personas/מיכל.png" alt="מיכל" loading="lazy" decoding="async" width="120" height="101" /></picture>
                    </div>
                    <div className="quote-content">
                      <span>אני רוצה להגיע לכל פגישה בחדות, אבל ארגון הידע בין לבין גוזל ממני המון כוח.</span>
                      <div className="quote-author">- מיכל, פסיכולוגית קלינית</div>
                    </div>
                  </div>
                </div>
                <div className="pain-line"></div>
              </div>
              <div className="pain-card">
                <div className="pain-number">03</div>
                <div className="pain-content">
                  <h3>הפער הטכנולוגי</h3>
                  <p>העולם מתקדם, אבל הקליניקה מאחור. בעוד שהטכנולוגיה כבר מזמן מייעלת ענפים אחרים, הניהול הקליני עדיין מרגיש כמו הישרדות עם כלים מיושנים.</p>
                  <div className="pain-quote">
                    <div className="quote-avatar">
                      <picture><source srcSet="/personas/דניאל.webp" type="image/webp" /><img src="/personas/דניאל.png" alt="דניאל" loading="lazy" decoding="async" width="120" height="101" /></picture>
                    </div>
                    <div className="quote-content">
                      <span>אני שומע על מהפכת ה-AI ומרגיש תקוע. אני רוצה כלים שיעבדו בשבילי, לא להילחם בשיטות הישנות.</span>
                      <div className="quote-author">- דניאל, מטפל CBT</div>
                    </div>
                  </div>
                </div>
                <div className="pain-line"></div>
              </div>
            </div>
            <div className="section-cta fade-in">
              <Link href="/pricing" className="btn btn-primary">ראו את המסלולים ←</Link>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section id="solution" className="solution-section">
          <div className="container">
            <div className="section-header">
              <h2>מה בנינו ב-<span className="brand-name">ORIA</span>?</h2>
              <p className="section-subtitle">פיצ'רים שנולדו מהקשבה למטפלים - כל אחד פותר כאב אמיתי שקורה כל יום בקליניקה.</p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon emoji-icon">✍️</div>
                <h3>תיעוד אוטומטי (בלי לאבד את הקול שלכם)</h3>
                <p>הופכים הקלטה או ראשי פרקים לסיכום פגישה מסודר ומקצועי תוך שניות. אתם מספקים את התוכן הקליני – המערכת דואגת לארגון ולניסוח.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon emoji-icon">🤖</div>
                <h3>סוכני AI בבנייה אישית</h3>
                <p>בואו לעצב את "סוכני העבודה" שלכם. אתם מגדירים איך המערכת תסכם עבורכם, מה היא תדגיש ואיך היא תארגן את המידע כדי שיתאים בדיוק לשיטת העבודה שלכם.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon emoji-icon">⚡</div>
                <h3>מוכנות לפגישה ב-30 שניות</h3>
                <p>ריענון זיכרון מהיר ומדויק על ציר זמן חכם: איפה עצרתם בפעם הקודמת ומה דורש מעקב. מגיעים לכל פגישה ממוקדים ונוכחים, בלי לנבור בדפים.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon emoji-icon">🔄</div>
                <h3>ניהול קליני מלא (All-in-One)</h3>
                <p>שקט נפשי בזרימה אחת: תיעוד טיפולי, יומן, גבייה וחשבוניות – הכל מחובר במקום אחד. שום דבר לא נופל בין הכיסאות.</p>
              </div>
            </div>
            <div className="section-cta fade-in">
              <Link href="/features" className="btn btn-outline" style={{ marginLeft: '1rem' }}>ראו את כל הפיצ'רים</Link>
              <Link href="/pricing" className="btn btn-primary">ראו את המסלולים ←</Link>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section id="why-oria" className="comparison-section">
          <div className="container">
            <div className="section-header">
              <h2>למה מטפלים בוחרים ב-<span className="brand-name">ORIA</span> AI?</h2>
            </div>
            <div className="comparison-table">
              <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '2rem', fontWeight: 500 }}>בזמן שחברות גדולות נותנות לכם מוצר 'מדף' קשיח, ב-ORIA אתם הקול שקובע איך המערכת תיראה מחר.</p>
              <div className="comparison-header">
                <div className="comparison-col old">הניהול הישן</div>
                <div className="comparison-col new">הניהול של <span className="brand-name">ORIA</span> AI</div>
              </div>
              {[
                { old: { title: 'התיעוד הוא נטל:', text: '"חייבים" לכתוב סיכום בסוף היום.' }, new: { title: 'התיעוד הוא נכס:', text: 'המידע עובד בשבילכם ונגיש לכם תמיד.' } },
                { old: { title: 'הראש תמיד עמוס:', text: 'דאגה שמא פרט חשוב יישכח.' }, new: { title: 'שקט קוגניטיבי:', text: 'המוח השני זוכר הכל, הראש פנוי לטיפול.' } },
                { old: { title: 'פיזור וסרבול:', text: 'המידע נמצא ביומן, במחברת ובקבצים.' }, new: { title: 'סדר הוליסטי:', text: 'מקום אחד שמרכז את הטיפול ואת המנהלה.' } },
              ].map((row, i) => (
                <div className="comparison-row" key={i}>
                  <div className="comparison-col old"><span className="icon-old">✗</span><div><strong>{row.old.title}</strong><p>{row.old.text}</p></div></div>
                  <div className="comparison-col new"><span className="icon-new">✓</span><div><strong>{row.new.title}</strong><p>{row.new.text}</p></div></div>
                </div>
              ))}
            </div>
            <div className="section-cta fade-in">
              <a href="#pricing" className="btn btn-white">ראו את המחירים</a>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="trust-section">
          <div className="container">
            <div className="trust-content">
              <div className="trust-icon">🔐</div>
              <h2>המידע שלכם בידיים המקצועיות ביותר.</h2>
              <p><span className="brand-name">ORIA</span> AI לא נולדה במקרה. היא נוצרה מתוך שילוב של <strong>תשוקה לעולם הטיפול</strong> וניסיון של שנים בבניית מערכות טכנולוגיות מורכבות בעולמות הסייבר.</p>
              <p>אנחנו יודעים כמה המידע של המטופלים שלכם רגיש. לכן, המערכת נבנתה בסטנדרטים מחמירים של אבטחה ופרטיות, כדי שתוכלו <strong>לישון בשקט</strong> – בידיעה שהקליניקה שלכם מוגנת ומאורגנת.</p>
              <div className="trust-badges">
                <div className="badge"><span>🔒</span><span>הצפנה מקצה לקצה</span></div>
                <div className="badge"><span>🛡️</span><span>תקני אבטחה מחמירים</span></div>
                <div className="badge"><span>☁️</span><span>שרתים מאובטחים ב-AMAZON ו-GOOGLE</span></div>
              </div>
              <div className="section-cta fade-in">
                <Link href="/security" className="btn btn-outline" style={{ marginRight: '1rem' }}>קרא עוד</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="pricing-section">
          <div className="container">
            <div className="section-header">
              <h2>בחרו את מה שמתאים לכם עכשיו</h2>
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
                <div style={{ background: '#f0fdf4', border: '1.5px solid #86efac', borderRadius: '10px', padding: '0.6rem 0.9rem', marginBottom: '1rem', fontSize: '0.82rem', color: '#166534', lineHeight: 1.45 }}>
                  🔓 כל הפיצ'רים של PREMIUM — מוגבל ל-3 מטופלים פעילים. שדרוג בקליק בכל רגע.
                </div>
                <ul className="pricing-features">
                  <li><span className="check">✓</span> יומן פגישות דיגיטלי</li>
                  <li><span className="check">✓</span> ניהול תשלומים וגבייה</li>
                  <li><span className="check">✓</span> תזכורות בוואטסאפ ובמייל</li>
                  <li><span className="check">✓</span> סוכני AI — סיכום פגישות וניתוח תובנות</li>
                  <li><span className="check">✓</span> עד 3 מטופלים פעילים</li>
                </ul>
                <Link href="/checkout" className="btn btn-outline btn-block" style={{ textAlign: 'center' }}>התחילו חינם</Link>
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
                <div style={{ background: '#fef3c7', border: '1.5px solid #f59e0b', borderRadius: '10px', padding: '0.65rem 0.9rem', marginBottom: '1rem', fontSize: '0.82rem', color: '#92400e', lineHeight: 1.45 }}>
                  🎁 <strong>הטבת השקה:</strong> כל פיצ'רי PREMIUM פתוחים לחברי MIND — לזמן מוגבל בלבד.
                </div>
                <ul className="pricing-features">
                  <li><span className="check">✓</span> מטופלים ללא הגבלה</li>
                  <li><span className="check">✓</span> ניהול תשלומים וגבייה</li>
                  <li><span className="check">✓</span> תזכורות פגישות אוטומטיות במייל</li>
                  <li><span className="check">✓</span> סוכן AI: סיכום פגישות ומעקב מטופל</li>
                  <li><span className="check">✓</span> תמיכה במייל</li>
                </ul>
                <Link href="/checkout?plan=mind" className="btn btn-outline btn-block" style={{ textAlign: 'center' }}>רכישה ←</Link>
              </div>
              {/* MIND PREMIUM */}
              <div className="pricing-card" style={{ border: '2px solid #625DE5', boxShadow: '0 8px 40px rgba(98,93,229,.18)' }}>
                <div style={{ background: 'linear-gradient(90deg,#f59e0b,#f97316)', color: '#fff', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.04em', padding: '0.3rem 0.9rem', borderRadius: '20px', display: 'inline-block', marginBottom: '0.6rem' }}>⚡ עסקת השקה</div>
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
                <Link href="/checkout?plan=mind-premium" className="btn btn-primary btn-block" style={{ textAlign: 'center' }}>רכישה ←</Link>
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

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <div className="cta-content">
              <h2>מוכנים לנהל את הקליניקה בחכמה?<br /><span style={{ fontSize: '0.75em', fontWeight: 600, opacity: 0.9 }}>FREEMIUM חינם לתמיד — ביטול מסלול בתשלום בכל עת.</span></h2>
              <Link href="/pricing" className="btn btn-primary btn-large">בחרו מסלול עכשיו ←</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <a href="#" className="logo">
                <picture>
                  <source srcSet="/logos/3.webp" type="image/webp" />
                  <img src="/logos/3.png" alt="ORIA AI" className="logo-img" width="240" height="240" loading="lazy" decoding="async" />
                </picture>
              </a>
              <p>חוזרים ללב הטיפול. את השאר תשאירו ל-ORIA</p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>המוצר</h4>
                <ul>
                  <li><a href="#solution">תכונות</a></li>
                  <li><Link href="/features">מה חדש</Link></li>
                  <li><a href="#pricing">מחירים</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>החברה</h4>
                <ul>
                  <li><Link href="/about">אודות</Link></li>
                  <li><a href="https://wa.me/972524824210" target="_blank" rel="noreferrer">צור קשר</a></li>
                  <li><a href="tel:+972524824210">📞 052-4824210</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>משפטי</h4>
                <ul>
                  <li><Link href="/privacy">מדיניות פרטיות</Link></li>
                  <li><Link href="/security">אבטחת מידע</Link></li>
                  <li><Link href="/terms">תנאי שימוש</Link></li>
                  <li><Link href="/regulations">תקנון</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 <span className="brand-name">ORIA</span> AI. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
