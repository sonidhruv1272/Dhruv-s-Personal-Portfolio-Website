import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Particle />

      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col
            md={8}
            className="resume-about"
            style={{
              paddingTop: "50px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="project-heading">
              My <strong className="purple">Resume</strong>
            </h1>

            <p
              style={{
                color: "white",
                textAlign: "center",
                fontSize: "1.1em",
                padding: "20px",
              }}
            >
              You can view or download my full resume below, which includes my
              education, technical experience, engineering projects, and
              skills in Computer Engineering, embedded systems, robotics,
              hardware, and software development.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "30px",
              }}
            >
              <Button
                variant="primary"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineDownload />
                &nbsp; View / Download Resume
              </Button>
            </div>
          </Col>
        </Row>

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            paddingBottom: "50px",
          }}
        >
          <Col md={10}>
            <div
              style={{
                width: "100%",
                height: "1000px",
                overflow: "hidden",
              }}
            >
              <iframe
                src="/resume.pdf"
                title="Dhruv Soni Resume"
                width="100%"
                height="100%"
                style={{
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: "white",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
