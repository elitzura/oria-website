import './globals.css';
import CookieConsent from '../components/CookieConsent';
import { Heebo, Montserrat } from 'next/font/google';

const heebo = Heebo({
  subsets: ['hebrew'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-heebo',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'ORIA AI - המוח השני שלכם לניהול קליניקה',
  description:
    'ORIA AI - פלטפורמת AI לניהול קליניקה וליווי טיפולי למטפלים בישראל. תיעוד אוטומטי, ריכוז מידע קליני וסוכני AI שמבינים עברית טיפולית. הצטרפו לרשימת ההמתנה חינם.',
  icons: { icon: '/logos/8.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${montserrat.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MK6TWF7X');`,
          }}
        />
      </head>
      <body className="loading">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MK6TWF7X"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
