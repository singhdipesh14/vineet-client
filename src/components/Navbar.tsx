import styled from "styled-components";
import { Link as NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import size from "../utils/sizes";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMenuContext } from "../contexts/MobileNavMenu";

export const links = [
    { name: "About", to: "about" },
    { name: "Research", to: "research" },
    { name: "Positions", to: "positions" },
    { name: "Gallery", to: "gallery" },
    { name: "Publications", to: "publications" },
    // { name: "Blog", to: "blogs" },
    { name: "Contact", to: "#contact" },
];

const Navbar: React.FC = () => {
    const { toggleOpen } = useMenuContext();
    return (
        <Header>
            <Container>
                <NavLink to={"/"}>
                    <Name>Vineet Singh, PhD</Name>
                </NavLink>
                <Links>
                    {links.map((item, idx) => {
                        if (item.name === "Contact")
                            return (
                                <Contact smooth key={idx} to={item.to}>
                                    <p>{item.name}</p>
                                </Contact>
                            );
                        return (
                            <Link key={idx} to={item.to}>
                                <p>{item.name}</p>
                            </Link>
                        );
                    })}
                </Links>
                <Hamburger onClick={toggleOpen}></Hamburger>
            </Container>
        </Header>
    );
};

const Header = styled.header`
    color: var(--dark-color);
    overflow: hidden;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    @media (max-width: ${size.mobileL}) {
        padding: 20px;
    }
`;

const Name = styled.h2`
    font-size: 1rem;
    margin-left: 2vw;
    transition: 200ms ease-in-out color;
    position: relative;
    :hover {
        ::before {
            content: "";
            position: absolute;
            z-index: -1;
            left: -15px;
            top: -30px;
            padding: 7px 10px;
            width: calc(100% + 30px);
            height: calc(100% + 60px);
            background-color: var(--dark-color);
        }
        color: var(--medium-color);
    }
    @media (max-width: ${size.mobileL}) {
        margin-left: 0px;
    }
    @media (max-width: ${size.mobileS}) {
        margin-left: 0;
        margin-top: 2px;
        display: inline-block;
    }
`;

const Links = styled.div`
    display: flex;
    justify-content: right;
    margin-right: 40px;
    @media (max-width: ${size.laptopL}) {
        width: 40%;
    }
    @media (max-width: ${size.laptop}) {
        width: 50%;
    }
    @media (max-width: ${size.tablet}) {
        display: none;
    }
`;

const Link = styled(NavLink)`
    transition: 300ms color ease-in-out;
    position: relative;
    :hover {
        ::before {
            content: "";
            position: absolute;
            z-index: -1;
            left: -15px;
            top: -30px;
            padding: 7px 10px;
            width: calc(100% + 30px);
            height: calc(100% + 60px);
            background-color: var(--dark-color);
        }
        /* opacity: 0.7; */
        color: var(--medium-color);
    }
    margin: 0 10px;
    @media (max-width: ${size.laptop}) {
        margin: 0 5px;
        :hover {
            ::before {
                left: -8px;
                width: calc(100% + 16px);
            }
        }
    }
`;

const Contact = styled(HashLink)`
    transition: 300ms color ease-in-out;
    margin-left: 10px;
    position: relative;
    :hover {
        ::before {
            content: "";
            position: absolute;
            z-index: -1;
            left: -15px;
            top: -30px;
            padding: 7px 10px;
            width: calc(100% + 30px);
            height: calc(100% + 60px);
            background-color: var(--dark-color);
        }
        color: var(--medium-color);
    }
    @media (max-width: ${size.laptop}) {
        margin-left: 5px;
        :hover {
            ::before {
                left: -8px;
                width: calc(100% + 16px);
            }
        }
    }
`;

const Hamburger = styled(GiHamburgerMenu)`
    display: none;
    @media (max-width: ${size.tablet}) {
        display: inline-block;
        color: var(--dark-color);
        font-size: 1.5rem;
    }
    @media (max-width: ${size.mobileM}) {
        font-size: 1.2rem;
    }
`;

export default Navbar;
