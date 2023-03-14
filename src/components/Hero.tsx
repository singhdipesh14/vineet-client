import styled from "styled-components";
import { Section, Left, Right, Button, H1, P, Image } from "./Styled";
import LandingImage from "../assets/landing.png";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import size from "../utils/sizes";

const Hero = () => {
    return (
        <Section isHero background="--light-color">
            <Left isHero>
                <Image src={LandingImage} />
            </Left>
            <Right>
                <Info>
                    <H1 className="no-bottom" color="--dark-color">
                        Vineet Singh, PhD
                    </H1>
                    <p className="profession">Professor of Pharmacy</p>
                    <div className="links">
                        <a
                            href="https://www.linkedin.com/in/vineet-singh-m-pharm-ph-d-3584b9b/"
                            target={"_blank"}
                            rel="noreferrer noopener"
                        >
                            <BsLinkedin className="link" />
                        </a>
                        <a
                            href="https://twitter.com/DipeshS33865964"
                            target={"_blank"}
                            rel="noreferrer noopener"
                        >
                            <BsTwitter className="link" />
                        </a>
                    </div>
                    <P color="--dark-color" className="info">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Amet dolorem suscipit cupiditate quisquam, iste
                        deleniti veniam, sequi ad perspiciatis mollitia ex sed
                        numquam, quas consequatur atque illum? Quisquam dicta
                        earum veritatis nihil enim dolor, expedita ipsam totam
                        aut harum quam!
                    </P>
                    <Button
                        to="/about"
                        darkColor="--dark-color"
                        lightColor="--light-color"
                    >
                        About me
                    </Button>
                </Info>
            </Right>
        </Section>
    );
};

const Info = styled.div`
    padding-top: 4rem;
    color: var(--dark-color);
    .name {
        font-size: 2.2rem;
    }
    .profession {
        font-size: 1.4rem;
    }
    .links {
        padding: 1rem 0;
        font-size: 1.6rem;
    }
    .link {
        margin-right: 1rem;
        transition: 200ms ease-in-out opacity;
        :hover {
            opacity: 0.7;
        }
    }
    .info {
        margin-top: 1.4rem;
    }
    .no-bottom {
        margin-bottom: 0;
    }
    .add-bottom {
        @media screen and (max-width: ${size.tablet}) {
            margin-bottom: 2rem;
        }
    }
`;

export default Hero;
