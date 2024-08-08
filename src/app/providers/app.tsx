import { RouterProvider } from 'app/providers/ui/router-provider'
import { StoreProvider } from 'app/providers/ui/store-provider'
import { Router } from 'app/routes/router'

export const App = () => {
  return (
    <StoreProvider>
      <RouterProvider>
        <Router />
      </RouterProvider>
    </StoreProvider>
  )
}
