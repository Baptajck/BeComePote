// == Import NPM
import React from 'react';
import { FiArrowLeft, FiClipboard } from 'react-icons/fi';

// == Import Local
import './pages.scss';

const Terms = () => (
  <div className="desktop">
    <div className="desktop-container">
      <div className="desktop-header">
        <img src="https://i.imgur.com/JHcZ0bR.png" alt="logo BeComePote" className="desktop-logo"/>
        <img src="https://i.imgur.com/ilmJPts.png" alt="Là où tu papotes" className="desktop-bullet"/>
        <h1 className="desktop-title">Conditions d'utilisation</h1>
        <h3 className="desktop-catchphrase">de BeComePote</h3>
      </div>
      <div className="desktop-navigation">
        <a className="desktop-box" title="Retour à la création de compte" href="/create"><FiArrowLeft /><FiClipboard /> </a>
      </div>
      <div className="desktop-info">
        <p className="desktop-article">
        Lexique
        </p>
        <span className="desktop-span">becomepote.fr : </span>
        <p className="desktop-desc">Désigne l'ensemble des services ayant pour objet de favoriser les rencontres virtuelles entre personnes à des fins personnelles, de loisirs et non commerciales et accessibles depuis le site Internet becomepote.fr.</p>
        <span className="desktop-span">Conditions générales d’utilisation : </span>
        <p className="desktop-desc">L'ensemble de ce document (page web).</p>
        
        <span className="desktop-span">Utilisateurs(s): </span>
        <p className="desktop-desc">Désigne toute personne physique à becomepote.fr</p>
        <span className="desktop-span">Service(s) : </span>
        <p className="desktop-desc">Désigne l'ensemble des services accessibles depuis le site Internet (Chat, ...).</p>
        <span className="desktop-span">SPAM : </span>
        <p className="desktop-desc">Désigne l'envois massif de publicité non-sollicitée.</p>
      </div>

      <div className="desktop-info">
        <p className="desktop-article">
        Articles
        </p>
        <span className="desktop-span">
        Art. 1 - Définition
        </span>
        <p className="desktop-desc"> Les présentes Conditions générales d’utilisation ont pour objet de définir les conditions dans lesquelles les utilisateurs peuvent accéder aux services et les utiliser.<br/>
        Toute personne qui accède à l’un des services proposés par becomepote.fr s’engage à respecter, sans réserve, les présentes conditions générales d’utilisation, complétées pour certains services par des conditions particulières. Ces Conditions particulières sont préalablement notifiées aux utilisateurs lors de l'accès au service concerné.<br/>
        becomepote.fr est libre de modifier, à tout moment, les présentes CGU, afin notamment de prendre en compte toute évolution légale, jurisprudentielle, éditoriale et/ou technique. La version qui prévaut est celle qui est accessible en ligne. Tout utilisateur est donc tenu de se référé à leur version accessible en ligne à la date de son accès à l’un des services quel qu'il soit.<br/>
        becomepote.fr se réserve le droit de bloquer l'accès à tout moment à tout utilisateur sans préciser de raison.</p>
      </div>

      <div className="desktop-info">
        <span className="desktop-span">
        Art. 2 - Accès et inscription aux Services
        </span>
        <p className="desktop-desc"> Les mineurs sont autorisés à accéder aux services de becomepote.fr moyennant l'autorisation préalable de leurs parents ou de leur représentant légal. becomepote.fr se réserve le droit de demander la justification écrite à tout moment.<br/>
        L'Utilisateur garanti que les informations qu'il communique sont exactes et conformes à la réalité. Nous nous réservons le droit de demander à tout utilisateur de justifier de son âge et de son identité et de bannir tout utilisateur qui aurait fourni de fausses informations lors de sa connection au chat.</p>
      </div>

      <div className="desktop-info">
        <span className="desktop-span">
        Art. 3 - Règles de base
        </span>
        <p className="desktop-desc"> becomepote.fr est un réseau de discussion en direct et libre. Vous pouvez y parler en direct et en toute libérté. Toutefois, vous devez impérativement réspecter la loi française et nos conditions générales d'utilisation.</p>
      </div>

      <div className="desktop-info">
        <span className="desktop-span">
        Ce qui est INTERDIT sur becomepote.fr
        </span>
        <p className="desktop-desc"> Cette liste n'est pas exhaustive, et il s'agit là uniquement d'un rappel. Vous devez avant tout respecter la loi française.</p>
        <p className="desktop-desc"> Consulter, afficher, télécharger ou transmettre tout contenu qui serait contraire à la loi en vigueur en france est interdit.
        Télécharger, envoyer ou transmettre par le biai de nos Services ou de toute autre manière tout contenu illégal, nuisible, haineux, raciste, fasciste, homophobe, menaçant, abusif, diffamatoire, constitutif de harcèlement, non respectueux de la vie privée d'autrui, ou autrement répréhensible, est interdit.<br/>
        Les droits d'auteur et de propriété intellectuelle, ainsi que les marques déposées en France doivent être respectées.<br/>
        Il est strictement interdit de faire du SPAM sur ou pour becomepote.fr , quelque soit la méthode.<br/>
        Envoyer par tout moyen de la publicité ou SPAM pour tout autre service similaire à becomepote.fr<br/>
        Le flood est interdit : il est inutile d'envoyer à répétition du texte ou tout autre type de données, et ce vers un utilisateur, un salon de discussion, un serveur, un service ou un robot. Des systèmes automatiques de sécurité veilleront au respect de ces conditions, et les opérateurs ont la capacité d'y mettre un terme.<br/>
        Les vols de pseudos sont interdits.
        Toute usurpation d'identité sera sanctionnée, y compris usurpation d'IP (proxy*, spoof, ...).<br/>
        Les tentatives de piratage de nos serveurs, services, robots ou tout autre système, sont interdites.<br/>
        La divulgation d'informations privées telles que des coordonnées postales, téléphoniques ou adresses E-Mail, est interdite sur les salons de discussion publics. Merci de respecter la confidentialité des informations nominatives et personnelles.<br/>
        Les serveurs de fichiers publics sont donc interdits.<br/>
        Il est interdit de lancer plus d'une session sur notre réseau.</p>
      </div>

      <div className="desktop-info">
        <span className="desktop-span">
        Art. 5 - Ce qui est déconseillé sur becomepote.fr
        </span>
        <p className="desktop-desc">La publicité pour tout site Internet, salon ou autre sont déconseillés. Attention à ne pas confondre publicité déconseillée et SPAM.<br/>
        L'abus avec les couleurs, le gras, le souligné, l'inverse ou les majuscules sont déconseillés.<br/>
        Il est déconseillé aux mineurs de discuter par le biais de nos services sans l'accompagnement d'un adulte. Les parents ou représentants légaux sont responsables de leurs enfants.</p>
      </div>

      <div className="desktop-info">
        <span className="desktop-span">
        Art. 6 - Ce qui est toléré sur becomepote.fr
        </span>
        <p className="desktop-desc">Les robots et tout autre système automatique sont tolérés sur becomepote.fr. Ils doivent mettre le mode +B afin d'être reconnus. Toutefois, ils ne doivent pas consommer inutilement nos ressources, et doivent respecter ces conditions générales d'utilisations tout comme les utilisateurs.</p>
      </div>

      <div className="desktop-info">
        <span className="desktop-span">
        Art. 7 - Responsabilité de becomepote.fr
        </span>
        <p className="desktop-desc">becomepote.fr DÉCLINE TOUTE RESPONSABILITÉ DANS LES PROPOS ÉCHANGÉS SUR SON RÉSEAU ET PAR LE BIAIS DE SES SERVICES, DANS LES COMPORTEMENTS DES UTILISATEURS QUI UTILISENT NOS SERVICES, ET DANS LES ÉVENTUELS ÉCHANGES DE FICHIERS. CHAQUE UTILISATEUR EST ENTIÈREMENT RESPONSABLE DE SES ACTES. <br/>
        En cas de plainte des autorités légales (A savoir la Justice Française), becomepote.fr se réserve le droit de divulguer toute information à ces dernières afin que les responsables d'actes répréhensibles par la loi ne puissent mettre en danger becomepote.fr<br/>
        becomepote.fr fait tout son possible pour éviter tout débordement et acte illégal sur ses services. Malheureusement, becomepote.fr NE PEUT ASSURER UNE MODÉRATION COMPLÈTE DES PROPOS QUI SONT TENUS PAR LE BIAIS DE SES SERVICES. Les salons de discussion sont sous l'unique responsabilité des utilisateurs et doivent impérativement se conformer à nos conditions générales d'utilisations</p>
      </div>

      <div className="desktop-info">
        <span className="desktop-span">
        Art. 8 - Comment vous défendre
        </span>
        <p className="desktop-desc">En cas de problème, veuillez expliquer votre problème à becomepote@gmail.com.</p>
      </div>

      <div className="desktop-navigation">
        <a className="desktop-box" title="Retour à la création de compte" href="/create"><FiArrowLeft /><FiClipboard /> </a>
      </div>
    </div>
  </div>
);


// == Export
export default Terms;
