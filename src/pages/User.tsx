import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import UserComp from "../components/User"
import { useAuth } from "../contexts/Authentication"
import { useEffect } from "react"
const User = () => {
	const { isAuthenticated, authenticate } = useAuth()
	const location = useLocation()
	const navigate = useNavigate()
	useEffect(() => {
		if (isAuthenticated.userId === "")
			navigate("/login", { replace: true, state: { from: location } })
	})
	return (
		<Routes>
			<Route index element={<UserComp />} />
			<Route path=":id" element={<UserComp />} />
		</Routes>
	)
}

export default User
