import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../components/Particle";
import homeLogo from "../Assets/home-main.svg";
import avatar from "../Assets/avatar.svg";
import Type from "./Type";
import Aboutcard from "./About/AboutCard";
import ProjectCard from "./Projects/ProjectCards";
import resume from "../Assets/Dhruv-Soni-Resume.pdf";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M <strong className="main-name"> DHRUV SONI</strong>
              </h1>

              <div style={{ padding: "50px 0 0 0", textAlign: "left" }}>
                <Type />
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

        <Container className="home-about-section">
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.1em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>

              <p className="home-about-body">
                I am a Computer Engineering student at{" "}
                <b className="purple">York University</b> with a strong
                interest in building real-world systems that connect software
                and hardware.
                <br />
                <br />
                My main areas of interest include{" "}
                <b className="purple">
                  embedded systems, robotics, firmware, IoT, PCB design,
                  and hardware-software integration.
                </b>{" "}
                I enjoy understanding how individual components work together
                to create reliable engineering systems.
                <br />
                <br />
                I work with programming languages including{" "}
                <b className="purple">
                  C++, Python, Java, MATLAB, and JavaScript
                </b>
                , and I have hands-on experience with{" "}
                <b className="purple">
                  Arduino, ESP32, microcontrollers, sensors, servo motors,
                  PCB design, and real-time control systems.
                </b>
                <br />
                <br />
                Through the{" "}
                <b className="purple">
                  York University Robotics Society
                </b>
                , I develop autonomous Sumobot systems using C++, Arduino,
                ultrasonic sensors, infrared sensors, and real-time motor
                control.
                <br />
                <br />
                I also enjoy building independent engineering projects such as
                an{" "}
                <b className="purple">
                  ESP32-CAM smart doorbell and fingerprint-based door lock
                </b>
                , where I combine embedded programming with physical hardware
                and IoT functionality.
                <br />
                <br />
                What I enjoy most is taking a technical problem, building a
                working solution, testing it in the real world, finding what
                does not work, and continuously improving it.
              </p>
            </Col>

            <Col md={4} className="myAvtar">
              <img
                src={avatar}
                className="img-fluid"
                alt="avatar"
              />
            </Col>
          </Row>

          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>

              <p>
                Feel free to <span className="purple">connect</span> with me
              </p>

              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dhruv-soni-6a7a12334/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>

                <a
                  href="https://github.com/sonidhruv1272"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>

                <a
                  href="mailto:sonidhruv1272@gmail.com"
                  className="icon-colour home-social-icons"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

function About() {
  return (
    <section>
      <Container fluid className="about-section">
        <Particle />

        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                GET TO KNOW <strong className="purple">ME</strong>
              </h1>

              <Aboutcard />
            </Col>

            <Col
              md={5}
              className="about-img"
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
            >
              <img
                src={avatar}
                alt="about"
                className="img-fluid"
              />
            </Col>
          </Row>

          <Row>
            <Col md={12} className="about-skills">
              <h1 className="project-heading">
                Professional <strong className="purple">Skillset</strong>
              </h1>

              <p className="home-about-body">
                <b>Languages:</b> C++, Python, Java, MATLAB, JavaScript, C
                <br />
                <br />

                <b>Embedded Systems:</b> Arduino, ESP32, Microcontrollers,
                Sensor Integration, Servo & Motor Control, IoT Systems
                <br />
                <br />

                <b>Hardware:</b> PCB Design, Circuit Design, Soldering,
                Hardware Debugging, Component-Level Troubleshooting
                <br />
                <br />

                <b>Tools:</b> Arduino IDE, ESP-IDF, MATLAB, PyCharm,
                IntelliJ, Eclipse, Git, GitHub
                <br />
                <br />

                <b>Libraries & Frameworks:</b> NumPy, pandas, Matplotlib,
                Flask, FastAPI, JUnit
                <br />
                <br />

                <b>Concepts:</b> Embedded Systems, Robotics, Digital Logic,
                Object-Oriented Programming, Hardware-Software Integration,
                System Integration, Real-Time Control
              </p>
            </Col>
          </Row>

          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col md={12}>
              <h1 className="project-heading">
                My <strong className="purple">Experience</strong>
              </h1>

              <div className="experience-container">
                <div className="experience-card">
                  <h3>Embedded Systems Developer</h3>
                  <h4>York University Robotics Society — Sumobot Team</h4>
                  <p className="experience-date">
                    September 2024 – Present | Toronto, Canada
                  </p>

                  <p>
                    Developed an autonomous Sumobot system using C++ and
                    Arduino IDE, improving competition win-rate by 35% through
                    optimized control logic and iterative tuning.
                  </p>

                  <p>
                    Implemented ultrasonic and infrared sensor fusion,
                    reducing collision and edge-detection errors by 40%
                    across testing environments.
                  </p>

                  <p>
                    Optimized real-time motor control loops and timing
                    precision, reducing response latency from approximately
                    120ms to 70ms during matches.
                  </p>
                </div>

                <div className="experience-card">
                  <h3>Hardware & Embedded Systems Developer</h3>
                  <h4>IEEE YorkU Student Branch</h4>
                  <p className="experience-date">
                    September 2025 – Present | Remote
                  </p>

                  <p>
                    Designed and debugged PCB prototypes for student
                    engineering builds, improving circuit stability and
                    reducing hardware failure rates by 25%.
                  </p>

                  <p>
                    Programmed microcontroller-based systems using Arduino
                    C/C++ for sensor integration and embedded control
                    applications.
                  </p>

                  <p>
                    Supported 10+ engineering builds involving circuit
                    validation, soldering, debugging, and system-level
                    hardware testing.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are some engineering and software projects I have built
          through coursework, student organizations, and independent
          development.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="sumobot.png"
              isBlog={false}
              title="Autonomous Sumobot Robot"
              description="An autonomous competition robot developed through the York University Robotics Society. The system uses ultrasonic and infrared sensors for opponent detection and edge avoidance while embedded C++ control logic manages real-time motor response and movement strategies. Through iterative testing and tuning, the system achieved a 35% improvement in competition win-rate, reduced detection errors by 40%, and lowered response latency from 120ms to 70ms."
              ghLink="https://github.com/sonidhruv1272"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="doorbell.png"
              isBlog={false}
              title="Smart Doorbell System"
              description="An IoT smart doorbell developed using an ESP32-CAM, Arduino C++, Wi-Fi communication, and the Blynk platform. The system detects doorbell events and sends real-time mobile notifications with less than 2 seconds of response latency. It also provides remote monitoring and device-control functionality through the Blynk interface."
              ghLink="https://github.com/sonidhruv1272"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="fingerprint.png"
              isBlog={false}
              title="Fingerprint Door Lock System"
              description="A biometric access-control system built using Arduino, a fingerprint sensor, and a servo motor. Embedded C++ logic handles fingerprint enrollment, authentication, validation, and automatic locking and unlocking. The system achieved approximately 98% verification accuracy during testing with an unlock response time of less than one second."
              ghLink="https://github.com/sonidhruv1272"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="pcb.png"
              isBlog={false}
              title="PCB Design Project"
              description="A printed circuit board design project focused on optimized component placement, trace routing, power distribution, and signal integrity. Circuit behavior was simulated before fabrication to identify and correct more than 10 design issues. Layout optimization improved routing efficiency and reduced signal noise by approximately 30%."
              ghLink="https://github.com/sonidhruv1272"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="plant.png"
              isBlog={false}
              title="Automated Plant Watering System"
              description="An automated irrigation system developed using Arduino, a soil-moisture sensor, relay-controlled water pump, and MATLAB. The system monitors soil moisture and activates irrigation when watering is required. MATLAB was used to record and analyze system data to evaluate performance and reliability."
              ghLink="https://github.com/sonidhruv1272"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="computer.png"
              isBlog={false}
              title="Computer Hardware Assembly"
              description="A hands-on computer hardware project involving assembly and configuration of a complete desktop system from individual components. The project included BIOS configuration, operating-system installation, driver setup, hardware troubleshooting, and system verification."
              ghLink="https://github.com/sonidhruv1272"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="website.png"
              isBlog={false}
              title="Personal Portfolio Website"
              description="A responsive personal portfolio website designed to showcase my Computer Engineering background, technical skills, engineering projects, robotics experience, and professional information. The website is built with React and deployed through GitHub Pages to provide recruiters and engineering teams with a central place to explore my work."
              ghLink="https://github.com/sonidhruv1272"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />

      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={8} className="resume">
            <h1 className="project-heading">
              My <strong className="purple">Resume</strong>
            </h1>

            <p style={{ color: "white", textAlign: "center" }}>
              You can view or download my resume below, which includes my
              education, engineering experience, technical projects, and
              skills in Computer Engineering, embedded systems, robotics,
              hardware, and software development.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                marginBottom: "40px",
              }}
            >
              <Button
                variant="primary"
                href={resume}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-download"></i>&nbsp; Download Resume
              </Button>
            </div>

            <iframe
              src={resume}
              title="Dhruv Soni Resume"
              width="100%"
              height="800px"
              style={{
                border: "none",
                borderRadius: "8px",
              }}
            ></iframe>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

function App() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Resume />
    </>
  );
}

export default App;
