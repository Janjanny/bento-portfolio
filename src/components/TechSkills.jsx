import React from "react";

const TechSkills = () => {

  const skillSets = [
    {
      img: "/",
      name: "HTML"
    }
  ]

  return <div className="w-full h-full">
    <p className=" text-center font-[600]">Tech Skills</p>

    <div className=" flex flex-col mt-[1rem] cursor-default ">
      <div className="w-full flex items-center justify-around bg-button-color p-2 rounded">
        <div className="w-[2rem] h-[2rem] bg-[#404040] rounded-md">
          
        </div>
        <p className=" text-xs">Javascript</p>
      </div>
    </div>
  </div>;
};

export default TechSkills;
