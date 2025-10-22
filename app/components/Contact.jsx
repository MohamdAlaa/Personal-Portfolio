"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    console.log("Access Key:", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Message sent successfully!");
      setTimeout(() => {
        setResult("");
      }, 3000);
      event.target.reset();
    } else {
      setResult("Error");
    }
  };
  return (
    <div
      id="contact"
      className="relative w-full px-[16%] py-10 scroll-m-20 mt-5"
    >
      {/* decorative blurred background - placed behind content */}
      <div className="bg-header absolute inset-0 -z-10 pointer-events-none " />

      <h4 className="text-lg text-center mb-2 font-Ovo">Connect with me</h4>
      <h2 className="text-5xl text-center font-Ovo">Professional Experience</h2>
      <p className="max-w-2xl mx-auto font-Ovo text-center mt-5 mb-12 text-xl">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="text"
            placeholder="Enter Your Name"
            required
            name="name"
          />
          <input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="email"
            placeholder="Enter Your Email"
            required
            name="email"
          />
        </div>
        <textarea
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 resize-none"
          rows={6}
          placeholder="Enter Your Message"
          required
          name="message"
        ></textarea>
        <button
          className="px-10 py-3 border rounded-full bg-black text-white flex items-center gap-2  mx-auto cursor-pointer hover:scale-105 duration-400"
          type="submit"
        >
          Send Message
          <Image
            src="/right-arrow-white.svg"
            alt="arrow"
            width={16}
            height={16}
            className="w-4"
          />
        </button>
        <p className={`font-Ovo mt-4 text-center text-green-700 text-xl`}>
          {result}
        </p>
      </form>
    </div>
  );
};

export default Contact;
