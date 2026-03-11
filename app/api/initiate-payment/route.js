// Replaces the Cloudflare Worker endpoint POST /api/initiate-payment
// Secrets (N8N_BASE_URL, N8N_SITE_TOKEN) live in Vercel environment variables — never exposed to the browser.

const NO_STORE = { 'Cache-Control': 'no-store' };

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPlan(value) {
  return value === 'basic' || value === 'premium';
}

function trimSlash(value) {
  return value?.endsWith('/') ? value.slice(0, -1) : value;
}

export async function POST(request) {
  const N8N_BASE_URL = process.env.N8N_BASE_URL;
  const N8N_SITE_TOKEN = process.env.N8N_SITE_TOKEN;

  if (!N8N_BASE_URL || !N8N_SITE_TOKEN) {
    return Response.json({ message: 'Server is not configured' }, { status: 500, headers: NO_STORE });
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ message: 'Invalid JSON body' }, { status: 400, headers: NO_STORE });
  }

  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const phone = typeof payload.phone === 'string' ? payload.phone.trim() : '';
  const plan = typeof payload.plan === 'string' ? payload.plan.trim() : '';

  if (!name || !isValidEmail(email) || !isValidPlan(plan)) {
    return Response.json({ message: 'Invalid payment request' }, { status: 400, headers: NO_STORE });
  }

  try {
    const upstream = await fetch(`${trimSlash(N8N_BASE_URL)}/webhook/initiate-payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Site-Token': N8N_SITE_TOKEN,
      },
      body: JSON.stringify({ name, email, phone, plan }),
    });

    const text = await upstream.text();
    let body;
    try { body = text ? JSON.parse(text) : {}; } catch { body = { message: upstream.ok ? 'Unexpected upstream response' : 'Upstream request failed' }; }

    return Response.json(body, { status: upstream.status, headers: NO_STORE });
  } catch {
    return Response.json({ message: 'Internal server error' }, { status: 500, headers: NO_STORE });
  }
}
