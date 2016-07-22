import React, { Component, PropTypes } from 'react';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Welcome from './Welcome.jsx';

const App = ({ location }) => {
  /*console.log(location);*/
  return (
    <MainLayout>
      {/*<Todos location={location} />*/}
      <Welcome />
    </MainLayout>
  );
};

App.propTypes = {
};

export default App;
