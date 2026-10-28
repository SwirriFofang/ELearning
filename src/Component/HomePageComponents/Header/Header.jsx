import React from 'react'
import './Header.css'
import { assets } from '../../../assets/assets'
const Header = () => {
  return (
    <div className='header'>
      <div className='container hero-inner'>
        <div className="header-contents">
          <h1>Knowledge Connection
            <strong>Open the Door to the Future</strong>
          </h1>
          
          <p>
            Giving every student the opportunity to access the best education
            <br /> and the door to the world of knowledge.
            <br /> Start your learning journey today with Edudu  to become
            <br />an outstanding student in our learning community.
          </p>

          <a className='btn btn-brand'>Get started !</a>
        </div>

        <div className="hero-img">
          <span className="blob blob-light" />
          <img src={assets.hero} alt="" />
        </div>

        
      </div>


    </div>
  )
}

export default Header

