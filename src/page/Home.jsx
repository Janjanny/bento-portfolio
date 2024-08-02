import React from "react";
import WorkExperience from "../components/WorkExperience";
import AboutMe from "../components/AboutMe";
import Profile from "../components/Profile";
import Quotes from "../components/Quotes";
import Education from "../components/Education";
import TechSkills from "../components/TechSkills";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen bg-bg-color text-white flex justify-center items-center pt-[4rem] ">
        <div className="container grid grid-cols-10 grid-rows-8 gap-[.30rem] w-[48rem] h-[31rem]">
          <div className=" bg-grid-color border border-stroke-color rounded-md col-span-3 row-span-6 p-[1.2rem]">
            <WorkExperience />
          </div>
          <div className=" bg-grid-color border border-stroke-color rounded-md col-span-7 row-span-2 p-[1.2rem]">
            <AboutMe />
          </div>
          <div className=" bg-grid-color border border-stroke-color rounded-md col-span-5 row-span-4 p-[1.2rem]">
            <Profile />
          </div>
          <div className=" bg-grid-color border border-stroke-color rounded-md col-span-2 row-span-4 p-[.8rem]">
            <TechSkills />
          </div>
          <div className=" bg-grid-color border border-stroke-color rounded-md col-span-3 row-span-2 p-[1.2rem]">
            <Quotes />
          </div>
          <div className=" bg-grid-color border border-stroke-color rounded-md col-span-7 row-span-2 p-[1.2rem]">
            <Education />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
