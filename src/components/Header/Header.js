import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ heading, subHeading }) => (
  <div className="header-container">
    <h1>
      {heading}
    </h1>
    <p>
      {subHeading}
    </p>
  </div>
);

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default Header;
