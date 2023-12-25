import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="service">
          <h1 className="title">Sealog-SV</h1>
          <div>
            Sealog Logistics is a leading logistics company with over 5 years of
            experience in providing end-to-end supply chain solutions. We offer
            a wide range of services, including warehousing, transportation,
            distribution, customs clearance, and more.
          </div>
        </div>

        <div className="product">
          <h1 className="title">Product</h1>
          <Link to="#">Features</Link>
          <Link to="#">Enterprise</Link>
          <Link to="#">Security</Link>
          <Link to="#">Pricing</Link>
        </div>

        <div className="company">
          <h1 className="title">Company</h1>
          <Link to="/about">About Us</Link>
          <Link to="#">Leadership</Link>
          <Link to="/service">Service</Link>
          <Link to="#">Contact Us</Link>
        </div>

        <div className="office">
          <h1 className="title">Office</h1>

       <Link to="#">  <i className="fa fa-facebook" style={{ color: "#1877F2" }}></i></Link> 
       <Link to="#">  <i className="fa fa-twitter" style={{ color: "#1DA1F2" }}></i></Link> 
       <Link to="#"> <i className="fa fa-linkedin" style={{ color: "#0A66C2" }}></i></Link> 
       <Link to="#"> <i className="fa fa-whatsapp" style={{ color: "#25D366" }}></i></Link> 
        </div>
      </div>
    </>
  );
};

export default Footer;
