import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.png";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I'm <b className="purple">Hafsa Raja</b>, a passionate learner and creative tech enthusiast.
              <br />
              <br />
              I hold a degree in <b className="purple">Computer Science</b>. 
              My journey into the tech world has been driven by my love for solving problems and creating useful solutions.
              <br />
              <br />
              I'm skilled in languages like <b className="purple">C++, JavaScript, and Python</b>, and have experience in
              <b className="purple"> Full Stack Development, AI Applications, and Natural Language Processing</b>.
              <br />
              <br />
              I enjoy working with frameworks and tools such as <b className="purple">React.js, Node.js, Flask, and Next.js</b>.
              <br />
              <br />
              💡 Some of the projects I’ve worked on:
              <ul>
                <li>🍽️ <b className="purple">Restaurant NLP Chatbot</b></li>
                <li>🧠 <b className="purple">Emotion Detection System</b></li>
                <li>📰 <b className="purple">Fake News Detector</b></li>
                <li>✅ <b className="purple">To-Do List App</b></li>
              </ul>
              <br />
              Outside of coding, I’m passionate about <b className="purple">creative writing, mentoring, teaching, motivational speaking</b>, and exploring new technologies that inspire change.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hrranger5"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hafsa-raja-5224a8365/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/hafsathegreysoul/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
