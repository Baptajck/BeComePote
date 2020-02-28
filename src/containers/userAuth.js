// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SignUp from 'src/components/SignUp';

// Action Creators
import { changeInput } from 'src/store/reducers/userAuth';

const mapStateToProps = (state) => ({
  email: state.userAuth.email,
  password: state.userAuth.password,
  pseudo: state.userAuth.pseudo,
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
