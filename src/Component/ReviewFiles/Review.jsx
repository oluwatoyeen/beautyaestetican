import React from 'react'
import './Review.css'
import PIC1 from "./../../assets/test1.jpg"
import PIC2 from "./../../assets/test2.jpg"
import PIC3 from "./../../assets/test3.jpg"




const projectsData = [
  {
    id: 1,
    title: "Body Sculping Review",
    description: "I love my body now. It's like a piece of Art. Thank you Doctor",
    image: PIC1,
  },
  {
    id: 2,
    title: "Facial Review",
    description: "My face has been shining bright and very soft after the facials. You are the best!!!",
    image: PIC2,

  },
  {
    id: 3,
    title: "Facial Sulpting Review",
    description: "You are really the best! Thank you",
    image: PIC3,
  },

  
];
const Review = () => {


  return (
    <section className="projects">
      <h2>Reviews</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Review