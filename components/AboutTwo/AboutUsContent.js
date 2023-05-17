import React from 'react';

const AboutUsContent = () => {
  return (
    <>
      <div className="why-choose-us-area ptb-110 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-image text-center">
                <img src="/images/team-smile.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-content">
                <h2>Qui sommes-nous? </h2>
                <p>
                  <b>BI-WEP (BURUNDI WALLET ELECTRONIC PAYMENT)</b> est une
                  société de paiement électronique. Mesurant, de par le mode, la
                  nécessité des activités digital et numérique dans la promotion
                  de bien-être de la population au Burundi.{' '}
                  <b>
                    La société coopérative COTRAPEBU et la société EB-COMPANY{' '}
                  </b>{' '}
                  ont dit d’accord de mise en place une société dénommée «
                  BI-WEP ».
                </p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-why-choose-us-box">
                      <h3>Projet de Tap and Go</h3>
                      <p>
                        Voyager avec de l'argent n'a jamais été sûr. Avec la
                        carte Tap&Go, vous n'avez pas besoin d'argent liquide
                        pour vous déplacer. Il vous suffit de recharger votre
                        carte à l'aide des agents. Tap&Go garde votre argent en
                        sécurité pour voyager Facile.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-why-choose-us-box">
                      <h3>Projet ID</h3>
                      <p>
                        BI-WEP s'agit d'une entreprise qui est capable de
                        developper des smart card Biométrique et électronique
                        selon votre demande.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-why-choose-us-box">
                      <h3>Paiement avec ou sans contact</h3>
                      <p>
                        BI-WEP a developpé un Système de paiement utilisant une
                        carte prépayée qui n'est pas liée à un compte bancaire.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-why-choose-us-box">
                      <h3>Logiciels</h3>
                      <p>
                        BI-WEP s'agit d'une entreprise qui est capable de
                        réaliser un logiciel sur mesure de votre demande.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
