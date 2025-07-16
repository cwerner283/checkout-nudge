export default {
  async fetch(req: Request): Promise<Response> {
    if (req.method !== 'POST') {
      return new Response('Only POST', { status: 405 });
    }

    const data = await req.json();
    // TODO: GPT + Twilio (next sprint)

    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  },
};
