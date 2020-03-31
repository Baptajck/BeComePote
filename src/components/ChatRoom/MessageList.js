import React from 'react';

const MessageList = () => (
  <div className="messageList">
    <div className="messageList-content">
      <p className="messageList-content-text">
        <strong className="messageList-content-sender">BeauGosse</strong> <br />
        Salut, tu vas bien ? Tu m'as l'air bien en forme aujourd'hui. Encore désolé pour hier j'ai pas pu me libérer pour te rejoindre afin de pouvoir un coup comme on pensait pouvoir le faire. J'ai eu plus de boulot que prévu et j'ai mal géré le temps, j'ai pas vu le temps passer et je t'ai prévu bien trop tard. Encore désolé ! Mais si t'es toujours partante, je serai ravi de retenter l'aventure pour se fixer un rendez-vous pour boire une bière.
      </p>
      <span className="messageList-content-date">envoyé le 12 mars à 18:15</span>
    </div>
    <div className="messageList-content me">
      <p className="messageList-content-text me">
        <strong className="messageList-content-sender">BellePlante</strong> <br />
        T'inquiète, pas de souci ! Quand j'ai vu l'heure passé sans avoir de tes nouvelles, je me suis doutée que c'était cuit pour qu'on arrive à se retrouver. Mais j'ai trinqué à ta santé avec une excellente bière ambrée de savoir qui a su me consoler bien comme il le faut.
        Bien partante pour retenter notre chance, ce jeudi. Qu'en dis-tu ?
      </p>
      <span className="messageList-content-date me">envoyé le 12 mars à 18:35</span>
    </div>
    <div className="messageList-content">
      <p className="messageList-content-text">
        <strong className="messageList-content-sender">BeauGosse</strong> <br />
        Ah je suis ravi de t'entendre dire que tu n'es pas fachée et même partante pour m'offrir une deuxième chance. Ca marche pour jeudi, à 19h et toujours le même bar. Ce coup-ci je mets une alarme sur mon téléphone pour pas me laisser débordé au boulot.
      </p>
      <span className="messageList-content-date">envoyé le 12 mars à 18:43</span>
    </div>
  </div>
);

export default MessageList;
