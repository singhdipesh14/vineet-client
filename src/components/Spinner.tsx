import styled from "styled-components";
import { H1, Main, Section } from "./Styled";

const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    .spinner {
        width: 50px;
        height: 50px;
        border: 5px solid white;
        margin: 0 auto 2rem;
        border-top: 5px solid var(--dark-color);
        border-radius: 50vw;
        animation: spin infinite 600ms linear;
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
`;

const Spinner = () => {
    return (
        <Main>
            <Section isHero={false} background="--light-color">
                <Wrapper>
                    <div className="spinner"></div>
                    <H1 color="--dark-color">Loading...</H1>
                </Wrapper>
            </Section>
        </Main>
    );
};

export default Spinner;
