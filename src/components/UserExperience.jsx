import React from "react";
import portfolio1 from "../assets/portfolio/artgallery.jpg";
import portfolio2 from "../assets/portfolio/museum.jpg";
import portfolio3 from "../assets/portfolio/portfolio3placeholder.jpg";

const UserExperience = () => {
  const portfolios = [
    {
      id: 1,
      src: portfolio1,
      url1: "https://www.figma.com/file/DEAdx3vJJD66WKvcG8UzFU/Untitled?type=design&node-id=0%3A1&mode=design&t=DxukqZTUOmMgrfd2-1",
    },
    {
      id: 2,
      src: portfolio2,
      url1: "https://xd.adobe.com/view/9d58ce8b-6691-4f36-a6ac-763c3e11fb27-c80b/",
    },
    {
      id: 3,
      src: portfolio3,
      url1: "https://xd.adobe.com/view/c9116acc-c23e-46af-931a-e295aca7a5f8-9c42/",
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
            UX/UI Design
          </p>
          <p className="py-6">Check out some of my work right here!</p>
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

export default UserExperience;
