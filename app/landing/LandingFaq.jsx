'use client';
import { useState } from 'react';

export default function LandingFaq({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="lp-accordion">
      {items.map((item, i) => (
        <div
          key={item.q}
          className={`lp-accordion-item${open === i ? ' lp-accordion-item-open' : ''}`}
        >
          <button
            className="lp-accordion-trigger"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            aria-controls={`faq-panel-${i}`}
          >
            <span>{item.q}</span>
            <span className="lp-accordion-icon" aria-hidden="true">
              {open === i ? '−' : '+'}
            </span>
          </button>
          <div id={`faq-panel-${i}`} className="lp-accordion-body" role="region" aria-label={item.q}>
            <p>
              {item.a}
              {item.link && <> <a href={item.link.href} className="lp-faq-link">{item.link.text} ←</a></>}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
