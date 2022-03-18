import React from "react"
import styled from "styled-components"
import { useBlog } from "../contexts/BlogsContext"
import size from "../utils/sizes"
import { H2, Left, Section as TempSection } from "./Styled"
import Blog from "./SingleBlogView"

const Section = styled(TempSection)`
	margin-top: 0;
	padding: 0 10rem;
	padding-top: 0;
	width: 100%;
	justify-content: center;
	flex-direction: column;
	/* padding: 0 1rem; */
	@media screen and (max-width: ${size.laptop}) {
		padding: 0 5rem;
	}
	@media screen and (max-width: ${size.tablet}) {
		padding: 0;
		padding-bottom:2rem;
	}
`

const BlogsView = () => {
	const { filterBlogs: Blogs } = useBlog()
	return (
		<Section background="--light-color" isHero={false}>
			{Blogs.length !== 0 ? (
				Blogs.map((blog) => {
					return <Blog key={blog._id} {...blog} />
				})
			) : (
				<Left isHero={false}>
					<H2 color="--dark-color">No blogs found.</H2>
				</Left>
			)}
		</Section>
	)
}

export default BlogsView
