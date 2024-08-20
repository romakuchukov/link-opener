// eslint-disable-next-line no-undef
module.hot && module.hot.accept();

import process from 'process';
import * as serviceWorker from 'serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'dev') {
  serviceWorker.unregister();
} else {
  serviceWorker.register();
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
