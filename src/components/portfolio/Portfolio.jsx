import React from 'react'
import './portfolio.css'
import { useState, useEffect } from 'react'
import {getFirestore,collection, getDocs} from 'firebase/firestore' 
import Spinner from 'react-bootstrap/Spinner'

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // get fetch projects from firebase
    const db = getFirestore();
    const itemsCollection = collection(db, "Projects");
    getDocs(itemsCollection).then((querySnapshot) => {
      if (querySnapshot.empty) {
        console.log('No matching documents.');
      }
      setProjects(querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
      setLoading(false);
    });
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
      <h5>My Projects</h5>
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
            <a href={project.github} className='btn' target='_blank' rel='noreferrer'><h5>Github</h5></a>
            <a href={project.demo} className='btn btn-primary' target='_blank' rel='noreferrer'><h5>Live</h5></a>
            </div>   
          </article>
          )
        })
      }
      </div>
    </section>
      
    }
    </>
   
  )
}

export default Portfolio