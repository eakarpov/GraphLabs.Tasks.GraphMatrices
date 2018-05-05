import * as React from 'react';
import CommonGraphAdapter from '../../adapters/CommonGraphAdapter';

export interface GraphVisualizerProperties {
}

export class GraphVisualizer extends React.Component<GraphVisualizerProperties, React.ComponentState> {

  public constructor(props: GraphVisualizerProperties) {
    super(props);
  }

  public render() {
    return <CommonGraphAdapter />;
  }
}