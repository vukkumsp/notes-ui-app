import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './LoginView.css';
import { useEffect, useState } from 'react';
import { getNotes } from '../../services/rest/noteService';
import { getGuestToken } from '../../services/rest/authService';
import { getCookie, setCookie } from '../../services/cookieManagement';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from '../../components/login/Login';


function LoginView() {
  

  useEffect(() => {

    }, []);

  return (
    <>
      <Header />
        <div className="container">
          <Login />
        </div>
      <Footer />
    </>
  )
}

export default LoginView
