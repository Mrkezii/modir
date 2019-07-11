import React, { Context, Dispatch, SetStateAction, createContext, useContext, useState } from 'react'

interface State {
  headerHidden: boolean
  searchBarCollapsed: boolean
  searchBarHidden: boolean
}

export type ContextArray = [State, Dispatch<SetStateAction<State>>]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GlobalContext: Context<any> = createContext([{}, Function])

export const defaultState: State = {
  headerHidden: false,
  searchBarCollapsed: false,
  searchBarHidden: false,
}

const GlobalProvider = ({ children }: { children?: React.ReactNode }) => {
  const [state, setState] = useState({
    ...defaultState,
  })

  return <GlobalContext.Provider value={[state, setState]}>{children}</GlobalContext.Provider>
}

export default GlobalProvider

export const useGlobal = () => useContext(GlobalContext)
