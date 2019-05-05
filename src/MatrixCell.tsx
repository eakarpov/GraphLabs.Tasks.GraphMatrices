import { Component, ReactNode } from 'react';
import * as React from 'react';

export interface State {
  value: number;
}

export interface Props {
    value: number;
    index: number;
    get: (e: number) => void;
}

export class MatrixCell extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    console.log('KEY:', this.props.index, 'VL:', this.props.value);
    if (this.props.value === 0) {
        this.state = {
            value: this.props.index,
        };
    } else {
        this.state = {
            value: 0,
        };
    }

    this.handler = this.handler.bind(this);
  }

  handler() {
    this.setState(
        {
            value: this.state.value ? 0 : 1,
        },
        () => {
          this.props.get(this.state.value);
        });
  }
  render(): ReactNode {
      if (this.props.value === 0) {
          return (
              <div style={{ border: '1px double black', background: 'white', padding: '6px' }}>
                  {this.state.value}
              </div>);
      } else {
          return (
              <div style={{ border: '1px double black', background: 'white', padding: '6px' }} onClick={this.handler}>
                  {this.state.value}
              </div>);
      }

  }
}
