import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

// import { slide as Menu } from 'react-burger-menu';
import * as FaIcons from 'react-icons/fa6';
import * as AiIcons from 'react-icons/ai';
// import { IconContext } from 'react-icons';
import SidebarData from './SidebarData';
// import { useSelector, useDispatch } from 'react-redux';
import './Navbar.css';
// import Footer from '../Footer/Footer';

// const LinksComponent = () => {
//   const [showLinks, setShowLinks] = useState(false);

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);
  // const location = useLocation();
  // const path = location.pathname;

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  // const handleStateChange = () => {
  //   setMenuOpen(!menuOpen);
  // };

  // const closeMenu = () => {
  //   setMenuOpen(menuOpen);
  // };

  return (
    // <div>
    // <Menu
    //   isOpen={setMenuOpen}
    //   onStateChange={(state) => handleStateChange(state)}
    // >
    <>
      {/* <IconContext.Provider value={{color: #fff}}> */}
      <div className="navbar">
        <Link to="/#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="/#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {/* {
          SidebarData.map(({
            title,
            path,
          }) => (
            <SidebarData
              key={uuidv4()}
              title={title}
              path={path}
            />
          ))
          } */}
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
      {/* </IconContext.Provider> */}
      {/* </Menu> */}
    </>
  );
}

export default Navbar;
