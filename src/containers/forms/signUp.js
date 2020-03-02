// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SignUp from 'src/components/SignUp';

// Action Creators
import { changeInput } from 'src/store/reducers/forms/signUp';

const mapStateToProps = (state) => ({
  email: state.signUp.email,
  password: state.signUp.password,
  pseudo: state.signUp.pseudo,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => {
    dispatch(changeInput(name, value));
  },
});

// Container
const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

// == Export
export default SignUpContainer;
