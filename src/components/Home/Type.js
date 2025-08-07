import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Freelancer",
          "Full Stack Developer",
          "Web Developer",
          "Chatbot Developer",
          "AI Enthusiast",
          "Tech Blogger",
          "Video Content Creator",
          "Photographer",
          "Motivational Speaker",
          "Creative Writer",
          "Teacher",
          "Mentor",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
