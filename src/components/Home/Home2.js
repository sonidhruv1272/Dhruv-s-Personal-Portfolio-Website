import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineCode, AiOutlineExperiment } from "react-icons/ai";
import Particle from "../Particle";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Particle />

      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              BUILDING WITH <span className="purple">HARDWARE & SOFTWARE</span>
            </h1>

            <p className="home-about-body">
              My main interest is in developing systems where software and
              hardware work together to solve practical problems.
              <br />
              <br />
              Through my Computer Engineering studies and hands-on projects, I
              have worked with{" "}
              <b className="purple">
                microcontrollers, sensors, actuators, embedded C++,
                Arduino, ESP32, and PCB design
              </b>
              .
              <br />
              <br />
              I enjoy the process of taking a system from an initial idea to a
              working prototype by designing, programming, testing, debugging,
              and improving each component.
              <br />
              <br />
              My experience with the{" "}
              <b className="purple">York University Robotics Society</b> has
              also allowed me to apply these skills to autonomous robotics,
              including sensor-based decision making and real-time motor
              control.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                minHeight: "300px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  textAlign: "center",
                }}
              >
                <AiOutlineCode
                  style={{
                    fontSize: "100px",
                  }}
                />

                <AiOutlineExperiment
                  style={{
                    fontSize: "100px",
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>

        <Row style={{ paddingTop: "50px" }}>
          <Col md={12}>
            <h1 className="project-heading">
              <strong className="purple">
                COMPUTER ENGINEERING
              </strong>{" "}
              & EMBEDDED SYSTEMS
            </h1>

            <p
              style={{
                textAlign: "center",
                paddingBottom: "30px",
              }}
            >
              I am particularly interested in embedded systems, robotics,
              firmware, hardware design, IoT, and software development.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
