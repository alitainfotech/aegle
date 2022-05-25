import React, { useState } from "react";
import "../CSS/home.css";
import Company from "../Assets/company-logo.svg";

const Navbar = () => {
  const [toogleClass, setToggleClass] = useState(false);
  return (
    <>
      <header className= "header header-cstm" >
        <div className="container">
        <div className={toogleClass ? "mobile-menu-cstm" : ""}>
          <nav className="navbar nav-cstm">
            <div className="header-l">
              <div className="logo-brand">
                <a className="navbar-brand" href="#">
                  <img src={Company} alt="Company Logo" />
                </a>
              </div>
              <div class="mobile_menu" onClick={() => setToggleClass(true)}>
                <span><svg height="32px" id="Layer_1"  version="1.1" viewBox="0 0 32 32" width="32px" ><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg></span>
              </div>
              <div className="menu-wrapper">
              <button class="menu_trigger menu_closed"  onClick={() => setToggleClass(false)}>
                <svg version="1.1"  x="0px" y="0px" viewBox="0 0 492 492">  <path d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872 c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872 c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052 L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116 c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952 c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116 c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"></path>  </svg>
                </button>
                <ul className="navbar-nav">
                  <li className="nav-item nav-li active">
                    <a className="nav-link" href="#">
                      What is Aegle
                    </a>
                  </li>
                  <li className="nav-item nav-li">
                    <a className="nav-link" href="#">
                      How Aegle Works
                    </a>
                  </li>
                  <li className="nav-item nav-li">
                    <a className="nav-link" href="#">
                      Why Aegle Works
                    </a>
                  </li>
                  <li className="nav-item nav-li">
                    <a className="nav-link" href="#">
                      Simulate Aegle <span className="beta">Beta</span>
                    </a>
                  </li>
                  <li className="nav-item nav-li">
                    <a className="nav-link" href="#">
                      About Aegle 
                      <span className="span-dropdown"><svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L8.05714 8L14 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
                    </a>
                  </li>
                  <li className="nav-item nav-li none-desk">
                  <a className="nav-link contactus" href="#">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item nav-li none-desk">
                  <a className="nav-link" href="#">
                    <button className="nav-login-btn">Log in to Aegle</button>
                  </a>
                </li>
                </ul>
              </div>
            </div>
            <div className="header-r">
              <ul className="navbar-nav">
                <li className="nav-item nav-li">
                  <a className="nav-link contactus" href="#">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <button className="nav-login-btn">Log in to Aegle</button>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
