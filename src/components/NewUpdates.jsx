import React from "react";
import { useTranslation } from "react-i18next";

const Updates = () => {
  const { t } = useTranslation();
  return (
    <section className="py-10 text-center bg-white">
      <h3 className="text-2xl font-bold">{t("updatesTitle")}</h3>
      <p className="mt-2">{t("registrationText")}</p>
      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
        {t("registerNow")}
      </button>
    </section>
  );
};

export default Updates;
