import { Container, Form, PlanoDeFundo } from "./styles";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";
import { BotaoDeTexto } from "../../components/textButton";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

export const Cadastrar = () => {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar filmes e séries</p>
                <Input icon={FiUser} placeholder="Nome"></Input>
                
                <Input icon={FiMail} placeholder="E-mail" />
                <Input type="password" icon={FiLock} placeholder="Senha" />
                <Input type="password" icon={FiLock} placeholder="Confirmar Senha"/>
                
                <Link to="/">
                    <Button title="Criar conta" />
                
                </Link>
               

            </Form>
            <PlanoDeFundo/>
        </Container>
    );
}