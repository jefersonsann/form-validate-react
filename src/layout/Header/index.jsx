import React from 'react';
import './Header.css';

const index = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="wrapper">
          <div className="header__logo">Logo</div>
          <nav className="header__menu">
            <ul>
              <li>
                <a href="/">Login</a>
              </li>
              <li>
                <a href="#" className="signup">
                  Sign up
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default index;
