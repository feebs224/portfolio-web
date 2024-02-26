import React from "react";
import portfolio1 from "../assets/portfolio/east.jpg";
import portfolio2 from "../assets/portfolio/ascenthalifax.jpg";
import portfolio3 from "../assets/portfolio/integral.jpg";
import portfolio4 from "../assets/portfolio/genius.jpg";
import portfolio5 from "../assets/portfolio/comingsoon.jpg";

const WordpressProjects = () => {
  const portfolios = [
    {
      id: 1,
      src: portfolio1,
      url1: "https://www.eastinfinitymarketing.com/",
    },
    {
      id: 2,
      src: portfolio2,
      url1: "https://www.ascenthalifax.com/",
    },
    {
      id: 3,
      src: portfolio3,
      url1: "https://www.weareintegralforce.com/home/",
    },
    {
      id: 4,
      src: portfolio4,
      url1: "https://www.geniusdfi.com/",
    },
    {
      id: 5,
      src: portfolio5,
      url1: "",
    },
    {
      id: 6,
      src: portfolio5,
      url1: "",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Deployed Projects
          </p>
          <p className="py-6">
            Explore a selection of client-facing front-end projects,
            meticulously crafted and seamlessly deployed for real-world impact!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, url1 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={url1}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Prototype
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

export default WordpressProjects;
