import React, { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { BurgerProvider } from "./burgerContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // <StrictMode>
  <BurgerProvider>
    <App />
  </BurgerProvider>
  // </StrictMode>
)