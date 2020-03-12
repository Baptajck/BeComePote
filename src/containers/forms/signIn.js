// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SignIn from 'src/components/SignIn';

// Action Creators
import { changeInputSignIn, connectUser } from 'src/store/reducers/forms/connexion';

const mapStateToProps = (state) => ({
  email: state.connexion.email,
  password: state.connexion.password,
  loading: state.connexion.loading,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => {
    dispatch(changeInputSignIn(name, value));
  },

  connectUser: () => {
    dispatch(connectUser());
  },
});

// Container
const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);

// == Export
export default SignInContainer;
