// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import NewPassword from 'src/components/NewPassword';

// Action Creators
import { changeInputForgotten, password, confirmPassword } from 'src/store/reducers/forms/forgottenPassword';

const mapStateToProps = (state) => ({
  password: state.forgottenPassword.password,
  confirmPassword: state.forgottenPassword.confirmPassword,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => {
    dispatch(changeInputForgotten(name, value));
  },
});

// Container
const NewPasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewPassword);

// == Export
export default NewPasswordContainer;