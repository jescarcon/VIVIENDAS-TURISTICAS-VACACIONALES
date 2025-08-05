import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    //#region Variables
    const navigate = useNavigate();
    //#endregion

    //#region Logic
    
    const goToLogin = () => {
        navigate('/login');
    };

    const goToRegister = () => {
        navigate('/register');
    };

    //#endregion
    
    
    return (
        <div>
            <h1>Bienvenido a la app</h1>
            <button onClick={goToLogin}>Iniciar sesión</button>
            <button onClick={goToRegister}>Crear cuenta</button>
        </div>
    );
}
