import React from 'react';
import { Link } from 'gatsby';
import Logo from 'assets/images/logo.jpeg';

const Navigation = () => (
  <div>
    <Link to="/">
      <img src={Logo} alt="Karate Team Oborniki Logo" />
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="/o-nas">O nas</Link>
        </li>
        <li>
          <Link to="/instruktorzy">Instruktorzy</Link>
        </li>
        <li>
          <Link to="/galeria">Galeria</Link>
        </li>
        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
