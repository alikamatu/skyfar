import React, { useRef, useEffect } from 'react';
import './Projects.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  const projectRef = useRef(null);

  useEffect(() => {
    const projects = gsap.utils.toArray('.project');
    projects.forEach((project, i) => {
      gsap.fromTo(project, 
        { opacity: 0, scale: 0.5, y: 100 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: project,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  return (
    <section className="projects-display">
      <h2>Our Projects</h2>
      <p>Discover our range of cutting-edge technology products designed to elevate your business to new heights. From software solutions to hardware innovations, our products are crafted with precision and expertise to meet the demands of the modern digital landscape.</p>
      <div className="project-list" ref={projectRef}>
        {projects.map(project => (
          <div
            key={project.id}
            className="project"
          >
            <div className="image-div">
              <img src={project.imageUrl} alt={project.title} />
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <hr />
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
