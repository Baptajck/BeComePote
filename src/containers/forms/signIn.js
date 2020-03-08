// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SignIn from 'src/components/SignIn';

// Action Creators
import { changeInputSignIn } from 'src/store/reducers/forms/signIn';

const mapStateToProps = (state) => ({
  email: state.signIn.email,
  password: state.signIn.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => {
    dispatch(changeInputSignIn(name, value));
  },
});

// Container
const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);

// == Export
export default SignInContainer;
