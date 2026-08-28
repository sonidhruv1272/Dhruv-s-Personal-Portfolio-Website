import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Engineering Student",
          "Embedded Systems Developer",
          "Robotics Enthusiast",
          "IoT Developer",
          "Firmware Developer",
          "Hardware & Software Builder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
