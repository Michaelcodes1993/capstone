import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar } from 'antd';
const navLinks = [
  {
    title: 'Home',
    path: '/',
  },

  {
    title: 'Registration',
    path: '/registration',
  },
  {
    title: 'Login',
    path: '/login',
  },
];

export default function Navigation(props) {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <nav className="site-nav">
      <span className="menu-title">My Blog</span>
      <div className={`menu-content-container ${menuActive && 'active'}`}>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                onClick={() => setMenuActive(!menuActive)}
                exact
                activeClassName="navsbar"
                to={link.path}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <span className="menu-avatar-container">
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            size="38"
          />
          <span className="menu-avatar-name">
            {props.user.firstName} {props.user.lastName}
          </span>
        </span>
      </div>
      <i
        className="ionicons icon ion-ios-menu"
        onClick={() => setMenuActive(!menuActive)}
      />
    </nav>
  );
}
