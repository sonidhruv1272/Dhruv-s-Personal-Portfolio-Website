import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sevahub from "../../Assets/Projects/sevahub.png";
import eduglow from "../../Assets/Projects/eduglow.png";
import rigor from "../../Assets/Projects/rigor.png";
import robotics from "../../Assets/Projects/robotics.webp";
import personal from "../../Assets/Projects/personal.png";
import ecohub from "../../Assets/Projects/ecohub.png";
import cybersecurity from "../../Assets/Projects/cybersecurity.png";
import memorylane from "../../Assets/Projects/MemoryLane.png";
import badge from "../../Assets/Projects/badge.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={badge}
              isBlog={false}
              title="Badge"
              description="Badge is a web-based professional networking platform designed for hackathons, conferences, and career fairs. It uses AI-powered identity extraction, vector embeddings, and 3D visualization to help attendees make meaningful connections based on professional compatibility rather than superficial metrics."
              ghLink="https://github.com/RajanChavada/Badge"
              demoLink="https://devpost.com/software/badge"
            />
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={ecohub}
              isBlog={false}
              title="EcoHub"
              description="EcoHub provides eco-friendly activities and rewards users with EcoCoins for their participation and positive environmental impact."
              ghLink="https://github.com/Harsh-Is-Coding/terrahacks"
              demoLink="https://devpost.com/software/ecohub-ry6n8o"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memorylane}
              isBlog={false}
              title="Memory Lane"
              description="Memory Lane is a user-friendly web application designed to help individuals with memory impairments by recognizing and identifying faces. It serves as a virtual assistant to connect users with their loved ones effortlessly."
              demoLink="https://devpost.com/software/memory-lane-dhke7c?ref_content=user-portfolio&ref_feature=in_progress"
              ghLink="https://github.com/PakmanGames/deltahacks11"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sevahub}
              isBlog={false}
              title="SevaHub"
              description="Seva Hub focuses on providing volunteering access to more people and connecting coordinators and volunteers with each other"
              ghLink="https://devpost.com/software/seva-hub"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eduglow}
              isBlog={false}
              title="EduGlow"
              description="EduGlow is an innovative platform that transforms text prompts into interactive Google Slides and flashcards"
              ghLink="https://github.com/tsangh5/EduGlow"
              demoLink="https://devpost.com/software/eduglow"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rigor}
              isBlog={false}
              title="Rigor"
              description="Track your calories, get custom workout plans, and view progress. Rigor is the all-in-one fitness application that you need to achieve your dream self"
              ghLink="https://github.com/SachinVedGupta/Rigor"
              demoLink="https://sachinvedgupta.github.io/Rigor/index.html"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cybersecurity}
              isBlog={false}
              title="CyberSecure System"
              description="A cutting-edge cybersecurity system featuring facial recognition login, a secure password manager, and encrypted file sharing to ensure privacy and data protection."
              ghLink="https://www.linkedin.com/posts/harsh-shukla-2005hs_engineeringexcellence-cybersecurityinnovation-activity-7264444646985027584-Mh1v?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robotics}
              isBlog={false}
              title="Vex Robotics"
              description="Developed a Vex Robotics robot which included a automous mode and a driver controlled mode"
              ghLink="https://github.com/JayPrograms/Robot-Routing-Program"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={personal}
              isBlog={false}
              title="Personal Website"
              description="This is my personal website that I created using React"
              ghLink="https://github.com/Harsh-Is-Coding/portfolio"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
