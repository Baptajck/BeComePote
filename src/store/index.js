// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import reducer from 'src/store/reducers';
import connexionMiddleware from './middlewares/connexionMiddleware';
import passwordMiddleware from './middlewares/passwordMiddleware';
import profileMiddleware from './middlewares/profileMiddleware';
import chatMiddleware from './middlewares/chatMiddleware';

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    connexionMiddleware,
    passwordMiddleware,
    profileMiddleware,
    chatMiddleware,
  ),
);

const store = createStore(
  reducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
