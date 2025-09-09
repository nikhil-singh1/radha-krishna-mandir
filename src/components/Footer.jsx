import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="p-6 bg-orange-700 text-white text-center">
      <p>&copy; {new Date().getFullYear()} {t("templeName")}</p>
    </footer>
  );
};

export default Footer;
