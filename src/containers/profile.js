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
  showPrompt,
  showPromptCancel,
  getChoices,
  editProfileAvatar,
  FileUploadFunc,
  previewImage,
} from 'src/store/reducers/profile';
import { getLogout } from 'src/store/reducers/forms/connexion';


const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  firstname: state.profile.profile.firstname,
  lastname: state.profile.profile.lastname,
  pseudo: state.profile.profile.pseudo,
  age: state.profile.profile.age,
  created_at: state.profile.profile.created_at,
  updated_at: state.profile.profile.updated_at,
  presentation: state.profile.profile.presentation,
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
  responses: state.profile.responses,
  show: state.profile.show,
  choices: state.profile.choices,
  mounted: state.profile.mounted,
  fileUpload: state.profile.fileUpload,
  preview: state.profile.preview,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputProfile: (name, value) => {
    dispatch(changeInputProfile(name, value));
  },
  previewImage: (preview) => {
    dispatch(previewImage(preview));
  },
  getChoices: () => {
    dispatch(getChoices());
  },
  FileUploadFunc: (fileUpload) => {
    dispatch(FileUploadFunc(fileUpload));
  },
  editProfileAvatar: () => {
    dispatch(editProfileAvatar());
  },
  showPrompt: () => {
    dispatch(showPrompt());
  },
  showPromptCancel: () => {
    dispatch(showPromptCancel());
  },
  getIdOptions: (name, id) => {
    dispatch(getIdOptions(name, id));
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
