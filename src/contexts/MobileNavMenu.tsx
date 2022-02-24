import { createContext, useContext, useState } from "react"

type menuContextType = {
	isOpen: boolean
	toggleOpen: () => void
}

const MenuContext = createContext({} as menuContextType)

export const MenuProvider: React.FC = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleOpen = () => {
		setIsOpen(!isOpen)
	}

	return (
		<MenuContext.Provider value={{ isOpen, toggleOpen }}>
			{children}
		</MenuContext.Provider>
	)
}

export const useMenuContext = () => useContext(MenuContext)
