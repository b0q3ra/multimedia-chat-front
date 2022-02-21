import { createContext, useContext, useReducer, useState } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
    let userInStorage = localStorage.getItem("user")//get user from local storage

    if (userInStorage) userInStorage = JSON.parse(userInStorage) //if user exists, parse json

    let emptyUser = {email: '', token: ''}//empty user template
    const [user, setUser] = useState(userInStorage || emptyUser)
    
    const saveUser = (_user) => {
        localStorage.setItem('user', JSON.stringify(_user))
        setUser(_user)
    }

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
      };
    

    return(
        <AuthContext.Provider value={ { user, setUser, saveUser, logout } }>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, useAuth}