import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aegle from "../Assets/Aegle.svg";
import AegleWork from "../Assets/AegleWork.svg";
import AegleSimulation from "../Assets/AegleSimulation.svg";
import bar from "../Assets/bar.svg";
import "../CSS/homeBody.css";

const HomeBody = () => {
  return (
    <div className="homebody-main">
      <Container>
      <div className="home-row-wrapper">
      <div className="box-cstm">
        
          <Row>
            <Col>
              <div className="body-image-first">
                <img src={Aegle} alt="Aegle" />
              </div>
            </Col>
            <Col>
              <div>
                <div className="body-bar">
                  <img src={bar} alt="bar" />
                </div>
                <div>
                  <h3 className="body-header">
                    {" "}
                    What is Aegle and Who Aegle Covers
                  </h3>
                  {/* <br /> */}
                  <p className="body-cont">
                    Same product, less cost, no lasers; available for
                    self-insured employers, health plans, and at-risk health
                    systems
                  </p>
                </div>
              </div>
              <div className="learn-more-button">
                <button className="homebody-learn-btn">Learn More</button>
              </div>
            </Col>
          </Row>
        
      </div>
      <hr className="hr-line"></hr>
      <div className="box-cstm right">
        
          <Row>
            <Col>
              <div>
                <div className="body-bar">
                  <img src={bar} alt="bar" />
                </div>
                <div>
                  <h3 className="body-header">How Aegle Works</h3>
                  <p className="body-cont">See an illustrative example</p>
                </div>
              </div>
              <div className="learn-more-button">
                <button className="homebody-learn-btn">Learn More</button>
              </div>
            </Col>
            <Col>
              <div className="body-image-second">
                <img src={AegleWork} alt="AegleWork" />
              </div>
            </Col>
          </Row>
        
      </div>
      <hr className="hr-line"></hr>
      <div className="box-cstm">
        
          <Row>
            <Col>
              {" "}
              <div className="body-image-third">
                <img src={AegleSimulation} alt="AegleSimulation" />
              </div>
            </Col>
            <Col>
              <div>
                <div className="body-bar">
                  <img src={bar} alt="bar" />
                </div>
                <div>
                  <h3 className="body-header">Simulate Aegle <span className="span-beta"> Beta</span></h3>
                  
                  <p className="body-cont">
                    {" "}
                    We put our money where our mouth is: see how much Aegle
                    would save for a typical company using our Simulator!
                  </p>
                </div>
              </div>
              <div className="learn-more-button">
                <button className="homebody-learn-btn">Learn More</button>
              </div>
            </Col>
          </Row>
        
      </div>
      </div>
      </Container>
    </div>
  );
};

export default HomeBody;
