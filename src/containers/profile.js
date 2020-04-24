// == Import : npm
import { connect } from 'react-redux';
// == Import : local
import Profile from 'src/components/Profile';
// Action Creators
import {
  changeInputProfile,
  getIdOptions,
  changeEditModeFirstname,
  changeEditModeLastname,
  changeEditModePseudo,
  changeEditModeAge,
  changeEditModePresentation,
  updateInputValueFirstname,
  updateInputValueLastname,
  updateInputValuePseudo,
  updateInputValueAge,
  updateInputValuePresentation,
  closeFirstname,
  closeLastname,
  closePseudo,
  closeAge,
  closePresentation,
  getProfile,
  editProfile,
  deleteProfile,
  getQuestions,
  submitQuestions,
} from 'src/store/reducers/profile';
import { getLogout } from 'src/store/reducers/forms/connexion';


const mapStateToProps = (state) => ({
  firstname: state.profile.firstname,
  lastname: state.profile.lastname,
  pseudo: state.profile.pseudo,
  age: state.profile.age,
  created_at: state.profile.created_at,
  updated_at: state.profile.updated_at,
  presentation: state.profile.presentation,
  isInEditModeFirstname: state.profile.isInEditModeFirstname,
  isInEditModeLastname: state.profile.isInEditModeLastname,
  isInEditModePseudo: state.profile.isInEditModePseudo,
  isInEditModeAge: state.profile.isInEditModeAge,
  isInEditModePresentation: state.profile.isInEditModePresentation,
  isFailEdit: state.profile.isFailEdit,
  isConnected: state.connexion.isConnected,
  oldValueFirstname: state.profile.oldValueFirstname,
  oldValueLastname: state.profile.oldValueLastname,
  oldValuePseudo: state.profile.oldValuePseudo,
  oldValueAge: state.profile.oldValueAge,
  oldValuePresentation: state.profile.oldValuePresentation,
  questions: state.profile.questions,
  // responses: state.profile.responses,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputProfile: (name, value) => {
    dispatch(changeInputProfile(name, value));
  },
  getIdOptions: (name, value) => {
    dispatch(getIdOptions(name, value));
  },
  getQuestions: () => {
    dispatch(getQuestions());
  },
  submitQuestions: () => {
    dispatch(submitQuestions());
  },
  getProfile: () => {
    dispatch(getProfile());
  },
  editProfile: () => {
    dispatch(editProfile());
  },
  deleteProfile: () => {
    dispatch(deleteProfile());
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
  changeEditModeAge: () => {
    dispatch(changeEditModeAge());
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
  updateInputValueAge: () => {
    dispatch(updateInputValueAge());
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
  closeAge: () => {
    dispatch(closeAge());
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
