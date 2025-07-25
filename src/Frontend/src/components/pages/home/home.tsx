import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };

    const goToRegister = () => {
        navigate('/register');
    };

    return (
        <div>
            <h1>Bienvenido a la app</h1>
            <button onClick={goToLogin}>Iniciar sesión</button>
            <button onClick={goToRegister}>Crear cuenta</button>
        </div>
    );
}
