import axios from "axios"
import {
	useState,
	useContext,
	createContext,
	Dispatch,
	SetStateAction,
} from "react"

type UserType = {
	name: string
	_id: string
	role: string
	image: string
	email: string
}

type UserContextType = {
	user: UserType
	setUser: Dispatch<SetStateAction<UserType>>
	error: string
	permissionsError: string
	setError: Dispatch<SetStateAction<string>>
	setPermissionsError: Dispatch<SetStateAction<string>>
	loading: boolean
	setLoading: Dispatch<SetStateAction<boolean>>
	getUserData: (id: string) => void
	setUserData: (id: string, data: any) => void
	users: UserType[]
	setUsers: Dispatch<SetStateAction<UserType[]>>
	getAllUsers: () => void
	updatePassword: (oldPassword: string, newPassword: string) => void
	createUser: (id: string, data: any, password: String) => void
	deleteUser: (id: string) => void
}

const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState({
		name: "",
		image: "",
		role: "",
		_id: "",
		email: "",
	})
	const [users, setUsers] = useState([] as UserType[])
	const [error, setError] = useState("")
	const [permissionsError, setPermissionsError] = useState("")
	const [loading, setLoading] = useState(false)
	const getUserData = (id: string) => {
		setLoading(true)
		setError("")
		setPermissionsError("")
		axios
			.get(`/users/${id}`)
			.then((response) => {
				setUser(response.data.user)
				setLoading(false)
			})
			.catch((error) => {
				console.log(error, "yeh error hai")
				setLoading(false)
			})
	}
	const setUserData = (id: string, data: any) => {
		setLoading(true)
		setError("")
		setPermissionsError("")
		const { name, role, email, image } = data
		axios
			.patch(`/users/updateUser`, { name, role, email, image })
			.then((response) => {
				setLoading(false)
			})
			.catch(() => {
				console.log(error)
				setLoading(false)
			})
	}

	const getAllUsers = () => {
		setLoading(true)
		setError("")
		setPermissionsError("")
		axios
			.get("/users")
			.then((response) => {
				setUsers(response.data.users)
				setLoading(false)
			})
			.catch((error) => {
				console.log(error)
				setLoading(false)
			})
	}

	const deleteUser = (id: string) => {
		setLoading(true)
		setError("")
		setPermissionsError("")
		axios
			.delete(`/users/${id}`)
			.then((response) => {
				setLoading(false)
			})
			.catch((error) => {
				console.log(error)
				setLoading(false)
			})
	}

	const createUser = (id: string, data: any, password: String) => {
		setLoading(true)
		setError("")
		setPermissionsError("")
		const { name, image, role } = data
		axios
			.post("/users", { name, image, role, password })
			.then((response) => {
				setLoading(false)
			})
			.catch((error) => console.log(error))
	}

	const updatePassword = (oldPassword: string, newPassword: string) => {
		setLoading(true)
		setError("")
		setPermissionsError("")
		axios
			.patch("/users/updateUserPassword", { oldPassword, newPassword })
			.then((response) => {
				setLoading(false)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				error,
				permissionsError,
				setError,
				setPermissionsError,
				getUserData,
				loading,
				setLoading,
				setUserData,
				setUsers,
				users,
				getAllUsers,
				createUser,
				deleteUser,
				updatePassword,
			}}>
			{children}
		</UserContext.Provider>
	)
}

export const useUser = () => {
	return useContext(UserContext)
}
