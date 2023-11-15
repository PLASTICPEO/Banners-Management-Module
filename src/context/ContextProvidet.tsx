import { ReactNode, createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

const ContextProvider = (children: ReactNode) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default ContextProvider;
