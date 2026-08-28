import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Particle />

      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I am a Computer Engineering student at York University with a
              strong passion for building real-world systems that connect
              software and hardware.
              <br />
              <br />
              Over time, I have developed a strong interest in{" "}
              <b className="purple">embedded systems, robotics, and IoT</b>,
              where I can combine programming with physical devices to solve
              practical engineering problems.
              <br />
              <br />
              I am comfortable working with programming languages such as{" "}
              <b className="purple">
                C++, Python, Java, and MATLAB
              </b>
              , and I have applied them in projects involving microcontrollers,
              autonomous robotics, PCB design, sensor integration, and smart
              IoT systems.
              <br />
              <br />
              One project I particularly enjoyed was developing an{" "}
              <b className="purple">ESP32-CAM smart doorbell system</b> with
              real-time Wi-Fi notifications and mobile integration using the
              Blynk platform.
              <br />
              <br />
              I am also actively involved with the{" "}
              <b className="purple">York University Robotics Society</b>,
              where I work on an autonomous Sumobot using sensor fusion,
              real-time motor control, and embedded C++ programming.
              <br />
              <br />
              What excites me most is building systems that are not only
              functional in theory, but actually work in real environments
              through testing, debugging, and continuous improvement.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Dhruv Soni"
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>

            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dhruv-soni-6a7a12334/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <AiFillLinkedin />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://github.com/sonidhruv1272"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:sonidhruv1272@gmail.com"
                  className="icon-colour home-social-icons"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
