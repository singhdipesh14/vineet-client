import styled from "styled-components";
import { Main, Section, Button } from "../components/Styled";

const Wrapper = styled.div`
    margin: 0 auto;
    text-align: center;
    color: var(--dark-color);
    h1 {
        font-size: 6rem;
        text-align: center;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1.5rem;
    }
`;

const NotFound = () => {
    return (
        <Main>
            <Section isHero={false} background="--medium-color">
                <Wrapper>
                    <h1>404</h1>
                    <p>
                        Looks like the page you're trying to find does not
                        exist.
                    </p>
                    <p>
                        Till you figure-out what to do next, check out my blog.
                    </p>
                    <Button
                        darkColor="--dark-color"
                        lightColor="--light-color"
                        to="/"
                    >
                        Take me home!
                    </Button>
                </Wrapper>
            </Section>
        </Main>
    );
};

export default NotFound;
