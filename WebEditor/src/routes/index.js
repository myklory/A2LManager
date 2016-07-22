import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import App from '../components/App';
import A2lMenu from '../components/A2lMenu';
import NotFound from '../components/NotFound';
import AddA2L from '../components/AddA2L';

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={App} />
    <Route path="/a2leditor" component={A2lMenu} />
    <Route path="/adda2l" component={AddA2L} />
    <Route path="*" component={NotFound}/>
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
