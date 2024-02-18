import PortPic from "../assets/portpic.jpg";
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-mainLightGray text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full gap-8">
          <div className="text-center pb-8 mb-9 max-md:mb-1">
            <p className="text-4xl font-bold inline border-b-4 border-mainGoldColor">
              About
            </p>
          </div>
        </div>
        {/*<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">*/}
        <div className="max-w-[1000px] w-full flex flex-row-reverse  gap-8 px-4">
          {/*Text container*/}
          <div className="flex flex-col justify-center items-center">
            <div className="mb-10">
              <img
                className="aspect-square w-[170px] max-md:w-[120px] h-auto object-cover rounded-full border-4 shadow-mainGoldColor shadow-md border-lightGoldColor"
                src={PortPic}
                alt="Portfolio Picture"
              />
            </div>
            <div className="text-center text-4xl font-bold max-md:text-2xl">
              <p>
                Hi. I'm Charles, nice to meet you. Please take a look around.{" "}
              </p>
            </div>
            <div className="text-center mt-7 max-md:pb-16">
              <p>
                I am passionate about building excellent software that improves
                the lives of those around me. I specialize in creating sotware
                for clients ranging from individuals and small-businesses all
                the way to large enterprise corporations. What would you do if
                you had a software expert available at your fingertips.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
