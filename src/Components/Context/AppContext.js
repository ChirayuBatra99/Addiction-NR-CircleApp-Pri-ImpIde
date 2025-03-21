import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [reset, setReset] = useState(0);
  
    return (
      <AppContext.Provider value={{ reset, setReset }}>
        {children}
      </AppContext.Provider>
    );
  };
  