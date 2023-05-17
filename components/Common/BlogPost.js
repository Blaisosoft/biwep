import React from 'react';
import Link from 'next/link';

const BlogPost = () => {
  return (
    <>
      <section className="blog-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Nos nouvelles récentes</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/blog">
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
                    <Link href="/blog">
                      Installation du therminale au niveau du bus
                    </Link>
                  </h3>

                  <p>Installation du therminale au niveau du bus</p>

                  <Link href="/blog" className="learn-more-btn">
                    Voir plus <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/blog">
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
                    <Link href="/blog">Directeur Général de l'OTRACO</Link>
                  </h3>
                  <p>
                    Discours prononce par le Directeur Général de l'OTRACO là où
                    il a en encourageant les autres transporteurs d'utiliser
                    cette nouvelle technologie{' '}
                  </p>

                  <Link href="/blog" className="learn-more-btn">
                    Voir plus <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/blog">
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
                    <Link href="/blog">
                      Directeur Général de Burundi Wallet Electronic Payment
                    </Link>
                  </h3>
                  <p>
                    Discours prononce par le Directeur Général de Burundi Wallet
                    Electronic Payment...
                  </p>

                  <Link href="/blog" className="learn-more-btn">
                    Voir plus <i className="flaticon-add"></i>
                  </Link>
                </div>
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

export default BlogPost;
