import React from "react";
import { IconContext } from "react-icons";
import { FaCircle } from "react-icons/fa6";

const WorkExperience = () => {
  const workList = [
    {
      jobTitle: "IT App Support",
      jobDate: "Feb. 2024 - Present",
      jobDescription: "Provided L1 support for ERP System and POS System.",
    },
    {
      jobTitle: "Graphics Designer",
      jobDate: "Nov. 2021 - Dec. 2023",
      jobDescription:
        "Worked as a Freelance Graphics Designer focusing in Clothing Designs and Branding.",
    },

    
  
  ];

  return (
    <div className="w-full h-full  overflow-hidden">
      <p className=" text-base font-[600] mb-[1rem]">Work Experience</p>

      <div className="experiences flex flex-col ">
        <div className="work text-sm text-start cursor-default">
          {workList.map((work, key) => (
            <Work
              jobTitle={work.jobTitle}
              jobDate={work.jobDate}
              jobDescription={work.jobDescription}
              index={key}
              arrayLength={workList.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Work = ({ jobTitle, jobDate, jobDescription, index, arrayLength }) => {
  return (
    <div className="relative pl-4 h-max ">
      <div className="line absolute left-0 mt-[.35rem] h-full flex ">
        <IconContext.Provider value={{ size: ".6rem", color: "#9887EB" }}>
          <FaCircle />
        </IconContext.Provider>
        <div className={`vertical-line h-full w-[1px] ${index == arrayLength - 1 ? " bg-gradient-to-b from-primary-color to-transparent" : "bg-primary-color"} absolute left-[4px]`}/>
      </div>
      <p className="job-title  text-primary-color font-[600]">
        {jobTitle}
      </p>
      <p className="job-date text-xs font-light">{jobDate}</p>
      <p className="job-description text-xs font-light mt-[.5rem] pb-[1.5rem]">
        {jobDescription}
      </p>
      
    </div>
  );
};

export default WorkExperience;
