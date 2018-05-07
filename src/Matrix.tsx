import { Component, ReactNode } from 'react';
import * as React from 'react';
import { MatrixRow } from './MatrixRow';

interface Props {
  rows: number;
  columns: number;
  handler: () => void;
}

export class Matrix extends Component<Props> {

  render(): ReactNode {
    return (
      <div>
        <div>
        {new Array(this.props.rows).map((e, i) => {
          return <div className="row" key={i}><MatrixRow length={this.props.columns}/></div>;
        })}
        </div>
        <button onClick={this.props.handler}>Click me</button>
      </div>);
  }
}
