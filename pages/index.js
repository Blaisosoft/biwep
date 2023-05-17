import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import About from '../components/HomeOne/About';
import Services from '../components/HomeOne/Services';
import Webinar from '../components/HomeOne/Webinar';
import PartnerContent from '../components/Common/PartnerContent';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import PricingCard from '../components/Common/PricingCard';
import BlogPost from '../components/Common/BlogPost';
import FreeTrialForm from '../components/Common/FreeTrialForm';
import Footer from '../components/Layouts/Footer';
import ServicesTwo from '../components/HomeTwo/Services';

const Index = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

      <About />

      <Services />

      <Webinar />

      {/* <PartnerContent /> */}
      {/* <ServicesTwo /> */}

      {/* <FeedbackSlider /> */}

      {/* <PricingCard /> */}

      <BlogPost />

      <FreeTrialForm />

      <Footer />
    </>
  );
};

export default Index;
