import React from "react";
import { IconContext } from "react-icons";
import { FaLocationDot } from "react-icons/fa6";
import { MdPhoneAndroid } from "react-icons/md";
import { GrGithub } from "react-icons/gr";
const Profile = () => {
  const tags = [
    "Graphics Designer",
    "IT Application Support",
    "Aspiring Developer",
    "Computer Engineer",
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between gap-[.7rem]">
      <div className="profile-div flex gap-[1rem]">
        <div className="picture-div bg-button-color w-[6.5rem] h-[6.5rem] rounded "></div>
        <div className="name-div pt-[8px] font-medium">
          <p>Chris Jan Beboso</p>
          <div className="flex flex-col font-normal text-xs gap-[6px] mt-[8px] ">
            <p className="flex gap-2">
              <span>
                <IconContext.Provider
                  value={{ size: ".8rem", color: "#9887EB" }}
                >
                  <FaLocationDot />
                </IconContext.Provider>
              </span>
              Biñan City, Laguna
            </p>
            <p className="flex gap-2">
              <span>
                <IconContext.Provider
                  value={{ size: ".8rem", color: "#9887EB" }}
                >
                  <MdPhoneAndroid />
                </IconContext.Provider>
              </span>
              09976529571
            </p>
            <a
              className="flex gap-2 hover:underline"
              href="https://github.com/Janjanny"
              target="_blank"
            >
              <span>
                <IconContext.Provider
                  value={{ size: ".8rem", color: "#9887EB" }}
                >
                  <GrGithub />
                </IconContext.Provider>
              </span>
              Janjanny
            </a>
          </div>
        </div>
      </div>

      <div className="tags-div flex flex-wrap text-[10px] gap-[8px]">
        {tags.map((tag) => (
          <div className=" bg-button-color px-[.5rem] py-[.2rem] rounded-xl cursor-default flex">
            <div className="w-2px h-2px bg-primary-color"></div>
            {tag}
          </div>
        ))}
      </div>
      <div className="button-div flex gap-2 text-center w-full justify-center items-center">
        <div className=" bg-button-color text-sm w-full py-2 cursor-pointer rounded border border-stroke-color">
          <a href="/" target="_blank">
            LinkedIn
          </a>
        </div>
        <div className=" bg-button-color text-sm w-full py-2 cursor-pointer rounded border border-stroke-color">
          <a href="">Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
