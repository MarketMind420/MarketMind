// GET /api/stock?symbol=AAPL&interval=1d&range=1mo

export default async function handler(req, res) {
  try {
    const { symbol, interval = "1d", range = "1mo" } = req.query;
    if (!symbol) return res.status(400).json({ error: "missing symbol" });
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=${interval}&range=${range}`;
    const r = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; MarketMind/5.0)" },
    });
    if (!r.ok) {
      return res.status(r.status).json({ error: `Yahoo ${r.status}` });
    }
    const data = await r.json();
    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=120");
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
