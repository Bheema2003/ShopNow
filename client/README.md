# ShopNow - E‑commerce (Client)

This is the React frontend for ShopNow.

## Features
- Product listing and cart
- Auth: Register/Login (MongoDB or file-store fallback on server)
- Checkout (requires login)
- Order Summary with PDF download
- Track Order by ID and My Orders per user

## Quick Start

1) Install
```bash
cd client
npm install
```

2) Run (dev)
```bash
npm start
```
App: http://localhost:3000

Backend must be running at http://localhost:5000

## Backend Setup (summary)
Create `server/.env`:
```env
MONGO_URI=your-mongodb-uri-with-dbname
JWT_SECRET=any-strong-secret
```
Then:
```bash
cd server
npm install
npm start
```

If `MONGO_URI` is not set, the server uses a local file store for users.

## Scripts
- `npm start` – start dev server
- `npm run build` – production build
