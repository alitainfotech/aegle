import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import pig from "../Assets/pig.svg";
import umb from "../Assets/umb.svg";
import "../CSS/aegleNutshell.css";

const AegleNutshell = () => {
  return (
    <>
      <div className="aegle-main">
        <div className="container">
          <div className="aegle-inner">
            <div className="aegle-main-cnt">
              <h2 className="aegle-header"> Aegle in a Nutshell</h2>
              <p className="aegle-content">
                Aegle is a next-generation replacement of traditional stop-loss
                reinsurance for <br />
                self-insured employers and other risk-bearing entities.
              </p>
            </div>

            <div className="box-aegle d-flex align-cemter justify-content-center">
              <Card className="nutshell-card">
                <Card.Body>
                  <div className="card-svg">
                    <Card.Title>
                      <img src={pig} alt="pig" />
                    </Card.Title>
                  </div>
                  <div>
                    <div className="card-subtitle">
                      <h4>
                        Lower Spend
                        </h4>
                    </div>
                    <div className="card-text">
                      <p>
                        20%+ cumulative savings over 5 years <br />
                        Typical first-year savings: 60-80%
                        </p>
                    </div>
                  </div>
                  <div className="div-btn">
                    <button className="nutshell-learn-btn">Learn More</button>
                  </div>
                </Card.Body>
              </Card>
              
                <Card className="nutshell-card">
                  <Card.Body>
                    <div className="card-svg">
                      <Card.Title>
                        <img src={umb} alt="umb" />
                      </Card.Title>
                    </div>
                    <div>
                      <div className="card-subtitle">
                        <h4>Better Coverage</h4>
                      </div>
                      <div className="card-text">
                        <p>
                          No lasers or exclusions <br />
                          Eliminates deductibles
                          </p>
                      </div>
                    </div>
                    <div className="div-btn">
                        <button className="nutshell-learn-btn">Learn More</button>
                    </div>
                  </Card.Body>
                </Card>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AegleNutshell;
