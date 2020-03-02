import { combineReducers } from 'redux';

// on importe chacun des sous-reducers
import signUp from './forms/signUp';
import signIn from './forms/signIn';
import forgottenPassword from './forms/forgottenPassword';

/**
* combineReducers nous retourne le reducer parent généré
* on doit fournir en paramètre un objet
* avec en clé un nom donné à chaque reducer et en valeur, chaque fonction reducer
* https://redux.js.org/api/combinereducers
*/

const reducer = combineReducers({
  signUp,
  signIn,
  forgottenPassword,
});

export default reducer;
