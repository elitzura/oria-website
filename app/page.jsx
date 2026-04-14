'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const featureTouchStartX = useRef(null);

  const exitIntentShownRef = useRef(false);
  const pageLoadTimeRef = useRef(Date.now());

  useEffect(() => {
    // Remove loading state
    document.body.classList.remove('loading');

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
      {/* Announcement bar */}
      {showAnnouncement && (
        <div id="announcementBar" className="announcement-bar">
          <div className="announcement-inner">
            <span className="announcement-dot"></span>
            <span>✨ FREEMIUM חינם לתמיד - התחילו לנהל את הקליניקה בחכמה</span>
            <button className="announcement-cta" onClick={() => { setShowAnnouncement(false); document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' }); }}>הצטרפו →</button>
            <button className="announcement-close" onClick={() => setShowAnnouncement(false)} aria-label="סגור">✕</button>
          </div>
        </div>
      )}

      {/* Exit intent modal */}
      {showExitIntent && (
        <div className="exit-intent-modal active" onClick={(e) => e.target === e.currentTarget && closeExitIntent()}>
          <div className="exit-intent-content">
            <button className="exit-intent-close" onClick={closeExitIntent} aria-label="סגור">&times;</button>
            <div className="exit-intent-emoji">
              <svg viewBox="0 0 24 24" width="48" height="48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="#625DE5"><path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/></svg>
            </div>
            <h2 className="exit-intent-title">רגע לפני שאתם הולכים...</h2>
            <p className="exit-intent-subtitle"><span className="brand-name">ORIA AI</span> - התחילו לנהל את הקליניקה בחכמה!</p>
            <p className="exit-intent-body">בחרו מסלול עכשיו - FREEMIUM חינם לגמרי, ללא כרטיס אשראי.</p>
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
          <div className="hero-grid-overlay" aria-hidden="true"></div>
          <div className="container hero-container">
            <div className="hero-content">
              <h1>הטיפול שלכם.<br /><span className="highlight">הבינה של <span className="brand-name">ORIA</span>.</span></h1>
              <p className="hero-subtitle">המוח השני שמזכיר, מסכם ומארגן - כדי שתוכלו להיות נוכחים לגמרי בחדר.</p>
              <div className="hero-cta">
                <Link href="/pricing" className="btn btn-primary btn-large">התחילו בחינם - ללא כרטיס אשראי ←</Link>
              </div>
              <p className="hero-disclaimer">FREEMIUM חינם לתמיד. ביטול מסלול בתשלום בכל עת, ללא התחייבות.</p>
            </div>
            <div className="hero-visual">
              <div className="hero-image">
                <div className="floating-card card-1">
                  <div className="card-icon">
                    <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                  </div>
                  <div className="card-text">סיכום פגישה נוצר</div>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">
                    <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12"/><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="2" fill="white" stroke="none"/></svg>
                  </div>
                  <div className="card-text">תובנה חדשה זוהתה</div>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">
                    <svg viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div className="card-text">המטופל מוכן לפגישה</div>
                </div>
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

        {/* Social Proof Trust Bar */}
        <div className="trust-bar">
          <div className="container">
            <div className="trust-bar-inner">
              <div className="trust-bar-item">
                <div className="trust-bar-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                </div>
                <div className="trust-bar-text">
                  <strong>ISO 27001</strong>
                  <span>תקן אבטחה בינלאומי</span>
                </div>
              </div>
              <div className="trust-bar-divider"></div>
              <div className="trust-bar-item">
                <div className="trust-bar-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div className="trust-bar-text">
                  <strong>מטפלים ישראלים</strong>
                  <span>פותח עם ועבור מטפלים</span>
                </div>
              </div>
              <div className="trust-bar-divider"></div>
              <div className="trust-bar-item">
                <div className="trust-bar-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div className="trust-bar-text">
                  <strong>30 שניות</strong>
                  <span>הכנה לפגישה - מהיר ומדויק</span>
                </div>
              </div>
              <div className="trust-bar-divider"></div>
              <div className="trust-bar-item">
                <div className="trust-bar-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div className="trust-bar-text">
                  <strong>FREEMIUM חינם</strong>
                  <span>ללא כרטיס אשראי - לתמיד</span>
                </div>
              </div>
              <div className="trust-bar-divider"></div>
              <div className="trust-bar-item">
                <div className="trust-bar-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                </div>
                <div className="trust-bar-text">
                  <strong>עובד מהפלאפון</strong>
                  <span>ניהול מכל מקום, בכל עת</span>
                </div>
              </div>
            </div>
          </div>
        </div>

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
            {/* Step pills */}
            <div className="feature-carousel-steps">
              {[
                { label: 'לפני הפגישה', num: '01' },
                { label: 'במהלך הפגישה', num: '02' },
                { label: 'אחרי הפגישה', num: '03' },
              ].map(({ label, num }, i) => (
                <button
                  key={i}
                  className={`feature-step-btn${activeFeatureIndex === i ? ' active' : ''}`}
                  onClick={() => setActiveFeatureIndex(i)}
                >
                  <span className="feature-step-num">{num}</span>
                  {label}
                </button>
              ))}
            </div>

            {/* Carousel */}
            <div className="feature-carousel-outer" dir="ltr">
              <button
                className="feature-carousel-arrow"
                onClick={() => setActiveFeatureIndex(i => Math.min(i + 1, 2))}
                disabled={activeFeatureIndex === 2}
                aria-label="שלב הבא"
              >
                <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
              </button>

              <div
                className="feature-carousel-window"
                onTouchStart={e => { featureTouchStartX.current = e.touches[0].clientX; }}
                onTouchEnd={e => {
                  if (featureTouchStartX.current === null) return;
                  const diff = featureTouchStartX.current - e.changedTouches[0].clientX;
                  if (Math.abs(diff) > 50) {
                    setActiveFeatureIndex(i => diff > 0 ? Math.min(i + 1, 2) : Math.max(i - 1, 0));
                  }
                  featureTouchStartX.current = null;
                }}
              >
                <div
                  className="feature-carousel-track"
                  style={{ transform: `translateX(${-activeFeatureIndex * 100}%)` }}
                >
                  {/* Slide 0 — לפני הפגישה */}
                  <div className="feature-carousel-slide" dir="rtl">
                    <div className="feature-card">
                      <div className="feature-card-visual">
                        <span className="feature-card-step-bg">01</span>
                        <div className="feature-icon">
                          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        </div>
                      </div>
                      <div className="feature-card-body">
                        <h3>מוכנות לפגישה ב-30 שניות</h3>
                        <p>ריענון זיכרון מהיר ומדויק על ציר זמן חכם: איפה עצרתם בפעם הקודמת ומה דורש מעקב. מגיעים לכל פגישה ממוקדים ונוכחים, בלי לנבור בדפים.</p>
                        <span className="feature-benefit">⚡ חוסך לכם זמן יקר</span>
                      </div>
                    </div>
                  </div>

                  {/* Slide 1 — במהלך הפגישה */}
                  <div className="feature-carousel-slide" dir="rtl">
                    <div className="feature-card">
                      <div className="feature-card-visual">
                        <span className="feature-card-step-bg">02</span>
                        <div className="feature-icon">
                          <svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                        </div>
                      </div>
                      <div className="feature-card-body">
                        <h3>תיעוד אוטומטי (בלי לאבד את הקול שלכם)</h3>
                        <p>הופכים הקלטה או ראשי פרקים לסיכום פגישה מסודר ומקצועי תוך שניות. אתם מספקים את התוכן הקליני – המערכת דואגת לארגון ולניסוח.</p>
                        <span className="feature-benefit">✓ ללא הקלדה ידנית</span>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2 — אחרי הפגישה */}
                  <div className="feature-carousel-slide" dir="rtl">
                    <div className="feature-card">
                      <div className="feature-card-visual">
                        <span className="feature-card-step-bg">03</span>
                        <div className="feature-icon">
                          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
                        </div>
                      </div>
                      <div className="feature-card-body">
                        <h3>סוכני AI בבנייה אישית</h3>
                        <p>בואו לעצב את "סוכני העבודה" שלכם. אתם מגדירים איך המערכת תסכם עבורכם, מה היא תדגיש ואיך היא תארגן את המידע כדי שיתאים בדיוק לשיטת העבודה שלכם.</p>
                        <span className="feature-benefit">✦ מותאם לשיטתכם</span>
                      </div>
                    </div>
                    <div className="feature-card">
                      <div className="feature-card-visual">
                        <span className="feature-card-step-bg">04</span>
                        <div className="feature-icon">
                          <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                        </div>
                      </div>
                      <div className="feature-card-body">
                        <h3>ניהול קליני מלא (All-in-One)</h3>
                        <p>שקט נפשי בזרימה אחת: תיעוד טיפולי, יומן, גבייה וחשבוניות – הכל מחובר במקום אחד. שום דבר לא נופל בין הכיסאות.</p>
                        <span className="feature-benefit">◎ הכל במקום אחד</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="feature-carousel-arrow"
                onClick={() => setActiveFeatureIndex(i => Math.max(i - 1, 0))}
                disabled={activeFeatureIndex === 0}
                aria-label="שלב קודם"
              >
                <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>

            {/* Dot indicators */}
            <div className="feature-carousel-dots">
              {[0, 1, 2].map(i => (
                <button
                  key={i}
                  className={`feature-dot${activeFeatureIndex === i ? ' active' : ''}`}
                  onClick={() => setActiveFeatureIndex(i)}
                  aria-label={`שלב ${i + 1}`}
                />
              ))}
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
                <div className="comparison-col old">בלי ORIA</div>
                <div className="comparison-col new">עם <span className="brand-name">ORIA</span> AI</div>
              </div>
              {[
                { old: { title: 'התיעוד הוא נטל:', text: '"חייבים" לכתוב סיכום בסוף היום.' }, new: { title: 'התיעוד הוא נכס:', text: 'המידע עובד בשבילכם ונגיש לכם תמיד.' } },
                { old: { title: 'הראש תמיד עמוס:', text: 'דאגה שמא פרט חשוב יישכח.' }, new: { title: 'שקט קוגניטיבי:', text: 'המוח השני זוכר הכל, הראש פנוי לטיפול.' } },
                { old: { title: 'פיזור וסרבול:', text: 'המידע נמצא ביומן, במחברת ובקבצים.' }, new: { title: 'סדר הוליסטי:', text: 'מקום אחד שמרכז את הטיפול ואת המנהלה.' } },
                { old: { title: 'צמוד למחשב:', text: 'כדי לנהל את הקליניקה צריך לשבת מול מחשב.' }, new: { title: 'מנהלים מכל מקום:', text: 'פלאפון, טאבלט, מחשב — ORIA עובדת בכל מכשיר.' } },
              ].map((row, i) => (
                <div className="comparison-row" key={i}>
                  <div className="comparison-col old"><span className="icon-old">-</span><div><strong>{row.old.title}</strong><p>{row.old.text}</p></div></div>
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
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h2>המידע שלכם בידיים המקצועיות ביותר.</h2>
              <p><span className="brand-name">ORIA</span> AI לא נולדה במקרה. היא נוצרה מתוך שילוב של <strong>תשוקה לעולם הטיפול</strong> וניסיון של שנים בבניית מערכות טכנולוגיות מורכבות בעולמות הסייבר.</p>
              <p>אנחנו יודעים כמה המידע של המטופלים שלכם רגיש. לכן, המערכת נבנתה בסטנדרטים מחמירים של אבטחה ופרטיות, כדי שתוכלו <strong>לישון בשקט</strong> – בידיעה שהקליניקה שלכם מוגנת ומאורגנת.</p>
              <div className="trust-badges">
                <div className="badge">
                  <span className="badge-icon">
                    <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </span>
                  <span>הצפנה מקצה לקצה</span>
                </div>
                <div className="badge">
                  <span className="badge-icon">
                    <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </span>
                  <span>תקני אבטחה מחמירים</span>
                </div>
                <div className="badge">
                  <span className="badge-icon">
                    <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  </span>
                  <span>שרתים מאובטחים ב-AMAZON ו-GOOGLE</span>
                </div>
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
                <div className="plan-icon">
                  <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12"/><path d="M12 12C12 6.477 7.523 2 2 2c0 5.523 4.477 10 10 10z"/><path d="M12 12c0-5.523 4.477-10 10-10-0 5.523-4.477 10-10 10z"/></svg>
                </div>
                <div className="pricing-header">
                  <h3 style={{ fontSize: '1.3rem' }}>FREEMIUM</h3>
                  <p className="pricing-desc">להרגיש את ORIA לפני שמחליטים - בלי לשלם שקל</p>
                </div>
                <div className="pricing-price">
                  <span className="amount" style={{ fontSize: '2rem', letterSpacing: '-1px' }}>חינם</span>
                  <span className="period" style={{ display: 'block', fontSize: '0.78rem', color: '#aaa', marginTop: '2px' }}>לתמיד, ללא כרטיס אשראי</span>
                </div>
                <div style={{ background: '#f0fdf4', border: '1.5px solid #86efac', borderRadius: '10px', padding: '0.6rem 0.9rem', marginBottom: '1rem', fontSize: '0.82rem', color: '#166534', lineHeight: 1.45 }}>
                  🔓 כל הפיצ'רים של PREMIUM - מוגבל ל-3 מטופלים פעילים. שדרוג בקליק בכל רגע.
                </div>
                <ul className="pricing-features">
                  <li><span className="check">✓</span> יומן פגישות דיגיטלי</li>
                  <li><span className="check">✓</span> ניהול תשלומים וגבייה</li>
                  <li><span className="check">✓</span> תזכורות בוואטסאפ ובמייל</li>
                  <li><span className="check">✓</span> סוכני AI - סיכום פגישות וניתוח תובנות</li>
                  <li><span className="check">✓</span> עד 3 מטופלים פעילים</li>
                </ul>
                <a href="https://clinic.therawiseai.com" className="btn btn-outline btn-block" style={{ textAlign: 'center' }}>התחילו חינם</a>
              </div>
              {/* MIND */}
              <div className="pricing-card featured">
                <div className="popular-badge">הכי פופולרי</div>
                <div className="plan-icon">
                  <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14Z"/></svg>
                </div>
                <div className="pricing-header">
                  <h3 style={{ fontSize: '1.3rem' }}>MIND</h3>
                  <p className="pricing-desc">כשרוצים שהמערכת תתחיל לעבוד בשבילכם</p>
                </div>
                <span className="original-price">₪189/חודש</span>
                <span className="save-badge">מחיר השקה - חוסכים ₪60/חודש</span>
                <div className="pricing-price">
                  <span className="currency">₪</span><span className="amount">129</span><span className="period">/חודש</span>
                </div>
                <div style={{ background: '#fef3c7', border: '1.5px solid #f59e0b', borderRadius: '10px', padding: '0.65rem 0.9rem', marginBottom: '1rem', fontSize: '0.82rem', color: '#92400e', lineHeight: 1.45 }}>
                  🎁 <strong>הטבת השקה:</strong> כל פיצ'רי PREMIUM פתוחים לחברי MIND - לזמן מוגבל בלבד.
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
              <div className="pricing-card" style={{ border: '2px solid #625DE5', boxShadow: '0 8px 40px rgba(98,93,229,.18)' }}>
                <div style={{ background: 'linear-gradient(90deg,#f59e0b,#f97316)', color: '#fff', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.04em', padding: '0.3rem 0.9rem', borderRadius: '20px', display: 'inline-block', marginBottom: '0.6rem' }}>עסקת השקה</div>
                <div className="plan-icon">
                  <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6l4 6h10l4-6"/><path d="M7 12l5 8 5-8"/><path d="M12 2v2"/></svg>
                </div>
                <div className="pricing-header">
                  <h3 style={{ fontSize: '1.3rem' }}>MIND PREMIUM</h3>
                  <p className="pricing-desc">הניהול המלא - במחיר MIND, לזמן מוגבל בלבד</p>
                </div>
                <span className="original-price">₪289/חודש</span>
                <span className="save-badge">במחיר MIND - חוסכים ₪160/חודש ⭐</span>
                <div className="pricing-price">
                  <span className="currency">₪</span><span className="amount">129</span><span className="period">/חודש</span>
                </div>
                <ul className="pricing-features">
                  <li><span className="check">✓</span> מטופלים ללא הגבלה</li>
                  <li><span className="check">✓</span> סוכני AI מרובים - ניהול קליניקה מלא</li>
                  <li><span className="check">✓</span> תזכורות ועדכונים בוואטסאפ למטופלים</li>
                  <li><span className="check">✓</span> ניתוח תובנות ודפוסים קליניים</li>
                  <li><span className="check">✓</span> דוחות התקדמות אוטומטיים</li>
                  <li><span className="check">✓</span> תמיכה בצ'אט ובטלפון</li>
                </ul>
                <a href="https://clinic.therawiseai.com" className="btn btn-primary btn-block" style={{ textAlign: 'center' }}>רכישה ←</a>
              </div>
              {/* Clinic */}
              <div className="pricing-card clinic-card">
                <div className="plan-icon" style={{ background: 'rgba(255,255,255,0.12)' }}>
                  <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'white' }}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
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
              <span>FREEMIUM חינם לתמיד - ללא כרטיס אשראי</span>
              <span>ביטול מיידי בכל עת דרך האפליקציה</span>
              <span>תמיכה בעברית - צוות ישראלי</span>
              <span>מחיר השקה - יעלה בקרוב</span>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <div className="cta-content">
              <h2>מוכנים לנהל את הקליניקה בחכמה?<br /><span style={{ fontSize: '0.75em', fontWeight: 600, opacity: 0.9 }}>FREEMIUM חינם לתמיד - ביטול מסלול בתשלום בכל עת.</span></h2>
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
                  <li><a href="tel:+972524824210">052-4824210</a></li>
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
