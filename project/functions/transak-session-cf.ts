export async function onRequest(context: any) {
  const API_SECRET = context.env.TRANSAK_API_SECRET;
  const API_KEY = context.env.TRANSAK_API_KEY;
  const WALLET_ADDRESS = context.env.WALLET_ADDRESS;

  try {
    // Step 1: Get access token
    const tokenResponse = await fetch(
      'https://api.transak.com/partners/api/v2/refresh-token',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiSecret: API_SECRET }),
      }
    );

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok || !tokenData.accessToken) {
      return new Response(
        JSON.stringify({ error: 'Failed to get access token', details: tokenData }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Step 2: Get session ID
    const sessionResponse = await fetch(
      'https://api.transak.com/partners/api/v1/widget-session',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenData.accessToken}`,
        },
        body: JSON.stringify({
          defaultCryptoCurrency: 'USDT',
          networks: 'polygon',
          walletAddress: WALLET_ADDRESS,
          disableWalletAddressForm: true,
          fiatCurrency: 'EUR',
        }),
      }
    );

    const sessionData = await sessionResponse.json();

    if (!sessionResponse.ok || !sessionData.sessionId) {
      return new Response(
        JSON.stringify({ error: 'Failed to get session', details: sessionData }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ sessionId: sessionData.sessionId, apiKey: API_KEY }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: String(err) }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
