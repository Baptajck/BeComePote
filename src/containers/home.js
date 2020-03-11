// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from 'src/components/App';

// Action Creators

const mapStateToProps = (state) => ({
  isConnected: state.connexion.isConnected,
});

const mapDispatchToProps = {};

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
