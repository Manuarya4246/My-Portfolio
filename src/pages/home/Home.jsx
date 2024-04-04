import React from 'react'
import Profile from "../../assets/home.jpg"
import { Link } from 'react-router-dom'
import {FaArrowRight} from  'react-icons/fa';
import "./home.css"
const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt=""  className='home__img'/>

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title"><span>I'm Manohar Badana.</span> Web Developer</h1>
          <p className="home__description">
           I'm a Entry-level front-end developer proficient in HTML, CSS, and JavaScript. Passionate about creating responsive and visually appealing user interfaces. Eager to contribute to dynamic web projects and continuously enhance coding skills.
          </p>

          <Link to='/about' className='button'>
            More About Me <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  )
}

export default Home
