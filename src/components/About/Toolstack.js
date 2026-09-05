import React from "react";
import {
  SiArduino,
  SiMatlab,
  SiPycharm,
  SiIntellijidea,
  SiEclipseide,
  SiGit,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <div className="tech-icons">
      <div className="tech-icon">
        <SiArduino />
        <p>Arduino IDE</p>
      </div>

      <div className="tech-icon">
        <SiMatlab />
        <p>MATLAB</p>
      </div>

      <div className="tech-icon">
        <SiPycharm />
        <p>PyCharm</p>
      </div>

      <div className="tech-icon">
        <SiIntellijidea />
        <p>IntelliJ IDEA</p>
      </div>

      <div className="tech-icon">
        <SiEclipseide />
        <p>Eclipse</p>
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

export default Toolstack;
