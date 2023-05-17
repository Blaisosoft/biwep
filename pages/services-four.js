import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import ServicesStyleFour from "../components/Services/ServicesStyleFour";

const ServicesFour = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services Four"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Four"
        bgImgClass="item-bg2"
      />

      <ServicesStyleFour />

      <Footer />
    </>
  );
};

export default ServicesFour;
