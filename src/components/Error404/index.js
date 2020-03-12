// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import : local
import './error404.scss';


// == Composant
const Error404 = () => (
  <div className="error404-container">
    <div className="error404">
      <h1 className="error404-title">404</h1>
      <p className="error404-desc">Page non trouvée</p>
      <NavLink to="/" className="error404-link">Revenir à l'accueil</NavLink>
    </div>
  </div>
);


// == Export
export default Error404;
