import { useState } from "react"
import { login as userLogin } from "./../utils/users_api"



export default function LoginPage({ onLogin, setUser }) {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

    if (formData.email && formData.password) {
        // ajax api call to /api/login
      userLogin(formData)
        .then(token => {

            localStorage.setItem("token", token)

            console.log(token)
        // save the token somewhere in the client
        // local storage

        // set userState
          onLogin(formData)
        })
        .catch(err => console.log(err))
    } else {
      setError("invalid email or password")
    }
  }

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError("")
  }

  return (
    <section>
      <h1>Login</h1>

      <form onSubmit={handleSubmit} action="">
        <label htmlFor=""> email </label>
        <input onChange={handleChange} type="text" name="email" />
        <label htmlFor=""> password </label>
        <input onChange={handleChange} type="password" name="password" />
        <button>Login</button>
      </form>
      <span>{error}</span>
    </section>
  )
}
