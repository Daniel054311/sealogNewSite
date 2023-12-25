import React from "react";
import { Link } from "react-router-dom";
import logisticsCar from "../../assets/logisticsCar.jpg";
import GoogleMap from '../GoogleMap';
import FrequentlyAskedQuestions from "../FrequentQuestions/FrequentlyAskedQuestions";
import "../pages/pages.css";

const HomePage = () => {
  return (
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
            customs clearance, and more. For more information{" "}
            <Link to="/customercare">Contact Us</Link>
          </div>
        </div>

        <div className="topImage">
          <img src={logisticsCar} alt="top car" />
        </div>
      </div>

      <div className="customerSupportContainer">
        <h1>Why choose us?</h1>

        <div className="customerSupportSubContainer">
          {renderServiceSection(
            "Top Team",
            "Our top team consists of highly qualified and experienced professionals who are passionate about logistics and customer satisfaction. They have diverse backgrounds and skills, ranging from engineering, management, finance, marketing, to IT.",
            "arrowLink"
          )}

          {renderServiceSection(
            "Customer Support",
            "We’re here to help you with any questions or concerns you may have about our logistics services. Our goal is to provide you with the best possible customer experience and make your logistics journey as smooth as possible.",
            "arrowLink"
          )}

          {renderServiceSection(
            "Competitive Rates",
            "We understand that pricing is a critical factor in choosing a logistics service provider. That’s why we offer competitive rates that are tailored to your specific needs and budget. Our pricing model is based on the following factors:",
            "arrowLink"
          )}
        </div>
      </div>

      <div className="companyToolsContainer">
        <h1>The tools you need to win and keep more clients</h1>

        <div className="companyToolsSubContainer">
          {renderServiceSection(
            "Marine cargo Service",
            "Sometimes features require a short description. This can be detailed description or just a short text."
          )}

          {renderServiceSection(
            "Air cargo Service",
            "Sometimes features require a short description. This can be detailed description or just a short text."
          )}

          {renderServiceSection(
            "Inland Cargo Service",
            "Sometimes features require a short description. This can be detailed description or just a short text."
          )}
        </div>

        <div className="companyToolsSubContainer">
          {renderServiceSection(
            "Heavy Equipment service",
            "Sometimes features require a short description. This can be detailed description or just a short text."
          )}

          {renderServiceSection(
            "Car Shipping Service",
            "Sometimes features require a short description. This can be detailed description or just a short text."
          )}

          {renderServiceSection(
            "Container Sea Cargo",
            "Sometimes features require a short description. This can be detailed description or just a short text."
          )}
        </div>

        {/* GOOGLE MAP */}
        <GoogleMap />

        {/* Frequently Asked Questions */}
        <FrequentlyAskedQuestions />
      </div>
    </main>
  );
};

export default HomePage;

function renderServiceSection(title, description, linkClass = "") {
  return (
    <div className={`${title.toLowerCase().replace(/ /g, "")} groupServiceText`}>
      <i className={`fa-solid fa-${getIcon(title)} icons`}></i>
      <h2>{title}</h2>
      <div className="textForArrowLink groupTextDescription">
        {description}
        {linkClass && (
          <Link className={`arrowLink ${linkClass}`}>
            Learn More <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        )}
      </div>
    </div>
  );
}

function getIcon(title) {
  const iconMap = {
    "Top Team": "user-group",
    "Customer Support": "phone-volume",
    "Competitive Rates": "heart",
    "Marine cargo Service": "ship",
    "Air cargo Service": "plane-departure",
    "Inland Cargo Service": "water",
    "Heavy Equipment service": "user-gear",
    "Car Shipping Service": "truck",
    "Container Sea Cargo": "truck-moving",
  };
  return iconMap[title] || "";
}
