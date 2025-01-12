import { useState } from "react";

import { Container, Form, PlanoDeFundo } from "./styles";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";
import { BotaoDeTexto } from "../../components/textButton";
import { FiMail, FiLock } from "react-icons/fi";

export const Login = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar filmes e séries</p>
                <Input icon={FiMail} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" icon={FiLock} placeholder="Senha" onChange={(e) => setSenha(e.target.value)}/>
                <Button title="Entrar" />
                <Link to="/cadastrar">
                    <BotaoDeTexto title="Criar conta" />
                </Link>
                    

            </Form>
            <PlanoDeFundo/>
        </Container>
    );
}