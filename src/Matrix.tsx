import { Component, ReactNode } from 'react';
import * as React from 'react';
import { MatrixRow } from './MatrixRow';

interface Props {
  rows: number;
  columns: number;
  handler: (values: number[][]) => void;
}

export class Matrix extends Component<Props> {

  values: number[][] = new Array(this.props.rows)
      .fill(new Array(this.props.columns).fill(0));

  get(elem: number, column: number, row: number) {
      const res = [...this.values[row]];
      res[column] = elem;
      this.values[row] = res;
  }

  render(): ReactNode {
    return (
      <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
        <div>
        {new Array(this.props.rows).fill(0).map((e, i) => {
          return (
              <div className="container" key={i}>
                <MatrixRow length={this.props.columns} get={(el, c) => this.get(el, c, i)}/>
              </div>);
        })}
        </div>
        <button onClick={() => this.props.handler(this.values)}>Click me</button>
      </div>);
  }
}
