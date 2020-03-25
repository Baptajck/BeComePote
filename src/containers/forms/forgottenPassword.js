// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ForgottenPassword from 'src/components/ForgottenPassword';

// Action Creators
import { changeInputForgotten, changePassword } from 'src/store/reducers/forms/forgottenPassword';

const mapStateToProps = (state) => ({
  email: state.forgottenPassword.email,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => {
    dispatch(changeInputForgotten(name, value));
  },
  changePassword: () => {
    dispatch(changePassword());
  },
});

// Container
const ForgottenPasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgottenPassword);

// == Export
export default ForgottenPasswordContainer;
