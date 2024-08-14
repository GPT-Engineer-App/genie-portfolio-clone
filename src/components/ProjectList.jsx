import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Project 1",
    description: "A brief description of project 1",
    tags: ["React", "Tailwind CSS", "Node.js"]
  },
  {
    title: "Project 2",
    description: "A brief description of project 2",
    tags: ["Vue.js", "Express", "MongoDB"]
  },
  {
    title: "Project 3",
    description: "A brief description of project 3",
    tags: ["React Native", "Firebase", "GraphQL"]
  }
];

const ProjectList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;