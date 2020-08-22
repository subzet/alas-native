import React, { createContext, useReducer } from 'react';

export const AuthContext = createContext({
    user:{},
    setCurrentUserData: () => {}
});
