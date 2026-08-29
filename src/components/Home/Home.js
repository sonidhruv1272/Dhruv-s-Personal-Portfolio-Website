import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";

function Home() {
  return (
    <>
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />

          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> DHRUV SONI</strong>
                </h1>

                <h2
                  className="heading-name"
                  style={{
                    fontSize: "1.8em",
                    paddingTop: "10px",
                    paddingBottom: "20px",
                  }}
                >
                  Computer Engineering Student | Embedded Systems | Robotics |
                  IoT Developer
                </h2>

                <div style={{ paddingTop: 30, paddingBottom: 20 }}>
                  <h2
                    style={{
                      fontSize: "2em",
                      textTransform: "uppercase",
                    }}
                  >
                    LET ME INTRODUCE MYSELF
                  </h2>
                </div>

                <div className="home-about-description">
                  <p className="home-about-body">
                    I am a Computer Engineering student at York University
                    with a strong passion for building real-world systems that
                    connect software and hardware. Over time, I have developed
                    a strong interest in embedded systems, robotics, and IoT,
                    where I can combine programming with physical devices to
                    solve practical engineering problems.
                    <br />
                    <br />
                    I have experience working with programming languages such
                    as <b className="purple">C++, Python, Java, and MATLAB</b>,
                    and I have applied them in projects involving
                    microcontrollers, autonomous robotics, PCB design, and
                    smart IoT systems. One of my key projects is an
                    ESP32-CAM-based smart doorbell system with real-time Wi-Fi
                    notifications and mobile integration through the Blynk
                    platform.
                    <br />
                    <br />
                    I am also actively involved with the{" "}
                    <b className="purple">
                      York University Robotics Society
                    </b>
                    , where I work on an autonomous Sumobot using sensor
                    integration, real-time motor control, and embedded C++
                    programming. Through this experience, I have developed a
                    stronger understanding of how software, sensors, and
                    hardware interact within real systems.
                    <br />
                    <br />
                    What excites me most is building systems that are not only
                    functional in theory, but actually work in real
                    environments through testing, debugging, and continuous
                    improvement. I enjoy taking an idea, turning it into a
                    working prototype, identifying problems, and improving the
                    system until it performs reliably.
                  </p>
                </div>

                <div style={{ paddingTop: "30px" }}>
                  <h2 style={{ fontSize: "1.8em" }}>
                    FIND ME ON
                  </h2>

                  <p className="home-about-body">
                    Feel free to connect with me
                  </p>

                  <div className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/dhruv-soni-6a7a12334/"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>

                    <a
                      href="https://github.com/sonidhruv1272"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>

                    <a
                      href="mailto:sonidhruv1272@gmail.com"
                      className="social-icon"
                      aria-label="Email"
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={homeLogo}
                  alt="Computer Engineering"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>

        <Home2 />
      </section>
    </>
  );
}

export default Home;
