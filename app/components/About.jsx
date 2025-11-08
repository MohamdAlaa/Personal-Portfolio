import Image from "next/image";
import React from "react";
import { Technologies } from "./Projects";

const About = () => {
  return (
    <div id="about" className="w-full px-[16%] py-10 scroll-m-20 ">
      <h4 className="text-lg text-center mb-2 font-Ovo">Introduction</h4>
      <h2 className="text-5xl text-center font-Ovo">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className=" w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src="/me2.webp"
            alt="user_image"
            width={320}
            height={650}
            className="object-cover rounded-3xl w-full"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo text-lg text-center">
            I am an experienced Frontend Developer with over 2 years of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth through my skills and
            dedication to delivering high-quality web solutions.
          </p>
          <h4 className="my-6 text-gray-700 font-Ovo dark:text-gray-300">
            Technologies and Tools
          </h4>
          <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-y-3 gap-4">
            {Technologies.map((tech, index) => (
              <li
                key={index}
                className="flex flex-col items-center justify-center w-20 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-400 dark:bg-white"
              >
                <Image
                  className="mt-1"
                  src={tech.src}
                  alt={tech.alt}
                  width={50}
                  height={50}
                />
                <span className="text-xs text-center dark:text-black">
                  {tech.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
