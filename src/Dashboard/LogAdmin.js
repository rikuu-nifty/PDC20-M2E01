import React from 'react';
import { useState } from 'react';
import AdminPanel from './AdminPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './logadmin.css'; // Import the CSS file

function LogAdmin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('');
    const [user, setUser] = useState(null);

    const handleLogin = () => {
        const isAdmin = accountType === 'admin';
        setUser({ name: username, isAdmin });
    }

    return (
        <div>
            {user ? (
                <AdminPanel user={user} />
            ) : (
                <div className="login-container">
                    <h1>Login</h1>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Account Type:</label>
                        <select
                            value={accountType}
                            onChange={(e) => setAccountType(e.target.value)}
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button onClick={handleLogin}>Login</button>
                    <button>Sign Up</button>
                </div>
            )}
        </div>
    );
}

export default LogAdmin;
