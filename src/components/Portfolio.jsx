import React from "react";
import portfolio1 from "../assets/portfolio/portfolio1placeholder.jpg";
import portfolio2 from "../assets/portfolio/portfolio2placeholder.jpg";
import portfolio3 from "../assets/portfolio/portfolio3placeholder.jpg";
import portfolio4 from "../assets/portfolio/portfolio4placeholder.jpg";
import portfolio5 from "../assets/portfolio/portfolio5placeholder.jpg";
import portfolio6 from "../assets/portfolio/portfolio6placeholder.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: portfolio1,
      demo: "www.example.com",
      code: "www.example.com",
    },
    {
      id: 2,
      src: portfolio2,
      demo: "www.example.com",
      code: "www.example.com",
    },
    {
      id: 3,
      src: portfolio3,
      demo: "www.example.com",
      code: "www.example.com",
    },
    {
      id: 4,
      src: portfolio4,
      demo: "www.example.com",
      code: "www.example.com",
    },
    {
      id: 5,
      src: portfolio5,
      demo: "www.example.com",
      code: "www.example.com",
    },
    {
      id: 6,
      src: portfolio6,
      demo: "www.example.com",
      code: "www.example.com",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={code}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
