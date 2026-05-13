// GET /api/health — sanity check that the proxy functions are running

export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    service: "MarketMind API",
    timestamp: new Date().toISOString(),
    endpoints: ["/api/crypto-ticker", "/api/crypto-history", "/api/stock", "/api/health"],
  });
}
