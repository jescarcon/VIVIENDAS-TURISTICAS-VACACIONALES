import React from 'react'
import { useEffect, useState } from 'react';

export default function Prueba() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(console.error);
    }, []);

    return (
        <div>
            <h1>Usuarios</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    )
}
