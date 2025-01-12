import { useState } from "react";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";

import { Container, Form, PlanoDeFundo } from "./styles";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";
import { BotaoDeTexto } from "../../components/textButton";
import { FiMail, FiLock, FiUser } from "react-icons/fi";



export const Cadastrar = () => {


    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();


    function lidarComCadastro(e) {
        
        
        if (!nome || !email || !senha) {
            alert("Preencha todos os campos");
            return;
        }

        api.post("/users", { name: nome, email: email, password: senha })
            .then(() => {
                alert("Usuário cadastrado com sucesso!");
                navigate("/");
                
                
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Erro ao cadastrar usuário");
                }
            });

    }





    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar filmes e séries</p>
                <Input icon={FiUser} placeholder="Nome" onChange={(e) => setNome(e.target.value)}></Input>
                
                <Input icon={FiMail} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                <Input type="password" icon={FiLock} placeholder="Senha" onChange={(e) => setSenha(e.target.value)}/>
                <Input type="password" icon={FiLock} placeholder="Confirmar Senha" onChange={(e) => setSenha(e.target.value)}/>
                
                <Link to="/">
                    <Button title="Criar conta" onClick={lidarComCadastro} />
                
                </Link>
               

            </Form>
            <PlanoDeFundo/>
        </Container>
    );
}