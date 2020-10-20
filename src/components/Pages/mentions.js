// == Import NPM
import React from 'react';
import { FiArrowLeft, FiHome } from 'react-icons/fi';

// == Import Local
import './pages.scss';

const Mentions = () => (
  <div className="desktop">
    <div className="desktop-container">
      <div className="desktop-header">
        <img src="https://i.imgur.com/JHcZ0bR.png" alt="logo BeComePote" className="desktop-logo"/>
        <img src="https://i.imgur.com/ilmJPts.png" alt="Là où tu papotes" className="desktop-bullet"/>
        <h1 className="desktop-title">Mentions Légales & <br />Politique de Confidentialité</h1>
        <h3 className="desktop-catchphrase">de BeComePote</h3>
      </div>
      <div className="desktop-navigation">
        <a className="desktop-box" title="Retour à l'accueil" href="/"><FiArrowLeft /><FiHome /> </a>
      </div>
      <div className="desktop-navigation">
        <a className="desktop-box-info" title="Retour à l'accueil" href="/terms">Consulter nos conditions d'utilisation</a>
      </div>
      <div className="desktop-info">
        <p className="desktop-article">
        Mentions Légales
        </p>
        <span className="desktop-span">Propriété intellectuelle</span>
        <p className="desktop-desc">Toutes les données de : textes, photographies, illustrations, icônes, bases de données, etc… sont la propriété exclusive de BeComePote. Toute utilisation, fait l’objet d’une autorisation spécifique à demander auprès de BeComePote.</p>
        <span className="desktop-span">Confidentialité</span>
        <p className="desktop-desc">BeComePote n’enregistre pas d’informations personnelles permettant l’identification, à l’exception des formulaires que l’utilisateur est libre de remplir. Ces informations ne seront pas utilisées sans votre accord, nous les utiliserons seulement pour vous adresser des courriers, des brochures, des devis ou vous contacter. « Les informations recueillies sur les sites bénéficient de la protection de la loi « Informatique et Libertés » n° 78-17 du 06 janvier 1978. Elles bénéficient d’un droit d’accès, de rectification, d’opposition à communication et de suppression sur simple demande à becomepte@gmail.com.<br /><br />
        BeComePote pourra procéder à des analyses statistiques sans que celles-ci soient nominatives et pourra en informer des tiers (organismes d’évaluation de fréquentation) sous une forme résumée et non nominative.<br /><br />
        Ce site est la propriété de BeComePote.com.</p>
        <span className="desktop-span">Liens hypertexte</span>
        <p className="desktop-desc">BeComePote ne contrôle pas les sites en connexion avec le sien, et ne saurait donc être responsable de leur contenu. Les risques liés à l’utilisation de ces sites incombent pleinement à l’utilisateur. Il se conformera à leurs conditions d’utilisation.</p>
        <span className="desktop-span">Editeur</span>
        <p className="desktop-desc">BeComePote<br />
        Siège social : e-Potion, 3 rue Victor Hugo, 69220 Belleville <br />
        Email: becomepote@gmail.com</p>
        <span className="desktop-span">Directeurs de la publication</span>
        <p className="desktop-desc">Christian Bourgeois <br />
        Baptiste Parville<br /></p>
        <span className="desktop-span">Hébergement</span>
        <p className="desktop-desc">Christian Bourgeois <br />
        Baptiste Parville<br /></p>
      </div>
      <div className="desktop-info">
        <p className="desktop-article">
        Politique de Confidentialité
        </p>
        <span className="desktop-span">Politique de cookie</span>
        <p className="desktop-desc">Ce site utilise des cookies – de petits fichiers texte qui sont placés sur votre machine pour aider le site à fournir une meilleure expérience utilisateur. En général, les cookies sont utilisés pour conserver les préférences de l’utilisateur, stocker des informations pour des choses comme les paniers d’achat et fournir des données de suivi anonymisées à des applications tierces comme Google Analytics. En règle générale, les cookies rendront votre expérience de navigation meilleure. Toutefois, vous pouvez préférer désactiver les cookies sur ce site et sur d’autres. Le moyen le plus efficace consiste à désactiver les cookies dans votre navigateur. Nous vous suggérons de consulter la section Aide de votre navigateur ou de consulter le site Web <a target="_blank" style={{ color: '#ce6795' }} href="https://www.aboutcookies.org/">À propos des cookies</a>  (en anglais) qui propose des conseils pour tous les navigateurs modernes. <br />
        <br />
        <a target="_blank" style={{ color: '#ce6795' }} href="https://www.cnil.fr/fr/video-le-youtubeur-cookie-connecte-repond-vos-questions-sur-larrivee-du-rgpd">        Vous pouvez également consulter cette page pour plus d’information.</a></p>
        <span className="desktop-span">Cookies</span>
        <p className="desktop-desc">Si vous avez un compte et que vous vous connectez sur ce site, un cookie temporaire sera créé afin de déterminer si votre navigateur accepte les cookies. Il ne contient pas de données personnelles et sera supprimé automatiquement à la fermeture de votre navigateur.<br />
        <br />
        Lorsque vous vous connecterez, nous mettrons en place un certain nombre de cookies pour enregistrer vos informations de connexion et vos préférences d’écran. La durée de vie d’un cookie de connexion est de deux jours, celle d’un cookie d’option d’écran est d’un an. Si vous vous déconnectez de votre compte, le cookie de connexion sera effacé.</p>
        <span className="desktop-span">Durée de stockage de vos données personnelles</span>
        <p className="desktop-desc">Pour les utilisateurs et utilisatrices qui s’enregistrent sur notre site (si cela est possible), nous stockons également les données personnelles indiquées dans leur profil. Tous les utilisateurs et utilisatrices peuvent voir, modifier ou supprimer leurs informations personnelles à tout moment (à l’exception de leur nom d’utilisateur·ice). Les gestionnaires du site peuvent aussi voir et modifier ces informations.</p>
        <span className="desktop-span">Les droits que vous avez sur vos données</span>
        <p className="desktop-desc">Vous pouvez demander à recevoir un fichier contenant toutes les données personnelles que nous possédons à votre sujet, incluant celles que vous nous avez fournies. Vous pouvez également demander la suppression des données personnelles vous concernant. Cela ne prend pas en compte les données stockées à des fins administratives, légales ou pour des raisons de sécurité.</p>
      </div>
      <div className="desktop-navigation">
        <a className="desktop-box" title="Retour à l'accueil" href="/"><FiArrowLeft /><FiHome /> </a>
      </div>
    </div>
  </div>
);


// == Export
export default Mentions;
