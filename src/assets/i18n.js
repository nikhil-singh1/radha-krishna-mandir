// src/i18n.js
import i18n from "i18next";
import "../assets/i18n.js";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Header
        templeName: "Radha Krishna Mandir",
        address: "Village – Ladiyaka, Palwal, Haryana – 121105",
        navHome: "Home",
        navSeva: "Daily Seva",
        navGallery: "Gallery",
        navDonation: "Donation",

        // Hero
        welcome: "Welcome to Radha Krishna Mandir",
        tagline: "A Divine Place of Faith & Seva",
        offerSeva: "Offer Today's Seva",
        supportYojna: "Support Yojna",

        // Updates
        updatesTitle: "Latest Updates",
        registrationText: "Registration for 'Nav Yuvak Committee' is now open!",
        registerNow: "Register Now",

        // Temple Overview
        templeOverview: "Temple Overview",
        templeIntro:
          "Radha Krishna Mandir in Ladiyaka is a sacred space for devotees to experience spirituality, devotion, and community service. The temple organizes daily rituals, bhajans, and seva opportunities.",

        // Daily Seva
        dailySeva: "Daily Seva & Online Offerings",
        seva1: "Morning Aarti – 5:30 AM",
        seva2: "Bhog Seva – 12:00 PM",
        seva3: "Evening Aarti – 7:00 PM",
        seva4: "Special Bhajan Sandhya – Every Saturday",

        // Gallery & Donation
        galleryTitle: "Gallery",
        galleryDesc: "Glimpses of temple festivals, aartis, and special occasions.",
        donationTitle: "Donation",
        donationDesc:
          "Your contribution helps in the development and maintenance of our sacred temple.",
        donateNow: "Donate Now",
        daanPeti: "Daan Peti",

        // Testimonials
        testimonials: "Testimonials",
        testimonial1:
          "I felt true peace at Radha Krishna Mandir. The seva opportunities connect me deeply with divinity.",
        testimonial2:
          "The temple is not only a place of worship but also a center for community development.",
      },
    },
    hi: {
      translation: {
        // Header
        templeName: "राधा कृष्ण मंदिर",
        address: "गाँव – लाड़ियाका, पलवल, हरियाणा – 121105",
        navHome: "होम",
        navSeva: "दैनिक सेवा",
        navGallery: "गैलरी",
        navDonation: "दान",

        // Hero
        welcome: "राधा कृष्ण मंदिर में आपका स्वागत है",
        tagline: "आस्था और सेवा का पवित्र स्थल",
        offerSeva: "आज की सेवा अर्पित करें",
        supportYojna: "योजना का समर्थन करें",

        // Updates
        updatesTitle: "नवीनतम जानकारी",
        registrationText: "‘नव युवक समिति’ के लिए पंजीकरण अब खुला है!",
        registerNow: "अभी पंजीकरण करें",

        // Temple Overview
        templeOverview: "मंदिर का परिचय",
        templeIntro:
          "लाड़ियाका स्थित राधा कृष्ण मंदिर भक्तों के लिए एक पवित्र स्थल है जहाँ वे आध्यात्मिकता, भक्ति और सेवा का अनुभव करते हैं। यहाँ प्रतिदिन पूजा, भजन और सेवा के अवसर आयोजित होते हैं।",

        // Daily Seva
        dailySeva: "दैनिक सेवा और ऑनलाइन अर्पण",
        seva1: "प्रातः आरती – सुबह 5:30 बजे",
        seva2: "भोग सेवा – दोपहर 12:00 बजे",
        seva3: "सायंकालीन आरती – शाम 7:00 बजे",
        seva4: "विशेष भजन संध्या – हर शनिवार",

        // Gallery & Donation
        galleryTitle: "गैलरी",
        galleryDesc: "मंदिर के त्यौहारों, आरतियों और विशेष अवसरों की झलकियाँ।",
        donationTitle: "दान",
        donationDesc:
          "आपका योगदान हमारे पवित्र मंदिर के विकास और रखरखाव में सहायक है।",
        donateNow: "अभी दान करें",
        daanPeti: "दान पेटी",

        // Testimonials
        testimonials: "भक्तों के अनुभव",
        testimonial1:
          "राधा कृष्ण मंदिर में मुझे सच्ची शांति का अनुभव हुआ। यहाँ की सेवाएँ मुझे दिव्यता से जोड़ती हैं।",
        testimonial2:
          "यह मंदिर केवल उपासना का स्थल नहीं, बल्कि समाज सेवा का केंद्र भी है।",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
