import React from "react";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import CtaSection from "../../components/CtaSection/CtaSection";
import Footer from "../../components/Footer/Footer";
import DownloadSection from "../../components/DownloadSection/DownloadSection";

import { brandData } from "../../data/global/brandData";
import { menuData, btnData, socialData } from "../../data/global/menuData";
import {
  downloadData,
  extensionData,
} from "../../data/Home/DownloadSectionData";
import { heroData } from "../../data/Home/HeroSectionData";
import { ctaData, ctaFormData } from "../../data/Home/CtaSectionData";

const Home = () => {
  return (
    <>
      <Header
        brandData={brandData}
        menuData={menuData}
        btnData={btnData}
        socialData={socialData}
      />

      <HeroSection heroData={heroData}/>

      <DownloadSection
        downloadData={downloadData}
        extensionData={extensionData}
      />

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
