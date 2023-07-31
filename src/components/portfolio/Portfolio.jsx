import React from 'react'
import './portfolio.css'
import { useState, useEffect } from 'react'
import {getFirestore,collection, getDocs} from 'firebase/firestore' 
import Spinner from 'react-bootstrap/Spinner'

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [designProjects, setDesignProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // get fetch projects from firebase
    const db = getFirestore();
    const itemsCollection = collection(db, "Projects");
    const itemsCollection2 = collection(db, "DesignProjects")
    getDocs(itemsCollection).then((querySnapshot) => {
      if (querySnapshot.empty) {
        console.log('No matching documents.');
      }
      setProjects(querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
      setLoading(false);
    });
    getDocs(itemsCollection2).then((querySnapshot) => {
      if (querySnapshot.empty) {
        console.log('No matching documents.');
      }
      setDesignProjects(querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
      setLoading(false);
    }
    );
  }, []);

  
  return (
    <>
    {
      loading ? 
      (
        <Spinner className='spinner' animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
      )
      :
      <section id='portfolio'>
      <h5>My Dev's Projects</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {projects.map((project )=> {
          return(
            <article key={project.id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={project.image} alt={project.title} /> 
            </div>
            <h5 className='portfolio__item-title'>{project.title}</h5>
            <div className='portfolio__item-cta'>
            <a href={project.github} className='btn btnGitHub' target='_blank' rel='noreferrer'>Github</a>
            <a href={project.demo} className='btn  btnLive' target='_blank' rel='noreferrer'>Live</a>
            </div>   
          </article>
          )
        })
      }
      </div>
      <h5 className='title_designProject'>My Design's Projects</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {designProjects.map((designProject )=> (
          <article key={designProject.id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={designProject.image} alt={designProject.name} />
            </div>
            <h5 className='portfolio__item-title'>{designProject.name}</h5>
            <h6 className='portfolio__item-description'>{designProject.description}</h6>
            <div className='portfolio__item-cta'>
            <a href={designProject.link} className='btn btnGitHub' target='_blank' rel='noreferrer'>Visit it!</a></div>
          </article>
        ))
      }
      </div>
    </section>   
      
    }
    </>
   
  )
}

export default Portfolio