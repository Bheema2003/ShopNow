import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TrackOrder() {
  const [trackingId, setTrackingId] = useState("");
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setOrder(null);
    try {
      const stored = JSON.parse(localStorage.getItem("orders") || "{}");
      const found = stored[String(trackingId)];
      if (found) {
        setOrder(found);
      } else {
        setError("No order found for this Tracking ID.");
      }
    } catch (err) {
      setError("Unable to read saved orders.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-blue-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          🔎 Track Your Order
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder="Enter Tracking ID"
            className="flex-1 border rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Track
          </button>
        </form>

        {error && (
          <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {order && (
          <div>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <p className="text-gray-700">
                <strong>Tracking ID:</strong> #{order.orderId}
              </p>
              <p className="text-gray-700">
                <strong>Name:</strong> {order.formData?.name}
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> {order.formData?.address}, {order.formData?.city}
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> {order.formData?.phone}
              </p>
            </div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Items</h2>
            <ul className="divide-y divide-gray-200">
              {order.items?.map((item, idx) => (
                <li key={idx} className="flex justify-between py-3">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span className="font-semibold">₹{item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center text-xl font-bold mt-4">
              <span>Total Amount:</span>
              <span className="text-green-700">₹{order.totalAmount}</span>
            </div>
          </div>
        )}

        <div className="text-center mt-8">
          <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}


