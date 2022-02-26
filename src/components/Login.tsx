import styled from "styled-components"
import { useAuth } from "../contexts/Authentication"
import size from "../utils/sizes"
import {
	Main,
	Section,
	ButtonComp,
	Button as TempButton,
	P as TempP,
	H1,
} from "./Styled"
import { useNavigate, useLocation } from "react-router-dom"

const P = styled(TempP)`
	margin-bottom: 0.5rem;
`
const Button = styled(TempButton)`
	@media screen and (max-width: ${size.tablet}) {
		width: 100%;
	}
`

const Wrapper = styled.div`
	margin: 0 auto;
	.wrapper {
		display: flex;
		flex-direction: column;
		display: inline-flex;
		input {
			border: none;
			border-bottom: 1px solid var(--dark-color);
			background-color: transparent;
			height: 2rem;
			width: 100%;
			margin-bottom: 1rem;
			:hover,
			:focus {
				border-bottom: 2px solid var(--dark-color);
			}
		}
		.title {
			margin-bottom: 2rem;
		}
		.error {
			background-color: var(--error-text);
			color: var(--error-color);
			border: none;
		}
		@media screen and (max-width: ${size.tablet}) {
			width: 100%;
			/* margin: 0 auto; */
		}
	}
`

const LoginMe: React.FC = () => {
	const { username, password, setPassword, setUsername, handleSubmit, error } =
		useAuth()
	let navigate = useNavigate()
	let location: any = useLocation()
	let from = location.state?.from?.pathname || "/"

	return (
		<Main>
			<Section background="--light-color" isHero={false}>
				<Wrapper>
					<form
						onSubmit={(e) => {
							handleSubmit(e)
						}}>
						<div className="wrapper">
							<div>
								<H1 className="title" color="--dark-color">
									Login
								</H1>
							</div>
							<div>
								<label htmlFor="username">
									<P color="--dark-color">Username</P>
								</label>
								<input
									type="email"
									value={username}
									name="username"
									required
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>
							<div>
								<label htmlFor="password">
									<P color="--dark-color">Password</P>
								</label>
								<input
									type="password"
									value={password}
									name="password"
									required
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<ButtonComp
								className={error && "error"}
								darkColor={"--dark-color"}
								lightColor="--light-color"
								type="submit"
								disabled={error ? true : false}
								to="">
								{error || "Log-in"}
							</ButtonComp>
							<Button
								darkColor="--dark-color"
								lightColor="--light-color"
								to="/login/forgotPassword">
								Forgot Password
							</Button>
						</div>
					</form>
				</Wrapper>
			</Section>
		</Main>
	)
}
export default LoginMe
