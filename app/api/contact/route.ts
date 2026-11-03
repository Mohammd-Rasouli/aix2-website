/**
 * Contact form endpoint. A placeholder until the CRM is chosen (OQ-33): it checks the
 * submission and answers, but stores and forwards nothing, so no personal data is kept.
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REQUIRED = ['name', 'email', 'company'] as const;

export async function POST(request: Request) {
  const data = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!data || typeof data !== 'object') return Response.json({ ok: false }, { status: 400 });
  // Bots fill the hidden field; they get a quiet success and nothing happens.
  if (typeof data.website === 'string' && data.website.trim()) return Response.json({ ok: true }, { status: 202 });
  for (const k of REQUIRED) {
    if (typeof data[k] !== 'string' || !(data[k] as string).trim()) return Response.json({ ok: false, field: k }, { status: 422 });
  }
  if (!EMAIL.test(String(data.email))) return Response.json({ ok: false, field: 'email' }, { status: 422 });
  return Response.json({ ok: true, placeholder: true }, { status: 202 });
}
