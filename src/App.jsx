import './App.css'

function App() {
  return (
    <div className="container">
      <div className="left-panel">
        <img src="/profile.jpeg" alt="Matilda Snail" className="profile-photo" />
      </div>
      <div className="right-panel">
        <div className="content">
          <h1 className="name">Matilda Snail</h1>
          <nav className="links">
            <a href="https://www.linkedin.com/in/matilda-snail-422823287" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/JulySnail" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default App
