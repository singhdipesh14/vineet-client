import axios from "axios";
import {
    useState,
    useContext,
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
} from "react";

type UserType = {
    name: string;
    email: string;
    image?: string;
    _id: string;
};

export type BlogType = {
    title: string;
    markdown: string;
    readTime: string;
    description: string;
    categories?: string[];
    tags?: string[];
    _id: string;
    user: UserType;
    createdAt: string;
};

type BlogContextType = {
    getAllBlogs: () => void;
    getSingleBlog: (id: string) => void;
    blogs: BlogType[];
    blog: BlogType;
    filterBlogs: BlogType[];
    loading: boolean;
    error: string;
    permissionsError: string;
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
    setError: Dispatch<SetStateAction<string>>;
    setPermissionsError: Dispatch<SetStateAction<string>>;
};

const BlogContext = createContext<BlogContextType>({} as BlogContextType);

export const BlogProvider: React.FC = ({ children }) => {
    const [blogs, setBlogs] = useState([] as BlogType[]);
    const [filterBlogs, setFilterBlogs] = useState([] as BlogType[]);
    const [blog, setBlog] = useState<BlogType>({} as BlogType);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    const [permissionsError, setPermissionsError] = useState("");

    const getAllBlogs = () => {
        setLoading(true);
        setError("");
        setPermissionsError("");
        axios
            .get("/blogs")
            .then((response) => {
                setBlogs(response.data.blogs);
                setFilterBlogs(response.data.blogs);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.response.data.msg);
                setLoading(false);
            });
    };

    const getSingleBlog = (id: string) => {
        setLoading(true);
        setError("");
        setPermissionsError("");
        axios
            .get(`/blogs/${id}`)
            .then((response) => {
                setBlog(response.data.blog);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.response.data.msg);
                setLoading(false);
            });
    };

    useEffect(() => {
        setFilterBlogs(() => {
            return blogs.filter(
                (blog) =>
                    blog.title.toLowerCase().indexOf(search.toLowerCase()) !==
                        -1 ||
                    blog.categories?.includes(search.toLowerCase()) ||
                    blog.tags?.includes(search)
            );
        });
    }, [search, blogs]);

    return (
        <BlogContext.Provider
            value={{
                getAllBlogs,
                getSingleBlog,
                blog,
                blogs,
                filterBlogs,
                error,
                loading,
                permissionsError,
                search,
                setSearch,
                setError,
                setPermissionsError,
            }}
        >
            {children}
        </BlogContext.Provider>
    );
};

export const useBlog = () => {
    return useContext(BlogContext);
};
