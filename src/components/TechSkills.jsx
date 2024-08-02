import React from "react";

const TechSkills = () => {
  const skillSets = [
    {
      img: "src/assets/js-logo.png",
      name: "Javascript",
    },
    {
      img: "src/assets/html-logo.png",
      name: "HTML",
    },
    {
      img: "src/assets/css-logo.png",
      name: "CSS",
    },
    {
      img: "src/assets/react-logo.png",
      name: "React",
    },
    {
      img: "src/assets/node-js logo.png",
      name: "Node JS",
    },
    {
      img: "src/assets/mui-logo.png",
      name: "Material UI",
    },
    {
      img: "src/assets/bc-logo.jfif",
      name: "Business Central",
    },
    {
      img: "src/assets/ls-central.png",
      name: "LS Central",
    },
    {
      img: "",
      name: "",
    },
  ];

  return (
    <div className="w-full h-full overflow-hidden ">
      <p className=" text-center font-[600]">Tech Skills</p>

      <div className=" h-full flex flex-col gap-2 mt-[.8rem] cursor-default overflow-auto no-scrollbar">
        {skillSets.map((skill, key) => (
          <SkillCard key={key} img={skill.img} name={skill.name}/>
        ))}
      </div>
    </div>
  );
};


const SkillCard = ({img, name}) => {
  return(
    <div className="w-full flex items-center justify-between bg-button-color p-1.5 rounded border border-button-color hover:border-primary-color">
    <div className="w-[2rem] h-[2rem] overflow-hidden rounded-md flex justify-center items-center">
      <img src={img} alt="" className=" " />
    </div>
    <div className="w-full text-center">
    <p className="text-xs">{name}</p>
    </div>
  </div>
  )
}

export default TechSkills;
