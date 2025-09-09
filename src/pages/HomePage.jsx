import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import DonationBox from '../components/DonationBox';
import GalleryPreview from '../components/GalleryAndDonation';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

// --- HELPER COMPONENTS & ICONS ---
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-orange-600">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const UserIcon = ({ className = "h-6 w-6 text-orange-600" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-orange-600">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// --- COMPONENTS ---
const NewUpdates = ({ onRegister }) => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-orange-900 mb-12">{t("updatesTitle")}</h2>
        <div className="max-w-3xl mx-auto bg-orange-50 rounded-lg shadow-md p-8 border-l-4 border-orange-500">
          <h3 className="text-xl font-semibold text-orange-800">{t("registrationText")}</h3>
          <p className="text-gray-600 mt-2 mb-4">{t("updatesDesc")}</p>
          <button
            onClick={onRegister}
            className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold py-3 px-8 rounded-2xl shadow-lg hover:scale-105 hover:from-orange-500 hover:to-yellow-500 transition-all duration-300"
          >
            {t("registerNow")}
          </button>
        </div>
      </div>
    </section>
  );
};

const TempleOverview = ({ goToComingSoon }) => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-orange-900 mb-12">{t("templeOverviewTitle")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-orange-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <img src="/kanyadan-mandir.png" alt="Kanyadan Yojna" className="rounded-md mb-4 w-full h-40 object-cover" />
            <h3 className="text-xl font-semibold text-orange-800">{t("kanyadanTitle")}</h3>
            <p className="text-gray-600 mt-2 mb-4 flex-grow">{t("kanyadanDesc")}</p>
            <button
              onClick={goToComingSoon}
              className="w-full bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              {t("contribute")}
            </button>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-md p-6 space-y-4">
            <div className="flex items-center space-x-4"><LocationIcon /><div><h4 className="font-semibold text-gray-700">{t("location")}</h4><p className="text-gray-600">{t("address")}</p></div></div>
            <div className="border-t border-gray-200"></div>
            <div className="flex items-center space-x-4"><UserIcon /><div><h4 className="font-semibold text-gray-700">{t("trustChairman")}</h4><p className="text-gray-600">{t("revealingSoon")}</p></div></div>
            <div className="border-t border-gray-200"></div>
            <div className="flex items-center space-x-4"><UsersIcon /><div><h4 className="font-semibold text-gray-700">{t("committeeMembers")}</h4><p className="text-gray-600">{t("viewFullList")}</p></div></div>
          </div>
          <div className="bg-orange-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <img src="/aarti-mandir.jpg" alt="Aarti" className="rounded-md mb-4 w-full h-40 object-cover" />
            <h3 className="text-xl font-semibold text-orange-800">{t("darshanAarti")}</h3>
            <p className="text-gray-600 mt-2 mb-4 flex-grow">{t("aartiDesc")}</p>
            <button
              onClick={goToComingSoon}
              className="w-full bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              {t("viewTimings")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const DailySeva = ({ goToComingSoon }) => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-orange-900 mb-12">{t("dailySevaTitle")}</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-orange-800 mb-4">{t("selectSevaType")}</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {['Bhog', 'Phool', 'Deepak', 'Vastra Seva'].map(seva => (
                <button key={seva} className="border border-gray-300 rounded-lg py-2 text-gray-700 hover:bg-orange-100 hover:border-orange-400 focus:bg-orange-500 focus:text-white focus:border-orange-500 transition-colors duration-300">
                  {t(seva)}
                </button>
              ))}
            </div>
            <div className="mb-4">
              <label htmlFor="seva-date" className="block text-sm font-medium text-gray-700 mb-1">{t("selectDate")}</label>
              <input type="date" id="seva-date" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" placeholder="MM/DD/YYYY" />
            </div>
            <button
              onClick={goToComingSoon}
              className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              {t("makePayment")}
            </button>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center h-full flex flex-col justify-center items-center bg-cover" style={{ backgroundImage: "url('https://placehold.co/600x400/333/FFF?text=360°+View')" }}>
            <div className="bg-black/50 p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-white">{t("virtualTour")}</h3>
              <p className="text-orange-200 mt-2 mb-4">{t("virtualTourDesc")}</p>
              <button
                onClick={goToComingSoon}
                className="bg-white text-orange-800 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300"
              >
                {t("startTour")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = [
    { name: 'Rohan Sharma', text: t("testimonial1") },
    { name: 'Priya Gupta', text: t("testimonial2") }
  ];

  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-orange-900 mb-12">{t("testimonials")}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
              <div className="mt-4 flex items-center">
                <UserIcon className="h-10 w-10 text-orange-400" />
                <div className="ml-4">
                  <p className="font-bold text-orange-800">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- MAIN HOMEPAGE COMPONENT ---
const HomePage = ({ setPage }) => {
  const navigate = useNavigate();
  const goToComingSoon = () => navigate('/coming_soon');
  const handleRegister = () => navigate('/registration');

  return (
    <>
      <Hero />
      <NewUpdates onRegister={handleRegister} />
      <TempleOverview goToComingSoon={goToComingSoon} />
      <DailySeva goToComingSoon={goToComingSoon} />
      <GalleryPreview />
      <DonationBox />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
};

export default HomePage;
