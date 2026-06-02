import Link from 'next/link';
import Image from 'next/image';
import StaticPageLayout from '../../components/StaticPageLayout';
import LandingFaq from './LandingFaq';
import CountdownBanner from './CountdownBanner';

const painPoints = [
  {
    title: 'היום הטיפולי נגמר, אבל העבודה לא',
    text: 'אחרי שהמטופל יוצא מהחדר, מתחיל הסיכום, ההודעה, הקבלה, ועוד ניסיון להיזכר במה שלא לפספס. זה מתיש.',
  },
  {
    title: 'המידע בכל מקום - חוץ ממקום אחד',
    text: 'וואטסאפ, יומן, פתקים, קבצים וזיכרון. כשאין קו עבודה ברור אחד, קשה לשמור על עמדה מקצועית שקטה.',
  },
  {
    title: 'הפחד השקט שמשהו חשוב ייפול',
    text: 'לא מחוסר מקצועיות - מעומס. ואותו פחד שקט שלא מרפה הוא בדיוק מה שמוביל לשחיקה ותחושת חמיצה.',
  },
];

const comparisonRows = [
  ['מסיימים יום ב-22:30 מול תיעוד', 'סוגרים את כל הקצוות ב-17:30'],
  ['המידע מפוזר בין 4–5 כלים שונים', 'הכל במקום אחד - תמונה ברורה תמיד'],
  ['מחכים שמטופלים יגיבו להודעות', 'תזכורות אוטומטיות - בלי לרדוף'],
  ['פוחדים שמשהו ייפול בין הכיסאות', 'ביטחון שהמערכת מחזיקה הכל'],
  ['כל יום מנהל אתכם', 'אתם מנהלים את היום'],
];

const emotionalDrivers = [
  {
    title: 'שקט שמגיע מסדר אמיתי',
    text: 'ORIA מחזירה רצף ובהירות - כדי שלא תצטרכו להחזיק הכל בראש לאורך כל היום.',
  },
  {
    title: 'אתם הבוסים של הקליניקה',
    text: 'בבוקר אחד אתם יודעים בדיוק איפה כל מטופל עומד. מה פתוח, מה ממתין, מה טופל. הדשבורד עובד בשבילכם - לא להפך.',
  },
  {
    title: 'פחות אדמין, יותר אנרגיה לטיפול',
    text: 'לא לעבוד מהר יותר על הבירוקרטיה - אלא להזדקק לה פחות. ולסגור יום בשעה נורמלית.',
  },
  {
    title: 'חיבור מחודש למשמעות',
    text: 'כשהמערכת מחזיקה את המבנה, נשאר לכם יותר מקום למה שבאמת חשוב: האדם שמולכם.',
  },
];

const testimonials = [
  {
    quote: 'עשרים שנה של טיפול, ומעולם לא הרגשתי שיש מי שמחזיק את הקליניקה שלי יחד איתי. עכשיו כן.',
    name: 'מיכל',
    role: 'פסיכולוגית קלינית',
  },
  {
    quote: 'חשבתי שזה עוד אפליקציה שתייצר לי משימות. ORIA עושה בדיוק להפך - היא מסירה אותן מהראש שלי.',
    name: 'אורלי',
    role: 'קואצ׳רית',
  },
  {
    quote: 'הצלחתי לסגור יום בשישי ב-16:00. עם שלושה ילדים קטנים, זה לא עוד פיצ׳ר - זו מתנה.',
    name: 'דניאל',
    role: 'מטפל CBT',
  },
];

const workflowSteps = [
  {
    title: 'יומן, מפגשים ותיעוד - הכל במקום אחד',
    text: 'לא עוד קפיצות בין כלים. כל מה שנוגע למטופל ולקליניקה מתכנס לסביבת עבודה ברורה אחת.',
  },
  {
    title: 'ORIA מסכמת, מזכירה ועוזרת לעשות סדר',
    text: 'המערכת עוזרת לסגור קצוות תפעוליים וקליניים - בלי להחליף את שיקול הדעת המקצועי שלכם.',
  },
  {
    title: 'סוגרים יום מהר יותר, בלי שהוא גורר אתכם',
    text: 'תיעוד, תזכורות, תשלומים ומעקב - בפחות חיכוך. כדי שהיום יישאר ביום ולא יגרר ללילה.',
  },
];

const outcomeCards = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    title: 'פחות no-shows, יותר יציבות',
    text: 'תזכורות אוטומטיות מפחיתות ביטולים - ומחזירות יציבות גם לרצף הטיפולי וגם להכנסה.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    title: 'פחות זמן על אדמין',
    text: 'תיעוד, בקשות תשלום ומעקב - בפחות מאמץ ובפחות קפיצות בין כלים.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
    title: 'ביטחון מקצועי לפני כל פגישה',
    text: 'תמונה ברורה של מה קרה ומה פתוח. קליניקה שנראית כמו שאתם מטפלים: רגועה ועקבית.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
    title: 'נוכחות טיפולית אמיתית',
    text: 'כשהתפעול פחות רועש, יש יותר מקום לנוכחות, לקשב ולקשר הטיפולי שבנייתם בכל פגישה.',
  },
];

const audienceCards = [
  {
    title: 'פסיכולוגים ופסיכולוגיות',
    text: 'שמרגישים שהתפעול גוזל מקום ואנרגיה מהעבודה הקלינית.',
  },
  {
    title: 'יועצים זוגיים ופרטניים',
    text: 'שרוצים רצף מסודר יותר בין פגישה לפגישה ופחות קצוות תלויים.',
  },
  {
    title: 'מטפלים עצמאיים',
    text: 'שרוצים לעבוד חכם יותר בלי להפוך לאנשי טכנולוגיה ובלי פרויקט הטמעה.',
  },
  {
    title: 'קליניקות קטנות',
    text: 'שמחפשות מערכת ברורה אחת במקום ריבוי כלים שלא מדברים זה עם זה.',
  },
];

const objectionCards = [
  {
    q: 'אין לי זמן ללמוד עכשיו מערכת חדשה',
    a: 'בדיוק בגלל זה ORIA נבנתה לעבוד מהיום הראשון - ללא הגדרות וללא הדרכה. הרעיון הוא להוריד עומס, לא ליצור עוד פרויקט הטמעה.',
  },
  {
    q: 'אני לא טכנולוגי בכלל',
    a: 'ORIA נבנתה למטפלים, לא להייטקיסטים. ממשק בעברית, פשוט וברור - אם שלחתם הודעת וואטסאפ, אתם מוכנים.',
  },
  {
    q: 'אני לא רוצה ש-AI יחליף את שיקול הדעת שלי',
    a: 'הוא לא מחליף - הוא מחזיק מבנה. ORIA מסכמת, מזכירה ומארגנת. ההחלטה הקלינית תמיד נשארת אצלכם.',
  },
  {
    q: 'מה עם פרטיות ואתיקה מקצועית?',
    a: 'המידע שלכם שמור ומוגן - לא משותף עם אף גורם חיצוני, לא משמש לאימון AI, ולא נגיש לאיש ללא אישורכם.',
    link: { href: '/security', text: 'לפירוט המלא על אבטחה ופרטיות' },
  },
  {
    q: 'האם המידע של המטופלים שלי באמת מאובטח?',
    a: 'כן. השרתים שלנו עומדים בתקני האבטחה המחמירים ביותר בעולם, הנתונים מוצפנים, וכל גישה לתיק מטופל מתועדת אוטומטית - כדי שתמיד תדעו מי ראה מה.',
    link: { href: '/security', text: 'קראו על האבטחה שלנו' },
  },
  {
    q: 'האם ORIA עומדת בחוק הגנת הפרטיות הישראלי?',
    a: 'כן. הנתונים מנוהלים בהתאם לחוק הגנת הפרטיות ותיקון 13. אתם שולטים במידע ורואים כל גישה אליו - בשקיפות מלאה.',
    link: { href: '/security', text: 'לפרטים על הציות לחוק' },
  },
  {
    q: 'אני כבר עובד עם יומן, וואטסאפ וקבצים',
    a: 'הבעיה היא לא שאין כלים - אלא שהמידע מפוזר ולא מדבר ביניהם. ORIA מחברת הכל לקו עבודה אחד.',
  },
  {
    q: 'איך אדע שזה באמת יחסוך לי זמן?',
    a: 'המדד פשוט: פחות קצוות פתוחים בסוף יום, פחות תיעוד שנשאר לסוף שבוע. רוב המשתמשים מרגישים הבדל בשבוע הראשון.',
  },
];

const securityPoints = [
  {
    title: 'הפרדה מוחלטת בין תיקי המטופלים',
    text: 'כל קליניקה מוגנת ב"אי" דיגיטלי נפרד - טכנולוגיית Row-Level Security ברמת בסיס הנתונים. גם תקלה נדירה בקוד לא תוכל לחשוף מידע בין מטפלים שונים.',
  },
  {
    title: 'תשתיות מאושרות SOC 2 Type II ו-SOC 3',
    text: 'שרתי ORIA פועלים על Railway - פלטפורמה שעמדה בביקורות האבטחה המחמירות ביותר בעולם. הנתונים הטקסטואליים מנוהלים על AWS באירופה, הקבצים על Google Cloud.',
  },
  {
    title: 'שקיפות מלאה: אתם יודעים הכל',
    text: 'כל גישה לתיק מטופל מתועדת אוטומטית - מי נכנס, מתי ומאיזה מכשיר. אין ארגזים שחורים. המידע שלכם לא משותף עם צדדים שלישיים ולא משמש לאימון מודלי AI.',
  },
  {
    title: 'נבנתה לעבודה טיפולית רגישה',
    text: 'לא כלי כללי שהותאם בדיעבד. מכל גישת AI ועד אחסון הנתונים - כל החלטה תכנונית נלקחה עם ההקשר הטיפולי והאתי בלב.',
  },
];

const mobileFeatures = [
  { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>, title: 'גישה מכל מכשיר', text: 'מהטלפון, מהטאבלט, מהמחשב - ORIA עובדת בכל מקום בלי להוריד כלום.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>, title: 'תזכורות בזמן אמת', text: 'קבלו עדכונים על פגישות ממתינות, תשלומים פתוחים ומשימות - ישירות לטלפון.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>, title: 'תיעוד מהיר בין פגישות', text: 'מיד לאחר פגישה, תיעדו ב-30 שניות מהטלפון - לפני שהפרטים מיטשטשים.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, title: 'מאובטח כמו על המחשב', text: 'אותה הצפנה, אותן הרשאות, אותה שמירת פרטיות - בכל מכשיר שתבחרו.' },
];

export const metadata = {
  title: 'ORIA AI - ניהול קליניקה חכם למטפלים',
  description:
    'ORIA AI עוזרת למטפלים, פסיכולוגים ויועצים זוגיים לנהל קליניקה בצורה רגועה יותר: תיעוד, תזכורות, תשלומים ורצף טיפולי במקום אחד.',
};

export default function LandingPage() {
  return (
    <StaticPageLayout activeNav="solution">
      <main className="lp-page">

        {/* ─── 1. HERO ─── */}
        <section className="lp-hero">
          <div className="container lp-hero-grid">
            <div className="lp-hero-copy">
              <p className="section-eyebrow">נבנה במיוחד לעבודה טיפולית</p>
              <h1>
                הטיפול שלכם.
                <br />
                <span className="highlight">הבינה של ORIA.</span>
              </h1>
              <p className="lp-hero-subtitle">
                המוח השני שלכם - מזכיר, מסכם ומארגן. כדי שלא תפחדו שמשהו חשוב נשכח, ותוכלו לסגור יום בשעה נורמלית.
              </p>

              <div className="lp-hero-actions">
                <a href="https://app.oriamind.ai" className="btn btn-primary btn-large">
                  אני רוצה לנסות - חינם ←
                </a>
                <a href="#lp-onboarding" className="btn btn-outline">איך מתחילים?</a>
              </div>

              <div className="lp-signal-row">
                <span>FREEMIUM חינם לתמיד</span>
                <span>ללא כרטיס אשראי</span>
                <span>ממשק פשוט בעברית</span>
                <span>ביטול בכל עת</span>
              </div>
            </div>

            <div className="lp-hero-panel">
              <div className="lp-hero-img-wrap">
                <Image
                  src="/screenshots/dashboard-mockup.png"
                  alt="לוח בקרה של ORIA AI - ניהול קליניקה"
                  width={580}
                  height={387}
                  className="lp-hero-dashboard-img"
                  priority
                  sizes="(max-width: 768px) 100vw, 580px"
                />
              </div>
              <div className="lp-panel-stack">
                <div className="lp-panel-card">
                  <p className="lp-panel-label">ההבטחה שלנו</p>
                  <p>שום פרט לא יפול בין הכיסאות רק כי אתם עמוסים.</p>
                </div>
                <div className="lp-panel-card">
                  <p className="lp-panel-label">ללא סיכון</p>
                  <p>FREEMIUM חינם לתמיד. ביטול מסלול בתשלום בכל עת, מיידי.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── EARLY BIRD COUNTDOWN ─── */}
        <CountdownBanner />

        {/* ─── 2. PAIN POINTS - numbered list ─── */}
        <section className="lp-section lp-section-soft">
          <div className="container lp-pain-grid">
            <div>
              <div className="section-header lp-section-header" style={{ textAlign: 'right', marginRight: 0 }}>
                <p className="section-eyebrow">האם זה מרגיש לכם מוכר?</p>
                <h2>אתם לא עייפים מהטיפול. <span className="highlight">אתם עייפים ממה שבא אחריו.</span></h2>
                <p className="section-subtitle">
                  רוב המטפלים לא מחפשים "מערכת". הם מחפשים הקלה אמיתית, תחושת ביטחון, ופחות
                  פחד לפספס משהו חשוב בתוך היום העמוס.
                </p>
              </div>

              <div className="lp-pain-list">
                {painPoints.map((item, index) => (
                  <div key={item.title} className="lp-pain-item">
                    <span className="lp-pain-num">0{index + 1}</span>
                    <div className="lp-pain-body">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lp-pain-photo-col">
              <div className="lp-pain-photo-wrap">
                <Image
                  src="/screenshots/therapist-at-work.png"
                  alt="מטפלת עובדת בשקט עם ORIA AI"
                  width={420}
                  height={630}
                  className="lp-pain-photo"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <div className="lp-pain-photo-badge">
                  <span>״ORIA מחזיקה את הסדר - אני מחזיקה את הקשר״</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. COMPARISON - two panels ─── */}
        <section className="lp-section">
          <div className="container">
            <div className="section-header lp-section-header">
              <p className="section-eyebrow">לפני ואחרי</p>
              <h2>מה משתנה כשהקליניקה <span className="highlight">עובדת בשבילכם</span></h2>
            </div>

            <div className="lp-compare-panels">
              <div className="lp-compare-panel lp-compare-panel-before">
                <p className="lp-compare-panel-label">בלי ORIA</p>
                {comparisonRows.map(([before]) => (
                  <div key={before} className="lp-compare-row">
                    <span className="lp-compare-marker lp-compare-marker-dash">-</span>
                    <span>{before}</span>
                  </div>
                ))}
              </div>
              <div className="lp-compare-panel lp-compare-panel-after">
                <p className="lp-compare-panel-label">עם ORIA AI</p>
                {comparisonRows.map(([, after]) => (
                  <div key={after} className="lp-compare-row">
                    <span className="lp-compare-marker lp-compare-marker-check">✓</span>
                    <span>{after}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lp-compare-visual">
              <Image
                src="/screenshots/calm-closing.png"
                alt="מטפלת מסיימת יום עבודה רגוע עם ORIA AI"
                width={1536}
                height={1024}
                className="lp-compare-visual-img"
                sizes="(max-width: 768px) 100vw, 1200px"
                loading="lazy"
              />
              <a href="https://app.oriamind.ai" className="btn btn-primary btn-large lp-compare-visual-cta">
                גם אני רוצה לסגור ב-17:30 ←
              </a>
            </div>
          </div>
        </section>

        {/* ─── 4. EMOTIONAL DRIVERS + TESTIMONIALS ─── */}
        <section className="lp-section lp-dark-section">
          <div className="container">
            <div className="section-header lp-section-header lp-section-header-dark">
              <p className="section-eyebrow">למה מטפלים בוחרים ב-ORIA</p>
              <h2>לא בשביל טכנולוגיה. <span className="highlight">בשביל שקט.</span></h2>
            </div>

            <div className="lp-why-strip">
              {emotionalDrivers.map((item) => (
                <div key={item.title} className="lp-why-item">
                  <span className="lp-why-accent" />
                  <div className="lp-why-body">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lp-testimonial-row">
              {testimonials.map((t) => (
                <article key={t.name} className="lp-testimonial-card">
                  <p className="lp-testimonial-text">״{t.quote}״</p>
                  <p className="lp-testimonial-author">- {t.name}, {t.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 5. HOW IT WORKS - connected timeline ─── */}
        <section className="lp-section">
          <div className="container">
            <div className="section-header lp-section-header">
              <p className="section-eyebrow">איך זה עובד</p>
              <h2>לא צריך לשנות את מי שאתם כמטפלים. רק <span className="highlight">להפסיק לנהל הכל לבד.</span></h2>
            </div>

            <div className="lp-timeline-wrapper">
              {workflowSteps.map((step, index) => (
                <div key={step.title} className="lp-timeline-col">
                  <div className="lp-timeline-node">
                    <span className="lp-step-number">0{index + 1}</span>
                  </div>
                  <div className="lp-timeline-card">
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lp-workflow-visual">
              <Image
                src="/screenshots/workflow-preview.png"
                alt="ORIA AI - ניהול קליניקה על מחשב וטלפון"
                width={1536}
                height={1024}
                className="lp-workflow-img"
                sizes="(max-width: 768px) 100vw, 1200px"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ─── 5.5 ONBOARDING - how to get started ─── */}
        <section className="lp-section lp-section-soft" id="lp-onboarding">
          <div className="container">
            <div className="section-header lp-section-header">
              <p className="section-eyebrow">מתחילים בדקה אחת</p>
              <h2>פשוט כמו שזה נראה. <span className="highlight">ממש ככה.</span></h2>
              <p className="section-subtitle">
                אין צורך בהדרכה, אין מה להוריד, אין כרטיס אשראי. נכנסים, נרשמים, ומתחילים.
              </p>
            </div>

            <div className="lp-onboarding-grid">
              {/* Step 1 */}
              <div className="lp-onboarding-step">
                <div className="lp-onboarding-step-label">
                  <span className="lp-onboarding-num">01</span>
                  <div>
                    <h3>לחצו על "הרשמה"</h3>
                    <p>
                      בדף ההתחברות תמצאו שני אפשרויות - הרשמה עם אימייל וסיסמה,
                      או <strong>הרשמה מהירה עם חשבון Google</strong> (מומלץ, לוקח 10 שניות).
                    </p>
                  </div>
                </div>
                <div className="lp-onboarding-screenshot">
                  <Image
                    src="/screenshots/signup.png"
                    alt="מסך הרשמה ל-ORIA AI"
                    width={360}
                    height={520}
                    className="lp-screenshot-img"
                    sizes="(max-width: 768px) 100vw, 360px"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="lp-onboarding-step lp-onboarding-step-reverse">
                <div className="lp-onboarding-step-label">
                  <span className="lp-onboarding-num">02</span>
                  <div>
                    <h3>כניסה בפעם הבאה</h3>
                    <p>
                      אחרי הרשמה חד-פעמית, נכנסים עם אימייל וסיסמה או לוחצים
                      <strong> "התחבר עם Google"</strong> - ומיד בפנים.
                    </p>
                  </div>
                </div>
                <div className="lp-onboarding-screenshot">
                  <Image
                    src="/screenshots/login.png"
                    alt="מסך כניסה ל-ORIA AI"
                    width={360}
                    height={520}
                    className="lp-screenshot-img"
                    sizes="(max-width: 768px) 100vw, 360px"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="lp-inline-actions" style={{ marginTop: '3rem' }}>
              <a href="https://app.oriamind.ai" className="btn btn-primary btn-large">
                מתחילים עכשיו - חינם ←
              </a>
            </div>
          </div>
        </section>

        {/* ─── 6. MID-PAGE CTA STRIP ─── */}
        <div className="lp-mid-cta-bar">
          <div className="container lp-mid-cta-inner">
            <p>FREEMIUM חינם לתמיד - מספיק להיכנס ולהרגיש את ההבדל.</p>
            <a href="https://app.oriamind.ai" className="btn btn-primary">
              אני רוצה לנסות ←
            </a>
          </div>
        </div>

        {/* ─── 7. OUTCOMES ─── */}
        <section className="lp-section lp-section-soft">
          <div className="container">
            <div className="section-header lp-section-header">
              <p className="section-eyebrow">מה משתנה ביומיום</p>
              <h2>פחות חיכוך תפעולי, יותר רצף, יותר בהירות מקצועית.</h2>
            </div>

            <div className="lp-feature-band lp-feature-band-4">
              {outcomeCards.map((item) => (
                <article key={item.title} className="lp-feature-tile">
                  <div className="lp-feature-tile-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 8. MOBILE ─── */}
        <section className="lp-section">
          <div className="container">
            <div className="lp-mobile-grid">
              <div className="lp-mobile-copy">
                <p className="section-eyebrow">עובדים גם מהפלאפון</p>
                <h2>הקליניקה שלכם תמיד <span className="highlight">בכיס.</span></h2>
                <p className="lp-hero-subtitle" style={{ fontSize: '1.05rem' }}>
                  ORIA עובדת מהדפדפן בכל מכשיר - אין מה להוריד, אין צורך בגרסה נפרדת.
                  פתחו מהטלפון בדיוק כמו שהייתם פותחים מהמחשב.
                </p>

                <div className="lp-mobile-features">
                  {mobileFeatures.map((f) => (
                    <div key={f.title} className="lp-mobile-feature-item">
                      <div className="lp-mobile-icon">{f.icon}</div>
                      <div>
                        <strong>{f.title}</strong>
                        <p>{f.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lp-mobile-visual">
                <div className="lp-mobile-img-wrap">
                  <Image
                    src="/screenshots/mobile-app.png"
                    alt="ORIA AI על פלאפון - ניהול תורים"
                    width={300}
                    height={450}
                    className="lp-mobile-mockup-img"
                    sizes="(max-width: 768px) 100vw, 300px"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 9. AUDIENCE ─── */}
        <section className="lp-section lp-section-soft">
          <div className="container">
            <div className="section-header lp-section-header">
              <p className="section-eyebrow">למי האפליקציה מתאימה</p>
              <h2>למי שרוצה לעבוד רגוע יותר, בלי לוותר על עומק, מקצועיות או חופש אישי.</h2>
            </div>

            <div className="lp-audience-grid">
              {audienceCards.map((item) => (
                <article key={item.title} className="lp-audience-card">
                  <span className="lp-audience-check">✓</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="lp-inline-actions" style={{ marginTop: '2.5rem' }}>
              <a href="https://app.oriamind.ai" className="btn btn-primary">
                זה בשבילי - להתחיל בחינם ←
              </a>
            </div>
          </div>
        </section>

        {/* ─── 10. SECURITY ─── */}
        <section className="lp-section lp-security-section">
          <div className="container">
            <div className="section-header lp-section-header">
              <p className="section-eyebrow">ביטחון, פרטיות ואתיקה</p>
              <h2>אם יש לכם רגישות סביב סודיות, אתם לא לבד. זה לב העניין, לא התנגדות צדדית.</h2>
              <p className="section-subtitle">
                לכן המסר הוא לא "תסמכו עלינו וזהו" - אלא מערכת שנבנתה לכבד את העולם הטיפולי ואת
                הצורך שלכם להרגיש בטוחים גם מקצועית וגם טכנולוגית.
              </p>
            </div>

            <div className="lp-security-list">
              {securityPoints.map((item) => (
                <div key={item.title} className="lp-security-item">
                  <span className="lp-security-check">✓</span>
                  <div>
                    <strong className="lp-security-title">{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lp-inline-actions">
              <Link href="/security" className="btn btn-outline">לקרוא על אבטחה ופרטיות</Link>
            </div>
          </div>
        </section>

        {/* ─── 11. OBJECTIONS / FAQ - accordion ─── */}
        <section className="lp-section lp-section-soft" id="lp-objections">
          <div className="container">
            <div className="section-header lp-section-header">
              <p className="section-eyebrow">שאלות נפוצות</p>
              <h2>אם משהו בכם אומר "זה נשמע טוב, אבל..." - בדיוק כאן עונים.</h2>
            </div>

            <div className="lp-accordion-wrapper">
              <LandingFaq items={objectionCards} />
            </div>
          </div>
        </section>

        {/* ─── 12. EARLY BIRD HOOK ─── */}
        <section className="lp-section lp-section-soft" id="pricing">
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, #171938 0%, #2b2870 100%)',
              borderRadius: '20px',
              padding: 'clamp(2rem,4vw,3rem) clamp(1.5rem,4vw,3.5rem)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg,#625DE5,#48B7FF)' }} />
              <div style={{ flex: 1, minWidth: '240px' }}>
                <span style={{
                  background: 'linear-gradient(90deg,#625DE5,#48B7FF)',
                  color: '#fff',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  display: 'inline-block',
                  marginBottom: '0.75rem',
                }}>🔥 מחיר השקה - 100 מקומות בלבד</span>
                <h2 style={{ color: '#fff', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.25 }}>
                  MIND PREMIUM ב-<span style={{ color: '#48B7FF' }}>₪99</span> בלבד<sup style={{ fontSize: '0.6em', verticalAlign: 'super' }}>*</sup>
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', marginBottom: '0.5rem', lineHeight: 1.5 }}>
                  מחיר השקה ל-100 המצטרפים הראשונים.{' '}
                  <span style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'line-through' }}>₪289/חודש</span>
                  {' '}<span style={{ background: 'linear-gradient(90deg,#625DE5,#48B7FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700 }}>חוסכים ₪190/חודש</span>
                </p>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', marginBottom: 0, lineHeight: 1.4 }}>
                  * המחיר קבוע בהתחייבות שנתית
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-start' }}>
                <a href="https://app.oriamind.ai" className="btn btn-white btn-large">
                  להתחיל חינם ←
                </a>
                <Link href="/pricing" style={{
                  color: 'rgba(255,255,255,0.65)',
                  fontSize: '0.82rem',
                  textAlign: 'center',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}>לצפייה בכל המסלולים</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 13. FINAL CTA ─── */}
        <section className="lp-section lp-final-cta">
          <div className="container lp-final-shell">
            <p className="section-eyebrow">הצעד הבא</p>
            <h2>מוכנים לנהל את הקליניקה בחכמה?</h2>
            <p>
              הצטרפו למטפלים שבחרו לעבוד חכם יותר - ולחזור לסיבה שבחרו בטיפול מלכתחילה.
              <span className="brand-name"> ORIA</span> חינם לתמיד בגרסת FREEMIUM, ללא כרטיס אשראי וללא התחייבות.
            </p>
            <div className="lp-final-actions">
              <a href="https://app.oriamind.ai" className="btn btn-white btn-large">
                אני רוצה לנסות - זה חינם ←
              </a>
              <a
                href="https://wa.me/972524824210?text=היי, אני שוקל%2Fת להצטרף ל-ORIA ואשמח לשאול כמה שאלות"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline lp-final-outline"
              >
                לדבר עם הצוות
              </a>
            </div>
            <p className="lp-final-note">ללא סיכון - FREEMIUM חינם לתמיד · ביטול מסלול בתשלום מיידי בכל עת · תמיכה בעברית</p>
          </div>
        </section>

      </main>
    </StaticPageLayout>
  );
}
