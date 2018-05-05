// We use generic inference.
import * as React from 'react';
import { RootState } from '../redux/rootReducer';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
export function typedConnect<OwnProps, StateProps, DispatchProps>(
  // And "capture" the return of mapStateToProps
  mapStateToProps: (state: RootState, ownProps: OwnProps) => StateProps,
  // As well as the return of mapDispatchToProps.
  // Or in case you use the shorthand literal syntax, capture it as is.
  mapDispatchToProps?: DispatchProps | ((dispatch: Dispatch<StateProps>, ownProps: OwnProps) => DispatchProps),
) {
  // We combine all generics into the inline component we'll declare.
  return function componentImplementation(component: React.StatelessComponent<OwnProps & StateProps & DispatchProps>) {
    // Finally, we double assert the real connect to let us do anything we want.
    // And export a component that only takes OwnProps.
    return connect(mapStateToProps, mapDispatchToProps as any)(component) as any as React.StatelessComponent<OwnProps>;
  };
}