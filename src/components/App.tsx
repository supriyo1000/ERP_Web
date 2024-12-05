import { lazy } from 'react'

const HomePage = lazy(() => import('./Landing Page/HomePage'))
const Features = lazy(() => import('./Features/Features'))
const Feature = lazy(() => import('./Features/Feature'))
const InvalidPage = lazy(() => import('./Utilities/InvalidPage'))
const SignIn = lazy(() => import('./Sign In/SignInPage'))
const Dashboard = lazy(() => import('./Dashboard/Dashboard'))

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ThemeProvider from "../contexts/ThemeProvider"
import Pricing from './Prices/Pricing'

const router = createBrowserRouter([{
      path: '/',
      element: <HomePage />,
      errorElement: <InvalidPage />
    }, {
      path: '/features',
      element: <Features />
    }, {
      path: '/features/:featureID',
      element: <Feature />,
      errorElement: <InvalidPage />
    }, {
      path: '/plans',
      element: <Pricing />
    }, {
      path: '/signin',
      element: <SignIn />
    }, {
      path: '/dashboard',
      element: <Dashboard />,
    }
  ], {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    }
  }
)

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} future={{v7_startTransition: true}} />
    </ThemeProvider>
  )
}