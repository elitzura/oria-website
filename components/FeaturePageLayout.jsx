'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function FeaturePageLayout({ children }) {
  useEffect(() => {
    document.body.classList.remove('loading');
    const handleScroll = () => document.querySelector('.navbar')?.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const handleMenu = function () { document.querySelector('.nav-links')?.classList.toggle('active'); this.classList.toggle('active'); };
    menuBtn?.addEventListener('click', handleMenu);
    return () => { window.removeEventListener('scroll', handleScroll); menuBtn?.removeEventListener('click', handleMenu); };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="container nav-container">
          <Link href="/" className="logo"><img src="/logos/3.png" alt="ORIA AI" className="logo-img" /></Link>
          <ul className="nav-links">
            <li><Link href="/#solution">הפתרון</Link></li>
            <li><Link href="/features" style={{ color: 'var(--primary)', fontWeight: 600 }}>מה חדש</Link></li>
            <li><Link href="/#pricing">מחירים</Link></li>
            <li><Link href="/security">אבטחה</Link></li>
            <li><Link href="/#pricing" className="btn btn-outline">רשימת המתנה</Link></li>
          </ul>
          <button className="mobile-menu-btn" aria-label="תפריט"><span></span><span></span><span></span></button>
        </div>
      </nav>

      {children}

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand"><Link href="/" className="logo"><img src="/logos/3.png" alt="ORIA AI" className="logo-img" /></Link><p>חוזרים ללב הטיפול. את השאר תשאירו ל-ORIA</p></div>
            <div className="footer-links">
              <div className="footer-col"><h4>המוצר</h4><ul><li><Link href="/#solution">תכונות</Link></li><li><Link href="/#pricing">מחירים</Link></li><li><Link href="/features">מה חדש</Link></li></ul></div>
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
