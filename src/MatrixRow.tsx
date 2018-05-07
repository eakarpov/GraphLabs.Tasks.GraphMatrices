import { Component, ReactNode } from 'react';
import * as React from 'react';
import { MatrixCell } from './MatrixCell';

interface Props {
  length: number;
}

export class MatrixRow extends Component<Props> {
  render(): ReactNode {
    return new Array(this.props.length).map((e, i) => {
      return <MatrixCell key={i}/>;
    });
  }
}
