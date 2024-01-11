import React from 'react';
import './About.css';
import Header from '../Header/Header';
import resume from '../../resume.pdf';
import Footer from '../Footer/Footer';
import aboutVector from '../../assets/about_vector.png';

function About() {
  return (
    <div className="section-container">
      <Header heading="About Me" subHeading="Full-Stack Web Developer" />
      <div className="about-main">
        <p className="about-sub-heading-details">
          I&apos;m a
          full-stack web developer, with a passion for crafting efficient software
          solutions. I have strong command over both front-end and back-end technologies,
          allowing me to deliver exceptional user experiences.
        </p>
        <button type="button" className="btn btn-about">
          <a href={resume} download className="about-anchor">
            Download my resume
          </a>
        </button>
      </div>
      <Footer
        phrase="Check out my "
        link="projects!"
        toAddress="/projects"
      />
      <div className="vector-frame">
        <img
          src={aboutVector}
          alt="about"
          className="about-vector"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default About;
