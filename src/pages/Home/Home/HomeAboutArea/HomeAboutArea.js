import React from "react";

const HomeAboutArea = () => {
  return (
    <>
      <section className="about-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5 about_left">
              <div className="medical-icon-brand-2">
                <img src="img/about/medical-brand-icon-border.png" alt="" />
              </div>
              <div className="about-left-side pos-rel mb-30">
                <div className="about-front-img">
                  <img src="img/about/about-img.jpg" alt="" />
                </div>
                <div className="about-shape">
                  <img src="img/about/about-shape.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="about-right-side pt-55 mb-30">
                <div className="about-title mb-20">
                  <h5>About Us</h5>
                  <h1>Short Story About Promi Dental Care</h1>
                </div>
                <div className="about-text">
                  <p>
                    Promident…means prominence in dental specialty. Our is an
                    advanced dental center providing the highest quality dental
                    care. We specialize in rejuvenating the facial appearance
                    and maintaining a healthy smile. We dedicate our time and
                    energy towards providing you with excellence in dental care
                    in a warm, friendly and comfortable environment adhering to
                    international standard. We pride ourselves at offering a
                    supportive, healthy environment, where you can feel free to
                    express concerns, hopes and expectations. The clinic owns a
                    high standard sterilization procedure. All the instruments
                    in the clinic must be disinfected in high temperature and
                    high pressure every time before using. Our goal is to work
                    partnership with our patients so that they can make informed
                    decisions and select the treatment best suited to their
                    needs.
                  </p>

                  <br />
                </div>
                <div className="about-author d-flex align-items-center">
                  <div className="author-ava">
                    <img src="img/about/author-ava.png" alt="" />
                  </div>
                  <div className="author-desination">
                    <h4>Rosalina D. Williamson</h4>
                    <h6>founder</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAboutArea;
