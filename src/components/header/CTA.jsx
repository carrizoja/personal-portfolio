import React from 'react'
import './header.css'
import DropdownTW from '../dropdownTW/DropdownTW'

const CTA = () => {
  return (
    <div className='cta'>
        <DropdownTW/>
        <a href='#contact' className='btn btn-primary btnContactMe'>Contact me</a>
    </div>
  )
}

export default CTA