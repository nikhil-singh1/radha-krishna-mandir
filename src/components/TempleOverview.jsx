import React from "react";
import { useTranslation } from "react-i18next";

const TempleOverview = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl font-bold mb-4">{t("templeOverview")}</h2>
      <p className="text-gray-700">{t("templeIntro")}</p>
    </section>
  );
};

export default TempleOverview;
