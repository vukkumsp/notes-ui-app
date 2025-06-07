import './App.css'
import Header from './components/header/Header';
import { useEffect, useState } from 'react';
import { TEST_API_URL } from './services/rest/RESTAPI';

function App() {
  const [test, setTest] = useState('');

  useEffect(() => {
  fetch(TEST_API_URL)
    .then(response => {
      
      if (!response.ok) throw new Error('Network error');
      
      return response.text();
    })
    .then(response => {
      setTest(response)
      console.log(response);
    })
    .catch(error => console.error(error));
}, []);

  return (
    <>
      <Header />
      <div className="container">
        <h2>Welcome to the Notes App</h2>
        <h3>Response : {test?test: 'Loading...'}</h3>
        <p>This is a simple application to manage your notes.</p>
        <p>Feel free to add, edit, and delete notes as you wish.</p>
        
        </div>
      <footer className="footer">
        <p>&copy; 2023 Notes App. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
