// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import HomePage from 'src/components/HomePage';
import SignUp from 'src/components/SignUp';

// == Composant
const App = () => (
  <div>
    <SignUp />
    <HomePage />
  </div>
);

// == Export
export default App;
