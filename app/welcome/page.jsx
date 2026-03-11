'use client';
import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const PROGRESS_MESSAGES = [
  { text: 'מאמתים פרטים...', progress: 10 },
  { text: 'מעבדים תשלום...', progress: 25 },
  { text: 'יוצרים חשבון...', progress: 50 },
  { text: 'מגדירים הרשאות...', progress: 70 },
  { text: 'מסיימים הגדרות...', progress: 85 },
  { text: 'כמעט שם!', progress: 95 },
];

function WelcomeContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [status, setStatus] = useState('loading'); // loading | success | error
  const [title, setTitle] = useState('מכינים את החשבון שלכם...');
  const [subtitle, setSubtitle] = useState('זה ייקח כמה רגעים. אנחנו מגדירים את כל מה שצריך כדי שתוכלו להתחיל מיד.');
  const [badgeText, setBadgeText] = useState('מעבדים את התשלום');
  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState('מאמתים פרטים...');
  const [showSupport, setShowSupport] = useState(false);
  const attemptRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    document.body.classList.remove('loading');
    if (!token) {
      setStatus('error');
      setTitle('שגיאה בהרשמה');
      setSubtitle('לא מצאנו מידע על ההרשמה. אנא נסו שוב מדף המחירים.');
      return;
    }
    poll(token, 0);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [token]);

  const updateProgress = (attempt) => {
    const idx = Math.min(attempt, PROGRESS_MESSAGES.length - 1);
    const { text, progress: p } = PROGRESS_MESSAGES[idx];
    setProgressText(text);
    setProgress(p);
  };

  const poll = async (token, attempt) => {
    const MAX_ATTEMPTS = 30;
    const INTERVAL = 2000;
    updateProgress(attempt);
    if (attempt === 15) setShowSupport(true);
    if (attempt >= MAX_ATTEMPTS) {
      setStatus('error');
      setTitle('משהו השתבש');
      setSubtitle('הגדרת החשבון לוקחת יותר מהצפוי. אנא צרו קשר עם התמיכה.');
      return;
    }
    try {
      const res = await fetch(`/api/session-lookup?token=${encodeURIComponent(token)}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (data.loginUrl) {
        setStatus('success');
        setBadgeText('הצלחה!');
        setTitle('החשבון שלכם מוכן!');
        setSubtitle('מעבירים אתכם לאפליקציה...');
        setProgress(100);
        timerRef.current = setTimeout(() => { window.location.href = data.loginUrl; }, 1500);
      } else if (data.status === 'error') {
        setStatus('error');
        setTitle('משהו השתבש');
        setSubtitle(data.message || 'לא הצלחנו ליצור את החשבון. אנא נסו שוב.');
      } else {
        timerRef.current = setTimeout(() => poll(token, attempt + 1), INTERVAL);
      }
    } catch {
      timerRef.current = setTimeout(() => poll(token, attempt + 1), INTERVAL);
    }
  };

  return (
    <>
      <style>{`
        .welcome-hero{min-height:100vh;background:linear-gradient(160deg,#171938 0%,#2a2560 55%,#625DE5 100%);display:flex;align-items:center;justify-content:center;padding:120px 1.5rem 80px;position:relative;overflow:hidden;text-align:center}
        .welcome-hero::before{content:'';position:absolute;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(72,183,255,.15) 0%,transparent 70%);top:-100px;left:-150px;pointer-events:none}
        .welcome-hero::after{content:'';position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(229,144,122,.12) 0%,transparent 70%);bottom:-80px;right:-100px;pointer-events:none}
        .welcome-inner{position:relative;z-index:2;max-width:720px;margin:0 auto}
        .status-icon{width:96px;height:96px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 2rem}
        .status-icon.loading{background:linear-gradient(135deg,#625DE5 0%,#48B7FF 100%);animation:pulseRing 2.5s ease-out infinite}
        .status-icon.success{background:linear-gradient(135deg,#10b981 0%,#34d399 100%)}
        .status-icon.error{background:linear-gradient(135deg,#ef4444 0%,#f87171 100%)}
        .spinner{width:48px;height:48px;border:4px solid rgba(255,255,255,.3);border-top-color:white;border-radius:50%;animation:spin 1s linear infinite}
        .check-svg,.error-svg{width:48px;height:48px;stroke:white;stroke-width:3;fill:none;stroke-linecap:round;stroke-linejoin:round}
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes pulseRing{0%{box-shadow:0 0 0 0 rgba(98,93,229,.3),0 0 0 0 rgba(98,93,229,.15)}70%{box-shadow:0 0 0 20px rgba(98,93,229,0),0 0 0 40px rgba(98,93,229,0)}100%{box-shadow:0 0 0 0 rgba(98,93,229,0),0 0 0 0 rgba(98,93,229,0)}}
        .welcome-hero h1{font-size:clamp(2rem,5vw,3rem);font-weight:800;color:#fff;line-height:1.2;margin-bottom:1.25rem}
        .welcome-hero .subtitle{font-size:1.2rem;color:rgba(255,255,255,.82);line-height:1.7;max-width:580px;margin:0 auto 2.5rem}
        .progress-bar{width:100%;max-width:400px;height:6px;background:rgba(255,255,255,.2);border-radius:10px;margin:0 auto 1.5rem;overflow:hidden}
        .progress-bar-inner{height:100%;background:linear-gradient(90deg,#48B7FF,#625DE5);border-radius:10px;transition:width .5s ease}
        .progress-text{font-size:.9rem;color:rgba(255,255,255,.7);margin-bottom:2rem}
        .badge-pilot{display:inline-flex;align-items:center;gap:.5rem;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:rgba(255,255,255,.9);font-size:.9rem;font-weight:600;padding:.5rem 1.25rem;border-radius:100px;margin-bottom:2rem;backdrop-filter:blur(8px)}
        .support-link{margin-top:2rem;color:rgba(255,255,255,.8);font-size:.95rem}
        .support-link a{color:rgba(255,255,255,.8);text-decoration:underline}
        .support-link a:hover{color:white}
        .error-actions{display:flex;flex-direction:column;gap:1rem;align-items:center;margin-top:2rem}
        .error-actions .btn{min-width:200px}
      `}</style>

      <section className="welcome-hero">
        <div className="welcome-inner">
          <div className={`status-icon ${status}`}>
            {status === 'loading' && <div className="spinner" />}
            {status === 'success' && (
              <svg className="check-svg" viewBox="0 0 52 52">
                <polyline points="15,30 25,40 40,20" style={{ strokeDasharray: 60, strokeDashoffset: 0 }} />
              </svg>
            )}
            {status === 'error' && (
              <svg className="error-svg" viewBox="0 0 52 52">
                <line x1="18" y1="18" x2="38" y2="38" /><line x1="38" y1="18" x2="18" y2="38" />
              </svg>
            )}
          </div>

          <div className="badge-pilot">
            <span>{status === 'success' ? '✅' : status === 'error' ? '❌' : '🎉'}</span>
            <span>{badgeText}</span>
          </div>

          <h1>{title}</h1>
          <p className="subtitle">{subtitle}</p>

          {status === 'loading' && (
            <>
              <div className="progress-bar"><div className="progress-bar-inner" style={{ width: `${progress}%` }} /></div>
              <p className="progress-text">{progressText}</p>
            </>
          )}

          {showSupport && status === 'loading' && (
            <div className="support-link">
              <p>נתקלתם בבעיה? <a href="https://wa.me/972524824210?text=היי, יש לי בעיה בהרשמה ל-ORIA AI" target="_blank" rel="noreferrer">דברו איתנו בוואטסאפ</a> או התקשרו <a href="tel:+972524824210">052-4824210</a></p>
            </div>
          )}

          {status === 'error' && (
            <div className="error-actions">
              <Link href="/#pricing" className="btn btn-primary">חזרה לדף המחירים</Link>
              <a href="https://wa.me/972524824210?text=היי, יש לי בעיה בהרשמה ל-ORIA AI" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}>צרו קשר</a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function WelcomePage() {
  return (
    <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'white', background: '#171938' }}>טוען...</div>}>
      <WelcomeContent />
    </Suspense>
  );
}
