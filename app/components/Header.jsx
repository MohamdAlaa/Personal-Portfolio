import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl mx-auto h-screen flex flex-col justify-center items-center gap-6 text-center mt-1">
      <div className="overflow-hidden rounded-full w-32 h-32 flex items-center justify-center">
        <Image
          src="/me2.webp"
          alt="me"
          width={128}
          height={128}
          className="object-cover object-top w-32 h-32"
        />
      </div>
      <h3 className="flex font-Ovo text-xl md:text-2xl">
        Hi! I’m Mohamed Alaa 👋🏻
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Frontend Web Developer
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo text-lg">
        I am a Frontend Web Developer with 3 years of professional experience in
        multiple companies and freelance projects.
      </p>
      <div className="flex   items-center gap-4 ">
        <Link
          href="#contact"
          className="px-10 py-3 border rounded-full bg-black text-white flex items-center gap-2 hover:rotate-[-10deg] transition-transform duration-300"
        >
          Connect with me
          <Image
            src="/right-arrow-white.svg"
            alt="arrow"
            width={16}
            height={16}
            className="w-4"
          />
        </Link>
        <Link
          href="/CV_Mohamed Alaa.pdf"
          target="_blank"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:rotate-10 transition-transform duration-300"
          download
        >
          My resume
          <Image
            src="/download.svg"
            alt="arrow"
            width={30}
            height={30}
            className=" bg-white rounded-[5px]"
          />
        </Link>
      </div>
      {/* social links */}
      <div className="flex items-center gap-6 ">
        <Link
          className="hover:translate-x-1 duration-500 border rounded-lg border-black dark:bg-white"
          href="https://www.linkedin.com/in/mohamed-alaa-elmenyawe/"
          target="_blank"
        >
          <Image src="/linkedin.svg" alt="LinkedIn" width={50} height={50} />
        </Link>
        <Link
          className="hover:translate-x-1 duration-500 border rounded-lg border-black dark:bg-white"
          href="https://github.com/MohamdAlaa"
          target="_blank"
        >
          <Image src="/github.svg" alt="GitHub" width={50} height={50} />
        </Link>
        <Link
          className="hover:translate-x-1 duration-500 border border-black rounded-lg  dark:bg-white"
          href="https://x.com/MohamedAla4863"
          target="_blank"
        >
          <Image src="/twitter.svg" alt="Twitter" width={50} height={50} />
        </Link>
        <Link
          className="hover:translate-x-1 duration-500 border rounded-lg dark:bg-white border-black"
          href="https://www.facebook.com/mohamed.elmnyawe.7"
          target="_blank"
        >
          <Image src="/facebook.svg" alt="Facebook" width={50} height={50} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
