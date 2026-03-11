import StaticPageLayout from '../../components/StaticPageLayout';

export const metadata = { title: 'אודות - ORIA AI' };

export default function AboutPage() {
  return (
    <StaticPageLayout>
      <section className="page-header">
        <div className="container">
          <h1>אודות <span className="brand-name">ORIA</span> AI</h1>
          <p>הסיפור מאחורי ORIA AI</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-wrapper">

            <div className="content-block">
              <h2>החזון שלנו</h2>
              <p><span className="brand-name">ORIA</span> AI נולדה מתוך הבנה עמוקה של האתגרים היומיומיים שמטפלים מתמודדים איתם. אנחנו מאמינים שמטפלים צריכים להתמקד במה שהם עושים הכי טוב – לטפל באנשים – ולא לבזבז שעות יקרות על בירוקרטיה ותיעוד.</p>
              <p>החזון שלנו הוא לתת לכל מטפל "מוח שני" – שותף דיגיטלי חכם שזוכר, מארגן ומסייע, כדי שהמטפל יוכל להיות נוכח באמת בחדר הטיפולים.</p>
            </div>

            <div className="content-block">
              <h2>הסיפור שלנו</h2>
              <p><span className="brand-name">ORIA</span> AI נוסדה בשנת 2025 על ידי אביעד אליצור, מתוך שילוב ייחודי של תשוקה לעולם הטיפול וניסיון רב שנים בפיתוח מערכות טכנולוגיות מורכבות בעולמות הסייבר.</p>
              <p>לאחר שיחות רבות עם מטפלים, פסיכולוגים ומאמנים, הבנו שהאתגר המרכזי שלהם אינו חוסר במקצועיות או בכלים – אלא בזמן ובאנרגיה. "המשמרת השנייה" של תיעוד וניהול גוזלת מהם את השעות היקרות ביותר.</p>
              <p>אז החלטנו לבנות פתרון אחר. לא עוד מערכת ניהול קרה, אלא שותפה חכמה שמבינה את עולם הטיפול ומדברת בשפה שלכם.</p>
            </div>

            <div className="content-block">
              <h2>הערכים שלנו</h2>
              <div className="values-grid">
                <div className="value-card">
                  <div className="value-icon">🎯</div>
                  <h3>מיקוד במטפל</h3>
                  <p>כל החלטה שאנחנו מקבלים נבחנת דרך העיניים של המטפל. האם זה יחסוך לו זמן? האם זה יעזור לו להיות מטפל טוב יותר?</p>
                </div>
                <div className="value-card">
                  <div className="value-icon">🔐</div>
                  <h3>אבטחה ופרטיות</h3>
                  <p>המידע של המטופלים שלכם הוא הדבר הכי רגיש שיש. אנחנו מתייחסים אליו בהתאם, עם סטנדרטים מחמירים של אבטחה.</p>
                </div>
                <div className="value-card">
                  <div className="value-icon">🤝</div>
                  <h3>שותפות אמיתית</h3>
                  <p>אנחנו לא ספקי תוכנה – אנחנו שותפים שלכם להצלחה. הצוות שלנו זמין, קשוב ומחויב להצלחה שלכם.</p>
                </div>
                <div className="value-card">
                  <div className="value-icon">💡</div>
                  <h3>חדשנות מתמדת</h3>
                  <p>הטכנולוגיה מתפתחת, וכך גם אנחנו. אנחנו ממשיכים לפתח ולשפר את המערכת כדי לתת לכם את הכלים הכי טובים.</p>
                </div>
              </div>
            </div>

            <div className="content-block">
              <h2>הצוות</h2>
              <div className="team-section">
                <div className="team-member">
                  <div className="member-image">
                    <div className="placeholder-avatar">א</div>
                  </div>
                  <h3>אביעד אליצור</h3>
                  <p className="member-role">מייסד ומנכ&quot;ל</p>
                  <p>יזם טכנולוגי עם ניסיון של שנים בפיתוח מערכות מורכבות. משלב תשוקה לטכנולוגיה עם אמונה עמוקה בכוח של טיפול נפשי.</p>
                </div>
              </div>
            </div>

            <div className="content-block highlight-block">
              <h2>רוצים לדעת עוד?</h2>
              <p>נשמח לספר לכם עוד על <span className="brand-name">ORIA</span> AI ולהראות לכם איך היא יכולה לשנות את הקליניקה שלכם.</p>
              <div className="cta-buttons">
                <a href="https://wa.me/972524824210?text=היי אביעד, אשמח לשמוע עוד על ORIA AI" className="btn btn-outline" target="_blank" rel="noreferrer">דברו איתנו</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </StaticPageLayout>
  );
}
