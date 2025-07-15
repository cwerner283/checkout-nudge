export default {
  async fetch(req) {
    if (req.method !== 'POST') return new Response('Only POST', { status: 405 });
    const data = await req.json();
    console.log('Payload ➡️', data);
    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
