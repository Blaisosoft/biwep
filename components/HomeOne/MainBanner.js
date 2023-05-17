import React from 'react';
import Link from 'next/link';
import FeaturedServices from './FeaturedServices';

const MainBanner = () => {
  return (
    <>
      <div className="main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="main-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <span className="bi-wep">B</span>URUNDI{' '}
                  <span className="bi-wep">W</span>ALLET{' '}
                  <span className="bi-wep">E</span>LECTRONIC{' '}
                  <span className="bi-wep">P</span>AYMENT
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  Burundi Wallet Electronic Payment « BI-WEP » est un
                  établissement de paiement œuvrant dans le domaine informatique
                  et électronique.
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <Link href="/contact" className="btn btn-primary">
                    CONTACTEZ NOUS
                  </Link>

                  <Link href="/services" className="optional-btn">
                    Nos Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <FeaturedServices />
      </div>
    </>
  );
};

export default MainBanner;
