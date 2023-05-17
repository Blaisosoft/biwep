import React from 'react';
import Link from 'next/link';

const FeaturedServices = () => {
  return (
    <>
      <div className="featured-services-area">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="flaticon-robot"></i>
                </div>

                <h3>
                  <Link href="/">LOGICIELS,APPLICATIONS ET MOBILES</Link>
                </h3>
                <p>
                  BI-WEP est une entreprise qui est capable de réaliser des
                  logiciels,applications web et mobile ainsi que desktop à
                  partir de votre demande...
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="single-featured-services-box active">
                <div className="icon">
                  <i className="flaticon-artificial-intelligence"></i>
                </div>

                <h3>
                  <Link href="/">ETABLISSEMENT DE PAIEMENT</Link>
                </h3>
                <p>
                  BI-WEP a developpé un Système de paiement utilisant une carte
                  prépayée qui n'est pas liée à un compte bancaire.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="flaticon-machine-learning"></i>
                </div>

                <h3>
                  <Link href="/">ID (SMART CARD) </Link>
                </h3>
                <p>
                  BI-WEP s'agit d'une entreprise qui est capable de developper
                  des smart card <b>Biométrique et électronique</b> selon votre
                  demande.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedServices;
