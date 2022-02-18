import { createContext, useContext, useReducer, useState } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
    let userInStorage = localStorage.getItem("user")//get user from local storage

    if (userInStorage) userInStorage = JSON.parse(userInStorage) //if user exists, parse json

    const [user, setUser] = useState(userInStorage || null)
    
    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
      };
    

    return(
        <AuthContext.Provider value={ { user, setUser, logout } }>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, useAuth}