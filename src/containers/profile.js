// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Profile from 'src/components/Profile';

// Action Creators
import { changeInputProfile, changeEditMode, updateInputValue } from 'src/store/reducers/profile';

const mapStateToProps = (state) => ({
  firstname: state.profile.firstname,
  isInEditMode: state.profile.isInEditMode,
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
});

// Container
const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

// == Export
export default ProfileContainer;
