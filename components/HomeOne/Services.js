import React from 'react';
import Link from 'next/link';

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Nous offrons des solutions professionnelles</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-income"></i>
                </div>

                <h3>
                  <Link href="/">Paiement par carte prépayée</Link>
                </h3>
                <p>
                  Une carte prépayée est une carte, pouvant être utilisée comme
                  une carte classique mais qui n'est pas liée à un{' '}
                  <b>compte bancaire... </b>
                  {/* mais à un compte de paiement. Son utilisation suppose de
                  recharger la carte avant son utilisation en créditant une
                  somme: en espèces */}
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-automatic"></i>
                </div>

                <h3>
                  <Link href="/">Identification (Smart card)</Link>
                </h3>
                <p>
                  BI-WEP est une entreprise qui est capable de developper
                  des smart card Biométrique et électronique selon votre
                  demande....
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-locked"></i>
                </div>

                <h3>
                  <Link href="/">Ingénieurs des logiciels</Link>
                </h3>
                <p>
                  BI-WEP est une entreprise qui est capable de réaliser des
                  logiciels,applications web et mobile ainsi que desktop à
                  partir de votre demande...
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-molecular"></i>
                </div>

                <h3>
                  <Link href="/">Paiement avec Mobile</Link>
                </h3>
                <p>
                  Nous développons des applications USSD qui necessitent ou pas
                  de connexion et effectuons aussi du paiement avec un code
                  USSD.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-gear"></i>
                </div>

                <h3>
                  <Link href="/">Paiement avec POS</Link>
                </h3>
                <p>
                  Le système de point de vente (Point Of Sale, POS) est utilisé
                  pour le règlement des produits et services achetés en
                  magasin...
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-ceo"></i>
                </div>

                <h3>
                  <Link href="/">Paiement avec QR</Link>
                </h3>
                <p>
                  Il est très simple de procéder à un paiement via un QR code.
                  Il suffit simplement au client d’utiliser son smartphone pour
                  scanner le code et ...
                  {/* confirmer la transaction pour payer le
                  commerçant. Cet avantage permet à l’entreprise en question de
                  favoriser la décision d’achat. */}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot4.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot5.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot6.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default Services;
