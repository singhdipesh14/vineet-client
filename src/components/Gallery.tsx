import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { Section as TempSection, H1 as TempH1, Center } from "./Styled";
import image1 from "../assets/landing.png";

import size from "../utils/sizes";

const Section = styled(TempSection)`
    margin-top: 0;
    @media screen and (max-width: ${size.tablet}) {
        display: block;
    }
    @media screen and (max-width: ${size.mobileS}) {
        padding: 3rem 0rem;
    }
`;

const H1 = styled(TempH1)`
    margin-bottom: 2rem;
`;

const LabGallery = () => {
    return (
        <Section isHero={false} background="--light-color">
            <Center>
                <div>
                    <H1 color="--dark-color">Lab Gallery</H1>
                    <Carousel showArrows={true}>
                        <div>
                            <img src={image1} alt="" />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img src={image1} alt="" />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img src={image1} alt="" />
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>
                </div>
            </Center>
        </Section>
    );
};

export default LabGallery;
