'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import FeaturePageLayout from '../../components/FeaturePageLayout';

export default function FeaturesPage() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(e => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add('animate-in'), +e.target.dataset.delay || 0); o.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
  }, []);

  const entries = [
    { href: '/features/audit-logs', icon: '📋', iconClass: 'icon-purple', date: 'פברואר 2026', tags: [['tag-security', 'אבטחה'], ['tag-new', 'חדש']], title: 'Audit Log — מי פתח את התיק הזה?', text: 'כל גישה לכל תיק מתועדת אוטומטית: מי נכנס, מתי, מאיזה מכשיר, מה שונה. חובה חוקית לפי תיקון 13 — ועכשיו מוכנה עבורכם ברקע.', delay: 0 },
    { href: '/features/brain-dump', icon: '🎙️', iconClass: 'icon-blue', date: 'פברואר 2026', tags: [['tag-core', 'ליבה'], ['tag-new', 'חדש']], title: 'Brain Dump — סיכום קליני ב-30 שניות', text: 'מקליטים דקה-שתיים אחרי הפגישה, ו-ORIA מחזירה סיכום מסודר בסגנון שלכם. לא עוד כתיבה ידנית בסוף יום עייף.', delay: 0 },
    { href: '/features/second-brain', icon: '🧠', iconClass: 'icon-purple', date: 'ינואר 2026', tags: [['tag-core', 'ליבה']], title: 'המוח השני — הכנה לפגישה תוך 30 שניות', text: 'ORIA זוכרת מה נאמר לפני 3 פגישות, מזהה דפוסים חוזרים, ומציגה לכם תקציר חכם לפני כל מפגש. מגיעים ממוקדים.', delay: 100 },
    { href: '/features/reports', icon: '📊', iconClass: 'icon-coral', date: 'פברואר 2026', tags: [['tag-manage', 'ניהול'], ['tag-new', 'חדש']], title: 'דוחות פיננסיים — שאלו בעברית, קבלו אקסל', text: 'שאלו "כמה הרווחתי בינואר?" ו-ORIA תיצור דוח עם גרפים וטבלאות. כל הנתונים ניתנים לייצוא לאקסל בלחיצה אחת.', delay: 200 },
    { href: '/features/security-2fa', icon: '🔐', iconClass: 'icon-green', date: 'פברואר 2026', tags: [['tag-security', 'אבטחה']], title: 'אימות דו-שלבי — כניסה מאובטחת לקליניקה שלכם', text: 'קוד חד-פעמי מהנייד בכל כניסה. גם אם מישהו גנב את הסיסמה — המידע של המטופלים שלכם מוגן. ISO 27001, תיקון 13.', delay: 300 },
  ];

  return (
    <>
      <style>{`
        .features-hero{background:linear-gradient(160deg,var(--dark) 0%,#2a2560 100%);padding:140px 1.5rem 80px;text-align:center;position:relative;overflow:hidden}
        .features-hero::before{content:'';position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(72,183,255,.12) 0%,transparent 70%);top:-100px;right:-100px;pointer-events:none}
        .features-hero h1{font-size:clamp(2rem,4.5vw,3rem);color:white;font-weight:800;margin-bottom:1rem}
        .features-hero p{font-size:1.15rem;color:rgba(255,255,255,.75);max-width:520px;margin:0 auto;line-height:1.7}
        .features-hero .highlight{color:var(--secondary)}
        .features-feed{background:var(--light);padding:64px 1.5rem 96px}
        .feed-inner{max-width:760px;margin:0 auto}
        .feed-label{font-size:.8rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--primary);margin-bottom:2.5rem}
        .feature-entry{background:white;border-radius:var(--radius-xl);padding:2rem 2rem 1.75rem;margin-bottom:1.5rem;display:flex;gap:1.5rem;align-items:flex-start;box-shadow:var(--shadow-sm);border:1px solid var(--gray-200);text-decoration:none;color:inherit;transition:transform var(--transition),box-shadow var(--transition);position:relative}
        .feature-entry:hover{transform:translateY(-3px);box-shadow:var(--shadow-lg)}
        .feature-entry-icon{width:56px;height:56px;border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;font-size:1.75rem;flex-shrink:0}
        .icon-blue{background:rgba(72,183,255,.12)}.icon-purple{background:rgba(98,93,229,.12)}.icon-coral{background:rgba(229,144,122,.12)}.icon-green{background:rgba(34,197,94,.1)}
        .feature-entry-body{flex:1}
        .feature-entry-meta{display:flex;align-items:center;gap:.6rem;margin-bottom:.5rem;flex-wrap:wrap}
        .feature-date{font-size:.8rem;color:var(--gray-400);font-weight:500}
        .feature-tag{font-size:.72rem;font-weight:700;padding:.2rem .65rem;border-radius:var(--radius-full);letter-spacing:.04em}
        .tag-new{background:#dcfce7;color:#16a34a}.tag-security{background:rgba(98,93,229,.1);color:var(--primary)}.tag-core{background:rgba(72,183,255,.12);color:#0284c7}.tag-manage{background:rgba(229,144,122,.15);color:#c2410c}
        .feature-entry h2{font-size:1.2rem;font-weight:700;color:var(--dark);margin-bottom:.5rem;line-height:1.35}
        .feature-entry p{font-size:.95rem;color:var(--gray-600);line-height:1.65;margin-bottom:1rem}
        .feature-read-more{display:inline-flex;align-items:center;gap:.3rem;font-size:.88rem;font-weight:600;color:var(--primary)}
        .feature-read-more::after{content:'←';transition:transform var(--transition-fast)}
        .feature-entry:hover .feature-read-more::after{transform:translateX(-4px)}
        .feature-entry-arrow{color:var(--gray-300);font-size:1.2rem;align-self:center;flex-shrink:0}
        .features-cta{background:white;padding:72px 1.5rem;text-align:center;border-top:1px solid var(--gray-200)}
        .features-cta h2{font-size:1.75rem;font-weight:800;color:var(--dark);margin-bottom:.75rem}
        .features-cta p{color:var(--gray-600);margin-bottom:2rem}
        @media(max-width:600px){.feature-entry{flex-direction:column;gap:1rem}.feature-entry-arrow{display:none}}
      `}</style>

      <FeaturePageLayout>
        <section className="features-hero">
          <div style={{ position: 'relative', zIndex: 2 }}>
            <p className="section-eyebrow" style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>מה בנינו לכם</p>
            <h1>הפיצ'רים של <span className="highlight">ORIA</span></h1>
            <p>כאן תמצאו את כל הכלים שאנחנו בונים — איך הם עובדים, למה הם חשובים, ומה הם חוסכים לכם.</p>
          </div>
        </section>

        <section className="features-feed">
          <div className="feed-inner">
            <p className="feed-label">עדכונים אחרונים</p>
            {entries.map((e) => (
              <Link href={e.href} key={e.href} className="feature-entry fade-in" data-delay={e.delay}>
                <div className={`feature-entry-icon ${e.iconClass}`}>{e.icon}</div>
                <div className="feature-entry-body">
                  <div className="feature-entry-meta">
                    <span className="feature-date">{e.date}</span>
                    {e.tags.map(([cls, label]) => <span key={cls} className={`feature-tag ${cls}`}>{label}</span>)}
                  </div>
                  <h2>{e.title}</h2>
                  <p>{e.text}</p>
                  <span className="feature-read-more">קראו עוד</span>
                </div>
                <span className="feature-entry-arrow">›</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="features-cta">
          <div className="container">
            <h2>הצטרפו לרשימת ההמתנה וקבלו חודש ראשון חינם</h2>
            <p>המקומות לפיילוט נסגרו — אבל כשהאפליקציה יוצאת לציבור, חברי רשימת ההמתנה יקבלו חודש ראשון חינם.</p>
            <Link href="/#pricing" className="btn btn-primary btn-large">הצטרפו לרשימת ההמתנה</Link>
          </div>
        </section>
      </FeaturePageLayout>
    </>
  );
}
