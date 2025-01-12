import { createContext, useContext } from "react";
import { api } from "../../services/api";
import { useState, useEffect } from "react";

export const ContextoDeAutenticação = createContext({});

function ProvedorDeAutenticacao({ children }) {

    const [data, setData] = useState({});


    async function autenticar({email, password}) {

        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;
            
            localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
            localStorage.setItem("@rocketmovies:token", token);
            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({ user, token });

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível cadastrar");
            }
        }

    }


    useEffect(() => {
        const user = localStorage.getItem("@rocketmovies:user");
        const token = localStorage.getItem("@rocketmovies:token");

        if (user && token) {
            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({ user: JSON.parse(user), token });
        }
    }, []);



    return <ContextoDeAutenticação.Provider value={{autenticar, user: data.user}}>
                {children}
            </ContextoDeAutenticação.Provider>;
}


function usarAutenticacao() {
    return useContext(ContextoDeAutenticação);
}

export { ProvedorDeAutenticacao, usarAutenticacao  };

