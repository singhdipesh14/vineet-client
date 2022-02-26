import { useState, useEffect } from "react"
import styled from "styled-components"
import { BsTwitter, BsLinkedin } from "react-icons/bs"
import size from "../utils/sizes"
import axios from "axios"

import {
	ButtonComp,
	H1,
	Left as TempLeft,
	Right as TempRight,
	Section,
} from "../components/Styled"

const Button = styled(ButtonComp)`
	padding: 1rem 5rem;
	@media screen and (max-width: ${size.mobileL}) {
		font-size: 1rem;
		padding: 1rem 3rem;
	}
`

const Left = styled(TempLeft)`
	display: block;
	color: var(--medium-color);
	@media screen and (max-width: ${size.laptop}) {
		padding-right: 2rem;
	}
	@media screen and (max-width: ${size.tablet}) {
		width: 100%;
	}
	.address {
		margin-top: 1rem;
		color: var(--medium-color);
		.element {
			:hover {
				text-decoration: underline !important;
			}
		}
	}
	.title {
		margin-bottom: 2rem;
	}

	.links {
		font-size: 1.6rem;
	}
	.link {
		margin-top: 3rem;
		margin-right: 1rem;
		margin-bottom: 3rem;
		transition: 200ms ease-in-out opacity;
		:hover {
			opacity: 0.7;
		}
	}
`

const Right = styled(TempRight)`
	display: block;
	margin-top: 3rem;
	@media screen and (max-width: ${size.laptop}) {
		padding-left: 2rem;
	}
	@media screen and (max-width: ${size.tablet}) {
		width: 100%;
	}
	@media screen and (max-width: ${size.mobileL}) {
	}
	form {
		margin: 0 auto;
	}
	input {
		border: none;
		border-bottom: 1px solid var(--medium-color);
		background-color: transparent;
		height: 2rem;
		:hover,
		:focus {
			border-bottom: 2px solid var(--medium-color);
		}
	}
	textarea {
		border: none;
		border-bottom: 1px solid var(--medium-color);
		background-color: transparent;
		height: 3rem;
		:hover,
		:focus {
			border-bottom: 2px solid var(--medium-color);
		}
	}
	.label {
		color: var(--medium-color);
	}
	.button {
		margin: 0 auto;
	}
	.wrapper {
		display: grid;
		width: 100%;
		grid-template-columns: 50% 50%;
		@media screen and (max-width: ${size.mobileL}) {
			grid-template-columns: 100%;
		}
	}
	.single {
		margin-right: 2rem;
		margin-bottom: 2rem;
		input {
			width: 100%;
		}
		@media screen and (max-width: ${size.mobileL}) {
			margin-right: 0;
		}
	}
	.full-size {
		padding-right: 2rem;
		textarea {
			width: 100%;
		}
		margin-bottom: 2rem;
		@media screen and (max-width: ${size.mobileL}) {
			padding-right: 0;
		}
	}
	.button-container {
		display: flex;
		justify-content: center;
		padding-right: 2rem;
		@media screen and (max-width: ${size.mobileL}) {
			padding-right: 0;
		}
	}
`

const Contact = () => {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [subject, setSubject] = useState("")
	const [message, setMessage] = useState("")
	const [error, setError] = useState("")
	const [submitted, setSubmitted] = useState(false)

	const postSubmit = async () => {
		axios
			.post("/contact", { firstName, lastName, email, subject, message })
			.then((response) => {
				console.log(response)
			})
			.catch((err) => {
				setError(err.response.data.msg)
			})
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setSubmitted(true)
		postSubmit()
		setFirstName("")
		setLastName("")
		setEmail("")
		setSubject("")
		setMessage("")
	}

	useEffect(() => {
		if (submitted === true) {
			let timeout = setTimeout(() => {
				setSubmitted(false)
				setError("")
			}, 3000)
			return () => clearTimeout(timeout)
		}
	}, [submitted])
	return (
		<Section background="--dark-color" isHero={false} id="contact">
			<Left isHero={false}>
				<div>
					<H1 color="--medium-color" className="title">
						Contact
						<br />
						Information
					</H1>
				</div>
				<div>
					<div className="address">
						<p>
							Department of Pharmacy <br />
						</p>
						<a
							href="https://www.sgsits.ac.in/"
							target="_blank"
							rel="noreferrer noopener"
							className="element">
							<p>S.G.S.I.T.S</p>
						</a>
					</div>
					<p className="address">
						500 Terry Francois St.
						<br /> San Francisco, CA 94158{" "}
					</p>
					<div className="address">
						<a
							href="mailto:info@mysite.com"
							target="_blank"
							rel="noreferrer noopener"
							className="element">
							<p>info@mysite.com</p>
						</a>
						<br />
						<a href="tel:1234567890" className="element">
							<p>123-456-7890</p>
						</a>
					</div>
					<div className="links">
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
					</div>
				</div>
			</Left>
			<Right>
				<div className="center">
					<form onSubmit={handleSubmit}>
						<div className="wrapper">
							<div className="single first">
								<label className="label">
									<p>First Name *</p>
								</label>
								<input
									type="text"
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
									required
								/>
							</div>
							<div className="single second">
								<label className="label">
									<p>Last Name *</p>
								</label>
								<input
									type="text"
									value={lastName}
									required
									onChange={(e) => setLastName(e.target.value)}
								/>
							</div>
						</div>
						<div className="wrapper">
							<div className="single first">
								<label className="label">
									<p>Email *</p>
								</label>
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							<div className="single second">
								<label className="label">
									<p>Subject *</p>
								</label>
								<input
									type="text"
									value={subject}
									onChange={(e) => setSubject(e.target.value)}
									required
								/>
							</div>
						</div>
						<div className="full-size">
							<label className="label">
								<p>Leave a message *</p>
							</label>
							<textarea
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								required
							/>
						</div>
						<div className="button-container">
							<Button
								type="submit"
								className="button"
								darkColor="--medium-color"
								lightColor="--dark-color"
								to=""
								disabled={submitted}>
								{!submitted ? "Submit" : error ? error : "Submitted ✅"}
							</Button>
						</div>
					</form>
				</div>
			</Right>
		</Section>
	)
}

export default Contact
