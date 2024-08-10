import { CreateUser } from 'features/create-user'
import { lazy } from 'react'
import { useNavigate } from 'react-router'
import { Route, Routes } from 'react-router-dom'
import { useAppSelector } from 'shared/redux/store'

const Main = lazy(async () => await import('pages/main'))

export const Router = () => {
  const navigate = useNavigate()
  const user = useAppSelector((state) => state.users.user)

  return (
    <Routes>
      <Route path={'/'} element={<Main />}>
        <Route
          path={'/create'}
          element={
            <CreateUser
              open={true}
              handleToggle={() => {
                navigate('/')
              }}
            />
          }
        />
        <Route
          path={'/:id'}
          element={
            <CreateUser
              defaultValue={user}
              open={true}
              handleToggle={() => {
                navigate('/')
              }}
            />
          }
        />
      </Route>
    </Routes>
  )
}
