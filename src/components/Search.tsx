import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import size from "../utils/sizes";
import { useBlog } from "../contexts/BlogsContext";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px var(--dark-color) solid;
    font-size: 1.5rem;
    color: var(--dark-color);
    margin-right: 1rem;
    width: 100%;
    input {
        border: none;
        border-bottom: 1px solid var(--medium-color);
        background-color: transparent;
        height: 2rem;
        width: 90%;
    }
    :hover,
    :focus {
        border-bottom: 2px var(--dark-color) solid;
    }
    @media screen and (max-width: ${size.tablet}) {
        :hover {
            border-bottom: 1px var(--dark-color) solid;
        }
    }
`;

const Search = () => {
    const { search, setSearch } = useBlog();
    return (
        <Wrapper>
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <FiSearch></FiSearch>
        </Wrapper>
    );
};

export default Search;
