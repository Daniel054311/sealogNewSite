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
      <h2>{title}</h2>
      <div className="panel" style={{ maxHeight: isActive ? "100%" : "0" }}>
        <p>{content}</p>
      </div>
    </div>
  );
};

const FrequentlyAskedQuestions = () => {
  return (
    <>
      <div className="accordionContainer" style={{margin:"50px 0"}}>
        <h2>Frequently Asked Questions</h2>
        <Accordion
          title="Section 1"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Accordion
          title="Section 2"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Accordion
          title="Section 3"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
    </>
  );
};

export default FrequentlyAskedQuestions;
