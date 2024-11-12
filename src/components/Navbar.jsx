import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
//import Logo from "../assets/logo-2-crop.png";
import Logo from "../assets/logo-2-strong-gold-removebg.png";
import { Link } from "react-scroll";

const Navbar = ({ activeSection, setActiveSection }) => {
  const setActiveSectionTo = (sectionId) => {
    setActiveSection(sectionId);
    console.log(activeSection);
  };
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[100px] max-md:h-[50px] max-md:pb-3 flex justify-between items-center px-4 bg-mainLightGray text-gray-300 ">
      <div className="mt-3">
        <Link to="home" smooth={true} duration={500}>
          <img
            src={Logo}
            alt="Logo Image"
            className="hover:cursor-pointer pb-0 max-md:w-[60px] w-[90px]"
            //style={{ width: "150px", height: "80px" }}
            //style={{ width: "75px", height: "40px" }}
          />
        </Link>
      </div>
      {/* Menu */}
      <ul className="hidden md:flex font-bold text-[1.2rem]">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setActiveSectionTo(0)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setActiveSectionTo(1)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={() => setActiveSectionTo(2)}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="project"
            smooth={true}
            duration={500}
            onClick={() => setActiveSectionTo(3)}
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setActiveSectionTo(4)}
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*Mobile Menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-mainLightGray flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="project" smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/*Social icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/charles-payne-41b533226"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Linkedin{" "}
              <FaLinkedin
                className="mr-[-10px] lg:mr-0 duration-300"
                size={30}
              />
            </a>
          </li>{" "}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="https://github.com/CP-Payne"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>{" "}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              href="mailto:charlpayne1@gmail.com"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>{" "}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href="/files/Charles_Payne_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
