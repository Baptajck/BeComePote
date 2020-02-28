import { combineReducers } from 'redux';

// on importe chacun des sous-reducers
import userAuth from './userAuth';

/**
* combineReducers nous retourne le reducer parent généré
* on doit fournir en paramètre un objet
* avec en clé un nom donné à chaque reducer et en valeur, chaque fonction reducer
* https://redux.js.org/api/combinereducers
*/

const reducer = combineReducers({
  userAuth,
});

export default reducer;
