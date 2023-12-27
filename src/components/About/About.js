import React from 'react';
import './About.css';
import Header from '../Header/Header';
import resume from '../../resume.pdf';
// import Footer from "./../Footer/Footer.jsx"
// import aboutVector from "./../../assets/about_vector.png";
// import aboutAnime from "./../../assets/about_anime.gif";
function About() {
  return (
    <div className="section-container">
      <Header heading="About Me" subHeading="Software Developer" />
      <div className="about-main">
        {/* <div className="about-main-left"> */}
        <p className="about-sub-heading-details">
          I&apos;m a
          <u> software developer</u>
          {' '}
          I can help you build a product , feature or website. Look through some of my
          work and experience! If you like what you see and have a project you need coded,
          don&apos;t hesitate to contact me.
        </p>
        <a href={resume} download>
          <button type="button" className="btn btn-about">
            Download my resume
          </button>
        </a>
        {/* </button> */}
        {/* <h3 className="about-sub-heading">Blogger</h3>
          <p className="about-sub-heading-details">
            I've been writing blogs from around 3 years now, i used to write on Quora then i
            moved to hashnode now. you can read my articles
            {' '}
            <a href="https://anandbaraik.hashnode.dev/" target="_blank" rel="noreferrer">here!</a>
          </p> */}
        {/* </div> */}
        {/* <div className="about-main-right">
          <img
            src={aboutAnime}
            alt="about-anime"
            className="about-anime"
            loading="lazy"
          />
        </div> */}
      </div>
    </div>
  );
}

export default About;
