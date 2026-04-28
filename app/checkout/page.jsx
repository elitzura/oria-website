'use client';
import { useEffect } from 'react';

export default function CheckoutPage() {
  useEffect(() => {
    window.location.replace('https://app.oriamind.ai');
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif', direction: 'rtl' }}>
      <p>מעבירים אתכם לאפליקציה...</p>
    </div>
  );
}
