import projects from '../components/projects.json';
import React, {useState} from 'react';
import ProjectCard from '../components/projectCard';

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
          image={projectsObj.image}
        />
      ))}
    </div>
    </>
  )
}

export default Projects