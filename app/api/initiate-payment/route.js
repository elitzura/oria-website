// Authenticates with Morning (Green Invoice) and creates a hosted payment form.
// Returns the form URL to the browser — displayed in an iframe on the checkout page.
// Credentials live in Vercel env vars (server-side only, never exposed to the browser).

const MORNING_BASE_URL = process.env.MORNING_BASE_URL ?? 'https://api.greeninvoice.co.il/api/v1';
const NO_STORE = { 'Cache-Control': 'no-store' };

const PLAN_DETAILS = {
  basic:   { name: 'מנוי MIND',         amount: 129 },
  premium: { name: 'מנוי MIND PREMIUM', amount: 129 },
};

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPlan(value) {
  return value === 'basic' || value === 'premium';
}

async function getMorningToken(apiId, apiSecret) {
  const res = await fetch(`${MORNING_BASE_URL}/account/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: apiId, secret: apiSecret }),
  });
  if (!res.ok) throw new Error(`Morning auth failed: ${res.status}`);
  const data = await res.json();
  if (!data.token) throw new Error('Morning auth: no token in response');
  return data.token;
}

export async function POST(request) {
  const MORNING_API_ID     = process.env.MORNING_API_ID;
  const MORNING_API_SECRET = process.env.MORNING_API_SECRET;

  if (!MORNING_API_ID || !MORNING_API_SECRET) {
    return Response.json(
      { errorCode: 1, message: 'Server is not configured' },
      { status: 500, headers: NO_STORE },
    );
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { errorCode: 1, message: 'Invalid JSON body' },
      { status: 400, headers: NO_STORE },
    );
  }

  const name  = typeof payload.name  === 'string' ? payload.name.trim()  : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const phone = typeof payload.phone === 'string' ? payload.phone.trim() : '';
  const plan  = typeof payload.plan  === 'string' ? payload.plan.trim()  : '';

  if (!name || !isValidEmail(email) || !isValidPlan(plan)) {
    return Response.json(
      { errorCode: 1, message: 'Invalid payment request' },
      { status: 400, headers: NO_STORE },
    );
  }

  // Derive site URL for callback construction.
  // SITE_URL env var is preferred; falls back to request host (works on Vercel previews too).
  const host    = request.headers.get('host') ?? '';
  const proto   = host.includes('localhost') ? 'http' : 'https';
  const siteUrl = process.env.SITE_URL ?? `${proto}://${host}`;

  // Session token ties this checkout attempt to the post-payment welcome flow.
  // Morning echoes it back via the `custom` field in notifyUrl and embeds it in successUrl.
  const sessionToken = crypto.randomUUID();
  const planDetails  = PLAN_DETAILS[plan];

  try {
    // Step 1 — authenticate with Morning and get a short-lived JWT
    const morningToken = await getMorningToken(MORNING_API_ID, MORNING_API_SECRET);

    // Step 2 — create the hosted payment form
    const formRes = await fetch(`${MORNING_BASE_URL}/payments/form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${morningToken}`,
      },
      body: JSON.stringify({
        description: 'מנוי ORIA AI',
        type: 320,
        lang: 'he',
        currency: 'ILS',
        vatType: 0,
        amount: planDetails.amount,
        maxPayments: 1,
        client: {
          name,
          emails: [email],
          phone,
          add: true,
        },
        income: [{
          description: planDetails.name,
          quantity: 1,
          price: planDetails.amount,
          currency: 'ILS',
          vatType: 0,
        }],
        successUrl: `${siteUrl}/checkout/payment-result?token=${encodeURIComponent(sessionToken)}&status=success`,
        failureUrl: `${siteUrl}/checkout/payment-result?status=failed`,
        notifyUrl:  `${siteUrl}/api/payment-notify`,
        custom:     sessionToken,
      }),
    });

    if (!formRes.ok) throw new Error(`Morning /payments/form failed: ${formRes.status}`);
    const formData = await formRes.json();
    if (!formData.url) throw new Error('Morning /payments/form: missing url in response');

    return Response.json(
      { errorCode: 0, paymentUrl: formData.url },
      { headers: NO_STORE },
    );
  } catch (err) {
    console.error('initiate-payment:', err.message);
    return Response.json(
      { errorCode: 1, message: 'לא הצלחנו להתחיל את תהליך התשלום. אנא נסו שוב.' },
      { status: 500, headers: NO_STORE },
    );
  }
}
