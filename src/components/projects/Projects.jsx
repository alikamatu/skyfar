import React, { useRef } from 'react';
import './Projects.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

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

  const scrollRef = useRef()

useGSAP(()=> {
  const mainimg = gsap.utils.toArray(scrollRef.current.children);
  gsap.from(mainimg, {
    y: 100,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      trigger: mainimg,
      start: 'bottom bottom',
      end: 'top 20%',
      scrub: true
    }
  })
})

  return (
    <section className="projects-display">
      <h2>Our Projects</h2>
      <p>Discover our range of cutting-edge technology products designed to elevate your business to new heights. From software solutions to hardware innovations, our products are crafted with precision and expertise to meet the demands of the modern digital landscape.</p>
      <div className="project-list" ref={scrollRef}>
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
