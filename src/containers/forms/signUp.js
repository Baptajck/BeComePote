// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SignUp from 'src/components/SignUp';

// Action Creators
import {
  changeInputSignUp, createUser, passwordVisibility, confirmPasswordVisibility,
} from 'src/store/reducers/forms/connexion';

const mapStateToProps = (state) => ({
  email: state.connexion.email,
  password: state.connexion.password,
  pseudo: state.connexion.pseudo,
  confirmPassword: state.connexion.confirmPassword,
  isConnected: state.connexion.isConnected,
  user: state.connexion.user,
  loading: state.connexion.loading,
  isPasswordShown: state.connexion.isPasswordShown,
  isConfirmPasswordShown: state.connexion.isConfirmPasswordShown,
  error: state.connexion.error,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => {
    dispatch(changeInputSignUp(name, value));
  },
  passwordVisibility: () => {
    dispatch(passwordVisibility());
  },
  confirmPasswordVisibility: () => {
    dispatch(confirmPasswordVisibility());
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
