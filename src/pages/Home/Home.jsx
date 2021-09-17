import React from "react";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import DownloadSection from "../../components/DownloadSection/DownloadSection";
import CtaSection from "../../components/CtaSection/CtaSection";
import FaqSection from "../../components/FaqSection/FaqSection";
import Footer from "../../components/Footer/Footer";
import { heroData } from "../../data/Home/HeroSectionData";
import { brandData } from "../../data/global/brandData";
import { menuData, btnData, socialData } from "../../data/global/menuData";
import {
  downloadData,
  extensionData,
} from "../../data/Home/DownloadSectionData";
import { ctaData, ctaFormData } from "../../data/Home/CtaSectionData";
import { faqData } from "../../data/Home/FaqSectionData";

const Home = () => {
  return (
    <>
      <Header
        brandData={brandData}
        menuData={menuData}
        btnData={btnData}
        socialData={socialData}
      />

      <HeroSection heroData={heroData} />

      <DownloadSection
        downloadData={downloadData}
        extensionData={extensionData}
      />

      <FaqSection faqData={faqData} />

      <CtaSection ctaData={ctaData} ctaFormData={ctaFormData} />

      <Footer
        brandData={brandData}
        menuData={menuData}
        btnData={btnData}
        socialData={socialData}
      />
    </>
  );
};

export default Home;
