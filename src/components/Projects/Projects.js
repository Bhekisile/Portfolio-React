import React from 'react';
import './Projects.css';
import { v4 as uuidv4 } from 'uuid';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import projectsData from '../../assets/projectsData';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <div className="section-container">
      <Header
        heading="My Projects."
        subHeading="I can help you build a product , feature or website. Look through some of my work and
        experience! If you like what you see and have a project you need coded,
        don&apos;t hesitate to contact me."
      />
      <div className="project-cards-container">
        {
        projectsData.map(({
          projectName,
          projectDescription,
          imageUrl,
          projectUrl,
        }) => (
          <ProjectCard
            key={uuidv4()}
            projectName={projectName}
            projectDescription={projectDescription}
            imageUrl={imageUrl}
            projectUrl={projectUrl}
          />
        ))
      }
      </div>
      <Footer
        phrase="Check out "
        link="my skills!"
        toAddress="/skills"
      />
    </div>
  );
}

export default Projects;
