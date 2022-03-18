import { Section, Left, Right, Button, H1, P } from "./Styled"

const Publications = () => {
	return (
		<Section isHero={false} background="--light-color">
			<Left isHero={false}>
				<H1 color="--dark-color">Publications</H1>
			</Left>
			<Right>
				<div>
					<P color="--dark-color">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque odio
						recusandae, doloribus amet cumque obcaecati molestiae enim veritatis
						fugiat assumenda quaerat hic eum accusamus? Voluptate maxime blanditiis
						explicabo nobis beatae.
					</P>
					<P color="--dark-color">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque odio
						recusandae, doloribus amet cumque obcaecati molestiae enim veritatis
						fugiat assumenda quaerat hic eum accusamus? Voluptate maxime blanditiis
						explicabo nobis beatae.
					</P>
					<P color="--dark-color">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque odio
						recusandae, doloribus amet cumque obcaecati molestiae enim veritatis
						fugiat assumenda quaerat hic eum accusamus? Voluptate maxime blanditiis
						explicabo nobis beatae.
					</P>
					<P color="--dark-color">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque odio
						recusandae, doloribus amet cumque obcaecati molestiae enim veritatis
						fugiat assumenda quaerat hic eum accusamus? Voluptate maxime blanditiis
						explicabo nobis beatae.
					</P>
					<P color="--dark-color">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque odio
						recusandae, doloribus amet cumque obcaecati molestiae enim veritatis
						fugiat assumenda quaerat hic eum accusamus? Voluptate maxime blanditiis
						explicabo nobis beatae.
					</P>

					<Button to="/publications" darkColor="--dark-color" lightColor="--light-color">
						View All
					</Button>
				</div>
			</Right>
		</Section>
	)
}

export default Publications
