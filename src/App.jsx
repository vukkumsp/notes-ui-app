import './App.css'
import Header from './components/header/Header'

function App() {

  return (
    <>
      <Header />
      <div className="container">
        <h2>Welcome to the Notes App</h2>
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
