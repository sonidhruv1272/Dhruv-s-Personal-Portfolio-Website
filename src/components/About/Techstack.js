import React from "react";
import {
  DiPython,
  DiJava,
  DiJavascript1,
  DiGit,
  DiGithubBadge,
} from "react-icons/di";
import {
  SiCplusplus,
  SiArduino,
  SiEspressif,
  SiMatlab,
  SiPandas,
  SiNumpy,
  SiFlask,
  SiFastapi,
} from "react-icons/si";
import { TbCircuitBattery } from "react-icons/tb";
import { FaMicrochip } from "react-icons/fa";

function Techstack() {
  return (
    <div className="tech-icons">

      <div className="tech-icon-item">
        <SiCplusplus />
        <p>C++</p>
      </div>

      <div className="tech-icon-item">
        <DiPython />
        <p>Python</p>
      </div>

      <div className="tech-icon-item">
        <DiJava />
        <p>Java</p>
      </div>

      <div className="tech-icon-item">
        <SiMatlab />
        <p>MATLAB</p>
      </div>

      <div className="tech-icon-item">
        <DiJavascript1 />
        <p>JavaScript</p>
      </div>

      <div className="tech-icon-item">
        <SiArduino />
        <p>Arduino</p>
      </div>

      <div className="tech-icon-item">
        <SiEspressif />
        <p>ESP32</p>
      </div>

      <div className="tech-icon-item">
        <FaMicrochip />
        <p>Microcontrollers</p>
      </div>

      <div className="tech-icon-item">
        <TbCircuitBattery />
        <p>Circuit Design</p>
      </div>

      <div className="tech-icon-item">
        <TbCircuitBattery />
        <p>PCB Design</p>
      </div>

      <div className="tech-icon-item">
        <SiNumpy />
        <p>NumPy</p>
      </div>

      <div className="tech-icon-item">
        <SiPandas />
        <p>pandas</p>
      </div>

      <div className="tech-icon-item">
        <SiFlask />
        <p>Flask</p>
      </div>

      <div className="tech-icon-item">
        <SiFastapi />
        <p>FastAPI</p>
      </div>

      <div className="tech-icon-item">
        <DiGit />
        <p>Git</p>
      </div>

      <div className="tech-icon-item">
        <DiGithubBadge />
        <p>GitHub</p>
      </div>

    </div>
  );
}

export default Techstack;
