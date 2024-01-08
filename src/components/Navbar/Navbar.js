import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import * as FaIcons from 'react-icons/fa6';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import SidebarData from './SidebarData';
import './Navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  // const handleClick = () => {
  //   showSidebar();
  // };

  return (
    <>
      <div className="navbar">
        { /* eslint-disable */ }
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          { /* eslint-disable */ }
          <ul className="nav-menu-items" onClick={showSidebar} onKeyDown={showSidebar}>
            <li className="navbar-toggle">
              <Link to="/#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item) => (
              <li key={uuidv4()} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
