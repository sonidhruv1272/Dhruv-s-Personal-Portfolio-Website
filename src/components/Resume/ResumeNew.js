import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/DhruvSoni_Resume.pdf";

import { AiOutlineDownload } from "react-icons/ai";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = React.useState(1200);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Container>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{
                maxWidth: "250px",
                marginBottom: "20px",
              }}
            >
              <AiOutlineDownload />
              &nbsp;View / Download Resume
            </Button>
          </Row>

          <Row className="resume">
            <Col md={12}>
              <Document file={pdf}>
                <Page
                  pageNumber={1}
                  scale={width > 786 ? 1.7 : 0.6}
                />
              </Document>
            </Col>
          </Row>

          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{
                maxWidth: "250px",
                marginTop: "20px",
              }}
            >
              <AiOutlineDownload />
              &nbsp;View / Download Resume
            </Button>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
