import styled from "styled-components"
import {
	Section as TempSection,
	Left as TempLeft,
	Right,
	H1 as TempH1,
	ButtonComp as Button,
	P,
	Image,
} from "../components/Styled"

import size from "../utils/sizes"
import ImageSrc from "../assets/about.png"

const Section = styled(TempSection)`
	margin-top: 0;
	@media screen and (max-width: ${size.tablet}) {
		display: block;
	}
	@media screen and (max-width: ${size.mobileS}) {
		padding: 3rem 0rem;
	}
`

const Left = styled(TempLeft)`
	padding-right: 4rem;
	@media screen and (max-width: ${size.laptop}) {
		padding-right: 2rem;
	}
	.add-bottom {
		@media screen and (max-width: ${size.tablet}) {
			margin-bottom: 3rem;
		}
	}
`

const H1 = styled(TempH1)`
	margin-bottom: 2rem;
`

const About = () => {
	return (
		<Section isHero={false} background="--light-color">
			<Left isHero={false}>
				<div>
					<H1 color="--dark-color">About</H1>
					<P color="--dark-color">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia
						amet voluptas numquam ea corporis et quibusdam, quis facilis nemo, modi
						temporibus id asperiores quam sunt pariatur facere sequi dignissimos!
						Quisquam perspiciatis a eius, modi ut adipisci atque molestiae explicabo
						accusantium quidem cupiditate aut vero reiciendis consectetur culpa quas
						in, ullam asperiores commodi laborum nemo iure, odio velit. Consequatur,
						exercitationem! Architecto deleniti iste mollitia totam sit qui!
						Voluptatem, dolorem ratione?
					</P>
					<P color="--dark-color">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et accusantium
						nobis itaque necessitatibus eum quam at, obcaecati accusamus, cum,
						inventore quibusdam ipsam incidunt assumenda cupiditate maxime similique
						totam placeat aut error! Consequuntur libero fuga, rerum placeat amet
						deleniti laudantium, quas incidunt dicta quaerat quo illo esse ipsam velit
						accusantium sequi.
					</P>
					<a
						href="https://www.linkedin.com/in/vineet-singh-m-pharm-ph-d-3584b9b/"
						target="_blank"
						rel="noreferrer noopener">
						<Button
							className="add-bottom"
							to=""
							darkColor="--dark-color"
							lightColor="--light-color">
							Curriculum Vitae
						</Button>
					</a>
				</div>
			</Left>
			<Right>
				<Image src={ImageSrc} />
			</Right>
		</Section>
	)
}

export default About
