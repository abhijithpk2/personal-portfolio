import React from 'react';
import {ProjectList} from '../helpers/ProjectList'
import ProjectItem from '../component/ProjectItem'

const Projects = () => {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project,index)=>{
          return <ProjectItem id={index} name={project.name} image={project.image} />
        }
        )}
      </div>
    </div>
  )
}

export default Projects