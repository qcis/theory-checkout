/**
 * THEORY checkout starter for Cloudflare Workers.
 * This serves the checkout page and a safe placeholder API.
 * Real payment processing is NOT configured yet.
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/checkout" && request.method === "POST") {
      return Response.json({
        ok: false,
        status: "not_configured",
        message: "Payment processing is not configured yet. Connect a payment provider and set its server-side secret before accepting real payments. No payment was made."
      }, { status: 501 });
    }

    if (url.pathname === "/api/health") {
      return Response.json({ ok: true, app: "THEORY", payments: "not_configured" });
    }

    if (env.ASSETS) return env.ASSETS.fetch(request);
    return new Response("THEORY assets are not configured.", { status: 404 });
  }
};
