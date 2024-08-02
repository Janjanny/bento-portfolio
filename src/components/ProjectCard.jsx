import React from 'react'

const ProjectCard = ({img, title, desc, githubLink, projectLink}) => {
  return (
    <div className=' h-max bg-button-color flex p-2'>
        <div className="image-div w-[5rem] h-[5rem] bg-primary-color"></div>
        <div className="proj-desc-div">
            <div className="desc-div">
                <p>Project Title</p>
                <p>Project Description</p>
            </div>


        </div>
    </div>
  )
}

export default ProjectCard