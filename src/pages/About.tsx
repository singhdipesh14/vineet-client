import { Main } from "../components/Styled";
import AboutSection from "../components/About";
import Education from "../components/Education";
import Awards from "../components/Awards";

const About = () => {
    return (
        <Main>
            <AboutSection />
            <Education />
            <Awards />
        </Main>
    );
};

export default About;
