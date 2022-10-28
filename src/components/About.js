import React from 'react'

const About = (props) => {
    const { title, desc } = props
  return (
    <div className='about'>
        <p className='about-title'>{title}</p>
        <p className='about-desc'>{desc}</p>
    </div>
  )
}

export default About