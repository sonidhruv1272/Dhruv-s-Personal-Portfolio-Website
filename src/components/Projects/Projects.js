import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "1.1em",
            paddingBottom: "20px",
          }}
        >
          Here are some of the engineering, embedded systems, robotics, and
          software projects I have built.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Autonomous Sumobot Robot"
              description="An autonomous competition robot developed as part of the York University Robotics Society. The system uses embedded C++ with Arduino, ultrasonic and infrared sensors, and real-time motor control to detect opponents, identify arena boundaries, and make autonomous movement decisions. Through iterative testing and control tuning, the system achieved a 35% improvement in competition win-rate, reduced collision and edge-detection errors by 40%, and reduced motor response latency from 120ms to 70ms."
              ghLink="https://github.com/sonidhruv1272"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Smart Doorbell System"
              description="An IoT-based smart doorbell developed using an ESP32-CAM, Arduino C++, Wi-Fi communication, and the Blynk platform. The system detects doorbell events and sends real-time notifications to a connected mobile device with less than 2 seconds of response latency. It also supports remote monitoring and device control, combining embedded firmware, cloud communication, and hardware-software integration into a practical smart-home system."
              ghLink="https://github.com/sonidhruv1272"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Fingerprint Door Lock System"
              description="A biometric access-control system built with Arduino, a fingerprint sensor, and a servo-based locking mechanism. Embedded C++ handles fingerprint enrollment, authentication, input validation, and physical lock control, achieving approximately 98% verification accuracy during testing. Optimized PWM control and timing reduced the unlock response time to under one second while authentication logic reduced invalid authentication events by 25%."
              ghLink="https://github.com/sonidhruv1272"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="PCB Design Project"
              description="A printed circuit board design project focused on component placement, trace routing, power distribution, circuit simulation, and hardware optimization. The design process identified and corrected more than 10 issues before implementation while optimized routing and component placement improved routing efficiency and reduced signal noise by approximately 30%. Power and component placement strategies were also used to improve overall circuit stability and thermal performance."
              ghLink="https://github.com/sonidhruv1272"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Automated Plant Watering System"
              description="An automated plant irrigation system developed using Arduino and MATLAB to monitor soil moisture and control a water pump. The system combines a soil moisture sensor, microcontroller, MOSFET-based pump control, and MATLAB monitoring to automate watering based on plant conditions. The project provided hands-on experience with sensor integration, data monitoring, hardware control, and software-hardware communication."
              ghLink="https://github.com/sonidhruv1272"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Personal Portfolio Website"
              description="A responsive personal portfolio website developed with React and hosted through GitHub Pages. The website presents my Computer Engineering background, embedded systems experience, robotics work, technical skills, and engineering projects in a centralized professional portfolio. It is designed to give recruiters and employers a clear overview of my technical experience, projects, GitHub activity, and professional profile."
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
