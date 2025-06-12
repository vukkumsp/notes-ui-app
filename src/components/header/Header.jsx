import { use, useEffect, useState } from 'react';
import { getCookie, setCookie } from '../../services/cookieManagement'
import './Header.css'
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation()

  useEffect(() => {
    const loginToken = getCookie("loginToken");
    const guestToken = getCookie("guestToken");
    if (loginToken !== null && loginToken !== "") {
      console.log("Login Token from cookie: ", loginToken);
      setUser("admin");
    }
    else if (guestToken !== null && guestToken !== "") {
      console.log("Guest Token from cookie: ", guestToken);
      setUser("guest");
    }

  },[]);

  const logout = () => {
    setCookie("loginToken", "", 0);
    // setCookie("guestToken", "", 0);
    setUser("guest");
    // navigate('/login');
  }

  const add = () => {
    console.log("Add button clicked");
    // Logic for adding a new note or user
    navigate('/notes/add');
  }

  return (
    <>
      <a className='header' href='/' rel='noopener noreferrer'>
        <span className='protocol'>https:</span>
        <span className='subdomain'>//notes</span>
        <span className='domain'>.vukkumsp.com</span>
      </a>
      <p>USER: {user?user:"N/A"}</p>
      {/* <button className='token-refresh' 
        onClick={() => {
          setCookie("guestToken", "", 0)
        }}>
          Refresh Token Cookies
      </button> */}

      {user !== "admin" && location.pathname !== '/login' &&
        <button onClick={()=>navigate('/login')}>Login</button> }
      {user === "admin" && 
        <button onClick={()=>logout()}>Logout</button>  }
      {user === "admin" && 
        <button onClick={()=>add()}>Add</button>  }
    </>
  )
}

export default Header
