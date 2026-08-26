import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Web Developer",
          "MainFrame Developer",
          "Backend Engineer",
          "MERN Stack Developer",
          "Database Engineer",
          "Full Stack Developer",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
