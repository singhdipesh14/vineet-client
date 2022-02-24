import { H1, Left, Right, P, Section } from "./Styled"

const Awards = () => {
	return (
		<Section isHero={false} background="--light-color">
			<Left isHero={false}>
				<H1 color="--dark-color">
					Awards, <br /> Scholarships <br /> and Grants
				</H1>
			</Left>
			<Right>
				<div>
					<P color="--dark-color">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi est
						alias pariatur vero corrupti nesciunt dolor sunt quis similique voluptate.
					</P>
					<P color="--dark-color">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
						rerum sapiente molestiae dignissimos reiciendis nemo tempora eius quis,
						nisi quos, totam fugit voluptas accusantium et delectus! Perspiciatis sed
						eaque est.
					</P>
					<P color="--dark-color">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus cumque
						impedit eius doloribus perferendis iusto!
					</P>
					<P color="--dark-color">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eum?
					</P>
					<P color="--dark-color">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quas
						temporibus eveniet. Laboriosam, maiores similique expedita asperiores
						minus iure delectus dolor repellat maxime dolores libero ex vitae quia
						suscipit nobis id cum alias, voluptatibus perspiciatis quis autem, debitis
						vel. Mollitia.
					</P>
				</div>
			</Right>
		</Section>
	)
}

export default Awards
