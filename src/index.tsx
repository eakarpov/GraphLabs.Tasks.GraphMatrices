import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './redux/store';
import { Provider } from 'react-redux';
import TaskTemplate from './components/TaskTemplate/TaskTemplate';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <TaskTemplate />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
