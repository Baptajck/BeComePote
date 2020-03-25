// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from 'src/components/App';

// Action Creators
import { getHome } from 'src/store/reducers/forms/connexion';

const mapStateToProps = (state) => ({
  isConnected: state.connexion.isConnected,
  loading: state.connexion.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getHome: () => {
    dispatch(getHome());
  },
});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
