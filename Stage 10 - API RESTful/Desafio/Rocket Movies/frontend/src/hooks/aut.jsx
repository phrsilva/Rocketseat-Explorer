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

    function sair () {

        localStorage.removeItem("@rocketmovies:user");
        localStorage.removeItem("@rocketmovies:token");
        setData({});

    }

    async function atualizarPerfil({user, previaAvatar}) {
        try {

            if (previaAvatar) {
                const enviarAvatar = new FormData();
                enviarAvatar.append("avatar", previaAvatar);

                const response = await api.patch("/users/avatar", enviarAvatar);
                user.avatar = response.data.avatar;
            }



            await api.put("/users", user);
            localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
            setData({ user, token: data.token });
            alert("Perfil atualizado");
            
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível cadastrar");
            }
        }
    }



    return <ContextoDeAutenticação.Provider value={{autenticar, user: data.user, sair, atualizarPerfil}}>
                {children}
            </ContextoDeAutenticação.Provider>;
    }


function usarAutenticacao() {
    return useContext(ContextoDeAutenticação);
}


export { ProvedorDeAutenticacao, usarAutenticacao  };
