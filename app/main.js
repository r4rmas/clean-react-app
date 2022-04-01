import { StrictMode } from "react"
import { render } from "react-dom"
import App from "./src/App"

render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("app")
)