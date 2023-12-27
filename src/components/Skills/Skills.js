import React from 'react';
import './Skills.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './SkillsHeader/Header';
import Footer from '../Footer/Footer';
import skillsVector from '../../assets/skills_vector.png';
import skillList from '../../assets/skillsData';
import SkillCard from './SkillCard';

function Skills() {
  return (
    <div className="section-container">
      <Header />
      <div className="skill-card-container">
        {
        skillList.map(({ skillName, skillUrl }) => (
          <SkillCard
            key={uuidv4()}
            skillName={skillName}
            skillUrl={skillUrl}
          />
        ))
}
      </div>
      <Footer
        phrase="Get in "
        link="touch."
        toAddress="/contact"
      />
      <div className="skills-vector-frame">
        <img
          src={skillsVector}
          alt="skill-vector"
          className="skills-vector"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Skills;
