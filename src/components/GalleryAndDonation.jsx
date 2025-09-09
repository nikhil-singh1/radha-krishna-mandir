import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const GalleryPreview = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const photos = [
    "/mandir1.jpeg",
    "/mandir2.jpeg",
    "/mandir3.jpeg",
    "/mandir4.jpeg",
    "/mandir5.jpeg",
    "/mandir6.jpeg",
    "/mandir7.jpeg",
    "/mandir8.jpeg",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-orange-900">
            {t("galleryPreviewTitle")}
          </h2>
        </div>

        {/* Preview images (first 4 + last slot with + button) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.slice(0, 5).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${t("galleryPreviewTitle")} ${i + 1}`}
              className="w-full md:h-120 h-40 object-cover rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
            />
          ))}

          {/* Last slot is + button */}
          <div
            onClick={() => navigate("/gallery")}
            className="flex items-center justify-center w-full h-40 md:h-120 bg-orange-500 text-white font-bold text-2xl md:text-4xl rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300 cursor-pointer"
          >
           See More +
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
