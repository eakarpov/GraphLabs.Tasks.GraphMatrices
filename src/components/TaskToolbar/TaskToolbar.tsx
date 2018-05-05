import * as React from 'react';
import ToolButtonList from '../ToolButtonList/ToolButtonList';

import * as style from '../../styles/styles.css';

export interface TaskToolbarProperties {
}

export class TaskToolbar extends React.Component<TaskToolbarProperties, React.ComponentState> {
  public render() {
    return (
        <div className={style.TaskToolbarCenterPosition}>
          <h2 className={style.Title}>Панель инструментов</h2>
          <ToolButtonList />
        </div>);
  }
}