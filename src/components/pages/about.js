import React from "react";
import aboutImage1 from "../../assets/img1.jpg";
import aboutImag2 from "../../assets/img2.jpg";
import Footer from "../footer/footer";
import "../pages/pages.css";

const About = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="aboutContainer">
          <div className="leftContainer">
            <h1>ABOUT US</h1>
          </div>

          <div className="rightContainer">
            <div className="contenContainer">
              <img src={aboutImage1} alt="" />
                          <div>
                              <h2>Our Principles </h2>
                Our ethical values are above all… Our essential
                principle is to definitely stick to our ethical values at the
                highest level within all of our relationships with investors,
                employees or business partners. We only compete with our product
                and service quality… We believe that we create the largest added
                value by providing for our customers with better products and
                services, and we do not obtain our competitive power from lower
                prices, but higher service quality. We do not create clash of
                interest between our investors… We always keep the interests of
                our investors separate from one another and take all necessary
                precautions with sensitivity to protect them. We aim to work
                with the best human resource… We value employing the best staff
                and monitoring and improving their performances with the
                awareness that high service quality within our sector may be
                achieved with more well-informed and experienced human
                resources. In this context; Transparency, Honesty, Reputation,
                Harmony, Reliability, Confidentiality, Friendship, Performance,
                Human Rights, Compliance with Laws, Quality and Development,
                Added-value and Environment are the principles which we value.
              </div>
            </div>
            <div className="contenContainer">
              <img src={aboutImag2} alt="" />
              <div>
                <h2>Our Values</h2>
                Sealog-Sv Logistics, together with all of our employees, puts
                emphasis on continous development and innovation. It focuses on
                satisfying our customers by providing services in universal
                quality and standards. For this purpose; To be equitable, honest
                and to respect beliefs and differences, • To be humble,
                tolerant, and helpful, • To act flexible, quick and situational
                by considering priorities, • Not to be afraid of making
                mistakes, to learn from mistakes and, no to do business without
                consultation, • To consider emotions, however to make decisions
                by making use of scientific methods and objective data, • To use
                the technology effectively in order to facilitate the job, make
                it faster and to do business wiser, • To consider emotions,
                however to make decisions by making use of scientific methods
                and objective data, • To use the technology effectively in order
                to facilitate the job, make it faster and to do business wiser,
                • To fictionalize, sustain and archive processes and systems in
                a business model where the work may be maintained without
                depending on the people, and corporate information is produced
                and developed, and given to the memory of the institution, • To
                be Customer, Employee and Supplier oriented, • To obey legal and
                ethical rules • To separate and assign the work depending on the
                competent person, • To aim continious improvement and
                development by placing targets which are worth achieving and
                measurable and • To show maximum effort until the work is
                accomplished by believing and being determined and without
                pleading and dreading against difficulties for the determined
                targets, • To take positive thinking and good will as basis
                without any prejudice, and to solve problems together with the
                officers, • To use time and possibilities effectively and
                accurately, and to not waste any, • To see the working
                environment not only as a working environment, but as a living
                space, and to complete the process in peace and joy, • To
                respect protection of all living beings in the nature and
                protection of the environment, to contribute to social
                responsibility projects,
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
