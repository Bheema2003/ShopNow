import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import Register from "./components/Register";
import OrderSummary from "./components/OrderSummary";
import TrackOrder from "./components/TrackOrder";
import MyOrders from "./components/MyOrders";


export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800">
          {/* Navbar */}
          <Navbar />

          {/* Routes */}
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  {/* Hero Section */}
                  <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 text-center shadow-md">
                    <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
                      🛒 ShopNow
                    </h1>
                    <p className="text-xl font-light">
                      Discover the best gadgets at unbeatable prices!
                    </p>
                    <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:bg-blue-100 transition">
                      Shop Now
                    </button>
                  </header>

                  {/* Products Section */}
                  <main className="flex-grow p-8">
                    <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
                      Featured Products
                    </h2>
                    <ProductList />
                  </main>
                </>
              }
            />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

            {/* Cart Page */}
            <Route path="/cart" element={<CartPage />} />

            {/* Checkout Page */}
            <Route path="/checkout" element={<CheckoutPage />} />
            
            {/* Order Summary Page */}
            <Route path="/order-summary" element={<OrderSummary />} />  

            {/* Track Order Page */}
            <Route path="/track" element={<TrackOrder />} />

            {/* My Orders */}
            <Route path="/my-orders" element={<MyOrders />} />
          </Routes>

          {/* Footer */}
          <footer className="bg-blue-900 text-white py-6 text-center mt-auto">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} ShopNow. All Rights Reserved.
            </p>
          </footer>
        </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}
