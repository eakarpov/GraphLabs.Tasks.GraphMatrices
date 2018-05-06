import './App.css';
import * as React from 'react';
import { TaskTemplate } from 'graphlabs.core.template';

class App extends TaskTemplate {
  task() {
      return () => <p>А это что-то новенькое</p>;
  }
}

export default App;
