import styled from "styled-components"
import size from "../utils/sizes"
import { H1, P, Button } from "./Styled"
import { BlogType } from "../contexts/BlogsContext"
import { BsFillShareFill } from "react-icons/bs"
import moment from "moment"
import { useLocation, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { BsTwitter, BsLinkedin } from "react-icons/bs"

const Wrapper = styled.article`
	width: 100%;
	border: 2px var(--dark-color) solid;
	padding: 5rem;
	background-color: var(--gradient);
	margin-bottom: 2rem;
	h1 {
		:hover {
			text-decoration: underline;
		}
	}
	hr {
		margin-top: 2rem;
		border: none;
		height: 0.5px;
		background-color: var(--dark-color);
	}
	@media screen and (max-width: ${size.tablet}) {
		padding: 3rem 2rem;
		width: auto;
		margin-right: 0.5rem;
		margin-left: 0.5rem;
	}
`
const Meta = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: var(--dark-color);
	font-size: 1.5rem;
	margin-bottom: 2rem;
	@media screen and (max-width: ${size.mobileL}) {
		/* display: none; */
	}
	.share {
		:hover {
			cursor: pointer;
		}
		:active {
			transform: scale(0.9);
		}
		@media screen and (max-width: ${size.tablet}) {
			font-size: 1.2rem;
		}
	}
	.user {
		display: flex;
		justify-content: left;
		align-items: center;
		img {
			width: 65px;
			height: 65px;
			border-radius: 50vw;
			@media screen and (max-width: ${size.tablet}) {
				width: 40px;
				height: 40px;
			}
		}
		div {
			display: flex;
			justify-content: left;
			align-items: center;
			text-align: left;
			@media screen and (max-width: ${size.mobileL}) {
				flex-direction: column;
				align-items: flex-start;
				.dot {
					display: none;
				}
				.not-flex {
					flex-direction: row;
					align-items: center;
					.dot {
						display: block;
					}
				}
			}
		}
		p {
			font-size: 1.2rem;
			margin-left: 0.6rem;
			@media screen and (max-width: ${size.tablet}) {
				font-size: 1rem;
				margin-left: 0.3rem;
			}
		}
		.name {
			font-weight: 600;
		}
		.dot {
			width: 4px;
			height: 4px;
			background-color: var(--dark-color);
			border-radius: 50vw;
			margin-left: 0.6rem;
			@media screen and (max-width: ${size.tablet}) {
				margin-left: 0.3rem;
			}
		}
	}
`

const LinksWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1.6rem;
`

const Links = styled.div`
	margin-top: 2rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	color: var(--dark-color);
	.link {
		transition: 200ms ease-in-out opacity;
		margin-right: 1rem;
		:hover {
			opacity: 0.7;
		}
	}
`

const Blog: React.FC<BlogType> = ({
	_id,
	description,
	markdown,
	readTime,
	title,
	user,
	categories,
	tags,
	createdAt,
}) => {
	const date = new Date(createdAt)
	const location = useLocation()
	const [copied, setCopied] = useState(false)
	useEffect(() => {
		if (copied === true) {
			let timeout = setTimeout(() => setCopied(false), 2000)
			return () => clearTimeout(timeout)
		}
	}, [copied])
	return (
		<Wrapper>
			<Meta>
				<div className="user">
					<img src={user.image} alt={user.name} />
					<div>
						<p className="name">{user.name}</p>
						<div className="dot"></div>
						<div className="not-flex">
							<p>{moment(date).format("MMM DD YYYY")}</p>
							<div className="dot"></div>
							<p>{readTime} min read</p>
						</div>
					</div>
				</div>
				{copied ? (
					<p>Copied! ✅</p>
				) : (
					<BsFillShareFill
						className="share"
						onClick={() => {
							navigator.clipboard.writeText(
								`${process.env.REACT_APP_URL}${location.pathname}/${_id}`
							)
							setCopied(true)
						}}
					/>
				)}
			</Meta>
			<Link to={`/blogs/${_id}`}>
				<H1 color="--dark-color">{title}</H1>
			</Link>
			<P color="--dark-color">{description}</P>

			<hr></hr>
			<LinksWrapper>
				<Links>
					<a
						href="https://www.linkedin.com/in/vineet-singh-m-pharm-ph-d-3584b9b/"
						target={"_blank"}
						rel="noreferrer noopener">
						<BsLinkedin className="link" />
					</a>
					<a
						href="https://twitter.com/DipeshS33865964"
						target={"_blank"}
						rel="noreferrer noopener">
						<BsTwitter className="link" />
					</a>
				</Links>
				<Button
					darkColor="--dark-color"
					lightColor="--light-color"
					to={`/blogs/${_id}`}>
					View
				</Button>
			</LinksWrapper>
		</Wrapper>
	)
}

export default Blog
