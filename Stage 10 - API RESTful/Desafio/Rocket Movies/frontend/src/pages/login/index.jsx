import { useState, useContext } from "react";
import { usarAutenticacao } from "../../hooks/aut";
import { Container, Form, PlanoDeFundo } from "./styles";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";
import { BotaoDeTexto } from "../../components/textButton";
import { FiMail, FiLock } from "react-icons/fi";

export function Login() {
    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { autenticar } = usarAutenticacao();

    function lidarComAcesso(){

        autenticar({email, password});

    }
    


    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar filmes e séries</p>
                <Input icon={FiMail} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" icon={FiLock} placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
                <Button title="Entrar" onClick={lidarComAcesso} />
                <Link to="/cadastrar">
                    <BotaoDeTexto title="Criar conta" />
                </Link>
                    

            </Form>
            <PlanoDeFundo/>
        </Container>
    );
}