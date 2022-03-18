import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import UserComp from "../components/User"
import UserSelf from "../components/UserSelf"
import UpdateUser from "../components/UpdateUser"
import { useAuth } from "../contexts/Authentication"
import { useEffect } from "react"
import CreateUser from "../components/CreateUser"
import UpdatePassword from "../components/UpdatePassword"
const User = () => {
	const { isAuthenticated } = useAuth()
	const location = useLocation()
	const navigate = useNavigate()
	useEffect(() => {
		if (isAuthenticated.userId === "")
			navigate("/login", { replace: true, state: { from: location } })
		// eslint-disable-next-line
	}, [])
	return (
		<Routes>
			<Route index element={<UserSelf />} />
			<Route path=":id" element={<UserComp />} />
			<Route path="updateUser" element={<UpdateUser />} />
			<Route path="createUser" element={<CreateUser />} />
			<Route path="updatePassword" element={<UpdatePassword />} />
		</Routes>
	)
}

export default User
