import React from "react";
import { Row, Col } from "react-bootstrap";
import { socials } from "../config/socials.json";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="nokia-logo">
          <img src={logo} alt="" />
        </div>
        <div className="socials">
          <Row>
            {socials.map((s) => {
              return (
                <Col key={s.name} xl={1} lg={1} md={1} sm={4} xs={8}>
                  <a href={s.url}>
                    <i className={s.icon}></i>
                  </a>
                </Col>
              );
            })}
          </Row>
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} Nokia</p>
      </div>
    </div>
  );
};

export default Footer;
