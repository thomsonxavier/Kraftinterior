import { projects } from "../Const";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Project() {
  const projectsPerPage = 4;
  const [visibleProjects, setVisibleProjects] = useState(projectsPerPage);
  const navigate = useNavigate(); 

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + projectsPerPage);
  };

  const goToProjectDetail = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10">
      {projects.slice(0, visibleProjects).map((project, index) => {
        return (
          <div key={index} className="relative group">
            <div className="overflow-hidden relative">
              <img
                src={project.images[0]}
                alt=""
                className="w-full rounded transform transition-transform hover:scale-110"
                onClick={() => goToProjectDetail(project.id)}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center text-white">
                <div>
                  <h2 className="text-xl font-bold mb-2 sm:mb-4">{project.title}</h2>
                  <button
                    className="bg-transparent rounded-md hover:bg-black text-white font-semibold text-xs sm:text-sm hover:text-white py-1 px-2 sm:py-2 sm:px-4 border border-white"
                    onClick={() => goToProjectDetail(project.id)}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {visibleProjects < projects.length && (
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 flex justify-center">
          <button
            onClick={loadMoreProjects}
            className="bg-white hover:bg-black text-gray-800 hover:text-white font-medium text-xs sm:text-sm py-2 px-4 border border-gray-400 rounded shadow"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Project;
