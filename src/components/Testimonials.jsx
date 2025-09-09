import React from "react";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <section className="p-10 bg-yellow-50 text-center">
      <h3 className="text-2xl font-bold">{t("testimonials")}</h3>
      <div className="mt-4 space-y-4">
        <blockquote className="italic">“{t("testimonial1")}”</blockquote>
        <blockquote className="italic">“{t("testimonial2")}”</blockquote>
      </div>
    </section>
  );
};

export default Testimonials;
