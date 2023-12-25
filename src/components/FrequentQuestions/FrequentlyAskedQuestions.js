import React from "react";
import "./FrequentAskedQuestions.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = React.useState(false);

  const handleAccordionClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`accordion ${isActive ? "active" : ""}`}
      onClick={handleAccordionClick}
    >
      <h2 style={{ color: "grey" }}>{title}</h2>
      <hr />
      <div className="panel" style={{ maxHeight: isActive ? "100%" : "0" }}>
        <p>{content}</p>
      </div>
    </div>
  );
};

const FrequentlyAskedQuestions = () => {
  return (
    <>
      <div className="accordionContainer" style={{ margin: "50px 0" }}>
        <h2>Frequently Asked Questions</h2>
        <Accordion
          title="Where is the company located ?"
          content=" 'Our company is situated in Apowa, a vibrant community in the beautiful country of Ghana. We are proud to be a part of this region and contribute to its growth and development.' "
        />
        <Accordion
          title="For how many years has the company been in existence ?"
          content=" 'Our company has been proudly serving our clients and contributing to the industry for the past five years. During this time, we've been dedicated to providing top-notch services and building lasting relationships with our valued customers.' "
        />
        <Accordion
          title="How many days does it take to deliver goods ?"
          content=" 'The delivery time for our goods depends on the specific service you choose, the destination, and any additional requirements. We offer various shipping options to meet different delivery needs. Please feel free to contact our customer support team, and they will provide you with accurate and detailed information based on your specific shipping preferences and destination.' "
        />
      </div>
    </>
  );
};

export default FrequentlyAskedQuestions;
