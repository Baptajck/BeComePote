// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SignUp from 'src/components/SignUp';

// Action Creators
import { changeInputSignUp, createUser } from 'src/store/reducers/forms/connexion';

const mapStateToProps = (state) => ({
  email: state.connexion.email,
  password: state.connexion.password,
  pseudo: state.connexion.pseudo,
  confirmPassword: state.connexion.confirmPassword,
  isConnected: state.connexion.isConnected,
  user: state.connexion.user,
  loading: state.connexion.loading,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => {
    dispatch(changeInputSignUp(name, value));
  },
  createUser: () => {
    dispatch(createUser());
  },
});

// Container
const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

// == Export
export default SignUpContainer;
