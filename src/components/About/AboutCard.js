import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hafsa Raja</span> from
            <span className="purple"> Punjab, Pakistan.</span>
            <br />
            I’m a Full Stack Developer and AI Chatbot Creator with experience
            in <span className="purple">Python, Flask, MySQL, and Dialogflow</span>.
            <br />
            I’ve recently built a role-based AI-powered restaurant chatbot with
            secure JWT authentication and dynamic menu/reservation management.
            <br />
            I also enjoy motivating students through talks and guiding them toward
            growth and self-belief.
            <br />
            <br />
            Here are a few things I love doing besides coding:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Delivering motivational talks
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI and NLP tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating web applications
            </li>
              <li className="about-activity">
               <ImPointRight /> Teaching computer science & digital skills
            </li>
            <li className="about-activity">
               <ImPointRight /> Exploring AI & chatbot development
             </li>     
          </ul>
          <p style={{ textAlign: "justify" }}>
          <br />
              <strong>Languages I Speak:</strong> Urdu (Native), English (Fluent), Arabic (Basic)
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning challenges into smart solutions — that’s my goal!"
          </p>
          <footer className="blockquote-footer">Hafsa Raja</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
