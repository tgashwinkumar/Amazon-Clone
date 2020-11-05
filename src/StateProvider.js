//TRack basket value

import React,{createContext, useContext, useReducer} from 'react';

export const StateContext = createContext();

//Functional Component
export const StateProvider = ({reducer, initialState, children}) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateValue = () => useContext(StateContext);