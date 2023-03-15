import styled from "styled-components";
import size from "../utils/sizes";

const Footer = () => {
    return (
        <FooterComp>
            <p>
                @2022 by Vineet Singh. Made with ❤️ by{" "}
                <a
                    className="link"
                    href="https://www.linkedin.com/in/singhdipesh14/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Dipesh Singh
                </a>
                .
            </p>
        </FooterComp>
    );
};

const FooterComp = styled.footer`
    padding: 1rem;
    text-align: center;
    display: flex;
    justify-content: center;
    width: 100%;
    color: var(--dark-color);
    background-color: var(--light-color);
    font-weight: 500;
    .link {
        :hover {
            color: blue;
            text-decoration: underline;
        }
    }
    @media (max-width: ${size.tablet}) {
        font-size: 0.8rem;
    }
`;

export default Footer;
