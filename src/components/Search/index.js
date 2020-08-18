// == Import : npm
import React from 'react';
import { IoIosChatbubbles } from "react-icons/io";
// == Import : local
import './search.scss';
import Questions from 'src/components/Profile/Questions';

// == Composant
const Search = () => (
  <div className="search">
    <div className="search-profile">
      <img src="https://res.cloudinary.com/becomepote/image/upload/v1588758574/becomepote/BeComePote_281.jpg" alt="Photo_avatar" className="search-profile-image"/>
      <div className="search-profile-options">
        <h1 className="search-profile-options-nickname">Baptiste</h1>
        <button type="button" className="search-profile-options-button" title="Lancez votre conversation !"><IoIosChatbubbles /></button>
      </div>
    </div>
    <div className="search-profile-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut velit non hic voluptatem nesciunt. Natus, debitis explicabo deleniti eius totam quia nemo corporis obcaecati fugiat, quisquam ad vel amet optio?</p>
    </div>
    <hr className="search-profile-separation" />
    <div className="search-profile-description-questions">
        <p className="search-profile-description-questions-content">
          Quitte à choisir, vous préféreriez être ?</p>
        <ul className="search-profile-description-questions-reply-bullet">
        <li className="search-profile-description-questions-reply">
          Une pizza</li>
        </ul>
        <p className="search-profile-description-questions-content">
          Vite choissisez un mot, le temps presse !</p>
        <ul className="search-profile-description-questions-reply-bullet">
        <li className="search-profile-description-questions-reply">
          Courgette !!!!</li>
        </ul>
        <p className="search-profile-description-questions-content">
          Oh non ! Un méchant à l'horizon, transformation en ?</p>
        <ul className="search-profile-description-questions-reply-bullet">
        <li className="search-profile-description-questions-reply">
          Force Rose</li>
        </ul>
    </div>
  </div>
);


// == Export
export default Search;
