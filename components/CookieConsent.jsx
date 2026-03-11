'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'oria_cookie_consent';
const EXPIRY_DAYS = 30;

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const ts = parseInt(stored, 10);
        if (Date.now() - ts < EXPIRY_DAYS * 24 * 60 * 60 * 1000) return;
      }
      setVisible(true);
    } catch {}
  }, []);

  const accept = () => {
    try { localStorage.setItem(STORAGE_KEY, Date.now().toString()); } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <style>{`
        #oria-cookie-bar{position:fixed;bottom:0;left:0;right:0;z-index:9999;background:#fff;border-top:1px solid #e8e8f5;box-shadow:0 -4px 24px rgba(98,93,229,.08);padding:16px 24px;display:flex;align-items:center;justify-content:space-between;gap:16px;direction:rtl;font-family:"Heebo","Arial Hebrew",Arial,sans-serif;font-size:14px;color:#171938;animation:slideUpBar .35s ease}
        #oria-cookie-bar p{margin:0;line-height:1.6;flex:1;color:#444}
        .oria-cookie-actions{display:flex;align-items:center;gap:16px;flex-shrink:0}
        .oria-cookie-accept{background:#625DE5;color:#fff;border:none;border-radius:8px;padding:9px 22px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;transition:background .2s,transform .15s;white-space:nowrap}
        .oria-cookie-accept:hover{background:#4f4ac7;transform:translateY(-1px)}
        .oria-cookie-more{color:#625DE5;font-size:13px;white-space:nowrap;border-bottom:1px solid transparent;transition:border-color .2s;text-decoration:none}
        .oria-cookie-more:hover{border-bottom-color:#625DE5}
        @keyframes slideUpBar{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}
        @media(max-width:600px){#oria-cookie-bar{flex-direction:column;align-items:flex-start;gap:12px}.oria-cookie-actions{width:100%}}
      `}</style>
      <div id="oria-cookie-bar" role="region" aria-label="הסכמה לעוגיות">
        <p>אנחנו משתמשים בעוגיות כדי להבטיח שתקבלו את החוויה הטובה ביותר ב-ORIA AI ולצורכי אנליטיקה. המשך הגלישה מהווה הסכמה לכך.</p>
        <div className="oria-cookie-actions">
          <button className="oria-cookie-accept" onClick={accept}>אישור</button>
          <Link href="/privacy" className="oria-cookie-more">מידע נוסף</Link>
        </div>
      </div>
    </>
  );
}
