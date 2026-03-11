// Replaces the Cloudflare Worker endpoint GET /api/session-lookup
// Secrets (N8N_BASE_URL, N8N_SITE_TOKEN) live in Vercel environment variables — never exposed to the browser.

const NO_STORE = { 'Cache-Control': 'no-store' };

function trimSlash(value) {
  return value?.endsWith('/') ? value.slice(0, -1) : value;
}

export async function GET(request) {
  const N8N_BASE_URL = process.env.N8N_BASE_URL;
  const N8N_SITE_TOKEN = process.env.N8N_SITE_TOKEN;

  if (!N8N_BASE_URL || !N8N_SITE_TOKEN) {
    return Response.json({ message: 'Server is not configured' }, { status: 500, headers: NO_STORE });
  }

  const { searchParams } = new URL(request.url);
  const token = (searchParams.get('token') || '').trim();

  if (!token) {
    return Response.json({ message: 'Missing token' }, { status: 400, headers: NO_STORE });
  }

  try {
    const upstream = await fetch(
      `${trimSlash(N8N_BASE_URL)}/webhook/session-lookup?token=${encodeURIComponent(token)}`,
      {
        method: 'GET',
        headers: { 'X-Site-Token': N8N_SITE_TOKEN },
      }
    );

    const text = await upstream.text();
    let body;
    try { body = text ? JSON.parse(text) : {}; } catch { body = { message: upstream.ok ? 'Unexpected upstream response' : 'Upstream request failed' }; }

    return Response.json(body, { status: upstream.status, headers: NO_STORE });
  } catch {
    return Response.json({ message: 'Internal server error' }, { status: 500, headers: NO_STORE });
  }
}
