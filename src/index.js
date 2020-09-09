// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Favicon from 'react-favicon';

// == Import : local
import App from 'src/containers/home';
import store from 'src/store';
import DesktopWait from 'src/components/DesktopWait';

// == Render
const rootComponent = (
  <Provider store={store}>
    <Router>
      <Favicon url="https://i.imgur.com/yJ90Yvt.png" />
      <App />
      {/*
        window.addEventListener('resize', () => {
            window.innerWidth <= 557 ? <App /> : <DesktopWait />
          }
        )
      */}
    </Router>
  </Provider>
);

// Le rendu de React => DOM
render(rootComponent, document.getElementById('root'));
