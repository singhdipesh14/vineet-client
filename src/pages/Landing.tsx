import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Publications from "./Publications";
// import Blogs from "./Blogs";
import NotFound from "./NotFound";
import Contact from "./Contact";
import Footer from "./Footer";
import { useMenuContext } from "../contexts/MobileNavMenu";
import ModalMenu from "../components/ModalMenu";
import styled from "styled-components";
import Login from "./Login";
import User from "./User";
import Research from "./Research";
import Gallery from "./Gallery";
import Positions from "./Positions";
import ScrollToTop from "../components/ScrollToTop";
// import { useEffect, useState } from "react";

const Landing = () => {
    const { isOpen } = useMenuContext();
    return (
        <Wrapper>
            <Router>
                <ScrollToTop />
                <Navbar></Navbar>
                <ModalMenu
                    classNames={isOpen ? "open modal" : "modal"}
                ></ModalMenu>
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/research" element={<Research />}></Route>
                    <Route path="/gallery" element={<Gallery />}></Route>
                    <Route path="/positions" element={<Positions />}></Route>
                    <Route
                        path="/publications"
                        element={<Publications />}
                    ></Route>
                    {/* <Route path="/blogs/*" element={<Blogs />}></Route> */}
                    <Route path="/login/*" element={<Login />}></Route>
                    <Route path="/users/*" element={<User />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
                <Contact></Contact>
                <Footer></Footer>
            </Router>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--gradient);
        transition: var(--transition);
        visibility: hidden;
        z-index: -1;
    }
    .open {
        visibility: visible;
        z-index: 10;
    }
`;

export default Landing;
