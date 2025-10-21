"use client";
import React from "react";
import Slider from "react-slick";
import { MyProiects } from "./Projects";
import Link from "next/link";
import Image from "next/image";

const LatestWork = () => {
  const SampleNextArrow = ({ onClick, currentSlide, slideCount }) => (
    <div
      onClick={currentSlide === slideCount - 3 ? null : onClick}
      className={`absolute right-[-30px] top-1/2 -translate-y-1/2 text-3xl  z-10 transition-all duration-200 
        ${
          currentSlide === slideCount - 3
            ? "text-gray-400 cursor-not-allowed dark:text-gray-700"
            : "text-gray-800 hover:text-black cursor-pointer dark:text-white "
        }`}
    >
      ➜
    </div>
  );

  const SamplePrevArrow = ({ onClick, currentSlide }) => (
    <div
      onClick={currentSlide === 0 ? null : onClick}
      className={`absolute left-[-30px] top-1/2 -translate-y-1/2 text-3xl  rotate-180 z-10 transition-all duration-200
        ${
          currentSlide === 0
            ? "text-gray-400 cursor-not-allowed dark:text-gray-700"
            : "text-gray-800 hover:text-black cursor-pointer dark:text-white"
        }`}
    >
      ➜
    </div>
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // default (xl)
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1280, // below xl
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // below md
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div id="projects" className="relative">
      <h4 className="text-lg text-center mb-2 font-Ovo">My portfolio</h4>
      <h2 className="text-5xl text-center font-Ovo">My latest work</h2>
      <p className="max-w-2xl mx-auto font-Ovo text-center mt-5 mb-12 text-lg text-gray-700">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>

      <div className="px-[16%]">
        <Slider {...settings}>
          {MyProiects.map((project, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative h-[500px] flex flex-col  ">
                {/* Image Section */}
                <div className="relative w-full h-48 flex-[3]">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover aspect-square"
                  />
                </div>

                {/* Text Section */}
                <div className="p-5 text-center flex-[3]">
                  <p className="text-2xl mb-2 font-Ovo dark:text-black">
                    {project.title}
                  </p>
                  <p className="text-gray-600 font-sans">{project.desc}</p>
                </div>

                {/* Links Section */}
                <div className="flex items-center justify-center gap-8  mb-4">
                  <Link
                    target="_blank"
                    href={project.link}
                    className="flex gap-2 items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="7"
                      strokeLinecap="round"
                      className="lucide lucide-external-link w-9 h-9 inline"
                      aria-hidden="true"
                    >
                      <path
                        d="M15 3h6v6"
                        stroke="#000000"
                        fill="none"
                        strokeWidth="2px"
                      ></path>
                      <path
                        d="M10 14 21 3"
                        stroke="#000000"
                        fill="none"
                        strokeWidth="2px"
                      ></path>
                      <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                        stroke="#000000"
                        fill="none"
                        strokeWidth="2px"
                      ></path>
                    </svg>
                    {project.link ? (
                      <span className="dark:text-black">Live Demo</span>
                    ) : (
                      <span className="dark:text-black">Not Public</span>
                    )}
                  </Link>
                  <Link
                    target="_blank"
                    href={project.github_url}
                    className="flex items-center gap-1"
                  >
                    <Image
                      src="/github.svg"
                      alt="github"
                      width={40}
                      height={40}
                    />
                    {project.github_url ? (
                      <span className="dark:text-black">Code</span>
                    ) : (
                      <span className="dark:text-black">Private Repo</span>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LatestWork;
