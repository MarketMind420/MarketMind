// Vercel serverless function: GET /api/crypto-ticker?ids=bitcoin,ethereum

export default async function handler(req, res) {
  try {
    const ids = req.query.ids || "";
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&sparkline=false&price_change_percentage=24h`;
    const r = await fetch(url, {
      headers: { "User-Agent": "MarketMind/5.0" },
    });
    if (!r.ok) {
      return res.status(r.status).json({ error: `CoinGecko ${r.status}` });
    }
    const data = await r.json();
    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=120");
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
