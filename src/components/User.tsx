import { useParams } from "react-router-dom"
import { useAuth } from "../contexts/Authentication"
import { useEffect } from "react"
import { useUser } from "../contexts/UsersContext"
import { useNavigate } from "react-router-dom"
import { Left, Main, Section, H1 } from "./Styled"

const User = () => {
	const { id } = useParams()
	const { getUserData, user } = useUser()
	const { isAuthenticated } = useAuth()
	const navigate = useNavigate()
	useEffect(() => {
		if (isAuthenticated.role !== "admin") {
			navigate("/not-found")
		} else {
			if (id) getUserData(id)
		}
		// eslint-disable-next-line
	}, [isAuthenticated])
	return (
		<Main>
			<Section background="--medium-color" isHero={false}>
				<Left isHero={false}>
					<H1 color="--dark-color">{user.name}</H1>
				</Left>
			</Section>
		</Main>
	)
}

export default User
