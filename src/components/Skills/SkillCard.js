import PropTypes from 'prop-types';
import './Skills.css';

export default function SkillCard({ skillName, skillUrl }) {
  return (
    <div className="skill">
      <img src={skillUrl} alt={skillName} loading="lazy" />
      <p className="skillName">{skillName}</p>
    </div>
  );
}

SkillCard.propTypes = {
  skillName: PropTypes.string.isRequired,
  skillUrl: PropTypes.string.isRequired,
};
