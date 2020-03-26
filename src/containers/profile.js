// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Profile from 'src/components/Profile';

// Action Creators
import {
  changeInputProfile, changeEditMode, updateInputValue, close,
} from 'src/store/reducers/profile';

const mapStateToProps = (state) => ({
  firstname: state.profile.firstname,
  isInEditMode: state.profile.isInEditMode,
  currentValue: state.profile.currentValue,
  isFailEdit: state.profile.isFailEdit,
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
  close: () => {
    dispatch(close());
  },
});

// Container
const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

// == Export
export default ProfileContainer;
