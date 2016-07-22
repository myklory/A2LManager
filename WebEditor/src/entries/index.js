import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import App from '../components/App';
import Routes from '../routes/index';



ReactDOM.render(<Routes history={browserHistory} />, document.getElementById('root'));
