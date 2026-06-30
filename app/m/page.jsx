import Link from 'next/link';
import Image from 'next/image';
import LandingFaq from '../landing/LandingFaq';

export const metadata = {
  title: 'ORIA AI - ניהול קליניקה חכם למטפלים',
  description:
    'ORIA AI עוזרת למטפלים, פסיכולוגים ויועצים לנהל קליניקה ברוגע: תיעוד, תזכורות ורצף טיפולי במקום אחד.',
};

const CTA_URL = 'https://app.oriamind.ai/register';

const painPoints = [
  {
    title: 'היום הטיפולי נגמר, אבל העבודה לא',
    text: 'אחרי כל פגישה - סיכום, הודעה, קבלה. זה מתיש.',
  },
  {
    title: 'המידע בכל מקום חוץ ממקום אחד',
    text: 'וואטסאפ, יומן, פתקים. בלי קו עבודה ברור אחד.',
  },
  {
    title: 'הפחד השקט שמשהו חשוב ייפול',
    text: 'לא מחוסר מקצועיות - מעומס. וזה מוביל לשחיקה.',
  },
];

const steps = [
  {
    title: 'יומן, מפגשים ותיעוד - הכל במקום אחד',
    text: 'לא עוד קפיצות בין כלים. סביבת עבודה ברורה אחת.',
  },
  {
    title: 'ORIA מסכמת, מזכירה ועוזרת לעשות סדר',
    text: 'המערכת סוגרת קצוות - בלי להחליף את שיקול דעתכם.',
  },
  {
    title: 'סוגרים יום מהר יותר, בלי שהוא גורר אתכם',
    text: 'תיעוד, תזכורות, תשלומים - בפחות חיכוך.',
  },
];

const testimonials = [
  {
    quote: 'עשרים שנה של טיפול, ומעולם לא הרגשתי שיש מי שמחזיק את הקליניקה שלי יחד איתי. עכשיו כן.',
    name: 'מיכל',
    role: 'פסיכולוגית קלינית',
  },
  {
    quote: 'הצלחתי לסגור יום בשישי ב-16:00. עם שלושה ילדים קטנים, זה לא עוד פיצ\'ר - זו מתנה.',
    name: 'דניאל',
    role: 'מטפל CBT',
  },
  {
    quote: 'חשבתי שזה עוד אפליקציה שתייצר לי משימות. ORIA עושה בדיוק להפך.',
    name: 'אורלי',
    role: 'קואצ׳רית',
  },
];

const afterItems = [
  'סוגרים את כל הקצוות ב-17:30',
  'הכל במקום אחד - תמונה ברורה תמיד',
  'תזכורות אוטומטיות - בלי לרדוף',
  'ביטחון שהמערכת מחזיקה הכל',
];

const audienceItems = [
  { icon: '🧠', title: 'פסיכולוגים', text: 'שרוצים פחות עומס תפעולי' },
  { icon: '💑', title: 'יועצים זוגיים', text: 'שמחפשים רצף מסודר יותר' },
  { icon: '🌿', title: 'מטפלים עצמאיים', text: 'שלא רוצים פרויקט הטמעה' },
  { icon: '🏥', title: 'קליניקות קטנות', text: 'שמחפשות מערכת ברורה אחת' },
];

const faqItems = [
  {
    q: 'אין לי זמן ללמוד עכשיו מערכת חדשה',
    a: 'בדיוק בגלל זה ORIA נבנתה לעבוד מהיום הראשון. ממשק בעברית, פשוט וברור - ללא הגדרות וללא הדרכה.',
  },
  {
    q: 'אני לא רוצה ש-AI יחליף את שיקול הדעת שלי',
    a: 'הוא לא מחליף - הוא מחזיק מבנה. ORIA מסכמת, מזכירה ומארגנת. ההחלטה הקלינית תמיד נשארת אצלכם.',
  },
  {
    q: 'מה עם פרטיות ואתיקה מקצועית?',
    a: 'המידע שמור ומוגן - לא משותף עם גורם חיצוני, לא משמש לאימון AI, ולא נגיש לאיש ללא אישורכם.',
    link: { href: '/security', text: 'לפירוט על אבטחה ופרטיות' },
  },
  {
    q: 'איך אדע שזה באמת יחסוך לי זמן?',
    a: 'פחות קצוות פתוחים בסוף יום, פחות תיעוד שנשאר לסוף שבוע. רוב המשתמשים מרגישים הבדל בשבוע הראשון.',
  },
];

export default function MobileLandingPage() {
  return (
    <>
      <style>{`
        /* ── Keyframes ── */
        @keyframes mlp-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(0.82); }
        }
        @media (prefers-reduced-motion: reduce) {
          .mlp-hero-badge-dot { animation: none !important; }
        }

        /* ── Root ── */
        .mlp-root {
          font-family: var(--font-heebo), 'Heebo', sans-serif;
          direction: rtl;
          background: #F8FAFC;
          padding-bottom: 80px;
          min-height: 100vh;
        }

        /* ── Header ── */
        .mlp-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(59,130,246,0.12);
          padding: 0.65rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .mlp-logo img {
          height: 32px;
          width: auto;
          display: block;
        }
        .mlp-header-login {
          font-size: 0.84rem;
          font-weight: 700;
          color: #3B82F6;
          background: rgba(59,130,246,0.07);
          border: 1.5px solid rgba(59,130,246,0.22);
          border-radius: 9999px;
          padding: 0.38rem 0.95rem;
          text-decoration: none;
          line-height: 1;
          transition: background 0.15s;
        }
        .mlp-header-login:active {
          background: rgba(59,130,246,0.15);
        }

        /* ── Sticky bar ── */
        .mlp-sticky-bar {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          z-index: 200;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid rgba(59,130,246,0.12);
          padding: 0.75rem 1.25rem 0.65rem;
          box-shadow: 0 -8px 24px rgba(0,0,0,0.07);
        }
        .mlp-sticky-btn {
          display: block;
          width: 100%;
          text-align: center;
          background: #3B82F6;
          color: white;
          font-size: 1rem;
          font-weight: 800;
          padding: 0.88rem 1.5rem;
          border-radius: 9999px;
          text-decoration: none;
          letter-spacing: -0.01em;
          box-shadow: 0 4px 14px rgba(59,130,246,0.38);
        }
        .mlp-sticky-sub {
          text-align: center;
          font-size: 0.68rem;
          color: #94A3B8;
          margin-top: 0.3rem;
          letter-spacing: 0.01em;
        }

        /* ── Sections ── */
        .mlp-section { padding: 2.5rem 1.25rem; }
        .mlp-section-dark {
          background: linear-gradient(160deg, #0F172A 0%, #1a2e4a 100%);
        }
        .mlp-section-soft { background: #EFF6FF; }
        .mlp-section-white { background: #ffffff; }
        .mlp-divider {
          height: 1px;
          background: rgba(59,130,246,0.07);
        }

        /* ── Eyebrow ── */
        .mlp-eyebrow {
          font-size: 0.71rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #E5907A;
          margin-bottom: 0.65rem;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }
        .mlp-eyebrow::before {
          content: '';
          display: inline-block;
          width: 18px;
          height: 2px;
          background: currentColor;
          border-radius: 2px;
          flex-shrink: 0;
        }

        /* ── Headings ── */
        .mlp-h1 {
          font-size: clamp(2.1rem, 8.5vw, 2.75rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.12;
          margin-bottom: 1rem;
          letter-spacing: -0.025em;
        }
        .mlp-h2 {
          font-size: clamp(1.45rem, 5.5vw, 1.85rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.2;
          margin-bottom: 0.55rem;
          letter-spacing: -0.015em;
        }
        .mlp-h2-white { color: white; }
        .mlp-blue { color: #3B82F6; }
        .mlp-blue-light { color: #60A5FA; }
        .mlp-subtitle {
          font-size: 1rem;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 1.4rem;
        }
        .mlp-section-sub {
          font-size: 0.88rem;
          color: #64748B;
          line-height: 1.55;
          margin-bottom: 1.5rem;
        }

        /* ── CTA buttons ── */
        .mlp-cta {
          display: block;
          width: 100%;
          text-align: center;
          background: #3B82F6;
          color: white;
          font-size: 1rem;
          font-weight: 800;
          padding: 0.95rem 1.5rem;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(59,130,246,0.38);
          letter-spacing: -0.01em;
        }
        .mlp-cta:active {
          transform: scale(0.985);
          box-shadow: 0 2px 8px rgba(59,130,246,0.25);
        }
        .mlp-cta-white {
          background: white;
          color: #0F172A;
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
        }

        /* ── Trust chips ── */
        .mlp-trust-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 1.1rem;
        }
        .mlp-trust-chip {
          font-size: 0.71rem;
          font-weight: 600;
          color: #475569;
          background: white;
          border: 1px solid rgba(59,130,246,0.16);
          border-radius: 9999px;
          padding: 0.28rem 0.65rem;
        }

        /* ── Hero ── */
        .mlp-hero {
          padding: 2rem 1.25rem 2.5rem;
          background: white;
          position: relative;
          overflow: hidden;
        }
        .mlp-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 10% 100%, rgba(229,144,122,0.14) 0%, transparent 45%),
            radial-gradient(ellipse at 90% 5%,   rgba(59,130,246,0.08)  0%, transparent 45%);
          pointer-events: none;
        }
        .mlp-hero-inner { position: relative; z-index: 1; }

        .mlp-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(59,130,246,0.07);
          border: 1px solid rgba(59,130,246,0.18);
          border-radius: 9999px;
          padding: 0.3rem 0.8rem;
          font-size: 0.76rem;
          font-weight: 700;
          color: #3B82F6;
          margin-bottom: 1rem;
        }
        .mlp-hero-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #3B82F6;
          flex-shrink: 0;
          animation: mlp-pulse 2.2s ease-in-out infinite;
        }

        .mlp-time-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, #EFF6FF, #DBEAFE);
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 14px;
          padding: 0.85rem 1rem;
          margin: 1.35rem 0 1.5rem;
        }
        .mlp-time-icon { font-size: 1.5rem; flex-shrink: 0; }
        .mlp-time-box-body {}
        .mlp-time-box-body strong {
          display: block;
          font-size: 0.88rem;
          font-weight: 700;
          color: #1D4ED8;
          margin-bottom: 0.15rem;
        }
        .mlp-time-box-body span {
          font-size: 0.77rem;
          color: #3B82F6;
          line-height: 1.4;
        }

        /* ── Pain cards ── */
        .mlp-pain-list {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          margin-bottom: 1.75rem;
        }
        .mlp-pain-card {
          background: white;
          border-radius: 14px;
          padding: 0.95rem 1.1rem;
          border: 1px solid #E2E8F0;
          border-right: 3px solid #E5907A;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          display: flex;
          gap: 0.7rem;
          align-items: flex-start;
        }
        .mlp-pain-num {
          font-size: 1rem;
          font-weight: 800;
          color: rgba(229,144,122,0.4);
          font-family: 'Montserrat', sans-serif;
          line-height: 1.3;
          flex-shrink: 0;
          width: 20px;
          text-align: center;
          margin-top: 0.05rem;
        }
        .mlp-pain-card h3 {
          font-size: 0.9rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.2rem;
        }
        .mlp-pain-card p {
          font-size: 0.82rem;
          color: #64748B;
          line-height: 1.5;
          margin: 0;
        }

        /* ── Steps ── */
        .mlp-steps-wrap {
          position: relative;
          margin-bottom: 1.75rem;
          padding-right: 0.25rem;
        }
        .mlp-steps-line {
          position: absolute;
          top: 18px;
          right: 17px;
          bottom: 18px;
          width: 2px;
          background: linear-gradient(180deg, #3B82F6 0%, rgba(59,130,246,0.1) 100%);
          border-radius: 2px;
          z-index: 0;
        }
        .mlp-step {
          display: flex;
          gap: 1rem;
          padding-bottom: 1.5rem;
          align-items: flex-start;
          position: relative;
        }
        .mlp-step:last-child { padding-bottom: 0; }
        .mlp-step-num {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #3B82F6;
          color: white;
          font-size: 0.78rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Montserrat', sans-serif;
          box-shadow: 0 0 0 5px #EFF6FF;
          position: relative;
          z-index: 1;
        }
        .mlp-step-body { padding-top: 0.35rem; }
        .mlp-step-body h3 {
          font-size: 0.9rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.2rem;
        }
        .mlp-step-body p {
          font-size: 0.82rem;
          color: #64748B;
          line-height: 1.5;
          margin: 0;
        }

        /* ── Screenshot ── */
        .mlp-screenshot-frame {
          border-radius: 14px;
          overflow: hidden;
          box-shadow:
            0 12px 40px rgba(59,130,246,0.16),
            0 2px 8px rgba(0,0,0,0.05);
          margin-bottom: 1.5rem;
          border: 1px solid rgba(59,130,246,0.1);
        }
        .mlp-screenshot-chrome {
          background: #1E293B;
          padding: 0.5rem 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .mlp-chrome-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
        }
        .mlp-chrome-dot:nth-child(1) { background: #EF4444; }
        .mlp-chrome-dot:nth-child(2) { background: #F59E0B; }
        .mlp-chrome-dot:nth-child(3) { background: #22C55E; }
        .mlp-chrome-url {
          font-size: 0.62rem;
          color: rgba(255,255,255,0.3);
          font-family: monospace;
          margin-right: 0.5rem;
        }
        .mlp-screenshot-img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* ── After-state benefits ── */
        .mlp-after-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin: 1.25rem 0 1.75rem;
        }
        .mlp-after-row {
          display: flex;
          gap: 0.6rem;
          align-items: center;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.88);
          line-height: 1.4;
        }
        .mlp-after-check {
          width: 20px; height: 20px;
          border-radius: 50%;
          background: rgba(59,130,246,0.25);
          border: 1px solid rgba(96,165,250,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          font-weight: 800;
          color: #93C5FD;
          flex-shrink: 0;
        }

        /* ── Testimonials ── */
        .mlp-testimonials-scroll {
          display: flex;
          gap: 0.75rem;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x mandatory;
          margin: 0 -1.25rem 1.5rem;
          padding: 0 1.25rem 0.5rem;
          scrollbar-width: none;
        }
        .mlp-testimonials-scroll::-webkit-scrollbar { display: none; }
        .mlp-testimonial-card {
          flex: 0 0 82vw;
          max-width: 296px;
          scroll-snap-align: start;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 18px;
          padding: 1.2rem;
        }
        .mlp-quote-mark {
          font-size: 2rem;
          line-height: 1;
          color: rgba(229,144,122,0.45);
          margin-bottom: -0.35rem;
          font-family: Georgia, 'Times New Roman', serif;
        }
        .mlp-testimonial-text {
          font-size: 0.87rem;
          line-height: 1.65;
          color: rgba(255,255,255,0.88);
          margin-bottom: 0.9rem;
        }
        .mlp-testimonial-author {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .mlp-testimonial-avatar {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3B82F6, #60A5FA);
          color: white;
          font-size: 0.72rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .mlp-testimonial-name {
          font-size: 0.8rem;
          font-weight: 700;
          color: white;
        }
        .mlp-testimonial-role {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.42);
          margin-top: 0.05rem;
        }

        /* ── Audience list ── */
        .mlp-audience-list {
          display: flex;
          flex-direction: column;
          margin-bottom: 1.75rem;
        }
        .mlp-audience-item {
          display: flex;
          gap: 0.85rem;
          align-items: center;
          padding: 0.85rem 0;
          border-bottom: 1px solid #F1F5F9;
        }
        .mlp-audience-item:last-child { border-bottom: none; }
        .mlp-audience-icon {
          width: 38px; height: 38px;
          border-radius: 11px;
          background: rgba(59,130,246,0.07);
          border: 1px solid rgba(59,130,246,0.14);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.05rem;
          flex-shrink: 0;
        }
        .mlp-audience-item h3 {
          font-size: 0.9rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.1rem;
        }
        .mlp-audience-item p {
          font-size: 0.79rem;
          color: #64748B;
          margin: 0;
          line-height: 1.4;
        }

        /* ── FAQ overrides ── */
        .mlp-root .lp-accordion {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .mlp-root .lp-accordion-item {
          background: white;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .mlp-root .lp-accordion-item-open {
          border-color: rgba(59,130,246,0.28);
          box-shadow: 0 0 0 1px rgba(59,130,246,0.1);
        }
        .mlp-root .lp-accordion-trigger {
          padding: 0.9rem 1rem;
          font-size: 0.87rem;
          font-weight: 600;
          color: #0F172A;
        }
        .mlp-root .lp-accordion-item-open .lp-accordion-trigger {
          color: #3B82F6;
        }
        .mlp-root .lp-accordion-icon {
          color: #3B82F6;
        }
        .mlp-root .lp-accordion-body {
          padding: 0 1rem;
        }
        .mlp-root .lp-accordion-item-open .lp-accordion-body {
          padding: 0 1rem 0.9rem;
        }
        .mlp-root .lp-accordion-body p {
          font-size: 0.83rem;
          line-height: 1.65;
          color: #475569;
        }
        .mlp-root .lp-faq-link {
          color: #3B82F6;
        }

        /* ── Pricing ── */
        .mlp-freemium-strip {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, #EFF6FF, #DBEAFE);
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 14px;
          padding: 1rem 1.1rem;
          margin-bottom: 0.85rem;
        }
        .mlp-freemium-icon { font-size: 1.5rem; flex-shrink: 0; }
        .mlp-freemium-strip h3 {
          font-size: 0.88rem;
          font-weight: 700;
          color: #1D4ED8;
          margin-bottom: 0.15rem;
        }
        .mlp-freemium-strip p {
          font-size: 0.77rem;
          color: #3B82F6;
          margin: 0;
          line-height: 1.4;
        }
        .mlp-pricing-card {
          background: linear-gradient(160deg, #0F172A 0%, #1a2e4a 100%);
          border-radius: 20px;
          padding: 1.4rem 1.2rem;
          position: relative;
          overflow: hidden;
          margin-bottom: 1rem;
        }
        .mlp-pricing-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #3B82F6, #60A5FA);
        }
        .mlp-pricing-badge {
          display: inline-block;
          background: rgba(59,130,246,0.2);
          color: #93C5FD;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          padding: 0.22rem 0.65rem;
          border-radius: 20px;
          margin-bottom: 0.75rem;
        }
        .mlp-pricing-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: white;
          margin-bottom: 0.3rem;
          line-height: 1.2;
        }
        .mlp-pricing-price { color: #60A5FA; }
        .mlp-pricing-sub {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.6);
          margin-bottom: 1.1rem;
          line-height: 1.5;
        }
        .mlp-pricing-savings {
          display: inline-block;
          background: rgba(34,197,94,0.15);
          color: #86EFAC;
          font-size: 0.73rem;
          font-weight: 700;
          padding: 0.12rem 0.45rem;
          border-radius: 5px;
          margin-left: 0.35rem;
        }
        .mlp-pricing-cta {
          display: block;
          width: 100%;
          text-align: center;
          background: #3B82F6;
          color: white;
          font-size: 0.97rem;
          font-weight: 800;
          padding: 0.9rem 1.5rem;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(59,130,246,0.4);
        }
        .mlp-pricing-link {
          display: block;
          text-align: center;
          font-size: 0.82rem;
          color: #3B82F6;
          text-decoration: underline;
          padding: 0.35rem 0;
        }

        /* ── Final CTA ── */
        .mlp-final {
          background: linear-gradient(160deg, #0F172A 0%, #1a2e4a 100%);
          padding: 2.75rem 1.25rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .mlp-final::before {
          content: '';
          position: absolute;
          width: 320px; height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%);
          top: -140px; left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
        }
        .mlp-final h2 {
          font-size: 1.65rem;
          font-weight: 800;
          color: white;
          margin-bottom: 0.75rem;
          line-height: 1.2;
          position: relative;
        }
        .mlp-final-sub {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          margin-bottom: 1.5rem;
          line-height: 1.65;
          position: relative;
        }
        .mlp-final-note {
          font-size: 0.71rem;
          color: rgba(255,255,255,0.3);
          margin-top: 0.85rem;
          line-height: 1.5;
        }
        .mlp-final-wa {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          margin-top: 1rem;
          position: relative;
        }

        /* ── Footer ── */
        .mlp-footer {
          background: #080C18;
          padding: 1.25rem;
          text-align: center;
        }
        .mlp-footer-links {
          display: flex;
          justify-content: center;
          gap: 1.25rem;
          margin-bottom: 0.6rem;
          flex-wrap: wrap;
        }
        .mlp-footer-links a {
          font-size: 0.74rem;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
        }
        .mlp-footer-copy {
          font-size: 0.69rem;
          color: rgba(255,255,255,0.18);
        }
      `}</style>

      <div className="mlp-root">

        {/* ─── Header ─── */}
        <header className="mlp-header">
          <Link href="/" className="mlp-logo">
            <picture>
              <source srcSet="/logos/3.webp" type="image/webp" />
              <img src="/logos/3.png" alt="ORIA AI" />
            </picture>
          </Link>
          <a href="https://app.oriamind.ai/login" className="mlp-header-login">
            כניסה →
          </a>
        </header>

        {/* ─── 1. Hero ─── */}
        <section className="mlp-hero">
          <div className="mlp-hero-inner">
            <div className="mlp-hero-badge">
              <span className="mlp-hero-badge-dot" />
              נבנה במיוחד למטפלים ישראלים
            </div>
            <h1 className="mlp-h1">
              הטיפול שלכם.
              <br />
              <span className="mlp-blue">הבינה של ORIA.</span>
            </h1>
            <p className="mlp-subtitle">
              המוח השני שלכם - מזכיר, מסכם ומארגן. כדי שלא תפחדו שמשהו חשוב נשכח, ותוכלו לסגור יום בשעה נורמלית.
            </p>

            <a href={CTA_URL} className="mlp-cta">
              אני רוצה לנסות - חינם ←
            </a>
            <div className="mlp-trust-chips">
              <span className="mlp-trust-chip">FREEMIUM - עד 3 מטופלים</span>
              <span className="mlp-trust-chip">ללא כרטיס אשראי</span>
              <span className="mlp-trust-chip">ממשק בעברית</span>
              <span className="mlp-trust-chip">ביטול בכל עת</span>
            </div>
          </div>
        </section>

        <div className="mlp-divider" />

        {/* ─── 2. Pain Points ─── */}
        <section className="mlp-section mlp-section-soft">
          <p className="mlp-eyebrow">מרגיש מוכר?</p>
          <h2 className="mlp-h2">
            אתם לא עייפים מהטיפול.{' '}
            <span className="mlp-blue">אתם עייפים ממה שבא אחריו.</span>
          </h2>
          <p className="mlp-section-sub">עומס, תיעוד, פחד לפספס - ולא כי אתם לא מקצועיים.</p>

          <div className="mlp-pain-list">
            {painPoints.map((item, i) => (
              <div key={item.title} className="mlp-pain-card">
                <span className="mlp-pain-num">0{i + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <a href={CTA_URL} className="mlp-cta">
            ORIA תחזיק את הסדר בשבילי ←
          </a>
        </section>

        <div className="mlp-divider" />

        {/* ─── 3. How It Works ─── */}
        <section className="mlp-section mlp-section-white">
          <p className="mlp-eyebrow">איך זה עובד</p>
          <h2 className="mlp-h2">
            לא צריך לשנות מי שאתם.{' '}
            <span className="mlp-blue">רק להפסיק לנהל הכל לבד.</span>
          </h2>
          <p className="mlp-section-sub">שלושה שלבים. אין הדרכה. מתחילים מהיום הראשון.</p>

          <div className="mlp-steps-wrap">
            <div className="mlp-steps-line" />
            {steps.map((step, i) => (
              <div key={step.title} className="mlp-step">
                <div className="mlp-step-num">0{i + 1}</div>
                <div className="mlp-step-body">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          <a href={CTA_URL} className="mlp-cta">
            אני רוצה לנסות עכשיו ←
          </a>
        </section>

        <div className="mlp-divider" />

        {/* ─── 4. App Screenshot ─── */}
        <section className="mlp-section mlp-section-soft">
          <p className="mlp-eyebrow">האפליקציה בפעולה</p>
          <h2 className="mlp-h2">
            ככה נראית <span className="mlp-blue">ORIA בפעולה</span>
          </h2>
          <p className="mlp-section-sub">יומן, גבייה וכרטיס מטופל - במקום אחד.</p>

          <div className="mlp-screenshot-frame">
            <div className="mlp-screenshot-chrome">
              <span className="mlp-chrome-dot" />
              <span className="mlp-chrome-dot" />
              <span className="mlp-chrome-dot" />
              <span className="mlp-chrome-url">app.oriamind.ai</span>
            </div>
            <Image
              src="/screenshots/app-dashboard.png"
              alt="לוח הבקרה של ORIA AI - ניהול קליניקה"
              width={1018}
              height={900}
              className="mlp-screenshot-img"
              sizes="100vw"
              loading="lazy"
            />
          </div>

          <a href={CTA_URL} className="mlp-cta">
            לפתוח את ORIA עכשיו ←
          </a>
        </section>

        {/* ─── 5. Testimonials (dark) ─── */}
        <section className="mlp-section mlp-section-dark">
          <p className="mlp-eyebrow">מה אומרים המטפלים</p>
          <h2 className="mlp-h2 mlp-h2-white">
            לא בשביל טכנולוגיה.{' '}
            <span className="mlp-blue-light">בשביל שקט.</span>
          </h2>

          <div className="mlp-after-list">
            {afterItems.map((item) => (
              <div key={item} className="mlp-after-row">
                <span className="mlp-after-check">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mlp-testimonials-scroll">
            {testimonials.map((t) => (
              <article key={t.name} className="mlp-testimonial-card">
                <div className="mlp-quote-mark">״</div>
                <p className="mlp-testimonial-text">{t.quote}</p>
                <div className="mlp-testimonial-author">
                  <div className="mlp-testimonial-avatar">{t.name[0]}</div>
                  <div>
                    <div className="mlp-testimonial-name">{t.name}</div>
                    <div className="mlp-testimonial-role">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <a href={CTA_URL} className="mlp-cta mlp-cta-white">
            גם אני רוצה לסגור ב-17:30 ←
          </a>
        </section>

        <div className="mlp-divider" />

        {/* ─── 6. Who Is It For ─── */}
        <section className="mlp-section mlp-section-white">
          <p className="mlp-eyebrow">למי מתאים</p>
          <h2 className="mlp-h2">
            למי שרוצה לעבוד <span className="mlp-blue">רגוע יותר.</span>
          </h2>

          <div className="mlp-audience-list">
            {audienceItems.map((a) => (
              <div key={a.title} className="mlp-audience-item">
                <div className="mlp-audience-icon">{a.icon}</div>
                <div>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              </div>
            ))}
          </div>

          <a href={CTA_URL} className="mlp-cta">
            זה בשבילי - להתחיל בחינם ←
          </a>
        </section>

        <div className="mlp-divider" />

        {/* ─── 7. FAQ ─── */}
        <section className="mlp-section mlp-section-soft">
          <p className="mlp-eyebrow">שאלות ותהיות</p>
          <h2 className="mlp-h2">אם משהו בכם אומר &ldquo;אבל...&rdquo;</h2>
          <p className="mlp-section-sub">בדיוק כאן עונים.</p>

          <LandingFaq items={faqItems} />

          <a href={CTA_URL} className="mlp-cta">
            מוכנים לנסות - חינם לגמרי ←
          </a>
        </section>

        {/* ─── 8. Pricing ─── */}
        <section className="mlp-section mlp-section-white">
          <p className="mlp-eyebrow">מחיר השקה</p>
          <h2 className="mlp-h2">
            מתחילים <span className="mlp-blue">בחינם.</span>
          </h2>
          <p className="mlp-section-sub">גרסת FREEMIUM - כל פיצ'רי PREMIUM, עד 3 מטופלים פעילים, חינם לתמיד.</p>

          <div className="mlp-freemium-strip">
            <span className="mlp-freemium-icon">🎁</span>
            <div>
              <h3>FREEMIUM - חינם לתמיד</h3>
              <p>כל פיצ׳רי PREMIUM, עד 3 מטופלים פעילים בחודש. ללא כרטיס אשראי.</p>
            </div>
          </div>

          <div className="mlp-pricing-card">
            <span className="mlp-pricing-badge">🔥 100 מקומות בלבד</span>
            <p className="mlp-pricing-title">
              MIND PREMIUM ב-<span className="mlp-pricing-price">₪99</span> בלבד
            </p>
            <p className="mlp-pricing-sub">
              מחיר השקה ל-100 המצטרפים הראשונים
              <span className="mlp-pricing-savings">חוסכים ₪190/חודש</span>
            </p>
            <a href={CTA_URL} className="mlp-pricing-cta">
              להתחיל חינם ←
            </a>
          </div>

          <Link href="/pricing" className="mlp-pricing-link">
            לצפייה בכל המסלולים
          </Link>
        </section>

        {/* ─── 9. Final CTA ─── */}
        <section className="mlp-final" id="mlp-final">
          <h2>מוכנים לנהל את הקליניקה בחכמה?</h2>
          <p className="mlp-final-sub">
            הצטרפו למטפלים שבחרו לעבוד חכם יותר - ולחזור לסיבה שבחרו בטיפול מלכתחילה.
          </p>
          <a href={CTA_URL} className="mlp-cta mlp-cta-white">
            אני רוצה לנסות - זה חינם ←
          </a>
          <p className="mlp-final-note">
            FREEMIUM חינם לתמיד (כל הפיצ׳רים, עד 3 מטופלים) · ביטול מסלול בתשלום מיידי · תמיכה בעברית
          </p>
          <a
            href="https://wa.me/972524824210?text=היי, אני שוקל%2Fת להצטרף ל-ORIA"
            target="_blank"
            rel="noreferrer"
            className="mlp-final-wa"
          >
            💬 שאלות? דברו איתנו בוואטסאפ
          </a>
        </section>

        {/* ─── Footer ─── */}
        <footer className="mlp-footer">
          <div className="mlp-footer-links">
            <Link href="/privacy">פרטיות</Link>
            <Link href="/terms">תקנון</Link>
            <Link href="/security">אבטחה</Link>
            <a href="https://wa.me/972524824210" target="_blank" rel="noreferrer">
              צור קשר
            </a>
          </div>
          <p className="mlp-footer-copy">© 2025 ORIA AI. כל הזכויות שמורות.</p>
        </footer>

        {/* ─── Sticky bottom CTA ─── */}
        <div className="mlp-sticky-bar">
          <a href={CTA_URL} className="mlp-sticky-btn">
            להתחיל בחינם ←
          </a>
          <p className="mlp-sticky-sub">ללא כרטיס אשראי · FREEMIUM כולל כל הפיצ׳רים עד 3 מטופלים</p>
        </div>

      </div>
    </>
  );
}
