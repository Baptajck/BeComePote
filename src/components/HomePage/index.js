// == Import NPM
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

// == Import Local
import './homepage.scss';
import logo from './Logo_BeComePote_shadow.png';


const HomePage = () => (
  <div className="homePage-layout">
    <div className="homePage">
      <header className="homePage-header">
        <img className="homePage-header-logo" src={logo} alt="Logo" title="BeComePote" />
        <h1 className="homePage-header-title">BeComePote</h1>
        <h2 className="homePage-header-subtitle">L'app où tu papotes</h2>
      </header>
      <main className="homePage-content">
        <p className="homePage-presentation">Avec <strong className="beComePote">BeComePote</strong>, tu as enfin une application faite sur mesure pour chercher et te faire des amis.</p>
        <br />
        <p className="homePage-presentation">Crée ton compte, regarde les profils, vois si tu as des affinités et commence à chatter avec tes nouveaux amis&nbsp;! </p>
        <div className="homePage-links">
          <a className="homePage-links-button" href="#">
            Se connecter
            <span className="homePage-links-button-arrow"><FaArrowRight />
            </span>
          </a>
          <a className="homePage-links-button" href="#">
            Créer un compte
            <span className="homePage-links-button-arrow"><FaArrowRight />
            </span>
          </a>
        </div>
      </main>
      <footer className="homePage-footer">mentions légales</footer>
    </div>
  </div>
);


// == Export
export default HomePage;
