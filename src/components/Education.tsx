import { H1, H2, H3, Left, P, Right, Section } from "./Styled"

const Education = () => {
	return (
		<Section background="--medium-color" isHero={false}>
			<Left isHero={false}>
				<H1 color="--dark-color">Education</H1>
			</Left>
			<Right>
				<div>
					<article>
						<H2 color="--dark-color">2020-2023</H2>
						<H3 color="--dark-color">University Title</H3>
						<P color="--dark-color">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores
							perspiciatis soluta perferendis, nam ullam voluptatum?
						</P>
					</article>
					<article>
						<H2 color="--dark-color">2016-2020</H2>
						<H3 color="--dark-color">College Title</H3>
						<P color="--dark-color">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</P>
					</article>
					<article>
						<H2 color="--dark-color">2011-2016</H2>
						<H3 color="--dark-color">School Title</H3>
						<P color="--dark-color">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores
							perspiciatis soluta perferendis, nam ullam voluptatum?
						</P>
					</article>
				</div>
			</Right>
		</Section>
	)
}

export default Education
