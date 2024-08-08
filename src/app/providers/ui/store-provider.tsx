import { IProviderProps } from 'app/providers/model/interface'
import React from 'react'
import { Provider } from 'react-redux'
import store from 'shared/redux/store'

export const StoreProvider: React.FC<IProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
