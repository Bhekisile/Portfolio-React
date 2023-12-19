import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
      <h2 className="skills-header">My Skills</h2>
      <p className="framework">
        <strong>Frameworks:</strong>
        Rspec, Capybara and Selenium
      </p>
      <p className="framework">
        <strong>Skills:</strong>
        Database Management, Version Control, CLI,
        <br />
        Web Development and API Design
      </p>
    </div>
  );
}

export default Header;
