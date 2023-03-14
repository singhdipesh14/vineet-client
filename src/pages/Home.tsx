import Hero from "../components/Hero";
import Research from "../components/Research";
import Publications from "../components/Publications";
import { Main } from "../components/Styled";

const Home = () => {
    return (
        <Main>
            <Hero />
            <Research />
            <Publications />
        </Main>
    );
};

export default Home;
