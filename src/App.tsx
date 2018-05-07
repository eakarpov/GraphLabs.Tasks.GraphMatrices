import './App.css';
import * as React from 'react';
import { store, TaskTemplate } from 'graphlabs.core.template';
import { Matrix } from './Matrix';

class App extends TaskTemplate {
  handler(values: number[][]) {
      // tslint:disable-next-line no-console
      console.log(values);
  }
  task() {
      const graph = store.getState().graph;
      return () => (
          <Matrix
            rows={graph.vertices.length}
            columns={graph.vertices.length}
            handler={this.handler}
          />);
  }
}

export default App;
