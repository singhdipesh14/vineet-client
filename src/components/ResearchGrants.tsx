import styled from "styled-components";
import { Center, H1 as TempH1, P, Section } from "./Styled";

const H1 = styled(TempH1)`
    margin-bottom: 2rem;
`;

const ResearchGrants = () => {
    return (
        <Section background="--medium-color" isHero={false}>
            <Center>
                <div>
                    <H1 color="--dark-color">Research Grants</H1>
                    <P color="--dark-color">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt mollitia amet voluptas numquam ea corporis et
                        quibusdam, quis facilis nemo, modi temporibus id
                        asperiores quam sunt pariatur facere sequi dignissimos!
                        Quisquam perspiciatis a eius, modi ut adipisci atque
                        molestiae explicabo accusantium quidem cupiditate aut
                        vero reiciendis consectetur culpa quas in, ullam
                        asperiores commodi laborum nemo iure, odio velit.
                        Consequatur, exercitationem! Architecto deleniti iste
                        mollitia totam sit qui! Voluptatem, dolorem ratione?
                    </P>
                    <P color="--dark-color">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Et accusantium nobis itaque necessitatibus eum
                        quam at, obcaecati accusamus, cum, inventore quibusdam
                        ipsam incidunt assumenda cupiditate maxime similique
                        totam placeat aut error! Consequuntur libero fuga, rerum
                        placeat amet deleniti laudantium, quas incidunt dicta
                        quaerat quo illo esse ipsam velit accusantium sequi.
                    </P>
                </div>
            </Center>
        </Section>
    );
};

export default ResearchGrants;
