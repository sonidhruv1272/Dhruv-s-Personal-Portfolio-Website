import React from "react";
import {
  SiCplusplus,
  SiPython,
  SiJava,
  SiJavascript,
  SiC,
  SiArduino,
  SiEspressif,
  SiMatlab,
  SiGit,
  SiGithub,
} from "react-icons/si";

function Techstack() {
  return (
    <div className="tech-icons">
      <div className="tech-icon">
        <SiCplusplus />
        <p>C++</p>
      </div>

      <div className="tech-icon">
        <SiPython />
        <p>Python</p>
      </div>

      <div className="tech-icon">
        <SiJava />
        <p>Java</p>
      </div>

      <div className="tech-icon">
        <SiMatlab />
        <p>MATLAB</p>
      </div>

      <div className="tech-icon">
        <SiJavascript />
        <p>JavaScript</p>
      </div>

      <div className="tech-icon">
        <SiC />
        <p>C</p>
      </div>

      <div className="tech-icon">
        <SiArduino />
        <p>Arduino</p>
      </div>

      <div className="tech-icon">
        <SiEspressif />
        <p>ESP32</p>
      </div>

      <div className="tech-icon">
        <SiGit />
        <p>Git</p>
      </div>

      <div className="tech-icon">
        <SiGithub />
        <p>GitHub</p>
      </div>
    </div>
  );
}

export default Techstack;
