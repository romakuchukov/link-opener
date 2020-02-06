module.hot && module.hot.accept();

import ReactDOM from 'react-dom';

import App from './app';

ReactDOM.render(<App/>, document.getElementById('root'));


import * as serviceWorker from 'serviceWorker';
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

if(process.env.PUBLIC_URL.indexOf('localhost') > 0) {
  serviceWorker.unregister();
} else {
  serviceWorker.register();
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
