// GET /api/crypto-history?id=bitcoin&days=30&interval=daily

export default async function handler(req, res) {
  try {
    const { id, days = 30, interval = "daily" } = req.query;
    if (!id) return res.status(400).json({ error: "missing id" });
    const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=${interval}`;
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
