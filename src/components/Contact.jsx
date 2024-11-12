import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-mainLightGray flex justify-center items-center p-4 text-white"
    >
      <form
        method="POST"
        action="https://getform.io/f/nadoqgxb"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 max-md:pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-mainGoldColor text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4 max-md:pt-9 max-md:pb-0">
            // Submit the form below or shoot me an email - &nbsp;
            <span className="font-bold">charlpayne1@gmail.com</span>
          </p>
        </div>
        <input
          className=" p-2 bg-transparent border-2 rounded-md focus:outline-none"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none "
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-mainGoldColor hover:text-white hover:font-bold border-2 hover:bg-mainGoldColor hover:border-mainGoldColor px-4 py-3 my-8 mx-auto flex items-center border-mainGoldColor">
          Let's Collaborate
        </button>

<div className="flex flex-col justify-center w-full md:hidden">
        <ul className="flex flex-row justify-between gap-3 ">
          <li className="w-[75px] h-[75px]  flex justify-between items-center bg-blue-600 shadow-lg shadow-[#040c16]">
            <a
              href="https://www.linkedin.com/in/charles-payne-41b533226"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between items-center w-full text-gray-300"
            >
              Linkedin{" "}
              <FaLinkedin
                size={30}
              />
            </a>
          </li>{" "}
          <li className="w-[75px] h-[75px] flex justify-between items-center  bg-[#333333] shadow-lg shadow-[#040c16]">
            <a
              href="https://github.com/CP-Payne"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between items-center w-full text-gray-300"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>{" "}
          <li className="w-[75px] h-[75px] flex justify-between items-center  bg-[#6fc2b0] shadow-lg shadow-[#040c16]">
            <a
              href="mailto:charlpayne1@gmail.com"
              className="flex flex-col justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>{" "}
          <li className="w-[75px] h-[75px] flex justify-between items-center  bg-[#565f69] shadow-lg shadow-[#040c16]">
            <a
              href="/portfolio-website/files/Charles_Payne_CV.pdf"
              // href={`${process.env.PUBLIC_URL}/files/Charles_Payne_CV.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
      </form>
      
    </div>
  );
};

export default Contact;
