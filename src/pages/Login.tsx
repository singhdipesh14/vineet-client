import Spinner from "../components/Spinner"
import LoginMe from "../components/Login"
import { useAuth } from "../contexts/Authentication"
import {
	Navigate,
	Route,
	Routes,
	useLocation,
	useNavigate,
} from "react-router-dom"
import { useEffect } from "react"
import ForgotPassword from "../components/ForgotPassword"

const Login = () => {
	const { loading, isAuthenticated } = useAuth()
	let location: any = useLocation()
	let navigate = useNavigate()
	let from = location.state?.from?.pathname || "/"
	useEffect(() => {
		if (isAuthenticated.userId !== "") {
			navigate(from, { replace: true })
		}
	})
	if (loading) return <Spinner />
	return (
		<Routes>
			<Route index element={<LoginMe />} />
			<Route path="forgotPassword" element={<ForgotPassword />}></Route>
		</Routes>
	)
}

export default Login
