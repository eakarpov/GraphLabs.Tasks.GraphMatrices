import './App.css';
import * as React from 'react';
import { store, TaskTemplate, TaskToolbar, ToolButtonList } from 'graphlabs.core.template';
import { Matrix } from './Matrix';
import { IEdgeView } from 'graphlabs.core.template/build/models/graph';

class App extends TaskTemplate {

  values: number[][];
  myTuple: [number, number][] = [];

  constructor(props: {}) {
    super(props);
    this.calculate = this.calculate.bind(this);
    this.handler = this.handler.bind(this);
  }

  handler(values: number[][]) {
    this.values = values;
  }

  calculate() {
      const graph = store.getState().graph;
      let res = 0;
      for (let i = 1; i < graph.vertices.length + 1; i++) {
          for (let j = 1; j < graph.edges.length + 1; j++) {
              if (this.values[i][j] === 1) {
                if ((this.myTuple[j - 1][0] === i - 1) || (this.myTuple[j - 1][1] === i - 1)) {
                    continue;
                }
                if ((this.myTuple[j - 1][0] !== i - 1) && (this.myTuple[j - 1][1] !== i - 1)) {
                    res += 5;
                }
              }
              if (this.values[i][j] === 0) {
                  if ((this.myTuple[j - 1][0] !== i - 1) && (this.myTuple[j - 1][1] !== i - 1)) {
                      continue;
                  }
                  if ((this.myTuple[j - 1][0] === i - 1) || (this.myTuple[j - 1][1] === i - 1)) {
                      res += 5;
                  }
              }
          }
      }

      // console.log(res);
      return { success: res === 0, fee: res };
  }

  make_vec() {
      const graph = store.getState().graph;
      // console.log('Vert: ', graph.vertices.length);

      for (let i = 0; i < graph.vertices.length; i++) {
          for (let j = i; j < graph.vertices.length; j++) {
              const e = graph.edges.find((edge: IEdgeView) =>
                  edge.vertexTwo === i.toString() && edge.vertexOne === j.toString()
                  || edge.vertexOne === i.toString() && edge.vertexTwo === j.toString());
              if (e !== void 0) {
                  let tup: [number, number] = [i, j];
                  // console.log('Place: ', i, j);
                  this.myTuple.push(tup);
              }
          }
      }
      // console.log('Empty: ', this.myTuple);
  }

  getTaskToolbar() {
      TaskToolbar.prototype.getButtonList = () => {
          function beforeComplete(this: App):  Promise<{ success: boolean; fee: number }> {
              return new Promise((resolve => {
                  resolve(this.calculate());
              }));
          }
          ToolButtonList.prototype.beforeComplete = beforeComplete.bind(this);
          ToolButtonList.prototype.help = () => `В данном задании вы должны заполнить матрицу инцеденций
в правой части модуля согласно выданному графу.
После заполнения матрицы нажмите галочку для проверки задания.`;
          return ToolButtonList;
      };
      return TaskToolbar;
  }
  task() {
      const graph = store.getState().graph;
      this.make_vec();
      return () => (
          <Matrix
            rows={graph.vertices.length + 1}
            columns={graph.edges.length + 1}
            handler={this.handler}
            edges={this.myTuple}
          />);
  }
}

export default App;
