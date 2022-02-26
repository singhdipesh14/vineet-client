import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Landing from "./pages/Landing"
import { MenuProvider } from "./contexts/MobileNavMenu"
import { AuthProvider } from "./contexts/Authentication"
import axios from "axios"

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
axios.defaults.withCredentials = true

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<MenuProvider>
				<Landing />
			</MenuProvider>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
