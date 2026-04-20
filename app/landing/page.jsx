import Link from 'next/link';
import StaticPageLayout from '../../components/StaticPageLayout';

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
    icon: '📅',
    title: 'פחות no-shows, יותר יציבות',
    text: 'תזכורות אוטומטיות מפחיתות ביטולים - ומחזירות יציבות גם לרצף הטיפולי וגם להכנסה.',
  },
  {
    icon: '⏱',
    title: 'פחות זמן על אדמין',
    text: 'תיעוד, בקשות תשלום ומעקב - בפחות מאמץ ובפחות קפיצות בין כלים.',
  },
  {
    icon: '🎯',
    title: 'ביטחון מקצועי לפני כל פגישה',
    text: 'תמונה ברורה של מה קרה ומה פתוח. קליניקה שנראית כמו שאתם מטפלים: רגועה ועקבית.',
  },
  {
    icon: '💙',
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
    a: 'זו בדיוק הסיבה שהמערכת בנויה בפשטות. הרעיון הוא להוריד עומס, לא ליצור עוד פרויקט הטמעה.',
  },
  {
    q: 'אני לא טכנולוגי בכלל',
    a: 'ORIA נבנתה למטפלים, לא להייטקיסטים. ממשק פשוט בעברית, בלי מורכבות מיותרת.',
  },
  {
    q: 'אני לא רוצה ש-AI יחליף את שיקול הדעת שלי',
    a: 'הוא לא מחליף. הוא מארגן, מסכם ומחזיק מבנה - אתם נשארים מי שמבינים את האדם וההחלטה הקלינית.',
  },
  {
    q: 'מה עם פרטיות ואתיקה מקצועית?',
    a: 'ORIA נבנתה מהיסוד עם ההקשר הטיפולי. אתם יודעים מה נשמר, איפה, ומי יכול לגשת - ללא הפתעות.',
  },
  {
    q: 'אני כבר עובד עם יומן, וואטסאפ וקבצים',
    a: 'הבעיה היא לא שאין כלים - אלא שהמידע מפוזר. ORIA מחברת את מה שכבר קורה לקו עבודה אחד.',
  },
  {
    q: 'איך אדע שזה באמת יחסוך לי זמן?',
    a: 'המדד הוא פשוט: האם בסוף היום יש פחות קצוות פתוחים? רוב המשתמשים מרגישים את ההבדל בשבוע הראשון.',
  },
];

const securityPoints = [
  {
    title: 'שפה שמכבדת את העולם הטיפולי',
    text: 'סודיות, פרטיות ואתיקה הם לא תוספת - הם מרכז ההבנה ממנה נבנתה ORIA.',
  },
  {
    title: 'שליטה ושקיפות על המידע',
    text: 'אתם יודעים מה נשמר, איפה ומי יכול לגשת אליו. ללא ארגזים שחורים, ללא הפתעות.',
  },
  {
    title: 'נבנתה לעבודה מקצועית רגישה',
    text: 'לא כלי כללי שהותאם בדיעבד - אלא מערכת שנבנתה מהיסוד עם ההקשר הטיפולי בלב.',
  },
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
                <a href="https://clinic.therawiseai.com" className="btn btn-primary btn-large">
                  אני רוצה לנסות - חינם ←
                </a>
                <a href="#lp-objections" className="btn btn-outline">ראו אם זה מתאים לכם</a>
              </div>

              <div className="lp-signal-row">
                <span>FREEMIUM חינם לתמיד</span>
                <span>ללא כרטיס אשראי</span>
                <span>ממשק פשוט בעברית</span>
                <span>ביטול בכל עת</span>
              </div>
            </div>

            <div className="lp-hero-panel">
              <div className="lp-panel-card lp-panel-card-primary">
                <p className="lp-panel-label">מה ORIA עושה בפועל</p>
                <h2>מחזירה סדר, שליטה ורצף - בלי להוסיף עוד מערכת כבדה לחיים שלכם.</h2>
                <p>
                  יומן, תיעוד, תזכורות, תשלומים ומעקב - במקום אחד. פחות רדיפה
                  אחרי פרטים, יותר תחושה שיש מי שמחזיק יחד אתכם את הקליניקה.
                </p>
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

        {/* ─── 2. PAIN POINTS - numbered list ─── */}
        <section className="lp-section lp-section-soft">
          <div className="container">
            <div className="section-header lp-section-header">
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
        </section>

        {/* ─── 3. COMPARISON - two dramatic panels ─── */}
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

            <div className="lp-inline-actions" style={{ marginTop: '2.5rem' }}>
              <a href="https://clinic.therawiseai.com" className="btn btn-primary btn-large">
                אני רוצה את ה"עם ORIA" ←
              </a>
            </div>
          </div>
        </section>

        {/* ─── 4. EMOTIONAL DRIVERS + TESTIMONIALS ─── */}
        <section className="lp-section lp-dark-section">
          <div className="container">
            <div className="section-header lp-section-header lp-section-header-dark">
              <p className="section-eyebrow">למה מטפלים בוחרים ב-ORIA</p>
              <h2>לא בשביל טכנולוגיה. בשביל שקט, שליטה, ביטחון - והרגשה שהקליניקה עובדת איתם, לא נגדם.</h2>
            </div>

            <div className="lp-card-grid lp-card-grid-2">
              {emotionalDrivers.map((item) => (
                <article key={item.title} className="lp-fit-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            {/* Featured testimonial layout */}
            <div className="lp-testimonial-featured">
              <div className="lp-testimonial-main">
                <p className="lp-testimonial-quote-mark">״</p>
                <p className="lp-testimonial-text-large">{testimonials[0].quote}</p>
                <p className="lp-testimonial-author-large">- {testimonials[0].name}, {testimonials[0].role}</p>
              </div>
              <div className="lp-testimonial-secondary">
                {testimonials.slice(1).map((t) => (
                  <article key={t.name} className="lp-testimonial-card">
                    <p className="lp-testimonial-text">״{t.quote}״</p>
                    <p className="lp-testimonial-author">- {t.name}, {t.role}</p>
                  </article>
                ))}
              </div>
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
          </div>
        </section>

        {/* ─── 6. MID-PAGE CTA STRIP ─── */}
        <div className="lp-mid-cta-bar">
          <div className="container lp-mid-cta-inner">
            <p>FREEMIUM חינם לתמיד - מספיק להיכנס ולהרגיש את ההבדל.</p>
            <a href="https://clinic.therawiseai.com" className="btn btn-primary">
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
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 8. AUDIENCE ─── */}
        <section className="lp-section">
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
              <a href="https://clinic.therawiseai.com" className="btn btn-primary">
                זה בשבילי - להתחיל בחינם ←
              </a>
            </div>
          </div>
        </section>

        {/* ─── 9. SECURITY ─── */}
        <section className="lp-section lp-section-soft lp-security-section">
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

        {/* ─── 10. OBJECTIONS / FAQ ─── */}
        <section className="lp-section" id="lp-objections">
          <div className="container">
            <div className="section-header lp-section-header">
              <p className="section-eyebrow">שאלות נפוצות</p>
              <h2>אם משהו בכם אומר "זה נשמע טוב, אבל..." - זה טבעי. בדיוק כאן צריך לענות.</h2>
            </div>

            <div className="lp-faq-list lp-faq-grid">
              {objectionCards.map((item) => (
                <article key={item.q} className="lp-faq-item">
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 11. FINAL CTA ─── */}
        <section className="lp-section lp-final-cta">
          <div className="container lp-final-shell">
            <p className="section-eyebrow">הצעד הבא</p>
            <h2>מוכנים לנהל את הקליניקה בחכמה?</h2>
            <p>
              הצטרפו למטפלים שבחרו לעבוד חכם יותר - ולחזור לסיבה שבחרו בטיפול מלכתחילה.
              <span className="brand-name"> ORIA</span> חינם לתמיד בגרסת FREEMIUM, ללא כרטיס אשראי וללא התחייבות.
            </p>
            <div className="lp-final-actions">
              <a href="https://clinic.therawiseai.com" className="btn btn-white btn-large">
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
