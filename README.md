# MarketMind — Live Market Research App

AI-powered market research with **real live data** from CoinGecko and Yahoo Finance.

Works on iPhone via Vercel deployment.

## What You Get

- **16 live assets**: 8 cryptos (BTC, ETH, SOL, BNB, XRP, DOGE, ADA, DOT) + 8 stocks (AAPL, TSLA, NVDA, MSFT, AMZN, GOOGL, META, AMD)
- **11 chart types**: Price, 24H Hourly, 7-Day Overlay, Candlestick, MACD/RSI, Bollinger Bands, Fibonacci, Heatmap, Correlation, Portfolio, Data Table
- **Real-time data**: CoinGecko + Yahoo Finance (no API keys)
- **Auto-refresh** every 60 seconds
- **Edge caching** to stay under rate limits

## How It Works

On Vercel, the `/api/*` endpoints run as serverless functions that proxy CoinGecko and Yahoo Finance, then cache results at the edge for 60 seconds. This bypasses browser CORS restrictions.

## License

MIT
