import React from 'react';
import { useContext } from 'react';
import { ReactReduxContext } from 'react-redux';
/**
 * HOC for adding dynamic reducers to the global store.
 *
 * Typical usage:
 *   export default withReducer('myComponent', reducer)(MyComponent)
 *
 * Thoughts:
 *   Alternatively, react-redux.connect can also be used here.
 */

const withReducer = (key, reducer) => (WrappedComponent) => {
    const Extended = (props, context) => {
        const { store } = useContext(ReactReduxContext);
        // Here's where we add the new reducer.
        // See initilizeStore for details on how this works.
        store.injectReducer(key, reducer);

        // Now just give back the original component as-is.
        return <WrappedComponent {...props} />;
    };

    return Extended;
};

export { withReducer };
