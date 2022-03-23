import React from "react";
import HomeSIngleService from "../../../../components/HomeSIngleService/HomeSIngleService";

const HomeServices = () => {
  return (
    <>
      <section className="servcies-area gray-bg pt-115 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
              <div className="section-title text-center pos-rel mb-75">
                <div className="section-icon">
                  <img
                    className="section-back-icon"
                    src="img/section/section-back-icon.png"
                    alt=""
                  />
                </div>
                <div className="section-text pos-rel home_ser_title">
                  <h5>Services</h5>
                  <h1>Managed Your Detalcare Services</h1>
                </div>
                <div className="section-line pos-rel">
                  <img src="img/shape/section-title-line.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <HomeSIngleService
              icon="Filling_BeforeAfter"
              title="Cosmetic filling"
              description="Now a days we provide such a kind of filling that will absolutely match with your tooth color and truly painless procedure as well as long lasting."
            />
            <HomeSIngleService
              icon="Scaling-and-Polishing"
              title="Scaling with Polishing"
              description="Scaling with polishing is a mandatory treatment for all individuals for at least once a year. It completely clean your teeth, removes stains and provide you a happy and bright smile."
            />
            <HomeSIngleService
              icon="maxresdefault"
              title="Root Canal Treatment"
              description="Root Canal Treatment (RCT) is a very specialized treatment which needs skilled experienced hand as well as modern instrumental support. We are very much able to provide you world class RCT."
            />
            <HomeSIngleService
              icon="clear-braces"
              title="Orthodontic Braces"
              description="This is the procedure that makes a dentist a true artist. In this specialized area we can change your smile by correcting your crowded and malposed tooth. We make this service reachable to all."
            />
            <HomeSIngleService
              icon="Dental-Bridges1-1024x854"
              title="Dental Bridge"
              description="This is the conventional procedure for replacement of missing tooth. Advanced lab technology and adequate training is our strength to provide the best dental bridge to our patients."
            />
            <HomeSIngleService
              icon="Dental-Crown"
              title="Dental Crown"
              description="By this procedure we strength your Root Canal Treated tooth as well as weak tooth also. We provide you the best Laboratory finished crown that will provide you the actual tooth morphology and comfort."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeServices;
