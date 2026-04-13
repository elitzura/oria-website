'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StaticPageLayout({ children, activeNav }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(true); // always scrolled on inner pages

  useEffect(() => {
    document.body.classList.remove('loading');
    const handleScroll = () => setNavbarScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar${navbarScrolled ? ' scrolled' : ''}`}>
        <div className="container nav-container">
          <Link href="/" className="logo">
            <picture>
              <source srcSet="/logos/3.webp" type="image/webp" />
              <img src="/logos/3.png" alt="ORIA AI" className="logo-img" width="240" height="240" decoding="async" />
            </picture>
          </Link>
          <ul className={`nav-links${mobileMenuOpen ? ' active' : ''}`}>
            <li><Link href="/#solution" style={activeNav === 'solution' ? { color: 'var(--primary)', fontWeight: 600 } : {}}>הפתרון</Link></li>
            <li><Link href="/features" style={activeNav === 'features' ? { color: 'var(--primary)', fontWeight: 600 } : {}}>מה חדש</Link></li>
            <li><Link href="/#pricing">מחירים</Link></li>
            <li><Link href="/security" style={activeNav === 'security' ? { color: 'var(--primary)', fontWeight: 600 } : {}}>אבטחה</Link></li>
            <li><Link href="/pricing" className="btn btn-outline">התחילו עכשיו</Link></li>
          </ul>
          <button className={`mobile-menu-btn${mobileMenuOpen ? ' active' : ''}`} aria-label="תפריט" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {children}

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Link href="/" className="logo">
                <picture>
                  <source srcSet="/logos/3.webp" type="image/webp" />
                  <img src="/logos/3.png" alt="ORIA AI" className="logo-img" width="240" height="240" loading="lazy" decoding="async" />
                </picture>
              </Link>
              <p>חוזרים ללב הטיפול. את השאר תשאירו ל-ORIA</p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>המוצר</h4>
                <ul>
                  <li><Link href="/#solution">תכונות</Link></li>
                  <li><Link href="/features">מה חדש</Link></li>
                  <li><Link href="/#pricing">מחירים</Link></li>
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
