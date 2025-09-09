import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-yellow-50 p-6">
    <h1 className="text-4xl font-bold text-green-600 mb-4">🙏 Thank You!</h1>
    <p className="text-lg mb-6">Your registration has been submitted successfully.</p>
    <Link to="/" className="text-orange-600 font-semibold underline">Go back to Home</Link>
  </div>
);

export default ThankYou;
