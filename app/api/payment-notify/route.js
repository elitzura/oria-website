// Receives Morning (Green Invoice) server-to-server payment notification.
// Forwards the raw body to n8n for DB update, HubSpot sync, and session resolution.

const NO_STORE = { 'Cache-Control': 'no-store' };

function trimSlash(v) {
  return v?.endsWith('/') ? v.slice(0, -1) : v;
}

export async function POST(request) {
  const N8N_BASE_URL = process.env.N8N_BASE_URL;
  const N8N_SITE_TOKEN = process.env.N8N_SITE_TOKEN;

  if (!N8N_BASE_URL || !N8N_SITE_TOKEN) {
    // Still return 200 — Morning retries on non-200 and we don't want a retry storm
    console.error('payment-notify: N8N env vars not configured');
    return new Response('ok', { status: 200, headers: NO_STORE });
  }

  const body = await request.text();

  try {
    await fetch(`${trimSlash(N8N_BASE_URL)}/webhook/payment-notify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Site-Token': N8N_SITE_TOKEN,
      },
      body,
    });
  } catch (err) {
    console.error('payment-notify: failed to forward to n8n', err);
  }

  // Always 200 — Morning expects this to avoid retries
  return new Response('ok', { status: 200, headers: NO_STORE });
}
