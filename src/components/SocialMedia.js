import React from 'react'
import { FaBehance, FaLinkedinIn } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'

const SocialMedia = () => {
  return (
   <div className="app__social">
    <div>
        <a href="https://github.com/LeslieNii" target="_blank" rel="noopener noreferrer">
            <FiGithub />
        </a>
    </div>
    <div>
        <a href="https://www.behance.net/leslieokine" target="_blank" rel="noopener noreferrer">
            <FaBehance />
        </a>
    </div>
    <div>
        <a href="https://www.linkedin.com/in/leslie-okine/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
        </a>
    </div>
   </div>
  )
}

export default SocialMedia