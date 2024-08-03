import React from "react";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ img, title, desc, githubLink, projectLink }) => {
  return (
    <div className="w-full h-max bg-grid-color border border-stroke-color flex p-4 gap-5 rounded-md">
      {/* image */}
      <div className="image-div w-[25rem] min-h-[7rem] bg-primary-color rounded-md"></div>
      {/* texts and button */}
      <div className="proj-desc-div">
        {/* desc */}
        <div className="desc-div p-1">
          <p className=" font-[600] text-lg">MovieMate</p>
          <p className=" text-sm font-normal mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, perspiciatis repudiandae deleniti possimus nulla quod.
          </p>
        </div>
        {/* button */}
        <div className="button-div flex justify-between gap-2 mt-2">
          <button className="text-center w-full bg-button-color flex justify-center items-center py-2 rounded-sm border border-stroke-color hover:shadow hover:shadow-primary-color hover:border-primary-color transition-all ease-in-out active:bg-[#383838]">
            <IconContext.Provider value={{size:'1.2rem'}}>
              <FaGithub />
            </IconContext.Provider>
          </button>
          <button className="text-center w-full bg-button-color flex justify-center items-center py-2 rounded-sm border border-stroke-color hover:shadow hover:shadow-primary-color hover:border-primary-color transition-all ease-in-out active:bg-[#383838]">
          <IconContext.Provider value={{size:'1.2rem'}}>
            <FaExternalLinkAlt />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
