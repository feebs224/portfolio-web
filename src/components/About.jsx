import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am an aspiring Front-Developer with a background in UX/UI Design.
          I've designed multiple wireframes and digital prototypes using Figma
          and Adobe XD. Once I was able to design websites, I wanted to build
          them from scartch with my own personal touch. I attended and graduated
          from Nucamp's Full Stack Web and Mobile Development Bootcamp and
          started using codes such as Bootstrap, React, React Native, Node.js,
          and many more to start creating my own websites. Come and follow my
          journey!
        </p>

        <br />

        <p className="text-xl">idk yet</p>
      </div>
    </div>
  );
};

export default About;
