'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'oria_cookie_consent';
const EXPIRY_DAYS = 30;

function updateGtag(statistical, marketing) {
  try {
    window.gtag('consent', 'update', {
      analytics_storage: statistical ? 'granted' : 'denied',
      ad_storage: marketing ? 'granted' : 'denied',
      ad_user_data: marketing ? 'granted' : 'denied',
      ad_personalization: marketing ? 'granted' : 'denied',
    });
  } catch {}
}

function saveConsent(statistical, marketing, setVisible) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      timestamp: Date.now(),
      essential: true,
      statistical,
      marketing,
    }));
  } catch {}
  updateGtag(statistical, marketing);
  setVisible(false);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [prefs, setPrefs] = useState({ statistical: true, marketing: true });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const data = JSON.parse(stored);
        const ts = data.timestamp ?? parseInt(stored, 10);
        if (Date.now() - ts < EXPIRY_DAYS * 24 * 60 * 60 * 1000) {
          updateGtag(data.statistical ?? true, data.marketing ?? true);
          return;
        }
      }
      setVisible(true);
    } catch { setVisible(true); }
  }, []);

  if (!visible) return null;

  const acceptAll = () => saveConsent(true, true, setVisible);
  const rejectNonEssential = () => saveConsent(false, false, setVisible);
  const savePreferences = () => saveConsent(prefs.statistical, prefs.marketing, setVisible);

  return (
    <>
      <style>{`
        #oria-cookie-bar{position:fixed;bottom:0;left:0;right:0;z-index:9999;background:#fff;border-top:1px solid #e8e8f5;box-shadow:0 -4px 24px rgba(98,93,229,.08);padding:16px 24px;display:flex;align-items:flex-start;justify-content:space-between;gap:16px;direction:rtl;font-family:"Heebo","Arial Hebrew",Arial,sans-serif;font-size:14px;color:#171938;animation:slideUpBar .35s ease;flex-wrap:wrap}
        #oria-cookie-bar p{margin:0;line-height:1.6;flex:1;color:#444;min-width:0}
        .oria-cookie-readmore{background:none;border:none;color:#3B82F6;font-size:14px;font-family:inherit;cursor:pointer;padding:0;text-decoration:underline;display:inline}
        .oria-cookie-readmore:hover{color:#2563eb}
        #oria-cookie-bar a{color:#3B82F6;text-decoration:underline}
        #oria-cookie-bar a:hover{color:#2563eb}
        .oria-cookie-actions{display:flex;align-items:center;gap:12px;flex-shrink:0;flex-wrap:wrap}
        .oria-cookie-btn{border-radius:8px;padding:9px 20px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;transition:background .2s,transform .15s,border-color .2s;white-space:nowrap;line-height:1}
        .oria-cookie-btn-primary{background:#3B82F6;color:#fff;border:none}
        .oria-cookie-btn-primary:hover{background:#2563eb;transform:translateY(-1px)}
        .oria-cookie-btn-secondary{background:#fff;color:#3B82F6;border:1.5px solid #3B82F6}
        .oria-cookie-btn-secondary:hover{background:#eff6ff}
        .oria-cookie-btn-ghost{background:transparent;color:#3B82F6;border:none;text-decoration:underline;padding:9px 4px;font-size:13px}
        .oria-cookie-btn-ghost:hover{color:#2563eb}
        .oria-cookie-prefs{width:100%;margin-top:12px;border-top:1px solid #e8e8f5;padding-top:14px;display:flex;flex-direction:column;gap:12px}
        .oria-cookie-pref-row{display:flex;align-items:center;justify-content:space-between;gap:16px}
        .oria-cookie-pref-label{font-size:14px;color:#171938;font-weight:500}
        .oria-cookie-pref-label span{display:block;font-size:12px;color:#888;font-weight:400;margin-top:2px}
        .oria-toggle{position:relative;display:inline-block;width:44px;height:24px;flex-shrink:0}
        .oria-toggle input{opacity:0;width:0;height:0}
        .oria-toggle-slider{position:absolute;inset:0;background:#ccc;border-radius:24px;cursor:pointer;transition:background .2s}
        .oria-toggle-slider:before{content:"";position:absolute;height:18px;width:18px;right:3px;top:3px;background:#fff;border-radius:50%;transition:transform .2s}
        .oria-toggle input:checked + .oria-toggle-slider{background:#3B82F6}
        .oria-toggle input:checked + .oria-toggle-slider:before{transform:translateX(-20px)}
        .oria-toggle input:disabled + .oria-toggle-slider{opacity:.55;cursor:not-allowed}
        .oria-cookie-save-prefs{margin-top:4px;align-self:flex-start}
        @keyframes slideUpBar{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}
        @media(max-width:600px){#oria-cookie-bar{flex-direction:column;align-items:flex-start;gap:12px}.oria-cookie-actions{width:100%}}
      `}</style>

      <div id="oria-cookie-bar" role="region" aria-label="הסכמה לעוגיות">
        <p>
          האתר עושה שימוש בקבצי COOKIES חיוניים ושאינם חיוניים (סטטיסטיים ושיווקיים).{' '}
          {!expanded && (
            <button className="oria-cookie-readmore" onClick={() => setExpanded(true)}>
              קרא עוד
            </button>
          )}
          {expanded && (
            <>
              בכפוף להסכמתך, נעשה שימוש בקבצי COOKIES סטטיסטיים ושיווקיים לצורך ניתוח דפוסי
              שימוש, שיפור חוויית הגלישה והצגת פרסומות מותאמות אישית. באפשרותך לאשר קבצי
              COOKIES שאינם חיוניים, לדחות או להתאים את ההגדרות לפי בחירתך.{' '}
              למידע נוסף עיין ב<Link href="/privacy">מדיניות הפרטיות</Link>.{' '}
              <button className="oria-cookie-readmore" onClick={() => setExpanded(false)}>
                קרא פחות
              </button>
            </>
          )}
        </p>

        <div className="oria-cookie-actions">
          <button className="oria-cookie-btn oria-cookie-btn-primary" onClick={acceptAll}>
            אישור כל העוגיות
          </button>
          <button className="oria-cookie-btn oria-cookie-btn-secondary" onClick={rejectNonEssential}>
            דחיית עוגיות שאינן חיוניות
          </button>
          <button
            className="oria-cookie-btn oria-cookie-btn-ghost"
            onClick={() => setShowPrefs(v => !v)}
            aria-expanded={showPrefs}
          >
            ניהול העדפות
          </button>
        </div>

        {showPrefs && (
          <div className="oria-cookie-prefs">
            <div className="oria-cookie-pref-row">
              <div className="oria-cookie-pref-label">
                עוגיות חיוניות
                <span>נדרשות לתפעול האתר - לא ניתן לבטל</span>
              </div>
              <label className="oria-toggle">
                <input type="checkbox" checked disabled readOnly />
                <span className="oria-toggle-slider" />
              </label>
            </div>

            <div className="oria-cookie-pref-row">
              <div className="oria-cookie-pref-label">
                עוגיות סטטיסטיות
                <span>ניתוח דפוסי שימוש ושיפור חוויית הגלישה</span>
              </div>
              <label className="oria-toggle">
                <input
                  type="checkbox"
                  checked={prefs.statistical}
                  onChange={e => setPrefs(p => ({ ...p, statistical: e.target.checked }))}
                />
                <span className="oria-toggle-slider" />
              </label>
            </div>

            <div className="oria-cookie-pref-row">
              <div className="oria-cookie-pref-label">
                עוגיות שיווקיות
                <span>הצגת פרסומות מותאמות אישית</span>
              </div>
              <label className="oria-toggle">
                <input
                  type="checkbox"
                  checked={prefs.marketing}
                  onChange={e => setPrefs(p => ({ ...p, marketing: e.target.checked }))}
                />
                <span className="oria-toggle-slider" />
              </label>
            </div>

            <button
              className="oria-cookie-btn oria-cookie-btn-primary oria-cookie-save-prefs"
              onClick={savePreferences}
            >
              שמירת העדפות
            </button>
          </div>
        )}
      </div>
    </>
  );
}
