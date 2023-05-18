import { useState } from "react"
import "./App.css"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import NavBar from "./NavBar"

import { getUser } from "./utils/users_service"

function App() {
  const [user, setUser] = useState(getUser())

  const login = data => {
    setUser(data)
  }

  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
  }

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} onLogout={logout} />
          <HomePage />
        </>
      ) : (
        <LoginPage onLogin={login} setUser={setUser} />
      )}
    </div>
  )
}

export default App
