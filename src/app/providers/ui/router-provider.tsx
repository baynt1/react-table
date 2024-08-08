import { IProviderProps } from 'app/providers/model/interface'
import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const RouterProvider: FC<IProviderProps> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>
}
