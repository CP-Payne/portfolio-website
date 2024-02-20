import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-mainLightGray flex justify-center items-center p-4 text-white"
    >
      <form
        method="POST"
        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
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
      </form>
    </div>
  );
};

export default Contact;
