import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const resumeLink = "https://drive.google.com/file/d/1ZEX1ca_iCQEYZMMSh6GyibPv5G29qaEA/view?usp=sharing";

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px", margin: "20px 0" }}
          >
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>

        <Row style={{ justifyContent: "center" }}>
          <iframe
            src="https://drive.google.com/file/d/1ZEX1ca_iCQEYZMMSh6GyibPv5G29qaEA/preview"
            width="80%"
            height="700"
            style={{ border: "none" }}
            allow="autoplay"
            title="Hafsa Resume"
          ></iframe>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px", margin: "20px 0" }}
          >
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
