import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import sumobot from "../../Assets/Projects/robotics.webp";
import doorbell from "../../Assets/Projects/personal.png";
import fingerprint from "../../Assets/Projects/sevahub.png";
import pcb from "../../Assets/Projects/rigor.png";
import portfolio from "../../Assets/Projects/eduglow.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sumobot}
              isBlog={false}
              title="Autonomous Sumobot Robot"
              description="Developed an autonomous Sumobot using C++ and Arduino with ultrasonic and infrared sensor fusion for real-time opponent and edge detection. Optimized motor control and timing logic to reduce response latency from 120ms to 70ms and improved competition win-rate by 35%."
              ghLink="https://github.com/sonidhruv1272"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doorbell}
              isBlog={false}
              title="Smart Doorbell System"
              description="Built a smart doorbell using an ESP32-CAM, Arduino, Wi-Fi, and Blynk IoT. Implemented embedded C++ firmware for event detection and cloud synchronization, enabling remote monitoring and notifications with less than 2 seconds of latency."
              ghLink="https://github.com/sonidhruv1272"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fingerprint}
              isBlog={false}
              title="Fingerprint Door Lock System"
              description="Designed an Arduino-based fingerprint authentication system with a fingerprint sensor and servo-controlled locking mechanism. Implemented enrollment, matching, and input validation in embedded C++, achieving 98% verification accuracy and under 1 second response time."
              ghLink="https://github.com/sonidhruv1272"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pcb}
              isBlog={false}
              title="PCB Design Project"
              description="Designed and simulated a multi-layer PCB with a focus on efficient routing, component placement, and circuit reliability. Used circuit simulation to identify more than 10 potential issues before fabrication and improved routing efficiency and noise reduction by 30%."
              ghLink="https://github.com/sonidhruv1272"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio Website"
              description="Developed a responsive personal portfolio website using React and Bootstrap to showcase my engineering projects, technical skills, education, and experience. The website is hosted through GitHub and provides links to my professional profiles and projects."
              ghLink="https://github.com/sonidhruv1272"
              demoLink="https://sonidhruv1272.github.io/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
