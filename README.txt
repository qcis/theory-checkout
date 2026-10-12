THEORY Cloudflare Checkout Starter

WHAT THIS IS
- A Cloudflare Workers project with a checkout page and a backend route.
- The page shows Credit/Debit, PayPal, Venmo, Apple Pay, Google Pay, Cash App Pay and Samsung Pay options.
- It does NOT accept real payments yet. The API safely returns a not-configured message until a payment provider integration is added.

DEPLOY
This project has a Worker backend, so deploy the project with Wrangler rather than the static-only upload flow.
1. Install Node.js LTS if needed.
2. Extract this ZIP and open Terminal in the extracted theory-cloudflare-starter folder.
3. Run: npm install
4. Run: npx wrangler login
5. Run: npm run deploy
6. Follow the prompts and open the deployed URL.

PAYMENTS
Before real payments work, choose a processor, complete merchant verification, add API secrets as Worker secrets, and implement server-side checkout session creation plus verified webhooks. Never put secret API keys in public HTML or commit them to this project.

All listed methods cannot be guaranteed through one provider. Availability depends on processor support, merchant eligibility, region, and device. This starter does not collect card details and is not itself a payment processor.
