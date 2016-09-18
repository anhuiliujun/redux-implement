export const createStore = (reducer) => {
    let state;
    let listeners = [];

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => listeners.filter(l => l !== listener);
    };

    const getState = () => state;

    dispatch({});

    return {dispatch, subscribe, getState}
};

export const combineReducers = (reducers) => (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, reducerKey) => {
        nextState[reducerKey] = reducers[reducerKey](state[reducerKey], action);
        return nextState;
    }, {})
};
