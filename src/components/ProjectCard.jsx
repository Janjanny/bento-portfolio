import React from "react";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ img, title, desc, githubLink, projectLink, icons }) => {
  return (
    <div className="w-full h-max bg-grid-color border border-stroke-color flex p-4 gap-5 rounded-md">
      {/* image */}
      <div className="image-div w-[18rem] min-h-[7rem] bg-button-color rounded-md overflow-hidden flex flex-shrink-0">
        <img src={img} className=" object-cover w-full h-full" alt="_image" />
      </div>
      {/* texts and button */}
      <div className="proj-desc-div flex flex-col justify-between">
        {/* desc */}
        <div className="desc-div p-1">
          <div className="flex justify-between items-center">
            <p className=" font-[600] text-lg">{title}</p>
            <div className="flex gap-2 justify-end items-center">
              {icons.map((icon) => (
                <div className="w-[18px] h-[18px] overflow-hidden rounded">
                  <img src={icon} alt="_icon" className=" object-contain" />
                </div>
              ))}
            </div>
          </div>
          <p className=" text-sm font-normal mt-2">{desc}</p>
        </div>
        {/* button */}
        <div className="button-div flex justify-between gap-2 mt-[16px]">
          <a
            className="text-center w-full bg-button-color flex justify-center items-center py-2 rounded-sm border border-stroke-color hover:shadow hover:shadow-primary-color hover:border-primary-color transition-all ease-in-out active:bg-[#383838]"
            href={githubLink}
            target="_blank"
          >
            <IconContext.Provider value={{ size: "1.2rem" }}>
              <FaGithub />
            </IconContext.Provider>
          </a>
          <a
            className="text-center w-full bg-button-color flex justify-center items-center py-2 rounded-sm border border-stroke-color hover:shadow hover:shadow-primary-color hover:border-primary-color transition-all ease-in-out active:bg-[#383838]"
            href={projectLink}
            target="_blank"
          >
            <IconContext.Provider value={{ size: "1.2rem" }}>
              <FaExternalLinkAlt />
            </IconContext.Provider>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
