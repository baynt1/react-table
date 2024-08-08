import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Main = lazy(async () => await import('pages/main'))

export const Router = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Main />} />
    </Routes>
  )
}
