import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projectList = [
    {
      img: "src/assets/movieMate.png",
      title: "MovieMate",
      desc: "A movie search website built with React JS and styled with Material UI, utilizing the TMDB API for movie data.",
      githubLink: "https://github.com/Janjanny/MovieMate",
      websiteLink: "https://movie-mate-one.vercel.app/",
      icons: [
        "src/assets/react-logo.png",
        "src/assets/mui-logo.png",
        "src/assets/js-logo.png",
      ],
    },

    {
      img: "src/assets/coinCheck.png",
      title: "CoinCheck",
      desc: "A cryptocurrency search website powered by the Coingecko API, developed with React JS, Axios, and styled using Tailwind CSS.",
      githubLink: "https://github.com/Janjanny/coin-check",
      websiteLink: "https://coin-check-smoky.vercel.app/",
    },

    {
      img: "src/assets/links.png",
      title: "Links",
      desc: "A bookmark website developed with React.js, Tailwind CSS, and GSAP, utilizing localStorage for data storage.",
      githubLink: "https://github.com/Janjanny/link-app-react",
      websiteLink: "https://links-app-react.vercel.app/",
    },

    {
      img: "src/assets/quizio.png",
      title: "Quiz.io",
      desc: "A quiz website implemented with ReactJS and Material UI, utilizing the Trivia API for questions and data.",
      githubLink: "https://github.com/Janjanny/Quiz-io",
      websiteLink: "https://quiz-io-nu.vercel.app/",
    },
  ];

  return (
    <>
      <div className="w-full min-h-screen bg-bg-color text-white flex justify-center pt-[6rem] pb-[10rem] ">
        <div className="container flex flex-col gap-[1rem] w-[48rem] ">
          {projectList.map((project, key) => (
            <ProjectCard
              key={key}
              img={project.img}
              title={project.title}
              desc={project.desc}
              githubLink={project.githubLink}
              projectLink={project.websiteLink}
              icons={project.icons}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
