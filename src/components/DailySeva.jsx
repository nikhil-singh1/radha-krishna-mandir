import React from "react";
import { useTranslation } from "react-i18next";

const DailySeva = () => {
  const { t } = useTranslation();
  return (
    <section id="seva" className="p-10 bg-white">
      <h3 className="text-2xl font-bold">{t("dailySeva")}</h3>
      <ul className="mt-4 list-disc list-inside">
        <li>{t("seva1")}</li>
        <li>{t("seva2")}</li>
        <li>{t("seva3")}</li>
        <li>{t("seva4")}</li>
      </ul>
    </section>
  );
};

export default DailySeva;
