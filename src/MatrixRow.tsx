import { Component, ReactNode } from 'react';
import * as React from 'react';
import { MatrixCell } from './MatrixCell';

interface Props {
  edge: [number, number][];
  keys: number;
  length: number;
  get: (elem: number, index: number) => void;
}

export class MatrixRow extends Component<Props> {

  get(elem: number, index: number) {
    this.props.get(elem, index);
  }

  render(): ReactNode {
    console.log('VEC: ', this.props.edge);
    let flag = -1;
    return new Array(this.props.length).fill(0).map((e, i) => {
      if (flag === 0) {
        flag++;
      }
      if (flag === -1) {
        flag++;
      }
      /*console.log('MR:', this.count, 'KEY:', this.props.keys, 'Ln:', this.props.length);*/
      return (
          <div key={i} style={{ float: 'left', padding: '2px', cursor: 'pointer' }}>
            <MatrixCell value={flag} index={this.props.keys} get={(el: number) => this.get(el, i)}/>
          </div>);
    });
  }
}
