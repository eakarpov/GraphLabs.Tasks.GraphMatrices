import * as React from 'react';
import { IStudentAction } from 'graphlabs.core.notifier';
import { connect } from 'react-redux';

import { RootState } from '../../redux/rootReducer';
import * as styles from '../../styles/styles.css';

interface TaskConsoleProperties {
    actions: Array<IStudentAction>;
}

interface TaskConsoleState extends React.ComponentState {
}

class TaskConsole extends React.Component<TaskConsoleProperties, TaskConsoleState> {
    public constructor(props: TaskConsoleProperties) {
        super(props);
    }

    public render() {
        // tslint:disable-next-line no-console
        console.log(this.props.actions);
        const actions = this.props.actions.map(i => {
            let date = new Date(+(i.datetime.replace(/\s/g, '')));
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let message = i.message;
            let result = hours + ':' + minutes + ':' + seconds + '  : ' + message;
            return (<div key={i.datetime}>{result}</div>);
        });
        // This is the rest of console
        return (
            <div className={styles.Console}>
                {actions}
            </div>);
    }

}

const mapStateToProps = (state: RootState) => ({
    actions: state.notifier.studentActions
});

export default connect<TaskConsoleProperties>(mapStateToProps)(TaskConsole);
