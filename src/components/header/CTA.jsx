import React from 'react'
import CV from '../../assets/CV-V4.pdf'
import './header.css'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn btnDownload'>Download CV</a>
        <a href='#contact' className='btn btn-primary btnContactMe'>Contact me</a>
    </div>
  )
}

export default CTA