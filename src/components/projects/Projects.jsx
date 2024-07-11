import React from 'react';
import './Projects.scss';

const projects = [
  {
    id: 1,
    title: 'Professional Web Application',
    description: 'A robust web application for managing projects.',
    imageUrl: 'https://img.freepik.com/free-photo/man-using-digital-tablet-psd-mockup-smart-technology_53876-110815.jpg?t=st=1720398252~exp=1720401852~hmac=7c5e21b4227a524e2d0c8cda198064b1a3b7b8c3bcc89acb0c734bbe93cee86e&w=1380'
  },
  {
    id: 2,
    title: 'Mobile Application',
    description: 'A mobile app for tracking fitness activities.',
    imageUrl: 'https://img.freepik.com/free-photo/man-using-digital-tablet-psd-mockup-smart-technology_53876-110815.jpg?t=st=1720398252~exp=1720401852~hmac=7c5e21b4227a524e2d0c8cda198064b1a3b7b8c3bcc89acb0c734bbe93cee86e&w=1380'
  },
  {
    id: 3,
    title: 'Desktop Application',
    description: 'A desktop application for financial planning.',
    imageUrl: 'https://img.freepik.com/free-photo/man-using-digital-tablet-psd-mockup-smart-technology_53876-110815.jpg?t=st=1720398252~exp=1720401852~hmac=7c5e21b4227a524e2d0c8cda198064b1a3b7b8c3bcc89acb0c734bbe93cee86e&w=1380'
  },
  {
    id: 4,
    title: 'API Integration Project',
    description: 'Seamless API integration for e-commerce platform.',
    imageUrl: 'https://img.freepik.com/free-photo/man-using-digital-tablet-psd-mockup-smart-technology_53876-110815.jpg?t=st=1720398252~exp=1720401852~hmac=7c5e21b4227a524e2d0c8cda198064b1a3b7b8c3bcc89acb0c734bbe93cee86e&w=1380'
  }
];

const Projects = () => {

  return (
    <section className="projects-display">
      <h2>Our Projects</h2>
      <div className="project-list">
        {projects.map(project => (
          <div
            key={project.id}
            className="project"
          >
              <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            </div>
          <div className="image-div">
          <img src={project.imageUrl} alt={project.title} />
          <button>Read More</button>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
