import React from "react";

const WorkExperience = () => {
  return (
    <div id="experience" className="w-full px-[16%] py-10 scroll-m-20">
      <h4 className="text-lg text-center mb-2 font-Ovo">My Work Experience</h4>
      <h2 className="text-5xl text-center font-Ovo">Professional Experience</h2>

      <div className="grid sm:grid-cols-1  lg:grid-cols-2 gap-6 my-10">
        {/* Masa International Group */}
        <div className="wrapper border p-6 rounded-lg hover:shadow-[var(--blackshadow)] hover:duration-600 hover:bg-[var(--lightHover)] hover:translate-y-[-10px] dark:hover:bg-[var(--darkHover)] dark:hover:shadow-[var(--whiteshadow)] ">
          {" "}
          <h3 className=" text-2xl font-Ovo flex flex-col xl:flex-row  items-center xl:gap-4   ">
            Front End Developer
            <span className="text-lg text-gray-600">Dec 2024 - present</span>
          </h3>
          <h4 className="text-lg font-Ovo  flex flex-col md:flex-row  items-center justify-center lg:justify-start ">
            Masa International Group
            <span className="text-gray-600 flex gap-1">
              <span className=" hidden md:block">.</span>Full Time
            </span>
          </h4>
          <p className="my-2 text-gray-600 font-Ovo dark:text-gray-300">
            Collaborated on dynamic CMS projects with custom control panels,
            delivered bilingual RTL layouts, built scalable dashboards with
            reusable UI components, and improved page load times by 30% through
            performance audits and code optimizations.
          </p>
        </div>

        {/* Not Found Agency */}
        <div className="wrapper border p-6 rounded-lg hover:shadow-[var(--blackshadow)] hover:duration-600 hover:bg-[var(--lightHover)] hover:translate-y-2.5 dark:hover:bg-[var(--darkHover)] dark:hover:shadow-[var(--whiteshadow)] ">
          <h3 className="text-2xl font-Ovo flex flex-col xl:flex-row  items-center sm:gap-0 xl:gap-4">
            Front End Developer
            <span className="text-lg text-gray-600">Jan 2024 - May 2024</span>
          </h3>
          <h4 className="text-lg font-Ovo  flex flex-col md:flex-row  items-center justify-center lg:justify-start ">
            Not Found Agency{" "}
            <span className="text-gray-600 flex gap-1">
              <span className=" hidden md:block">.</span> Freelance
            </span>
          </h4>
          <p className="my-2 text-gray-700 font-Ovo dark:text-gray-300">
            Developed a modern educational platform that enables teachers to
            manage lessons and track student progress efficiently. The platform
            offers interactive payment options and multi-level course
            organization.
          </p>
        </div>

        {/* Ebda */}
        <div className="wrapper border p-6 rounded-lg hover:shadow-[var(--blackshadow)] hover:duration-600 hover:bg-[var(--lightHover)] hover:translate-y-[-10px] dark:hover:bg-[var(--darkHover)] dark:hover:shadow-[var(--whiteshadow)] ">
          <h3 className="text-2xl font-Ovo flex flex-col xl:flex-row  items-center xl:gap-4 ">
            Front End Developer
            <span className="text-lg text-gray-600">Feb 2022 - Aug 2022</span>
          </h3>
          <h4 className="text-lg font-Ovo  flex flex-col md:flex-row  items-center justify-center lg:justify-start">
            Ebda{" "}
            <span className="text-gray-600 flex gap-1">
              <span className=" hidden md:block">.</span>Full Time
            </span>
          </h4>
          <p className="my-2 text-gray-700 font-Ovo dark:text-gray-300">
            Designed responsive web applications with seamless API integration,
            collaborated with cross-functional teams to ensure smooth
            development, and built strong client relationships by effectively
            addressing project needs.
          </p>
        </div>

        {/* Front End Training */}
        <div className="wrapper border p-6 rounded-lg hover:shadow-[var(--blackshadow)] hover:duration-600 hover:bg-[var(--lightHover)] hover:translate-y-2.5 dark:hover:bg-[var(--darkHover)] dark:hover:shadow-[var(--whiteshadow)]  ">
          <h3 className="text-2xl font-Ovo flex flex-col xl:flex-row  items-center xl:gap-4">
            Front End Training
            <span className="text-lg text-gray-600">Jan 2021 - Apr 2021</span>
          </h3>
          <h4 className="text-lg font-Ovo  flex flex-col md:flex-row  items-center justify-center lg:justify-start">
            App Scoure{" "}
            <span className="text-gray-600 flex gap-1">
              <span className=" hidden md:block">.</span>Full Time
            </span>
          </h4>
          <p className="my-2 text-gray-700 font-Ovo dark:text-gray-300">
            Learned React and gained expertise in Redux for effective state
            management, culminating in a final project that applied all learned
            concepts in a practical web application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
