'use client';

import { Dispatch, ReactNode, ReducerAction, createContext, useContext, useReducer, useState } from "react";

export const NAMES = ["Dhaivath Lal", "The Dev-D"];
const NameContext = createContext<{name:string, dispatch: Dispatch<any>}>({name: '', dispatch: () => {}});

export const NAME_REDUCER_ACTIONS = {
    TOGGLE_NAME: "TOGGLE_NAME"
}
const reducer = (state: string, action: any): string => {

    switch (action.type) {
        case "TOGGLE_NAME":
            if(state === NAMES[0]) {
                return NAMES[1];
            }
            return NAMES[0];
        
    }
    return state;
}
export const NameContextProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [name, dispatch] = useReducer(reducer, NAMES[0]); 
    return (
        <NameContext.Provider value={{name, dispatch}}>
            {children}
        </NameContext.Provider>
    );
}

export const useNameContext = () => useContext(NameContext);