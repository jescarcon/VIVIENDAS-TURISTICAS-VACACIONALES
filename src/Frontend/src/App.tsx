import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/home/home';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        


      </Routes>
    </BrowserRouter>
  );
}
