// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import NewPassword from 'src/components/NewPassword';

// Action Creators
import {
  changeInputForgotten, resetPassword, newPasswordVisibility, newConfirmPasswordVisibility,
} from 'src/store/reducers/forms/forgottenPassword';

const mapStateToProps = (state) => ({
  password: state.forgottenPassword.password,
  confirmPassword: state.forgottenPassword.confirmPassword,
  messageSend: state.forgottenPassword.messageSend,
  isNewPasswordShown: state.forgottenPassword.isNewPasswordShown,
  isNewConfirmPasswordShown: state.forgottenPassword.isNewConfirmPasswordShown,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => {
    dispatch(changeInputForgotten(name, value));
  },
  resetPassword: (userId, token) => {
    dispatch(resetPassword(userId, token));
  },
  newPasswordVisibility: () => {
    dispatch(newPasswordVisibility());
  },
  newConfirmPasswordVisibility: () => {
    dispatch(newConfirmPasswordVisibility());
  },
});

// Container
const NewPasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewPassword);

// == Export
export default NewPasswordContainer;
