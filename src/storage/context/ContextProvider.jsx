import React, { useReducer } from 'react'
import { AppContext } from './'

export const ContextProvider = ({ reducer, initialState, children }) => {
  const contextValue = useReducer(reducer, initialState)
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}
