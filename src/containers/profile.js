// == Import : npm
import { connect } from 'react-redux';
// == Import : local
import Profile from 'src/components/Profile';
// Action Creators
import {
  changeInputProfile,
  changeEditModeFirstname,
  changeEditModeLastname,
  changeEditModePseudo,
  changeEditModePresentation,
  updateInputValueFirstname,
  updateInputValueLastname,
  updateInputValuePseudo,
  updateInputValuePresentation,
  closeFirstname,
  closeLastname,
  closePseudo,
  closePresentation,
} from 'src/store/reducers/profile';
import { getLogout } from 'src/store/reducers/forms/connexion';


const mapStateToProps = (state) => ({
  firstname: state.profile.firstname,
  lastname: state.profile.lastname,
  pseudo: state.profile.pseudo,
  presentation: state.profile.presentation,
  isInEditModeFirstname: state.profile.isInEditModeFirstname,
  isInEditModeLastname: state.profile.isInEditModeLastname,
  isInEditModePseudo: state.profile.isInEditModePseudo,
  isInEditModePresentation: state.profile.isInEditModePresentation,
  isFailEdit: state.profile.isFailEdit,
  isConnected: state.connexion.isConnected,
  oldValueFirstname: state.profile.oldValueFirstname,
  oldValueLastname: state.profile.oldValueLastname,
  oldValuePseudo: state.profile.oldValuePseudo,
  oldValuePresentation: state.profile.oldValuePresentation,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputProfile: (name, value) => {
    dispatch(changeInputProfile(name, value));
  },
  changeEditModeFirstname: () => {
    dispatch(changeEditModeFirstname());
  },
  changeEditModeLastname: () => {
    dispatch(changeEditModeLastname());
  },
  changeEditModePseudo: () => {
    dispatch(changeEditModePseudo());
  },
  changeEditModePresentation: () => {
    dispatch(changeEditModePresentation());
  },
  // saved button
  updateInputValueFirstname: () => {
    dispatch(updateInputValueFirstname());
  },
  updateInputValueLastname: () => {
    dispatch(updateInputValueLastname());
  },
  updateInputValuePseudo: () => {
    dispatch(updateInputValuePseudo());
  },
  updateInputValuePresentation: () => {
    dispatch(updateInputValuePresentation());
  },
  // closed button
  closeFirstname: () => {
    dispatch(closeFirstname());
  },
  closeLastname: () => {
    dispatch(closeLastname());
  },
  closePseudo: () => {
    dispatch(closePseudo());
  },
  closePresentation: () => {
    dispatch(closePresentation());
  },
  // Deconnexion
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
