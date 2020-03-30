// == Import : npm
import { connect } from 'react-redux';
// == Import : local
import Profile from 'src/components/Profile';
// Action Creators
import {
  changeInputProfile,
  changeEditMode,
  updateInputValue,
  toggle1,
  toggle2,
  toggle3,
} from 'src/store/reducers/profile';
import { getLogout } from 'src/store/reducers/forms/connexion';


const mapStateToProps = (state) => ({
  firstname: state.profile.firstname,
  lastname: state.profile.lastname,
  pseudo: state.profile.pseudo,
  presentation: state.profile.presentation,
  isInEditMode: state.profile.isInEditMode,
  collapse1: state.profile.collapse1,
  collapse2: state.profile.collapse2,
  collapse3: state.profile.collapse3,
  isConnected: state.connexion.isConnected,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputProfile: (name, value) => {
    dispatch(changeInputProfile(name, value));
  },
  changeEditMode: () => {
    dispatch(changeEditMode());
  },
  updateInputValue: () => {
    dispatch(updateInputValue());
  },
  toggle1: (id) => {
    dispatch(toggle1(id));
  },
  toggle2: (id) => {
    dispatch(toggle2(id));
  },
  toggle3: (id) => {
    dispatch(toggle3(id));
  },
  getLogout: () => {
    dispatch(getLogout());
  },
});

// Container
const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

// == Export
export default ProfileContainer;
