import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          Hi! I'm Fibi Youssef, a passionate Full Stack Developer and UX/UI
          designer with a knack for creating seamless digital experiences. My
          journey in the world of design began with building a foundation in
          UX/UI. I'm well-versed in utilizing tools like Figma and Adobe XD to
          bring my creative visions to life, ensuring that each pixel serves a
          purpose. I continued to expand my knowledge by pursuing education in
          full-stack web development, giving me a unique perspective on the
          intersection of functionality and aesthetics. With an eye for detail
          and a user-centric approach, I strive to craft designs that not only
          look visually appealing but also resonate with users on a meaningful
          and functional level.
        </p>

        <br />

        <p className="text-xl">
          Below, you will find some of my front-end development and UX/UI design
          projects that showcase the culmination of my creative vision and
          technical skills. Each project encapsulates a unique blend of
          aesthetics and functionality, highlighting my ability to create
          visually appealing interfaces that seamlessly integrate with robust
          and efficient code. From responsive websites that adapt flawlessly to
          various devices and screen sizes, to intuitive user interfaces that
          prioritize user interactions, these projects embody my commitment to
          delivering digital experiences that leave a lasting impact. Feel free
          to explore my portfolio, where each project is a chapter in my ongoing
          story of combining code and design to bring meaningful experiences to
          life.
        </p>
      </div>
    </div>
  );
};

export default About;
