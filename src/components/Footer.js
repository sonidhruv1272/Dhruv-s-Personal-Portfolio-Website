import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Dhruv Soni</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>
            Designed and Developed by Dhruv Soni
          </h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/dhruv-soni-6a7a12334/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <AiFillLinkedin />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://github.com/sonidhruv1272"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="mailto:sonidhruv1272@gmail.com"
                style={{ color: "white" }}
                aria-label="Email"
              >
                <AiOutlineMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col
          md="12"
          className="footer-copywright"
          style={{ textAlign: "center", paddingTop: "10px" }}
        >
          <p>
            Copyright © {new Date().getFullYear()} DS
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
