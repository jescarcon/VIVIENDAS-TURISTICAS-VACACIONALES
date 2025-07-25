import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    //#region Variables
    const navigate = useNavigate();
    //#endregion

    //#region Logic
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };
    //#endregion
    
    return (
        <>
            <div>Hola! Bienvenido</div>
            <button onClick={handleLogout}>Cerrar sesión</button>;
        </>
    )
}
