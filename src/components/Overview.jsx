import React from "react";
import { useTranslation } from "react-i18next";

const Overview = () => {
  const { t } = useTranslation();
  return (
    <section className="p-10 bg-yellow-50">
      <h3 className="text-2xl font-bold">{t("templeOverview")}</h3>
      <p className="mt-4">{t("templeIntro")}</p>
    </section>
  );
};

export default Overview;
