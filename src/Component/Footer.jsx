import React from "react";

import { Row, Col } from "react-bootstrap";

import company from "../Assets/company-logo.svg";
import "../CSS/footer.css";

const Footer = () => {
  return (
    <>
    <footer className="footer fa-cstm">
    <div className="container">
    <div className="fa-inner">
      <Row>
        <Col className="about-col">
          <div className="footer-logo">
            <img src={company} alt="Aegle" />
          </div>
          <p className="p-fa-text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
            facilisi tincidunt nibh.</p>
            <p className="footer-email">info@aeglehealthpartners.com</p>
        </Col>
        <Col>
          <h4 className="fa-head">Products</h4>
          <ul className="Product-list-grp">
            
            <li className=""><a href="#">Log in</a></li>
            <li className=""><a href="#">Simulate Aegle</a></li>
            <li className=""><a href="#">What is Aegle</a></li>
            <li className=""><a href="#">How Aegle Works</a></li>
          </ul>
        </Col>
        <Col>
        <h4 className="fa-head">Company</h4>
          <ul className="Product-list-grp">
            <li className=""><a href="#"> Our Story</a></li>
            <li className=""> <a href="#">Aegle Team</a></li>
            <li className=""> <a href="#">Careers</a></li>
            <li className=""> <a href="#">Support</a></li>
            <li className=""> <a href="#">Contact Us</a></li>
          </ul>
        </Col>
        <Col>
          <h4 className="fa-head">General Conditions</h4>
          <ul className="Product-list-grp">
            <li className=""><a href="#">Privacy Policy</a></li>
            <li className=""><a href="#">Terms {"&"} Condition</a></li>
            <li className=""><a href="#">Cookies Management</a></li>
          </ul>
        </Col>
      </Row>
    </div>
    <div className="fa-copyright">
        <p className="p-co">© 2021 Aegle Health Partners</p>
        <p className="p-add">4250 N Fairfax Dr, Ste 600, Arlington, VA 22203</p>
    </div>
    </div>
    </footer>
    </>
  );
};

export default Footer;
