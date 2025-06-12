
import { useState } from 'react';
import { getCookie, setCookie } from '../../services/cookieManagement'
import { getGuestToken, getLoginToken } from '../../services/rest/authService';
import './Login.css'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginFn = () => {
        getLoginToken(username, password)
            .then(response => {
                console.log("Login Token: ", response);
                setCookie("loginToken", response.token, response.duration - 10);
                navigate('/');
            })
            .catch(error => console.error("Error fetching login token:", error));
    };

    const checkForGuestTokenNLogin = () => {
        const token = getCookie("guestToken");
        if (token !== null && token !== "") {
            console.log("Guest Token from cookie: ", token);
            loginFn();
        } else {
            console.log("No guest token found in cookies, fetching new guest token...");
            getGuestToken()
                .then(response => {
                    console.log("Guest Token: ", response);
                    setCookie("guestToken", response.token, response.duration - 10);
                })
                .catch(error => console.error("Error fetching guest token:", error));
                setTimeout(() => {
                    loginFn();
                }, 1000);
        }
    };

    return (
        <>
            Username: <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/> <br/>
            Password: <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/> <br/>
            {username && password ?
                <p>Ready to login with '{username}' with '{password}'</p>
                : <p>Please enter your username and password.</p>
            }
            
            <button className='login-button' onClick={() => checkForGuestTokenNLogin()}>Login</button>
            <button className="back-button" onClick={() => navigate('/')}>Home</button>
          
        </>
    )
}

export default Login
