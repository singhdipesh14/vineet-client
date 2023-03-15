import styled from "styled-components";
import { Link as NavLink } from "react-router-dom";
import { ReactNode } from "react";

import size from "../utils/sizes";

export const Main = styled.main`
    font-size: 1rem;
`;
interface SectionProps {
    isHero: boolean;
    background: string;
}

export const Section = styled.section`
    position: relative;
    margin-top: ${(props: SectionProps) => (props.isHero ? "0" : "3rem")};
    padding: ${(props: SectionProps) => (props.isHero ? "3rem" : "5rem 3rem")};
    display: flex;
    ::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: var(${(props: SectionProps) => props.background});
        height: ${(props: SectionProps) => (props.isHero ? "59%" : "100%")};
        opacity: 1;
        z-index: -1;
        overflow: hidden;
        @media screen and (max-width: ${size.tablet}) {
            height: 100%;
        }
    }
    @media screen and (max-width: ${size.tablet}) {
        display: block;
        padding: 5rem 3rem;
    }
    @media screen and (max-width: ${size.mobileL}) {
        padding: 5rem 1rem;
    }
    @media screen and (max-width: ${size.mobileS}) {
        padding: 3rem 0rem;
    }
`;

export const Left = styled.article`
    padding-left: ${(props: { isHero: boolean }) =>
        props.isHero ? "0" : "7rem"};
    width: 50%;
    left: 0;
    display: flex;
    @media screen and (max-width: ${size.laptop}) {
        padding-left: ${(props: { isHero: boolean }) =>
            props.isHero ? "0" : "2rem"};
    }
    @media screen and (max-width: ${size.tablet}) {
        width: 100%;
    }
`;
export const Right = styled.article`
    width: 50%;
    right: 0;
    display: flex;
    padding-left: 2rem;
    padding-right: 5rem;
    @media screen and (max-width: ${size.laptop}) {
        padding-right: 2rem;
    }
    @media screen and (max-width: ${size.tablet}) {
        width: 100%;
    }
`;

export const Center = styled.article`
    width: 60%;
    margin: 0 auto;
    @media screen and (max-width: ${size.tablet}) {
        width: 90%;
    }
`;

interface ButtonProps {
    darkColor: string;
    lightColor: string;
    to: string;
    children?: ReactNode;
}

export const ButtonComp = styled.button`
    border: 1px solid var(${(props: ButtonProps) => props.darkColor});
    padding: 1rem 2rem;
    background-color: transparent;
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 300;
    color: var(${(props: ButtonProps) => props.darkColor});
    margin-top: 2rem;
    transition: 200ms ease-in-out background-color;
    :hover {
        color: var(${(props: ButtonProps) => props.lightColor});
        background-color: var(${(props: ButtonProps) => props.darkColor});
    }
    @media screen and (max-width: ${size.tablet}) {
        transition: 20ms ease-in-out background-color;
        :focus,
        :active,
        :hover {
            color: var(${(props: ButtonProps) => props.lightColor});
            background-color: var(${(props: ButtonProps) => props.darkColor});
        }
    }
    @media screen and (max-width: ${size.mobileL}) {
        font-size: 1rem;
    }
`;

export const H1 = styled.h1`
    font-size: 2.2rem;
    color: var(${(props: { color: string }) => props.color});
    @media screen and (max-width: ${size.tablet}) {
        margin-bottom: 2rem;
    }
    @media screen and (max-width: ${size.mobileL}) {
        font-size: 1.8rem;
    }
    @media screen and (max-width: ${size.mobileS}) {
        font-size: 1.4rem;
    }
`;

export const H2 = styled.h2`
    font-weight: 400;
    color: var(${(props: { color: string }) => props.color});
    margin-bottom: 0.5rem;
`;

export const H3 = styled.h3`
    font-weight: 400;
    color: var(${(props: { color: string }) => props.color});
    margin-bottom: 1rem;
`;

export const P = styled.p`
    color: var(${(props: { color: string }) => props.color});
    margin: 0 0 2rem;
`;

export const Image = styled.img`
    height: 500px;
    width: 500px;
    border-radius: 0 20% 0 20%;
    margin: 0 auto;
    @media screen and (max-width: ${size.laptop}) {
        height: 400px;
        width: 400px;
    }
    @media screen and (max-width: 899px) {
        height: 350px;
        width: 350px;
    }
    @media screen and (max-width: ${size.tablet}) {
        width: 100%;
        height: auto;
        border-radius: 0;
    }
`;

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <NavLink to={props.to}>
            <ButtonComp {...props}>{props.children}</ButtonComp>
        </NavLink>
    );
};
