import { useEffect } from "react";
import styled from "styled-components";
import { useAuth } from "../contexts/Authentication";
import { useBlog } from "../contexts/BlogsContext";
import BlogsView from "./BlogsView";
import Spinner from "./Spinner";
import Search from "./Search";
import {
    Button as TempButton,
    Main,
    Section as TempSection,
    H1,
    Left,
    Right as TempRight,
} from "./Styled";
import size from "../utils/sizes";

const Section = styled(TempSection)`
    margin-top: 0;
`;

const Right = styled(TempRight)`
    justify-content: right;
    align-items: baseline;
    @media screen and (max-width: ${size.tablet}) {
        width: 100%;
        flex-direction: column;
    }
`;

const Button = styled(TempButton)`
    @media screen and (max-width: ${size.tablet}) {
        width: 100%;
        button {
            width: 100%;
        }
    }
`;

const BlogPublic = () => {
    const { isAuthenticated } = useAuth();
    const { getAllBlogs, loading, error } = useBlog();
    useEffect(() => {
        getAllBlogs();
        // eslint-disable-next-line
    }, []);
    return loading ? (
        <Spinner />
    ) : (
        <>
            <Main>
                <Section background="--light-color" isHero={false}>
                    <Left isHero={false}>
                        <H1 color="--dark-color">
                            Research
                            <br /> Blog
                        </H1>
                    </Left>
                    <Right>
                        <Search></Search>
                        {isAuthenticated.userId !== "" ? (
                            <Button
                                darkColor="--dark-color"
                                lightColor="--light-color"
                                to="/users"
                            >
                                Profile
                            </Button>
                        ) : (
                            <Button
                                darkColor="--dark-color"
                                lightColor="--light-color"
                                to="/login"
                            >
                                Login
                            </Button>
                        )}
                    </Right>
                </Section>
                {error ? error : <BlogsView />}
            </Main>
        </>
    );
};

export default BlogPublic;
