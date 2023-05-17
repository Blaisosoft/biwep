import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <>
      <section className="about-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img
                  src="/images/about/about.png"
                  alt="image"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                />
                <img
                  src="/images/about/about2.jpg"
                  alt="image"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="about-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <h2 className="text-center">
                  Comment utiliser notre carte « avec ou sans contact » ?
                </h2>
                <p>
                  Approchez votre carte à quelques centimètres du TPE du
                  commerçant ou inserer votre carte dans le TPE, un signal
                  sonore confirme que le paiement est bien effectué, récupérez
                  votre reçu de paiement. À tout moment, vous pouvez nous
                  appeler au cas de perte ou de vol pour la désactivation de la
                  carte.
                </p>

                <Link href="/about" className="btn btn-primary">
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <img src="/images/shape/shape1.png" alt="image" />
        </div>
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
        <div className="shape-img6">
          <img src="/images/shape/shape6.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot2.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default About;
