import React, { Component } from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <img src="/images/white-logo.png" alt="image" />
                  </Link>
                  <p>
                    BI-WEP (BURUNDI WALLET ELECTRONIC PAYMENT) est une société
                    de paiement électronique. Mesurant, de par le mode, la
                    nécessité des activités digital et numérique dans la
                    promotion de bien-être de la population au Burundi.
                  </p>
                </div>

                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="flaticon-facebook-letter-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="flaticon-instagram-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <i className="flaticon-youtube-play-button"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h3>Services</h3>

                <ul className="footer-services-list">
                  <li>
                    <Link href="/">Etablissement de paiement</Link>
                  </li>
                  <li>
                    <Link href="/">Smart Card(ID)</Link>
                  </li>
                  <li>
                    <Link href="/">Logiciels & Applications web</Link>
                  </li>
                  <li>
                    <Link href="/">Desktop Applications</Link>
                  </li>
                  <li>
                    <Link href="/">Mobile Applications</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <h3>Liens rapides</h3>

                <ul className="quick-links-list">
                  <li>
                    <Link href="/about">Apropos de nous</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/pricing">FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <h3>Contact</h3>

                <ul className="footer-contact-list">
                  <li>
                    <span>Address:</span>
                    Gard du Nord <br /> Zone: Ntahangwa
                  </li>
                  <li>
                    <span>Email:</span>
                    biwep23@gmail.com
                  </li>
                  <li>
                    <span>Phone:</span>
                    +257 67 90 30 00
                  </li>
                  <li>
                    <span>Fax:</span>
                    +257 67 90 30 00
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <p>
                  Copyright &copy;{currentYear} BI-WEP. All Rights Reserved{' '}
                  {/* <a href="https://envytheme.com/" target="_blank">
                    EnvyTheme
                  </a> */}
                  .
                </p>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <ul>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-map">
          <img src="/images/circle-map.png" alt="image" />
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
