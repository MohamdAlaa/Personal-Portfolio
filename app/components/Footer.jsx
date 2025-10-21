import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h1 className="text-3xl">
          Mohamed Alaa<span className="text-[#EC1552]">.</span>
        </h1>
        <div className="flex w-max  gap-2 mx-auto mt-2">
          <Image
            src="/mail_icon.svg"
            alt="mail"
            width={35}
            height={35}
            className=" mx-auto mb-2 "
          />
          <p className="font-Ovo  text-[16px] md:text-lg">
            mohamedalaaelmenyawe404@gmail.com
          </p>
        </div>
      </div>
      <div className="border-t mt-10 mb-5  w-3/4 mx-auto text-gray-400" />
      <div className="flex flex-col md:flex-row justify-around items-center  gap-6 mb-5">
        <p>© 2025 Mohamed Alaa. All rights reserved</p>
        <div className="flex items-center gap-6 ">
          <Link
            className="hover:translate-x-1 duration-500 rounded-lg dark:bg-white"
            href="https://www.linkedin.com/in/mohamed-alaa-elmenyawe/"
            target="_blank"
          >
            <Image src="/linkedin.svg" alt="LinkedIn" width={50} height={50} />
          </Link>
          <Link
            className="hover:translate-x-1 duration-500  rounded-lg dark:bg-white"
            href="https://github.com/MohamdAlaa"
            target="_blank"
          >
            <Image src="/github.svg" alt="GitHub" width={50} height={50} />
          </Link>
          <Link
            className="hover:translate-x-1 duration-500 dark:bg-white rounded-lg"
            href="https://x.com/MohamedAla4863"
            target="_blank"
          >
            <Image src="/twitter.svg" alt="Twitter" width={50} height={50} />
          </Link>
          <Link
            className="hover:translate-x-1 duration-500 dark:bg-white rounded-lg"
            href="https://www.facebook.com/mohamed.elmnyawe.7"
            target="_blank"
          >
            <Image src="/facebook.svg" alt="Facebook" width={50} height={50} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
