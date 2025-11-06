# ShopNow – Full‑Stack E‑commerce

ShopNow is a simple full‑stack e‑commerce demo built with:
- Client: React (Create React App) with Tailwind via CDN
- Server: Node/Express + MongoDB (JWT auth)

## Live
- Frontend (Netlify): https://shopnowon.netlify.app/
- Backend (Render): https://shopnow-gnki.onrender.com

## Repositories / Structure
```
shop now/
  client/   # React app (see client/README.md for detailed steps)
  server/   # Node/Express API
```

## Quick Start
Backend (server):
1. Create `server/.env`:
```
MONGO_URI=your-mongodb-uri-with-dbname
JWT_SECRET=any-strong-secret
```
2. Install & run:
```
cd server
npm install
npm start
```
3. (Optional) Seed sample products:
```
node seed.js
```

Frontend (client):
```
cd client
npm install
npm start
```
- Uses `http://localhost:5000` on localhost, or `REACT_APP_API_URL` if set, otherwise falls back to the deployed API.

## Deploy
- Netlify (client):
  - Base directory: `client`
  - Build command: `npm install && npm run build`
  - Publish directory: `client/build`
  - Env: `REACT_APP_API_URL=https://shopnow-gnki.onrender.com`
  - SPA redirect: `/* -> /index.html 200`
- Render/Railway (server): working directory `server`, start `npm start`, set `MONGO_URI` and `JWT_SECRET`.

## API Endpoints
- `GET /api/products` – list products
- `POST /api/auth/register` – `{ name, email, password }`
- `POST /api/auth/login` – `{ email, password }`

## License
MIT (for educational/demo use)


