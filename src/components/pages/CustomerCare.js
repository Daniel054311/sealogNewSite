import React from "react";
import Footer from "../footer/footer";
import customerCareImg from "../../assets/customerCare.png";

const CustomerCare = () => {
  return (
    <>
      <div className="customerCareContainer">
        <div>
          <h1>CUSTOMER</h1>
          <h2 className="serviceH2">SERVICE</h2>
          <div className="customerCareLeftContainer">
            Welcome to our Customer Care Center! We are dedicated to providing
            exceptional support to ensure a seamless experience for our valued
            customers. Our commitment is to address your inquiries, resolve
            issues promptly, and make your interaction with our products or
            services as smooth as possible.
            <h2>Contact Us</h2>
            <h3>Phone Support:</h3>
            <div>
              For immediate assistance, our customer care representatives are
              available by phone. Please call us at{" "}
              <a href="tel:0543116973">+233 543116973</a>.
            </div>
            <h3>Email Support:</h3>
            <div>
              Feel free to email us at{" "}
              <a href="mailto:someone@example.com">example@gmail.com</a>. Our
              team will respond to your inquiries as quickly as possible.
            </div>
          </div>
          <button>READ MORE</button>
        </div>

        <div>
          <img
            className="customerCareContainerimg"
            src={customerCareImg}
            alt="customer care "
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CustomerCare;
