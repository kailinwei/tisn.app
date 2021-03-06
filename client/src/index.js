import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';

import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
