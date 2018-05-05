import { createStore, applyMiddleware, Middleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loggingService } from '../middleware/loggingService';
import rootReducer from './rootReducer';
import { IStore } from '../types/IStore';

interface INodeModule extends NodeModule {
  hot: any;
}

export function configureStore(initialState?: IStore): Store<IStore> {

  const middlewares: Middleware[] = [
    thunk, loggingService

  ];

  const store = createStore<IStore>(rootReducer, initialState || {}, composeWithDevTools(
    applyMiddleware(...middlewares),
  ));

  if ((module as INodeModule).hot) {
    // Enable Webpack hot module replacement for reducers
      (module as INodeModule).hot.accept(['./counter', './graph'], () => {
        store.replaceReducer(rootReducer);
      });
  }

  return store;
}