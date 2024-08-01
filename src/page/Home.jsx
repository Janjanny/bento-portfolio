import React from "react";


const Home = () => {
  return <>
    
    <div className="w-full h-screen bg-bg-color text-white flex justify-center items-center pt-[4rem] ">
      <div className="container grid grid-cols-10 grid-rows-8 gap-[.30rem] w-[45rem] h-[31rem]">
        <div className=" bg-grid-color border border-stroke-color rounded-md col-span-3 row-span-6 p-[1.2rem]"><WorkExperience/></div>
        <div className=" bg-grid-color border border-stroke-color rounded-md col-span-7 row-span-2 p-[1.2rem]">About me</div>
        <div className=" bg-grid-color border border-stroke-color rounded-md col-span-5 row-span-4 p-[1.2rem]">Name</div>
        <div className=" bg-grid-color border border-stroke-color rounded-md col-span-2 row-span-4 p-[1.2rem]">Technical Skills</div>
        <div className=" bg-grid-color border border-stroke-color rounded-md col-span-3 row-span-2 p-[1.2rem]">Quote</div>
        <div className=" bg-grid-color border border-stroke-color rounded-md col-span-7 row-span-2 p-[1.2rem]">Education</div>
      </div>
    </div>
  </>;
};

const WorkExperience = () => {
  return (
    <>
      <div className="w-full h-full">
        <p className=" text-base font-medium">Work Experience</p>

        <div className="experiences">
          <div className="work text-sm text-start">
            <p className="job-title">IT Application Support</p>
            <p className="job-date">Feb. 2024 - Present</p>
            <p className="job-description text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
