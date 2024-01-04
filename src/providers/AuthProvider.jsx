import React, { createContext, useContext, useEffect, useState } from 'react';
import { SESSION_TOKEN, verifySession } from '../helpers/constants';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [storedValue, setStoredValue] = useLocalStorage(SESSION_TOKEN);
    const [user, setUser] = useState({ user_session: verifySession(localStorage.getItem(SESSION_TOKEN))?.user_session });
    const updateAuth = (auth) => {
        if (auth !== null) {
            if (auth?.user) {
                setStoredValue(auth?.token);
                setUser(() => auth?.user);
            } else {
                setUser(() => auth);
            }
        } else {
            setUser(() => null)
        }
    }

    useEffect(() => {
        return updateAuth(verifySession(localStorage.getItem(SESSION_TOKEN)))
        // return updateAuth(JSON.parse(localStorage.getItem(SESSION_TOKEN) ?? {}))
    }, [])

    return (
        <AuthContext.Provider value={[user, updateAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;