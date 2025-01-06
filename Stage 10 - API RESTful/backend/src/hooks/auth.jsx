import {createContext, useContext, useState} from 'react';
import { api } from '../service/API';

export const AuthContext = createContext({});

function AuthProvider({children}) {

    async function signIn({email, password}) {
        const [data, setData] = useState({});

        try {
        const response = await api.post('/sessions', {email, password});
        const {token, user} = response.data;
        api.defaults.headers.authorization = `Bearer ${token}`;
        setData[user, token];

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível entrar.")
            }
        }



    }


    return(
        <AuthContext.Provider value={{signIn, user: data.user}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}


export {AuthProvider, useAuth};