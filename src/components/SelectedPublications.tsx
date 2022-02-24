import styled from "styled-components"
import size from "../utils/sizes"
import { H1, P, Section as TempSection, Left, Right } from "./Styled"

const Section = styled(TempSection)`
	margin-top: 0;
	@media screen and (max-width: ${size.tablet}) {
		display: block;
	}
	@media screen and (max-width: ${size.mobileS}) {
		padding: 3rem 0rem;
	}
`
const SelectedPublications = () => {
	return (
		<Section isHero={false} background="--light-color">
			<Left isHero={false}>
				<H1 color="--dark-color">
					Selected
					<br /> Publications
				</H1>
			</Left>
			<Right>
				<div>
					<P color="--dark-color">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vel
						doloribus adipisci ab maiores ad, quibusdam voluptatum eum accusamus
						reiciendis.
					</P>
					<P color="--dark-color">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, ipsam.
					</P>
					<P color="--dark-color">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
						itaque? Repudiandae rem eveniet dolores inventore eos expedita quas modi,
						sit quam maxime, minus eligendi blanditiis in vel, quidem distinctio
						dignissimos.
					</P>
					<P color="--dark-color">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id facere quas
						sapiente reprehenderit voluptate, voluptates animi quos ullam officia
						porro.
					</P>
					<P color="--dark-color">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
						doloremque pariatur ea esse nemo laboriosam omnis, vero rem provident
						dolorum.
					</P>
				</div>
			</Right>
		</Section>
	)
}

export default SelectedPublications
