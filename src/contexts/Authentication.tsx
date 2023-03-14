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
    userId: string;
    role: string;
};

type AuthContextType = {
    authenticate: () => void;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    isAuthenticated: UserType;
    setIsAuthenticated: Dispatch<SetStateAction<UserType>>;
    username: string;
    password: string;
    error: string;
    setUsername: Dispatch<SetStateAction<string>>;
    setPassword: Dispatch<SetStateAction<string>>;
    forgotPassword: (e: React.FormEvent<HTMLFormElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    logout: () => void;
    FP: boolean;
    setFP: Dispatch<SetStateAction<boolean>>;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: React.FC = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState({
        name: "",
        role: "",
        userId: "",
    });
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [FP, setFP] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        setError("");
        e.preventDefault();
        console.log(username, password);
        axios
            .post("/auth/login", { email: username, password })
            .then((response) => {
                if (response.data.user) {
                    setIsAuthenticated(response.data.user);
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.log(err.response);
                setLoading(false);
                setError(err.response.data.msg);
            });
        setUsername("");
        setPassword("");
    };
    const authenticate = () => {
        setLoading(true);
        setError("");
        axios
            .get("/users/showMe")
            .then((response) => {
                setIsAuthenticated(response.data.user);
                setLoading(false);
            })
            .catch((error) => {
                setIsAuthenticated({
                    name: "",
                    role: "",
                    userId: "",
                });
                setLoading(false);
            });
    };

    const forgotPassword = (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        setError("");
        e.preventDefault();
        axios
            .post("/auth/forgotPassword", { email: username })
            .then((response) => {
                setFP(true);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.response.data.msg);
                setLoading(false);
            });
        setUsername("");
        setPassword("");
    };

    const logout = () => {
        setLoading(true);
        setError("");
        axios
            .get("/auth/logout")
            .then((response) => {
                setIsAuthenticated({ name: "", role: "", userId: "" });
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };

    useEffect(() => {
        if (error) {
            let timeout = setTimeout(() => setError(""), 3000);
            return () => clearTimeout(timeout);
        }
    }, [error]);

    useEffect(() => {
        authenticate();
    }, []);
    return (
        <AuthContext.Provider
            value={{
                authenticate,
                loading,
                setLoading,
                isAuthenticated,
                setIsAuthenticated,
                handleSubmit,
                logout,
                password,
                setPassword,
                setUsername,
                username,
                forgotPassword,
                error,
                FP,
                setFP,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
