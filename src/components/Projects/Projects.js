import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatbot from "../../Assets/Projects/chatbot.png";
import emotion from "../../Assets/Projects/emotion.png";
import todo from "../../Assets/Projects/todo.png";         // Add image
import fakenews from "../../Assets/Projects/fakenews.png"; // Add image

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Restaurant NLP Chatbot"
              description="A web-based chatbot for restaurant services using Dialogflow, Flask, and MySQL. It allows users to make reservations, explore menu items, place orders, and get customer support through natural language."
              ghLink="https://github.com/hrranger5/HR.Restaurant"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Emotion Detection (Academic)"
              description="Trained a CNN model using FER-2013 dataset to detect emotions from human faces using Keras and TensorFlow. Real-time face detection integrated with OpenCV."
              ghLink="https://github.com/hrranger5/emotion-detector"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-Do List App"
              description="A simple and clean React-based To-Do List App that helps users manage daily tasks with functionality for adding, editing, and deleting tasks. A productivity-focused mini project."
              ghLink="https://github.com/hrranger5/To-Do-List-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fakenews}
              isBlog={false}
              title="Fake News Detector"
              description="A Python-based machine learning project that classifies fake and real news using NLP techniques and TF-IDF vectorization. Trained with Logistic Regression model."
              ghLink="https://github.com/hrranger5/fake-news-detector"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
