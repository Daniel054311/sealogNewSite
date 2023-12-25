import React from "react";
import { Link } from "react-router-dom";
import logisticsCar from "../../assets/logisticsCar.jpg";
import GoogleMap from '../GoogleMap';
import FrequentlyAskedQuestions from "../FrequentQuestions/FrequentlyAskedQuestions";
import Footer from '../footer/footer';
import "../pages/pages.css";

const HomePage = () => {
  return (
    <>
      <main id="mainContainer">
        <div className="topContainer">
          <div className="topTextContainer">
            <h1 className="leftText">
              We deliver your goods faster, safer, and smarter!
            </h1>
            <div className="rightText">
              <span className="sealogText">Sealog Logistics</span> is a leading
              logistics company with over 5 years of experience in providing
              end-to-end supply chain solutions. We offer a wide range of
              services, including warehousing, transportation, distribution,
              customs clearance, and more. For more information
              <Link to="/customercare"> Contact Us</Link>
            </div>
          </div>

          <div className="topImage">
            <img src={logisticsCar} alt="top car " />
          </div>
        </div>

        <div className="customerSupportContainer">
          <h1>Why choose us?</h1>

          <div className="customerSupportSubContainer">
            <div className="topTeam groupServiceText">
              <i className="fa-solid fa-user-group icons"></i>
              <h2>Top Team</h2>
              <div className="textForArrowLink groupTextDescription">
                Our top team consists of highly qualified and experienced
                professionals who are passionate about logistics and customer
                satisfaction. They have diverse backgrounds and skills, ranging
                from engineering, management, finance, marketing, to IT.
                <Link className="arrowLink">
                  Lean More <i class="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>

            <div className="customerSuport groupServiceText">
              <i className="fa-solid fa-phone-volume icons"></i>
              <h2>Customer Support</h2>
              <div className="textForArrowLink groupTextDescription">
                We’re here to help you with any questions or concerns you may
                have about our logistics services. Our goal is to provide you
                with the best possible customer experience and make your
                logistics journey as smooth as possible.
                <Link className="arrowLink">
                  Lean More <i class="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>

            <div className="competitiveRates groupServiceText">
              <i className="fa-solid fa-heart icons"></i>
              <h2>Competitive Rates</h2>
              <div className="textForArrowLink groupTextDescription">
                We understand that pricing is a critical factor in choosing a
                logistics service provider. That’s why we offer competitive
                rates that are tailored to your specific needs and budget. Our
                pricing model is based on the following factors:
                <div>
                  <Link className="arrowLink">
                    Lean More <i class="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COMPANY TOOLS SIDE */}

        <div className="companyToolsContainer">
          <h1>The tools you need to win and keep more clients</h1>

          <div className="companyToolsSubContainer">
            <div className="marineCargoService groupServiceText">
              <i class="fa-solid fa-ship icons"></i>
              <h2>Marine cargo Service</h2>
              <div className="textForArrowLink groupTextDescription">
                Sometimes features require a short description. This can be
                detailed description or just a short text.
              </div>
            </div>

            <div className="airCargaoService groupServiceText">
              <i class="fas fa-plane-departure icons"></i>
              <h2>Air cargo Service</h2>
              <div className="textForArrowLink groupTextDescription">
                Sometimes features require a short description. This can be
                detailed description or just a short text.
              </div>
            </div>

            <div className="inlandCargoService groupServiceText">
              <i class="fas fa-water icons"></i>
              <h2>Inland Cargo Service</h2>
              <div className="textForArrowLink groupTextDescription">
                Sometimes features require a short description. This can be
                detailed description or just a short text.
                <div></div>
              </div>
            </div>
          </div>

          <div className="companyToolsSubContainer">
            <div className="marineCargoService groupServiceText">
              <i class="fa-solid fa-user-gear icons"></i>
              <h2>Heavy Equipment service</h2>
              <div className="textForArrowLink groupTextDescription">
                Sometimes features require a short description. This can be
                detailed description or just a short text.
              </div>
            </div>

            <div className="airCargaoService groupServiceText">
              <i class="fa-solid fa-truck icons"></i>
              <h2>Car Shipping Service</h2>
              <div className="textForArrowLink groupTextDescription">
                Sometimes features require a short description. This can be
                detailed description or just a short text.
              </div>
            </div>

            <div className="inlandCargoService groupServiceText">
              <i class="fa-solid fa-truck-moving icons"></i>
              <h2>Container Sea Cargo</h2>
              <div className="textForArrowLink groupTextDescription">
                Sometimes features require a short description. This can be
                detailed description or just a short text.
                <div></div>
              </div>
            </div>
          </div>

          {/* {GOOGLE MAP} */}
          <GoogleMap />
        
          {/* Frequently Asked Questions */}
          <FrequentlyAskedQuestions />
          
          {/* Footer */}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default HomePage;
