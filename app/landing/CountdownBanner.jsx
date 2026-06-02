'use client';

import { useEffect, useState } from 'react';

const DEADLINE = new Date('2026-06-30T23:59:59+03:00').getTime();

function getTimeLeft() {
  const diff = DEADLINE - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!timeLeft) return null;

  const units = [
    { label: 'ימים', value: timeLeft.days },
    { label: 'שעות', value: timeLeft.hours },
    { label: 'דקות', value: timeLeft.minutes },
    { label: 'שניות', value: timeLeft.seconds },
  ];

  return (
    <div className="lp-countdown-banner">
      <div className="container lp-countdown-inner">
        <div className="lp-countdown-text">
          <span className="lp-countdown-badge">🔥 מחיר השקה</span>
          <span className="lp-countdown-label">המחיר המיוחד נסגר בסוף יוני — הזמן אוזל:</span>
        </div>
        <div className="lp-countdown-clock">
          {units.map(({ label, value }, i) => (
            <div key={label} className="lp-countdown-unit">
              <span className={`lp-countdown-num${i === units.length - 1 ? ' lp-countdown-seconds' : ''}`}>
                {String(value).padStart(2, '0')}
              </span>
              <span className="lp-countdown-unit-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
