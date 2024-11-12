import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Tailwind from "../assets/tailwind.png";
import GO from "../assets/go.png";
import Python from "../assets/python.png";
import Docker from "../assets/docker.png";
import PostgreSQL from "../assets/postgress.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full md:h-screen bg-mainLightGray text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full md:h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-mainGoldColor">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {/* <div
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-6 hover:bg-mainDarkGray hover:shadow-lightGoldColor hover:shadow-lg">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon"/>
            <p className="my-4">HTML</p>
          </div>
          <div
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-6 hover:bg-mainDarkGray hover:shadow-lightGoldColor hover:shadow-lg">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon"/>
            <p className="my-4">CSS</p>
          </div>
          <div
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-6 hover:bg-mainDarkGray hover:shadow-lightGoldColor hover:shadow-lg">
            <img
                className="w-20 mx-auto"
                src={JavaScript}
                alt="JavaScript icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div> */}
          <div
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-6 hover:bg-mainDarkGray hover:shadow-lightGoldColor hover:shadow-lg">
            <img
                //className="w-20 mx-auto"
                className="w-40 mx-auto"
                src={GO}
                alt="Go icon"
            />
            <p className="my-4">GO</p>
          </div>

          <div
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-6 hover:bg-mainDarkGray hover:shadow-lightGoldColor hover:shadow-lg">
            <img
                className="w-20 mx-auto"
                src={Python}
                alt="Python icon"
            />
            <p className="my-4">PYTHON</p>
          </div>
          <div
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-6 hover:bg-mainDarkGray hover:shadow-lightGoldColor hover:shadow-lg">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon"/>
            <p className="my-4">REACT</p>
          </div>

          <div
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-6 hover:bg-mainDarkGray hover:shadow-lightGoldColor hover:shadow-lg">
            <img className="w-20 mx-auto" src={Node} alt="Node icon"/>
            <p className="my-4">NODE JS</p>
          </div>
          <div
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-6 hover:bg-mainDarkGray hover:shadow-lightGoldColor hover:shadow-lg">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon"/>
            <p className="my-4">TAILWIND</p>
          </div>
          <div
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-6 hover:bg-mainDarkGray hover:shadow-lightGoldColor hover:shadow-lg">
            <img className="w-20 mx-auto" src={PostgreSQL} alt="PostgreSQL icon"/>
            <p className="my-4">POSTGRESQL</p>
          </div>

          <div
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-6 hover:bg-mainDarkGray hover:shadow-lightGoldColor hover:shadow-lg">
            <img className="w-[7.5rem] mx-auto" src={Docker} alt="Docker icon"/>
            <p className="my-4">DOCKER</p>
          </div>
        </div>
      </div>
      {/*Dummy element for padding - Self enclosing div*/}
      <div className="max-md:pb-16"/>
    </div>
  );
};

export default Skills;
