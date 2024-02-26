import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('Welcome to React Programming');

    const handleLogin = (e) => {
        e.preventDefault();
        // Replace this with your actual login validation logic
        if (username=="admin" && password=="ashene") {
            setMessage('Successfully logged in');
        } else {
            setMessage('Wrong username or password');
        }
    };

    return (
        <div>
            <h1>{message}</h1>
            <form onSubmit={handleLogin}>
                <div className="input-text">
                    <input
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-text">
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="buttons">
                    <button type="submit" className="btn btn-warning btn-block">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
