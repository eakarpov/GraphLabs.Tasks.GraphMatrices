import { combineReducers, Reducer } from 'redux';
import { counterReducer } from './counter/index';
import graphReducer from './graph/reducers';
import { State as CounterState } from './counter/index';
import { IGraphView } from '../models/graph';
import {reducer as notifierReducer, INotifierStore } from 'graphlabs.core.notifier';

export interface RootState {
  readonly graph: IGraphView;
  counterState: CounterState;
  notifier: INotifierStore;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  counter: counterReducer,
  graph: graphReducer,
  notifier: notifierReducer
});

export default rootReducer;