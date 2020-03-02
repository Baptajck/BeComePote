// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ForgottenPassword from 'src/components/ForgottenPassword';

// Action Creators
import { changeInput } from 'src/store/reducers/forms/forgottenPassword';

const mapStateToProps = (state) => ({
  email: state.signIn.email,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => {
    dispatch(changeInput(name, value));
  },
});

// Container
const ForgottenPasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgottenPassword);

// == Export
export default ForgottenPasswordContainer;
