// Prefer explicit env, else use localhost in dev, else fallback to deployed API
let resolved = process.env.REACT_APP_API_URL;
if (!resolved) {
  try {
    const host = typeof window !== 'undefined' ? window.location.hostname : '';
    if (host === 'localhost' || host === '127.0.0.1') {
      resolved = 'http://localhost:5000';
    }
  } catch {}
}
export const API_URL = resolved || "https://shopnow-gnki.onrender.com";


