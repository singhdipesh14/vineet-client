import styled from "styled-components"
import { Link as NavLink } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import size from "../utils/sizes"
import { GiHamburgerMenu } from "react-icons/gi"
import { useMenuContext } from "../contexts/MobileNavMenu"

const links = [
	{ name: "About", to: "about" },
	{ name: "Publications", to: "publications" },
	{ name: "Blog", to: "blogs" },
	{ name: "Contact", to: "#contact" },
]

const Navbar: React.FC = () => {
	const { toggleOpen } = useMenuContext()
	return (
		<Header>
			<Container>
				<NavLink to={"/"}>
					<Name>Vineet Singh, PhD</Name>
				</NavLink>
				<Links>
					{links.map((item, idx) => {
						if (item.name === "Contact")
							return (
								<Contact smooth key={idx} to={item.to}>
									<p>{item.name}</p>
								</Contact>
							)
						return (
							<Link key={idx} to={item.to}>
								<p>{item.name}</p>
							</Link>
						)
					})}
				</Links>
				<Hamburger onClick={toggleOpen}></Hamburger>
			</Container>
		</Header>
	)
}

const Header = styled.header`
	color: var(--dark-color);
	/* padding-bottom: 20px; */
	overflow: hidden;
`

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100vw;
	padding: 30px;
	@media (max-width: ${size.mobileL}) {
		padding: 20px;
	}
`

const Name = styled.h2`
	font-size: 1.6rem;
	margin-left: 2vw;
	transition: 200ms ease-in-out opacity;
	:hover {
		opacity: 0.7;
	}
	@media (max-width: ${size.mobileL}) {
		margin-left: 0px;
	}
	@media (max-width: ${size.mobileM}) {
		font-size: 1.5rem;
	}
	@media (max-width: ${size.mobileS}) {
		margin-left: 0;
		margin-top: 2px;
		font-size: 1.4rem;
	}
`

const Links = styled.div`
	display: flex;
	justify-content: space-between;
	width: 35vw;
	margin-right: 40px;
	@media (max-width: ${size.laptopL}) {
		width: 40%;
	}
	@media (max-width: ${size.laptop}) {
		width: 50%;
	}
	@media (max-width: ${size.tablet}) {
		display: none;
	}
`

const Link = styled(NavLink)`
	font-size: 1.6rem;
	transition: 300ms opacity ease-in-out;
	:hover {
		opacity: 0.7;
	}
`

const Contact = styled(HashLink)`
	font-size: 1.6rem;
	transition: 300ms opacity ease-in-out;
	:hover {
		opacity: 0.7;
	}
`

const Hamburger = styled(GiHamburgerMenu)`
	display: none;
	@media (max-width: ${size.tablet}) {
		display: inline-block;
		color: var(--dark-color);
		font-size: 2rem;
	}
	@media (max-width: ${size.mobileM}) {
		font-size: 1.8rem;
	}
`

export default Navbar
