// == Import NPM
import React from 'react';
import { FiArrowLeft, FiHome } from 'react-icons/fi';

// == Import Local
import './pages.scss';

const WhoAreWe = () => (
  <div className="desktop">
    <div className="desktop-container">
      <div className="desktop-header">
        <img src="https://i.imgur.com/JHcZ0bR.png" alt="logo BeComePote" className="desktop-logo"/>
        <img src="https://i.imgur.com/ilmJPts.png" alt="Là où tu papotes" className="desktop-bullet"/>
        <h1 className="desktop-title">Qui sommes-nous ?</h1>
        <h3 className="desktop-catchphrase">l'équipe de BeComePote</h3>
      </div>
      <div className="desktop-navigation">
        <a className="desktop-box" title="Retour à l'accueil" href="/"><FiArrowLeft /><FiHome /> </a>
      </div>
      <div className="desktop-info">
        <img src="https://i.imgur.com/8Cm8NTl.jpg" alt="avatar_baptiste" className="desktop-photo" />
        <p className="desktop-article">
        Baptiste
        </p>
        <span className="desktop-span">Le cerveau de l'opération</span>
        <p className="desktop-desc">Skateur du dimanche, codeur la semaine. Son motto "Y a pas de raison que ça ne marche pas là !". Amoureux du front, en plein découverte romantique avec le back, il lorgne sur Symfony et joue sur Vue.js
        <br />
        Son passe-temps du moment : refaire son portfolio tous les mois.
        </p>
      </div>
      <div className="desktop-info">
        <img src="https://i.imgur.com/IPIz3Sf.jpg" alt="avatar_christian" className="desktop-photo" />
        <p className="desktop-article">
        Christian
        </p>
        <span className="desktop-span">le metteur en scène</span>
        <p className="desktop-desc">Aime se cacher dans des bambous pour se retrouver en osmose avec la terre, son motto "Me dit pas que j'ai encore fait une faute de frappe dans le ClassName ?!" fait fureur après 2h de debug. En train de se réconcilier avec PHP 7.
        <br />
        Son passe-temps du moment : comptabiliser les heures de sommeil en retard.
        </p>
      </div>
      <div className="desktop-navigation">
        <a className="desktop-box" title="Retour à l'accueil" href="/"><FiArrowLeft /><FiHome /> </a>
      </div>
    </div>
  </div>
);


// == Export
export default WhoAreWe;
