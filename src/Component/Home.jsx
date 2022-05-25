import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";

import "../CSS/home.css";
import graph from "../Assets/banner.png";
import mobilegraph from "../Assets/banner-mobile.png";

const Home = () => {
  return (
    <div className="main-home">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="banner-wrapper">
      <Container>
        <Row className="row-banner">
          <div className="col-md-6">
            <div className="main-content">
              <h1>
                Stop-loss reinsurance hasn't changed in decades. <br></br><span>We are fixing
                that.</span>
              </h1>

              <div className="btn-banner">
                <button className="home-contact-us">Contact us</button>
                <button className="home-learn-btn">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="home-graph">
              <img src={graph} alt="graph" className="desk-only" />
              <img src={mobilegraph} alt="graph" className="mobile-only" />
            </div>
          </div>
        </Row>
      </Container>
      </div>
    </div>
  );
};

export default Home;
