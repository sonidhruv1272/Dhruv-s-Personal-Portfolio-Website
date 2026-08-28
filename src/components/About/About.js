import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />

      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={8}
            style={{
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
            md={4}
            style={{
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
            className="about-img"
          >
            <img
              src={require("../../Assets/about.png")}
              alt="Computer Engineering"
              className="img-fluid"
            />
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>

        <Techstack />

        <Row style={{ justifyContent: "center", paddingTop: "50px" }}>
          <Col md={12}>
            <h1 className="project-heading">
              <strong className="purple">Engineering</strong> Interests
            </h1>

            <p
              style={{
                color: "white",
                textAlign: "center",
                fontSize: "1.1em",
                padding: "20px",
              }}
            >
              I am particularly interested in building systems where hardware
              and software work together. My main areas of interest include
              embedded systems, firmware development, robotics, IoT, PCB
              design, sensor integration, real-time control, and hardware-software
              integration.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
