import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutUsContent from '../components/AboutTwo/AboutUsContent';
import ProfessionalSolutions from '../components/HomeFive/ProfessionalSolutions';
import PartnerSlider from '../components/AboutTwo/PartnerSlider';
import CustomerFeedback from '../components/HomeFive/CustomerFeedback';
import Team from '../components/Common/Team';
import Footer from '../components/Layouts/Footer';
import Faq from '../components/Faq/FaqContent';

const AboutTwo = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="APropos de nous"
        homePageUrl="/"
        homePageText="Accueil"
        activePageText="APropos de nous"
        bgImgClass="item-bg2"
      />

      <AboutUsContent />

      <ProfessionalSolutions />

      <Team />

      {/* <PartnerSlider /> */}

      {/* <CustomerFeedback /> */}
      {/* <Faq /> */}

      <Footer />
    </>
  );
};

export default AboutTwo;
