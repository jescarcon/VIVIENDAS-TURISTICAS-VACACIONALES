import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/home/home';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import Dashboard from './components/pages/dashboard/Dashboard';
import PrivateRoute from './components/utils/PrivateRoute';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas protegidas */}
        <Route element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<Dashboard />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}
