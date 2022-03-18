import { useEffect } from "react"
import { useAuth } from "../contexts/Authentication"
import { useUser } from "../contexts/UsersContext"
import { useNavigate } from "react-router-dom"
import Spinner from "./Spinner"
import {
	Button,
	ButtonComp,
	H1,
	Left,
	Right,
	Main,
	Section,
} from "./Styled"

import Blogs from "./UserBlogs"
import ListUsers from "./ListUsers"

const User = () => {
	const { isAuthenticated, logout } = useAuth()
	const { getUserData, user, loading } = useUser()
	const navigate = useNavigate()
	useEffect(() => {
		if (isAuthenticated.userId) getUserData(isAuthenticated.userId)
		// eslint-disable-next-line
	}, [isAuthenticated.userId])
	return loading ? (
		<Spinner />
	) : (
		<Main>
			<Section isHero={false} background="--light-color">
				<Left isHero={false}>
					<div>
						<H1 color="--dark-color">{user.name}</H1>
					</div>
				</Left>
				<Right>
					<div>
						<Button
							darkColor="--dark-color"
							lightColor="--light-color"
							to="/users/updateUser">
							Update Profile
						</Button>
						{user.role === "admin" && (
							<Button
								darkColor="--dark-color"
								lightColor="--light-color"
								to="/users/createUser">
								Create User
							</Button>
						)}
						<ButtonComp
							darkColor="--dark-color"
							lightColor="--light-color"
							to=""
							onClick={() => {
								logout()
								navigate("/")
							}}>
							Logout
						</ButtonComp>
					</div>
				</Right>
			</Section>
			<Blogs id={user._id} />
			{user.role === "admin" && <ListUsers />}
		</Main>
	)
}

export default User
