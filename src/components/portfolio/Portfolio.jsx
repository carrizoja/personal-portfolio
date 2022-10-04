import React from 'react'
import './portfolio.css'
import ijacPhoto from '../../assets/ijac.png'
import sweetDesign from '../../assets/sweetDesign.png'
import sDesignEcommerce from '../../assets/sweetDesignEcommerce.png' 
import ijacEcommerce from '../../assets/reactEcommerce.png'
import backendEcommerce from '../../assets/backendEcommerce.png'

const data = [
  {
    id: 1,
    image: ijacPhoto,
    title: 'iJac IT Solutions',
    github: 'https://github.com/carrizoja/ijac.com.ar',
    demo: 'https://ijac.com.ar'
  },
  {
    id: 2,
    image: sweetDesign,
    title: 'Sweet Design Pastelería',
    github: 'https://github.com/carrizoja/sweetdesign',
    demo: 'https://sweetdesignpasteleria.com.ar'
  },
  {
    id: 3,
    image: sDesignEcommerce,
    title: 'Sweet Design eCommerce Javascript',
    github: 'https://github.com/carrizoja/cursoJavascriptCoder',
    demo: 'https://carrizoja.github.io/cursoJavascriptCoder/pages/comprar.html'
  },
  {
    id: 4,
    image: ijacEcommerce,
    title: 'iJac eCommerce React Js',
    github: 'https://github.com/carrizoja/cursoReactCoderhouse',
    demo: 'https://optimistic-beaver-a7eebe.netlify.app/'
  },
  {
    id: 5,
    image: backendEcommerce,
    title: 'Backend eCommerce with Node Js / Mongo DB',
    github: 'https://github.com/carrizoja/cursoBackendCoder/tree/main/EntregaFinal',
    demo: 'https://ecommerce-ch-pb.herokuapp.com/'
  }


]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
       
        {data.map(({ id, image, title, github, demo }) => {
          return(
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3 className='portfolio__item-title'>{title}</h3>
            <div className='portfolio__item-cta'>
            <a href={github} className='btn' target='_blank' rel='noreferrer'><h4>Github</h4></a>
            <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'><h4>Live</h4></a>
            </div>   
          </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio