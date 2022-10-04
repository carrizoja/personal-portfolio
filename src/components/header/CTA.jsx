import React from 'react'
import CV from '../../assets/CV-V4.pdf'
import './header.css'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn btnDownload'><h4>Download CV</h4></a>
        <a href='#contact' className='btn btn-primary'><h4>Contact me</h4></a>
    </div>
  )
}

export default CTA