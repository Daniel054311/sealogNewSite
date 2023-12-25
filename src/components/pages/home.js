import React from "react";
import { Link } from "react-router-dom";
import logisticsCar from "../../assets/logisticsCar.jpg";
import GoogleMap from "../GoogleMap";
import FrequentlyAskedQuestions from "../FrequentQuestions/FrequentlyAskedQuestions";
import Footer from "../footer/footer";
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
                Our Marine Cargo Service ensures the safe and efficient
                transportation of goods through the high seas. Whether you're
                shipping bulk commodities or valuable cargo, our experienced
                team and state-of-the-art vessels guarantee reliable and timely
                deliveries. Trust us to handle your marine logistics needs,
                providing secure and cost-effective solutions for your shipping
                requirements.
              </div>
            </div>

            <div className="airCargaoService groupServiceText">
              <i class="fas fa-plane-departure icons"></i>
              <h2>Air cargo Service</h2>
              <div className="textForArrowLink groupTextDescription">
                Experience swift and secure transportation of your goods with
                our Air Cargo Service. We specialize in efficient air freight
                solutions, ensuring timely deliveries to meet your business
                needs. Our global network, advanced tracking systems, and
                dedicated team make us your trusted partner for seamless air
                logistics. Whether it's urgent shipments or delicate cargo,
                count on us for reliable and expedited air cargo services
                tailored to your requirements.
              </div>
            </div>

            <div className="inlandCargoService groupServiceText">
              <i class="fas fa-water icons"></i>
              <h2>Inland Cargo Service</h2>
              <div className="textForArrowLink groupTextDescription">
                Navigate the inland transportation landscape effortlessly with
                our Inland Cargo Service. We provide reliable and cost-effective
                solutions for the seamless movement of your goods across
                domestic regions. Our dedicated inland transportation services
                ensure timely and secure deliveries, utilizing a modern fleet
                and advanced logistics solutions. Trust us for efficient inland
                cargo services tailored to meet your transportation needs with
                precision.
                <div></div>
              </div>
            </div>
          </div>

          <div className="companyToolsSubContainer">
            <div className="marineCargoService groupServiceText">
              <i class="fa-solid fa-user-gear icons"></i>
              <h2>Heavy Equipment service</h2>
              <div className="textForArrowLink groupTextDescription">
                Elevate your logistics experience with our Heavy Equipment
                Service. Whether you're dealing with oversized machinery or
                specialized equipment, we've got you covered. Our dedicated
                service ensures the safe and efficient transport of heavy loads,
                complemented by industry expertise and state-of-the-art
                equipment. Experience seamless logistics for your heavy
                equipment needs, where precision meets reliability. Trust us to
                handle your heavy cargo with the care it deserves.
              </div>
            </div>

            <div className="airCargaoService groupServiceText">
              <i class="fa-solid fa-truck icons"></i>
              <h2>Car Shipping Service</h2>
              <div className="textForArrowLink groupTextDescription">
                Experience seamless and reliable Car Shipping Service with us.
                We understand the importance of your vehicles, and our
                specialized service ensures the safe and efficient transport of
                cars to their destination. Whether it's a single car or a fleet,
                our team is equipped to handle the logistics, offering tailored
                solutions for your unique needs. Trust us to deliver your
                vehicles with the utmost care and precision, providing you peace
                of mind throughout the shipping process.
              </div>
            </div>

            <div className="inlandCargoService groupServiceText">
              <i class="fa-solid fa-truck-moving icons"></i>
              <h2>Container Sea Cargo</h2>
              <div className="textForArrowLink groupTextDescription">
                Efficient and secure Container Sea Cargo services tailored to
                your shipping needs. Our comprehensive solutions ensure the
                smooth transportation of goods via sea containers. Whether you
                are dealing with bulk shipments or specialized cargo, our
                dedicated team is committed to providing reliable and
                cost-effective services. Experience the convenience of Container
                Sea Cargo with us as we navigate the waters to deliver your
                goods safely and on time.
                <div></div>
              </div>
            </div>
          </div>

          {/* {GOOGLE MAP} */}
          <GoogleMap />

          {/* Frequently Asked Questions */}
          <FrequentlyAskedQuestions />

          {/* Footer */}
          <hr />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default HomePage;
