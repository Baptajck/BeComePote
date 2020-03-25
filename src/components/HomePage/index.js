// == Import NPM
import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';

// == Import Local
import './homepage.scss';
import logo from './Logo_BeComePote_v3.png';

const HomePage = () => (
  <div className="homePage-layout">
    <div className="homePage">
      <header className="homePage-header">
        <img className="homePage-header-logo" src={logo} alt="Logo" title="BeComePote" />
        <h1 className="homePage-header-title">BeComePote</h1>
        <h2 className="homePage-header-subtitle">L'app où tu papotes</h2>
      </header>
      <main className="homePage-content">
        <div className="homePage-container-text">
          <p className="homePage-presentation">Avec <strong className="beComePote">BeComePote</strong>, tu as enfin une application faite sur mesure pour chercher et te faire des amis.</p>
          <br />
          <p className="homePage-presentation">Crée ton compte, regarde les profils, vois si tu as des affinités et commence à chatter avec tes nouveaux amis&nbsp;! </p>
          <br />
          <p className="homePage-presentation"><strong className="beComePote">BeComePote</strong> est entièrement gratuit et exclusivement dédié à créer des <strong className="beComePote">relations amicales.</strong></p>
        </div>
        <div className="homePage-links">
          <NavLink className="homePage-links-button" to="/connect">
            Se connecter
            <span className="homePage-links-button-arrow"><IoMdArrowForward />
            </span>
          </NavLink>
          <NavLink className="homePage-links-button" to="/create">
            Créer un compte
            <span className="homePage-links-button-arrow"><IoMdArrowForward />
            </span>
          </NavLink>
        </div>
      </main>
      <footer className="homePage-footer">Mentions légales - Qui sommes-nous ?</footer>
    </div>
  </div>
);


// == Export
export default HomePage;
