const ProjectItem = ({ title, imgUrl, stack, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className=" max-md:w-[230px] max-md:h-[140px] rounded-md overflow-hidden border-white shadow-lg shadow-[#040c16] hover:scale-110 duration-500 hover:bg-mainDarkGray hover:shadow-lightGoldColor hover:shadow-lg group w-[400px]"
    >
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer container "
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 mb:mb-3 font-bold dark:text-white">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold rounded-md shadow-lg  shadow-[#040c16] group-hover:shadow-lightGoldColor group-hover:shadow-sm"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
};

export default ProjectItem;
