import React from "react";

const WorkExperience = () => {
  const workList = [
    {
      jobTitle: "IT Application Support",
      jobDate: "Feb. 2024 - Present",
      jobDescription: "Provided L1 support for ERP Systems and POS Systems",
    },
    {
      jobTitle: "Graphics Designer",
      jobDate: "Nov. 2021 - Dec. 2023",
      jobDescription:
        "Worked as a Freelance Graphics Designer focusing in Clothing Designs and Branding.",
    },
  ];

  return (
    <div className="w-full h-full">
      <p className=" text-base font-medium">Work Experience</p>

      <div className="experiences ">
        <div className="work text-sm text-start">
          {workList.map((work) => (
            <Work
              jobTitle={work.jobTitle}
              jobDate={work.jobDate}
              jobDescription={work.jobDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Work = ({ jobTitle, jobDate, jobDescription }) => {
  return (
    <>
      <p className="job-title mt-[1.5rem]">{jobTitle}</p>
      <p className="job-date text-xs font-light">{jobDate}</p>
      <p className="job-description text-xs font-light mt-[.8rem]">
        {jobDescription}
      </p>
    </>
  );
};

export default WorkExperience;
