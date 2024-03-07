import projects from '../projects.json';
import React, {useState} from 'react';
import ProjectCard from '../projectCard';

function Projects() {
  const [projectsData] = useState(projects);
  return (
    <>
    <h1>Projects</h1>
    <div>
      {projectsData.map(projectsObj => (
        <ProjectCard 
          key={projectsObj.id}
          name={projectsObj.name}
          deployedSite={projectsObj.deployedSite}
          githubRepo={projectsObj.githubRepo}
          image={projectsObj.imagePath}
        />
      ))}
    </div>
    </>
  )
}

export default Projects