import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "../contexts/Authentication"
import {
	Button,
	ButtonComp,
	H1,
	H2,
	H3,
	Left,
	Right,
	Image,
	Main,
	P,
	Section,
} from "./Styled"

const User = () => {
	const { isAuthenticated } = useAuth()
	let id = useParams().id || isAuthenticated.userId
	return (
		<Main>
			<Section isHero={false} background="--light-color">
				<Left isHero={false}>
					<H1 color="--dark-color">{isAuthenticated.name}</H1>
				</Left>
			</Section>
		</Main>
	)
}

export default User
