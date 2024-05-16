import PropTypes from 'prop-types';
import './Projects.css';

function ProjectCard(
  {
    projectName,
    projectDescription,
    imageUrl,
    projectUrl,
    linkSource,
  },
) {
  return (
    <div className="project-card">
      <div className="image-container">
        <a
          href={projectUrl}
          className="project-external-link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={imageUrl}
            alt={projectName}
            className="project-image"
            loading="lazy"
          />
        </a>
      </div>
      <div className="project-details-container">
        <h2 className="project-heading">
          {projectName}
        </h2>
        <p className="project-details">
          {projectDescription}
        </p>
        <div className="project-view">
          <a
            href={projectUrl}
            className="project-live-link"
            target="_blank"
            rel="noreferrer"
          >
            View live
          </a>
          <a
            href={linkSource}
            className="project-source-link"
            target="_blank"
            rel="noreferrer"
          >
            View source
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
  linkSource: PropTypes.string.isRequired,
};

export default ProjectCard;
