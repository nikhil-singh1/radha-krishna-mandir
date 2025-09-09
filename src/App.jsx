import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import DailySeva from "./components/DailySeva";
import GalleryAndDonation from "./components/GalleryAndDonation";
import DonationBox from "./components/DonationBox";
import FullGalleryWithHero from "./components/FullGalleryWithHero";
import ComingSoon from "./components/coming-soon";
import NavYuvakForm from "./components/Registration";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seva" element={<DailySeva />} />
        <Route path="/gallery" element={<FullGalleryWithHero />} />
        <Route path="/donation" element={<DonationBox />} />
        <Route path="/coming_soon" element={<ComingSoon />} />
         <Route path="/registration" element={<NavYuvakForm />} />
      </Routes>
    </>
  );
}

export default App;
