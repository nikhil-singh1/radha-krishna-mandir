import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "hi" : "en");
  };

  return (
    <header className="bg-orange-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-extrabold tracking-wide">
          {t("templeName")}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-300">{t("navHome")}</Link>
          <Link to="/gallery" className="hover:text-yellow-300">{t("navGallery")}</Link>
          <Link to="/donation" className="hover:text-yellow-300">{t("navDonation")}</Link>
          <button
            onClick={toggleLanguage}
            className="ml-4 bg-yellow-400 text-black px-3 py-1 rounded"
          >
            {i18n.language === "en" ? "हिंदी" : "EN"}
          </button>
        </nav>

        {/* Burger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-orange-700 px-6 py-4 space-y-3">
          <Link to="/" onClick={() => setIsOpen(false)}>{t("navHome")}</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)}>{t("navGallery")}</Link>
          <Link to="/donation" onClick={() => setIsOpen(false)}>{t("navDonation")}</Link>
          <button
            onClick={() => {
              toggleLanguage();
              setIsOpen(false);
            }}
            className="block bg-yellow-400 text-black px-3 py-1 rounded mt-2"
          >
            {i18n.language === "en" ? "हिंदी" : "EN"}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
