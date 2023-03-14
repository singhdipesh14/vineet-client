import styled from "styled-components";
import size from "../utils/sizes";
import {
    H1,
    P,
    Button as TempButton,
    Section as TempSection,
    Main,
} from "./Styled";
import { BlogType, useBlog } from "../contexts/BlogsContext";
import { BsFillShareFill } from "react-icons/bs";
import moment from "moment";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehype_raw from "rehype-raw";
import rehype_sanitize from "rehype-sanitize";
import remark_math from "remark-math";
import "../markdown.css";
const Section = styled(TempSection)`
    margin-top: 0;
    padding: 0 10rem;
    padding-top: 0;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: ${size.tablet}) {
        padding: 0 1rem;
        padding-top: 0.5rem;
    } /* padding: 0 1rem; */
    @media screen and (max-width: ${size.mobileS}) {
        padding-top: 0;
    }
`;

const Button = styled(TempButton)`
    @media screen and (max-width: ${size.tablet}) {
        width: 100%;
    }
`;

const Wrapper = styled.article`
    width: 100%;
    border: 2px var(--dark-color) solid;
    padding: 5rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    background: var(--gradient);
    .title {
        :hover {
            text-decoration: underline;
        }
    }
    hr {
        margin-top: 2rem;
        border: none;
        height: 0.5px;
        background-color: var(--dark-color);
    }
    .markdown {
        padding: 2rem 0;
        color: var(--dark-color);
        blockquote {
            size: 3rem;
        }
    }
    @media screen and (max-width: ${size.tablet}) {
        padding: 3rem 2rem;
    }
    @media screen and (max-width: ${size.mobileL}) {
        padding: 3rem 1rem;
        margin-top: 3rem;
    }
    @media screen and (max-width: ${size.mobileM}) {
        margin-top: 2rem;
    }
`;
const Meta = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--dark-color);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    @media screen and (max-width: ${size.mobileL}) {
        /* display: none; */
    }
    .share {
        :hover {
            cursor: pointer;
        }
        :active {
            transform: scale(0.9);
        }
        @media screen and (max-width: ${size.tablet}) {
            font-size: 1.2rem;
        }
    }
    .user {
        display: flex;
        justify-content: left;
        align-items: center;
        img {
            width: 65px;
            height: 65px;
            border-radius: 50vw;
            @media screen and (max-width: ${size.tablet}) {
                width: 40px;
                height: 40px;
            }
        }
        div {
            display: flex;
            justify-content: left;
            align-items: center;
            text-align: left;
            @media screen and (max-width: ${size.mobileL}) {
                flex-direction: column;
                align-items: flex-start;
                .dot {
                    display: none;
                }
                .not-flex {
                    flex-direction: row;
                    align-items: center;
                    .dot {
                        display: block;
                    }
                }
            }
        }
        p {
            font-size: 1.2rem;
            margin-left: 0.6rem;
            @media screen and (max-width: ${size.tablet}) {
                font-size: 1rem;
                margin-left: 0.3rem;
            }
        }
        .name {
            font-weight: 600;
        }
        .dot {
            width: 4px;
            height: 4px;
            background-color: var(--dark-color);
            border-radius: 50vw;
            margin-left: 0.6rem;
            @media screen and (max-width: ${size.tablet}) {
                margin-left: 0.3rem;
            }
        }
    }
`;

const LinksWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.6rem;
`;

const Links = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: var(--dark-color);
    .link {
        transition: 200ms ease-in-out opacity;
        margin-right: 1rem;
        :hover {
            opacity: 0.7;
        }
    }
`;

const Extras = styled.div`
    display: flex;
    justify-content: space-between;
    /* column-gap: 2rem; */
    /* row-gap: 1rem; */
    padding-bottom: 2rem;
    @media screen and (max-width: ${size.tablet}) {
        flex-direction: column;
    }
`;

const Part = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: ${size.tablet}) {
        margin-bottom: 0.8rem;
    }
`;

const Tag = styled.div`
    background-color: var(--dark-color);
    padding: 1rem 2rem;
    margin: 0.5rem;
    color: var(--gradient);
    font-size: 1.3rem;
    @media screen and (max-width: ${size.mobileL}) {
        font-size: 1rem;
    }
`;

const TagTitle = styled.h3`
    display: block;
    color: var(--dark-color);
`;

const Blog: React.FC<BlogType> = ({
    _id,
    description,
    markdown,
    readTime,
    title,
    user,
    categories,
    children,
    tags,
    createdAt,
}) => {
    const date = new Date(createdAt);
    const location = useLocation();

    const [copied, setCopied] = useState(false);
    useEffect(() => {
        if (copied === true) {
            let timeout = setTimeout(() => setCopied(false), 2000);
            return () => clearTimeout(timeout);
        }
    }, [copied]);
    return (
        <Main>
            <Section background="--light-color" isHero={false}>
                <Button
                    to="/blogs"
                    darkColor="--dark-color"
                    lightColor="--light-color"
                >
                    Back
                </Button>
                <Wrapper>
                    <Meta>
                        <div className="user">
                            <img
                                src={(user && user.image) || ""}
                                alt={user && user.name}
                            />
                            <div>
                                <p className="name">{user && user.name}</p>
                                <div className="dot"></div>
                                <div className="not-flex">
                                    <p>{moment(date).format("MMM DD YYYY")}</p>
                                    <div className="dot"></div>
                                    <p>{readTime} min read</p>
                                </div>
                            </div>
                        </div>
                        {copied ? (
                            <p>Copied! ✅</p>
                        ) : (
                            <BsFillShareFill
                                className="share"
                                onClick={() => {
                                    navigator.clipboard.writeText(
                                        `${process.env.REACT_APP_URL}${location.pathname}/${_id}`
                                    );
                                    setCopied(true);
                                }}
                            />
                        )}
                    </Meta>
                    <Link to={`/blogs/${_id}`}>
                        <H1 className="title" color="--dark-color">
                            {title}
                        </H1>
                    </Link>
                    <P color="--dark-color">{description}</P>
                    <hr></hr>
                    <div className="markdown markdown-body">
                        <ReactMarkdown
                            remarkPlugins={[gfm, remark_math]}
                            rehypePlugins={[rehype_raw, rehype_sanitize]}
                        >
                            {markdown}
                        </ReactMarkdown>
                    </div>
                    <hr></hr>
                    <LinksWrapper>
                        <Links>
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
                        </Links>
                        <Button
                            darkColor="--dark-color"
                            lightColor="--light-color"
                            to="/blogs"
                        >
                            Back
                        </Button>
                    </LinksWrapper>
                </Wrapper>
                <Extras>
                    <div>
                        <TagTitle>categories</TagTitle>
                        <Part>
                            {categories &&
                                categories.map((item) => {
                                    return (
                                        <Tag key={item}>
                                            <p>{item}</p>
                                        </Tag>
                                    );
                                })}
                        </Part>
                    </div>
                    <div>
                        <TagTitle>tags</TagTitle>
                        <Part>
                            {tags &&
                                tags.map((item) => {
                                    return (
                                        <Tag key={item}>
                                            <p>{item}</p>
                                        </Tag>
                                    );
                                })}
                        </Part>
                    </div>
                </Extras>
            </Section>
        </Main>
    );
};

const BlogExp = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getSingleBlog, blog, loading, error } = useBlog();
    useEffect(() => {
        if (id) getSingleBlog(id);
        // eslint-disable-next-line
    }, [id]);
    useEffect(() => {
        if (error !== "") navigate("/404-not-found");
    }, [error, navigate]);
    return loading ? <Spinner /> : error ? <p>error</p> : <Blog {...blog} />;
};

export default BlogExp;
