import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {

  const projectList = [
    {
      img: '',
      title: 'Project Title',
      desc: 'Project Description',
      githubLink: '',
      websiteLink: ''
    }
  ]

  return (
    <>
      <div className="w-full h-screen bg-bg-color text-white flex justify-center pt-[8rem] ">
        <div className="w-[48rem] flex flex-col gap-[1rem]">
        <ProjectCard/>
        <ProjectCard/>

        </div>
      </div>
    </>
  );
};

export default Projects;
