import './App.css';
import * as React from 'react';
import { TaskTemplate } from 'graphlabs.core.template';
import { Matrix } from './Matrix';

class App extends TaskTemplate {
  task() {
      // tslint:disable-next-line no-console
      return () => <Matrix rows={3} columns={4} handler={() => console.log('aaaa')} />;
  }
}

export default App;
