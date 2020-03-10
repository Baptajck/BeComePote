// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SignUp from 'src/components/SignUp';

// Action Creators
import { changeInputSignUp, createUser } from 'src/store/reducers/forms/signUp';

const mapStateToProps = (state) => ({
  email: state.signUp.email,
  password: state.signUp.password,
  pseudo: state.signUp.pseudo,
  confirmPassword: state.signUp.confirmPassword,
  isConnected: state.signUp.isConnected,
  user: state.signUp.user,
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
