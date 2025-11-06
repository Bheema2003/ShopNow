import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-700 text-white px-8 py-4 shadow-md flex justify-between items-center">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold tracking-wide hover:text-blue-200 transition-transform transform hover:scale-105"
      >
        🛍️ ShopNow
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="hover:text-blue-200 font-semibold transition-colors"
        >
          Home
        </Link>

        <Link to="/track" className="hover:text-blue-200 font-semibold transition-transform transform hover:scale-105">Track Order</Link>
        {user && (
          <Link to="/my-orders" className="hover:text-blue-200 font-semibold transition-transform transform hover:scale-105">My Orders</Link>
        )}

        <Link
          to="/cart"
          className="hover:text-blue-200 font-semibold transition-transform transform hover:scale-105 flex items-center gap-2"
        >
          <ShoppingCart size={22} />
          Cart
          {cartItems.length > 0 && (
            <span className="ml-1 bg-white text-blue-700 px-2 py-0.5 rounded-full text-sm font-bold">
              {cartItems.length}
            </span>
          )}
        </Link>

        <Link to="/checkout" className="hover:text-blue-200 font-semibold transition-transform transform hover:scale-105">Checkout</Link>

        {!user ? (
          <>
            <Link to="/login" className="hover:text-blue-200 font-semibold transition-transform transform hover:scale-105">Login</Link>
            <Link to="/register" className="hover:text-blue-200 font-semibold transition-transform transform hover:scale-105">Register</Link>
          </>
        ) : (
          <button onClick={logout} className="bg-white/10 px-3 py-1 rounded hover:bg-white/20 font-semibold transition-transform transform hover:scale-105">Logout</button>
        )}
      </div>
    </nav>
  );
}
