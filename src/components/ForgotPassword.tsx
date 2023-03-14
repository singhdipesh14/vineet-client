import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../contexts/Authentication";
import size from "../utils/sizes";
import { Main, Section, ButtonComp, P as TempP, H1 } from "./Styled";
import Redirecting from "./RedirectingFP";

const P = styled(TempP)`
    margin-bottom: 0.5rem;
`;

const Wrapper = styled.div`
    margin: 0 auto;
    .wrapper {
        display: flex;
        flex-direction: column;
        display: inline-flex;
        input {
            border: none;
            border-bottom: 1px solid var(--dark-color);
            background-color: transparent;
            height: 2rem;
            width: 100%;
            margin-bottom: 1rem;
            :hover,
            :focus {
                border-bottom: 2px solid var(--dark-color);
            }
        }
        .title {
            margin-bottom: 2rem;
        }
        .error {
            background-color: var(--error-text);
            color: var(--error-color);
            border: none;
        }
        @media screen and (max-width: ${size.tablet}) {
            width: 100%;
            /* margin: 0 auto; */
        }
    }
`;

const ForgotPassword: React.FC = () => {
    const { username, setUsername, forgotPassword, error, FP } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (FP === true) {
            let timeout = setTimeout(() => {
                navigate("/login");
            }, 3000);
            return () => clearTimeout(timeout);
        }
    }, [FP, navigate]);
    return FP ? (
        <Redirecting />
    ) : (
        <Main>
            <Section background="--light-color" isHero={false}>
                <Wrapper>
                    <form onSubmit={forgotPassword}>
                        <div className="wrapper">
                            <div>
                                <H1 color="--dark-color" className="title">
                                    Forgot Password
                                </H1>
                            </div>
                            <div>
                                <label htmlFor="username">
                                    <P color="--dark-color">Username</P>
                                </label>
                                <input
                                    type="email"
                                    value={username}
                                    name="username"
                                    required
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            </div>
                            <ButtonComp
                                className={error && "error"}
                                darkColor="--dark-color"
                                lightColor="--light-color"
                                type="submit"
                                to=""
                            >
                                {error || "Submit"}
                            </ButtonComp>
                        </div>
                    </form>
                </Wrapper>
            </Section>
        </Main>
    );
};
export default ForgotPassword;
