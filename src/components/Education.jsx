import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

const Education = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <p className=" text-base font-[600]">Education</p>

      <div className="school text-xs flex flex-col gap-[.10rem]">
        <a
          href="https://www.pup.edu.ph/binan/"
          target="_blank"
          className=" font-medium text-sm hover:underline flex gap-1"
        >
          Polytechnic University of the Philippines Biñan Campus{" "}
          <span className="text-xs">
            <IconContext.Provider value={{ size: "10px" }}>
              <FaExternalLinkAlt />
            </IconContext.Provider>
          </span>
        </a>
        <p className=" font-normal cursor-default">
          Bachelor of Science in Computer Engineering
        </p>
        <p className="italic cursor-default">Jun. 2019 - Oct. 2023</p>
      </div>
    </div>
  );
};

export default Education;
