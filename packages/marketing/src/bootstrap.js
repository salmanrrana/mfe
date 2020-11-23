import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// if we are iun development and in isolation,
// so call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_feed-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// we are running through the container
// and we should export ther mount function
export { mount };
