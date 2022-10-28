import React from 'react'
import { FaTwitterSquare, FaGithubSquare , FaDribbbleSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <a href='https://twitter.com/Manikanta528' target='_blank' rel="noreferrer noopener" ><FaTwitterSquare className='icons'/></a>
        <a href='https://github.com/Manikanta528' target='_blank' rel="noreferrer noopener" ><FaGithubSquare className='icons'/></a>
        <a href='https://dribbble.com/Manikanta528' target='_blank' rel="noreferrer noopener" ><FaDribbbleSquare className='icons'/></a>
    </div>
  )
}

export default Footer