import React from "react";
import "./About.css"; // Assuming you've created a CSS file for this component

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          Hello! I'm Teymur, a passionate developer based in Azerbaijan. I
          specialize in front-end development and have a strong background in
          creating dynamic, responsive websites and applications. My skills
          include HTML, CSS, JavaScript, and React. I love building
          user-centric designs that provide a great user experience.
        </p>
        <p className="about-description">
          Besides coding, I have a keen interest in business management,
          combining my technical skills with a business mindset to create
          innovative solutions. I'm always eager to learn new technologies and
          take on new challenges.
        </p>
        <h2 className="about-subtitle">Why Choose Me?</h2>
        <ul className="about-list">
          <li>
            Technical Proficiency: Expert in HTML, CSS, JavaScript, React,
            Firebase and MUI.
          </li>
          <li>
            Strong Problem-Solving Skills: Capable of optimizing code and
            improving performance.
          </li>
          <li>
            Responsive Design: Creating visually appealing and user-friendly
            interfaces.
          </li>
          <li>
            Commitment to Quality: Focus on creating clean, maintainable, and
            efficient code.
          </li>
          <li>
            Continuous Learning: Passionate about keeping up with the latest
            trends and technologies in front-end development.
          </li>
          <li>
            Language Proficiency: Fluent in Azerbaijani, Russian, and English.
          </li>
          <li>
            Future Goals: Looking forward to a rewarding career in computer
            science.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
