import { createContext } from "react";

const INITIAL_STATE = {
	currentUser: null
}

const AuthContext = createContext(INITIAL_STATE)

const AuthContextProvider = ({children}) => {
	<AuthContext.Provider value={{}}>
		{children}
	</AuthContext.Provider>
}