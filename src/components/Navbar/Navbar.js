import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import * as FaIcons from 'react-icons/fa6';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import SidebarData from './SidebarData';
import './Navbar.css';
// import Footer from '../Footer/Footer';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = useCallback(() => {
    setSidebar(!sidebar);
  }, [sidebar]);

  const handleClick = () => {
    showSidebar();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Link to="/#" className="menu-bars">
            <FaIcons.FaBars onClick={handleClick} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          { /* eslint-disable */ }
          <ul className="nav-menu-items" onClick={handleClick} onKeyDown={handleClick}>
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
