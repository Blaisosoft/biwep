import React, { Component } from 'react';
import Link from 'next/link';

const BlogThreeGrid = () => {
  return (
    <>
      <section className="blog-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="#">
                    <img src="/images/blog/blog1.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="#">Présentation</Link>
                      </li>
                      <li>07 Février 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="#">
                      Installation du therminale au niveau du bus
                    </Link>
                  </h3>

                  <p>Installation du therminale au niveau du bus</p>

                  <Link href="#" className="learn-more-btn">
                    Voir plus <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="#">
                    <img src="/images/blog/blog2.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="#">Présentation</Link>
                      </li>
                      <li>07 Février 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="#">Directeur Général de l'OTRACO</Link>
                  </h3>
                  <p>
                    Discours prononce par le Directeur Général de l'OTRACO là où
                    il a en encourageant les autres transporteurs d'utiliser
                    cette nouvelle technologie{' '}
                  </p>

                  <Link href="#" className="learn-more-btn">
                    Voir plus <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="#">
                    <img src="/images/blog/blog3.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="#">Présentation</Link>
                      </li>
                      <li>07 Février 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="#">
                      Directeur Général de Burundi Wallet Electronic Payment
                    </Link>
                  </h3>
                  <p>
                    Discours prononce par le Directeur Général de Burundi Wallet
                    Electronic Payment
                  </p>

                  <Link href="#" className="learn-more-btn">
                    Voir plus <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="#">
                    <img src="/images/blog/blog4.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="#">Présentation</Link>
                      </li>
                      <li>07 Février 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="#">
                      Paiement par carte electronique au niveau du bus publique
                    </Link>
                  </h3>
                  <p>
                    Paiement par carte electronique au niveau du bus publique
                  </p>

                  <Link href="#" className="learn-more-btn">
                    Voir plus <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="#">
                    <img src="/images/blog/blog5.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="#">Présentation</Link>
                      </li>
                      <li>07 Février 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="#">
                      Les passagers regardent la nouvelle méthode de paiement
                    </Link>
                  </h3>
                  <p>Les passagers regardent la nouvelle méthode de paiement</p>

                  <Link href="#" className="learn-more-btn">
                    Voir plus <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="#">
                    <img src="/images/blog/blog6.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="#">Présentation</Link>
                      </li>
                      <li>07 Février 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="#">
                      Un passager utilise notre méthode de paiement
                    </Link>
                  </h3>
                  <p>
                    Un passager utilise notre méthode de paiement du bus par
                    carte électronique
                  </p>

                  <Link href="#" className="learn-more-btn">
                    Voir plus <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Pagination */}
            {/* <div className="col-lg-12 col-sm-12">
              <div className="pagination-area">
                <a href="#" className="prev page-numbers">
                  <i className="fas fa-angle-double-left"></i>
                </a>

                <a href="#" className="page-numbers">
                  1
                </a>

                <a href="#" className="page-numbers current">
                  2
                </a>

                <a href="#" className="page-numbers">
                  3
                </a>

                <a href="#" className="page-numbers">
                  4
                </a>

                <a href="#" className="next page-numbers">
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div> */}
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
        <div className="shape-img7">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot2.png" alt="image" />
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
export default BlogThreeGrid;
