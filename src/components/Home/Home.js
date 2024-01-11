import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ladyCartoon from '../../assets/lady-cartoon.jpeg';
import hand from '../../assets/waving-hand.jpeg';
import react from '../../assets/react-background.png';
import ruby from '../../assets/ruby-nocolor.png';

function Home() {
  return (
    <div className="home-container">
      <div className="flex-left">
        <div className="header-text">
          <div className="greeting-left">
            <img src={hand} alt="waving hand" />
          </div>
          <div className="greeting-right">
            <p>Hello, my name is</p>
            <h2>Bhekisile Jozi</h2>
          </div>
        </div>
        <p className="bio">
          I&apos;m a
          <span> full-stack web developer. </span>
          I can help you build a product , feature or website. Look through some of my
          work and experience! If you like what you see and have a project you need coded,
          don&apos;t hesitate to contact me.
        </p>
        <div className="header-btns">
          <Link className="btn btn-white" to="/about">
            <p className="btn-text blue">Know more about me</p>
          </Link>
          <Link className="btn btn-transparent" to="/contact">
            <p className="btn-text">Contact me</p>
          </Link>
        </div>
      </div>
      <div className="splash-image">
        <img src={react} alt="React icons" className="icon" />
        <img src={ladyCartoon} alt="Developer lady cartoon" loading="lazy" className="home-anim" />
        <img src={ruby} alt="Ruby icons" className="icon1" />
      </div>
    </div>
  );
}

export default Home;
