import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { Header } from './components'
import { Main, User } from './pages'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="people" />} />
        <Route
          element={
            <ThemeProvider theme={darkTheme}>
              <CssBaseline />
              <Header />
              <Outlet />
            </ThemeProvider>
          }
        >
          <Route path="people" element={<Main />} />
          <Route path="people/:userId" element={<User />} />
        </Route>
        <Route path="*" element={<Navigate to="people" />} />
      </Routes>
    </BrowserRouter>
  )
}
