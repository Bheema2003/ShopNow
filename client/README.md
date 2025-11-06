# ShopNow – Full‑Stack E‑commerce

Frontend for the ShopNow app built with React (Create React App + Tailwind via CDN). It connects to a Node/Express API.

## Live
- Frontend (Netlify): https://shopnowon.netlify.app/
- Backend (Render): https://shopnow-gnki.onrender.com

## Features
- Product listing (MongoDB) and cart
- Auth: Register/Login (JWT) with MongoDB (file‑store fallback for local dev)
- Checkout (requires login), Order Summary with PDF download
- Track Order by ID and My Orders per user

## Prerequisites
- Node 18+ (recommended 18 or 20)
- MongoDB Atlas URI

## Backend setup (server)
Create `server/.env`:
```env
MONGO_URI=your-mongodb-uri-with-dbname
JWT_SECRET=any-strong-secret
```
Install & run:
```bash
cd server
npm install
npm start
```
Seed demo products (optional):
```bash
node seed.js
```

## Frontend setup (client)
Install & run locally:
```bash
cd client
npm install
npm start
```
By default the client uses:
- `http://localhost:5000` when running on localhost
- `process.env.REACT_APP_API_URL` if provided
- Fallback to the deployed API URL (`https://shopnow-gnki.onrender.com`) in production builds

Build for production:
```bash
npm run build
```

## Deploy (Netlify)
Configure site with:
- Base directory: `client`
- Build command: `npm install && npm run build`
- Publish directory: `client/build`
- Environment variable: `REACT_APP_API_URL=https://shopnow-gnki.onrender.com`
- SPA redirect: add rule `/* -> /index.html 200` (Netlify Post processing → Redirects)

## API Endpoints (summary)
- `GET /api/products` – list products
- `POST /api/auth/register` – body `{ name, email, password }`
- `POST /api/auth/login` – body `{ email, password }`

## Repo structure
```
shop now/
  client/   # React app
  server/   # Node/Express API
```

## License
MIT (for educational/demo use)
