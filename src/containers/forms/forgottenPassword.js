// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ForgottenPassword from 'src/components/ForgottenPassword';

// Action Creators
import { changeInputForgotten } from 'src/store/reducers/forms/forgottenPassword';

const mapStateToProps = (state) => ({
  email: state.forgottenPassword.email,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => {
    dispatch(changeInputForgotten(name, value));
  },
});

// Container
const ForgottenPasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgottenPassword);

// == Export
export default ForgottenPasswordContainer;
