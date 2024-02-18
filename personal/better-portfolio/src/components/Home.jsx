/* eslint-disable react/no-unescaped-entities */
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = ({ activeSection, setActiveSection }) => {
  const setActiveSectionToSkills = () => {
    setActiveSection(2);
  };
  return (
    <div name="home" className="w-full h-screen bg-[#212121]">
      {/* Container #0a192f */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full max-md:pt-[100px]">
        <p className="text-mainGoldColor">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Charles Payne
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Graduate Software Engineer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a software engineering student, graduating in two months. I'm
          passionate about backend development with 2 years of cybersecurity
          experience as a penetration tester.
        </p>
        <div>
          <button
            onClick={setActiveSectionToSkills}
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-mainGoldColor hover:border-mainGoldColor"
          >
            <Link to="skills" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
