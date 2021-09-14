import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CtaSection from "../../components/CtaSection/CtaSection";
import DownloadSection from "../../components/DownloadSection/DownloadSection";

const Home = () => {
  return (
    <>
      <Header />
      <DownloadSection />
      <CtaSection />
      <Footer />
    </>
  );
};

export default Home;
