import { Routes, Route } from "react-router-dom";
import BlogsPublic from "../components/BlogsPublic";
import Blog from "../components/Blog";

const Blogs = () => {
    return (
        <Routes>
            <Route path=":id" element={<Blog />} />
            <Route index element={<BlogsPublic />} />
        </Routes>
    );
};

export default Blogs;
