import React, { Component } from "react";
import "../components/NavbarStyles.css";
import companyLogo from "../assets/logo.png";
import { Link } from "react-router-dom";


class Navbar extends Component {
  state = { clicked: false };

  handleClicked = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav className="nav">


         <div className="nav-logo">
         <Link to="/">
            <img src={companyLogo} alt="" className="companyLogo" />
          </Link>
 
         </div>
         
           <div className="nav-items">

           
            <ul
              id="navbar" 
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <Link to="/" className="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li>
                <Link to="/location">Location</Link>
              </li>
              <li>
                <Link to="/customercare">Costomer care</Link>
              </li>
            </ul>

            
          

          <div id="mobile" onClick={this.handleClicked}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;

