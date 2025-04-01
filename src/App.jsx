import './App.css'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Login'
import Register from './pages/Register'
import Todos from './pages/Todos'
import Layout from './components/layout/Layout'
import Settings from './pages/Settings'
import ProtectedRoute from './components/layout/ProtectedRoute'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Start />} />
          <Route path="login" element={<Start />} />
          <Route path="register" element={<Register />} />

          <Route element={<ProtectedRoute />}>
            <Route path="todos" element={<Todos />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes> 
    </>
  )
}

export default App
