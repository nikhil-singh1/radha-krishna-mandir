import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="bg-orange-50 py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-orange-900 leading-tight">
          {t("welcome")}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          {t("tagline")}
        </p>

        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={() => navigate("/coming_soon")}
            className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105 duration-300"
          >
            {t("offerSeva")}
          </button>

          <button
            onClick={() => navigate("/coming_soon")}
            className="bg-white text-orange-500 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105 duration-300"
          >
            {t("supportYojna")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
