import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const FullGalleryWithHero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const photos = [
    { src: "/mandir-hero-gallary.png" },
    { src: "/mandir1.jpeg", title: t("mandir1Title"), description: t("mandir1History") },
    { src: "/mandir2.jpeg", title: t("mandir2Title"), description: t("mandir2History") },
    { src: "/mandir4.jpeg", title: t("mandir4Title"), description: t("mandir4History") },
    { src: "/mandir5.jpeg", title: t("mandir5Title"), description: t("mandir5History") },
    { src: "/mandir6.jpeg", title: t("mandir6Title"), description: t("mandir6History") },
    { src: "/mandir7.jpeg", title: t("mandir7Title"), description: t("mandir7History") },
    { src: "/mandir8.jpeg", title: t("mandir8Title"), description: t("mandir8History") },
  ];

  const heroPhoto = photos[0]; // Use first photo as hero

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="relative mb-12 rounded-xl shadow-lg overflow-hidden h-[400px] md:h-[750px]">
          <img
            src={heroPhoto.src}
            alt={heroPhoto.title}
            className="w-full h-full object-fit"
          />
          <div className="absolute  flex items-end p-6 md:p-12">
            <div className="text-white">
              <h3 className="text-3xl md:text-5xl font-bold mb-2">
                {t("heroMandirTitle")}
              </h3>
              <p className="text-base md:text-xl max-w-2xl">
                {t("heroMandirDescription")}
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-orange-900">
            {t("galleryPreviewTitle")}
          </h2>
          <button
            onClick={() => navigate("/gallery")}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full text-lg"
          >
            {t("galleryButton")}
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.slice(1, 9).map((photo, i) => (
            <div
              key={i}
              className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-48 md:h-120 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white p-2 text-sm">
                <h4 className="font-bold">{photo.title}</h4>
                <p>{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullGalleryWithHero;