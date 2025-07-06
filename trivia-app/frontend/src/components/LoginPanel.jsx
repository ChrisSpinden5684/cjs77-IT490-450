import React from 'react'

function LoginPanel(){
    return (
        <div className="main-container">
            <div className="login-container">
            <h2>Login to Trivia</h2>
            <form>
                <input type="email" placeholder="Email" required />
                <input type="password" id="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
        </div>
    );
}
export default LoginPanel;