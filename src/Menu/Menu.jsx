import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import './Menu.css';

function Menu() {
  return (
    <div className="menu-class">
      <ul>
        <li>
        <a href="Home">Home</a>
        <a  href="About">About</a>
        <a href="Skills">Skills</a>
        <a href="Contact">Contact</a>
        <a className="tap-me" href="Hire">Hire Me</a>
        </li>
        
      </ul>
    </div>
  );
}

function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="menu-item">
      <div className="tap-menu">
        <button onClick={toggleMenu} className="tap-me-menu">
        <MenuIcon/>
        </button>
        {menuVisible && <Menu />}
      </div>
    </div>
  );
}

export default App;
