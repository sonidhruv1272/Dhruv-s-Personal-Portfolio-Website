import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
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
            <h1 style={{ fontSize: "2.6em", paddingBottom: "20px" }}>
              GET TO KNOW <strong className="purple">ME</strong>
            </h1>

            <p className="home-about-body">
              Hi Everyone, I am <b className="purple">Dhruv Soni</b> from
              Toronto, Canada.
              <br />
              <br />
              I am currently pursuing a{" "}
              <b className="purple">
                Bachelor of Engineering in Computer Engineering (Co-op)
              </b>{" "}
              at York University.
              <br />
              <br />
              I am passionate about{" "}
              <b className="purple">
                embedded systems, robotics, hardware design, and software
                development
              </b>
              , especially where hardware and software come together to build
              practical systems.
              <br />
              <br />
              Through my academic projects and engineering teams, I have gained
              hands-on experience working with{" "}
              <b className="purple">
                microcontrollers, Arduino, ESP32, sensors, actuators, PCB
                design, and embedded C/C++
              </b>
              .
              <br />
              <br />
              I am actively involved with the{" "}
              <b className="purple">
                York University Robotics Society (YURS)
              </b>
              , where I contribute to the development of an autonomous Sumobot.
              I have worked on sensor integration, control logic, motor
              control, and system tuning while testing the robot in real-world
              competition environments.
              <br />
              <br />
              I am also involved with the{" "}
              <b className="purple">
                IEEE YorkU Student Branch
              </b>
              , where I have gained additional hands-on experience with PCB
              design, circuit validation, soldering, debugging, and
              hardware-software integration.
              <br />
              <br />
              I enjoy solving technical problems and learning through building
              and testing. Whether I am debugging embedded code, troubleshooting
              a circuit, integrating sensors, or improving a robotic system, I
              like understanding why something is not working and finding a
              practical way to improve it.
              <br />
              <br />
              Outside of engineering, I enjoy exploring new technologies,
              working on personal projects, and continuing to develop my
              technical skills through hands-on experimentation.
            </p>
          </Col>

          <Col
            md={5}
            style={{
              paddingTop: "120px",
              paddingBottom: "50px",
            }}
            className="about-img"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src={require("../../Assets/avatar.svg")}
                alt="Dhruv Soni"
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                  maxWidth: "90%",
                }}
              />
            </div>
          </Col>
        </Row>

        <h1 className="project-heading">
          PROFESSIONAL <strong className="purple">SKILLSET</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">TOOLS</strong> I USE
        </h1>

        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
