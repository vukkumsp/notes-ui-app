import { useState } from 'react';
import { getCookie, setCookie } from '../../services/cookieManagement'
import { getLoginToken } from '../../services/rest/authService';
import { postNotes } from '../../services/rest/noteService';
import './Header.css'

function Header() {
  const [postResponse, setPostResponse] = useState(null);


    const loginFn = () => {
        const token = getCookie("loginToken");
        if (token !== null && token !== "") {
          console.log("Token from cookie: ", token);
        } else {
          console.log("No token found in cookies, fetching new login token...");
          getLoginToken()
            .then(response => {
              console.log("Login Token: ", response);
              setCookie("loginToken", response.token, response.duration-10);
            })
            .catch(error => console.error("Error fetching login token:", error));
        }
        //-------------------------------------------//
        setTimeout(() => {
          console.log("Fetching note with POST ...");
              postNotes()
          .then(response => {
            setPostResponse(response);
            console.log(response);
          })
          .catch(error => console.error(error));
        }
        , 1000);
        };


  return (
    <>
      <a className='header' href='/' rel='noopener noreferrer'>
        <span className='protocol'>https:</span>
        <span className='subdomain'>//notes</span>
        <span className='domain'>.vukkumsp.com</span>
      </a>
      <button className='token-refresh' 
        onClick={() => {
          setCookie("guestToken", "", 0)
        }}>
          Refresh Token Cookies
      </button>

      <button onClick={()=>loginFn()}>
        Login & POST
      </button>
    </>
  )
}

export default Header
