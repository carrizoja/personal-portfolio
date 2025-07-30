import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ijac.jpg'


const Header = () => {
  return (
    <header id='home'>
      <div className='container header__container'>
      <h5>Hello I'm</h5>
      <h1>José Carrizo</h1>
      <h5 className='text-light'>Fullstack Developer</h5>
      <CTA/>
      <div className='me'>
        <img className='profilePhoto' src={ME} alt=""/>
      </div>

      </div>
      </header>
  )
}

export default Header