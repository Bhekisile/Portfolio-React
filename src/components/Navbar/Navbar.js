import React from 'react';
import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import './Navbar.css';
// import Footer from '../Footer/Footer';

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">
            <button type="button" className="btn btn-success">
              Home
            </button>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <button type="button" className="btn btn-success">
              About
            </button>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <button type="button" className="btn btn-success">
              Projects
            </button>
          </Link>
        </li>
        <li>
          <Link to="/skills">
            <button type="button" className="btn btn-success">
              Skills
            </button>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <button type="button" className="btn btn-success">
              Contact
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
