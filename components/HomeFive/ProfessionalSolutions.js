import React from 'react';
import Link from 'next/link';

const ProfessionalSolutions = () => {
  return (
    <>
      <div className="solutions-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Nous offrons des solutions professionnelles</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-income"></i>
                </div>
                <h3>
                  <Link href="#">Paiement par carte prépayée</Link>
                </h3>
                Une carte prépayée est une carte,pouvant être utilisée comme une
                carte classique mais qui n'est pas liée à un{' '}
                <b>compte bancaire... </b>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box active">
                <div className="icon">
                  <i className="flaticon-automatic"></i>
                </div>
                <h3>
                  <Link href="#">
                    Identification (Smart card)
                  </Link>
                </h3>
                <p>
                  BI-WEP est une entreprise qui est capable de developper des
                  smart card Biométrique et électronique selon votre demande....
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-locked"></i>
                </div>
                <h3>
                  <Link href="#">Ingénieurs des logiciels</Link>
                </h3>
                <p>
                  BI-WEP est une entreprise qui est capable de réaliser des
                  logiciels,applications web et mobile ainsi que desktop à
                  partir de votre demande...
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-molecular"></i>
                </div>
                <h3>
                  <Link href="#">Paiement avec Mobile</Link>
                </h3>
                <p>
                  Nous développons des applications USSD qui necessitent ou pas
                  de connexion et effectuons aussi du paiement avec un code
                  USSD.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-gear"></i>
                </div>
                <h3>
                  <Link href="#">Paiement avec POS</Link>
                </h3>
                <p>
                  Le système de point de vente (Point Of Sale, POS) est utilisé
                  pour le règlement des produits et services achetés en
                  magasin...
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-ceo"></i>
                </div>
                <h3>
                  <Link href="#">Paiement avec QR</Link>
                </h3>
                <p>
                  Il est très simple de procéder à un paiement via un QR code.
                  Il suffit simplement au client d’utiliser son smartphone pour
                  scanner le code et ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessionalSolutions;
