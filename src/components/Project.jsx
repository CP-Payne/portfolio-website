import portfolio from "../data/portfolio.js";
import ProjectItem from "./ProjectItem";

const Project = () => {
    return (
        <div
            name="project"
            className="w-full md:h-screen text-gray-300 bg-mainLightGray"
        >
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full md:h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-mainGoldColor">
                        Projects
                    </p>
                    <p className="pt-6">// Check out some of my recent projects</p>
                    <p className="pb-6">// Click on a project to view more info</p>
                </div>

                {/* container for projects */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-9">
                    {portfolio.map((project, index) => (
                        <ProjectItem
                            key={index}
                            imgUrl={project.imgUrl}
                            title={project.title}
                            stack={project.stack}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
