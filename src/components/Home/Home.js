import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ladyCartoon from '../../assets/lady-cartoon.jpeg';

function Home() {
  return (
    <div className="home-container">
      <div className="header-text">
        <h1>
          Welcome to my portfolio!
        </h1>
        <h2>
          I&apos;m Bhekisile Jozi, a
          {' '}
          <u>Software Developer</u>
          .
        </h2>
      </div>
      <div className="header-btns">
        <Link className="btn btn-white" to="/about">
          <p className="btn-text">Know more about me</p>
        </Link>
        <Link className="btn btn-transparent" to="/contact">
          <p className="btn-text">Contact with me</p>
        </Link>
      </div>
      <div className="splash-image">
        <img src={ladyCartoon} alt="Developer lady cartoon" loading="lazy" className="home-anim" />
      </div>
    </div>
  );
}

export default Home;
