// == Import NPM
import React from 'react';

// == Import Local
import './desktopWait.scss';

const DesktopWait = () => (
  <div className="desktop">
    <div className="desktop-container">
      <div className="desktop-header">
        <img src="https://i.imgur.com/JHcZ0bR.png" alt="logo BeComePote" className="desktop-logo"/>
        <img src="https://i.imgur.com/ilmJPts.png" alt="Là où tu papotes" className="desktop-bullet"/>
        <h1 className="desktop-title">BeComePote</h1>
        <h3 className="desktop-catchphrase">L'app où tu papotes</h3>
      </div>
      <div className="desktop-info">
        <p className="desktop-desc">
        Notre application BeComePote est pour l'instant réfléchie pour fonctionner sur Mobile ! Mais n'ayez crainte une version desktop est en cours de préparation. Pour l'instant rendez-vous sur votre téléphone pour profiter de BeComePote.
        </p>
        <p className="desktop-desc">
        BeComePote c'est une application faite sur mesure pour te faire des amis. Crée ton compte, regarde les profils, vois si tu as des affinités et commence à chatter avec tes nouveaux amis ! BeComePote est entièrement gratuit et exclusivement dédié à créer des relations amicales.
        </p>
      </div>
    </div>
  </div>
);


// == Export
export default DesktopWait;
