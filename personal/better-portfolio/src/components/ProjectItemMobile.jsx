const ProjectItemMobile = ({ title, imgUrl, stack, link }) => {
  return (
    <div className=" max-md:w-[230px] max-md:h-[140px] rounded-md overflow-hidden border-white shadow-lg shadow-[#040c16] hover:scale-110 duration-500 hover:bg-mainDarkGray hover:shadow-lightGoldColor hover:shadow-lg group w-[400px]">
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="max-md:w-[230px] max-md:h-[140px] shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div hover:shadow-lightGoldColor hover:shadow-lg hover:scale-105 duration-500"
      >
        <div className="opacity-0 group-hover:opacity-100">
          <span className="text-2xl max-md:text-xl font bold text-white tracking-wider">
            {title}
          </span>
          <div className="pt-8 text-center hidden group-hover:inline-flex">
            {/* eslint-disable-next-line */}
            <a href={link} target="_blank">
              <button
                className="text-center rounded-lg px-4 py-3 max-md:px-2 max-md:py-1 m-2
                       bg-white text-gray-700 font-bold text-lg hover:bg-gray-800 hover:text-white"
              >
                Code
              </button>
            </a>
            {/* eslint-disable-next-line */}
            <a href={link} target="_blank">
              <button
                className="text-center rounded-lg px-4 py-3 m-2 max-md:px-2 max-md:py-1
                       bg-white text-gray-700 font-bold text-lg hover:bg-gray-800 hover:text-white"
              >
                Live
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItemMobile;
