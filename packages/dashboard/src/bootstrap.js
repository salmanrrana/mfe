import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// mount function to start up the app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// if we are iun development and in isolation,
// so call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// we are running through the container
// and we should export ther mount function
export { mount };
