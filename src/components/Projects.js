import React from 'react';
import './Projects.css';

const projects = [
  { title: 'Project 1', description: 'HTML&CSS', link: 'https://github.https://github.com/azimatalantbek/Coursera-HTML-CSS.git/project1' },
  { title: 'Project 2', description: 'My Simple Homepage', link: 'https://github.com/azimatalantbek/azimatalantbek-basic-concepts.git' },
  { title: 'Project 3', description: 'Intermediate-profile', link: 'https://github.com/azimatalantbek/azimatalantbek-intermediate.git' },
  { title: 'Project 4', description: 'IP Address checker', link: 'https://github.com/azimatalantbek/IP-Address.git' },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
