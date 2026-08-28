import React from "react";

function AboutCard() {
  return (
    <div className="quote-card-view">
      <p style={{ textAlign: "justify" }}>
        Hi Everyone, I am <span className="purple">Dhruv Soni</span> from
        Toronto, Canada.
        <br />
        <br />
        I am currently pursuing a{" "}
        <b className="purple">
          Bachelor of Engineering in Computer Engineering (Co-op)
        </b>{" "}
        at York University.
        <br />
        <br />
        I am passionate about{" "}
        <b className="purple">
          embedded systems, robotics, IoT, and software development
        </b>
        , especially where hardware and software come together to build
        practical and intelligent systems.
        <br />
        <br />
        Through my academic projects and engineering teams, I have gained
        hands-on experience working with{" "}
        <b className="purple">
          microcontrollers, Arduino, ESP32, PCB design, sensor integration,
          servo and motor control, and real-time embedded programming
        </b>
        .
        <br />
        <br />
        I am currently involved with the{" "}
        <b className="purple">York University Robotics Society</b>, where I
        contribute to the development of an autonomous Sumobot using embedded
        C++, ultrasonic and infrared sensors, and real-time motor control.
        <br />
        <br />
        I am also involved with the{" "}
        <b className="purple">IEEE YorkU Student Branch</b>, where I have
        worked on PCB prototypes, microcontroller-based systems, circuit
        validation, soldering, debugging, and hardware testing.
        <br />
        <br />
        I enjoy solving technical problems, debugging systems, and learning
        through hands-on experimentation. I believe the best way to understand
        engineering is to build something, test it, identify what does not
        work, and continuously improve it.
        <br />
        <br />
        Outside of engineering, I enjoy exploring new technologies, working on
        personal projects, and developing my technical skills through
        experimentation and independent learning.
      </p>
    </div>
  );
}

export default AboutCard;
