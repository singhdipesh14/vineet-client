import { Section, Left, Right, Button, H1, P } from "./Styled"

const Research = () => {
	return (
		<Section isHero={false} background="--medium-color">
			<Left isHero={false}>
				<H1 color="--dark-color">
					Research<br></br>Interests
				</H1>
			</Left>
			<Right>
				<div>
					<P color="--dark-color">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque odio
						recusandae, doloribus amet cumque obcaecati molestiae enim veritatis
						fugiat assumenda quaerat hic eum accusamus? Voluptate maxime blanditiis
						explicabo nobis beatae. Officiis tempore quidem veniam ipsum deleniti
						voluptate vero dolorum doloribus possimus, quae nemo atque incidunt ad
						corrupti? Dolorem ut incidunt excepturi porro. Impedit, animi. Alias et
						maiores esse temporibus voluptatibus iure, ipsum qui quibusdam hic
						ducimus, placeat odio tenetur exercitationem.
					</P>
					<P color="--dark-color">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit optio
						eligendi ipsam quo recusandae perferendis, ea, hic voluptas odit assumenda
						esse neque sint amet quidem error repellat numquam cumque repellendus
						totam. Unde, dignissimos ut repudiandae cum non ipsam vero deserunt
						consequatur id, corrupti sapiente molestias? Consectetur nemo perspiciatis
						tempore illum aperiam, explicabo nisi temporibus modi laudantium, mollitia
						esse suscipit rerum sed reiciendis delectus impedit, ab unde dolor ea.
						Accusamus autem optio praesentium ad. Nesciunt voluptatem ratione illo aut
						blanditiis adipisci magni. Vero corporis quasi cum consequuntur dicta
						similique saepe molestias dolorem distinctio eos id beatae esse eveniet,
						alias porro? Illo.
					</P>
					<Button to="/blogs" darkColor="--dark-color" lightColor="--light-color">
						Learn More
					</Button>
				</div>
			</Right>
		</Section>
	)
}

export default Research
