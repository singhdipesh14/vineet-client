import React from "react"
import styled from "styled-components"
import { Link as NavLink } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { AiOutlineClose } from "react-icons/ai"
import { useMenuContext } from "../contexts/MobileNavMenu"
import size from "../utils/sizes"

const links = [
	{ name: "About", to: "about" },
	{ name: "Publications", to: "publications" },
	{ name: "Blog", to: "blogs" },
	{ name: "Contact", to: "#contact" },
]

const ModalMenu: React.FC<{ classNames: string }> = ({ classNames }) => {
	const { toggleOpen } = useMenuContext()
	return (
		<Wrapper className={classNames}>
			<Links>
				{links.map((item, idx) => {
					if (item.name === "Contact")
						return (
							<Contact to={item.to} smooth key={idx} onClick={toggleOpen}>
								<p>{item.name}</p>
							</Contact>
						)
					return (
						<Link to={item.to} key={idx} onClick={toggleOpen}>
							<p>{item.name}</p>
						</Link>
					)
				})}
			</Links>
			<CloseBtn onClick={toggleOpen} />
		</Wrapper>
	)
}

const Wrapper = styled.aside`
	width: 100vw;
	height: 100vh;
`
const CloseBtn = styled(AiOutlineClose)`
	color: var(--dark-color);
	font-size: 2.4rem;
	position: fixed;
	right: 30px;
	top: 30px;
	:hover,
	:active {
		transform: scale(0.8);
	}
`

const Links = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-70%);
	display: flex;
	flex-direction: column;
	color: var(--dark-color);
	font-weight: 500;
	font-size: 2.3rem;
	@media (max-width: ${size.mobileL}) {
		font-size: 2rem;
	}
	.link {
		transition: 200ms ease-in-out all;
		:active,
		:hover {
			opacity: 0.7;
			transform: scale(0.9);
		}
	}
`

const Link = styled(NavLink)`
	padding: 10px 0 10px;
	text-align: center;
`

const Contact = styled(HashLink)`
	padding: 10px 0 10px;
	text-align: center;
`

export default ModalMenu
