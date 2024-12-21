import { Container, Form, PlanoDeFundo } from "./styles";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";
import { BotaoDeTexto } from "../../components/textButton";
import { FiMail, FiLock } from "react-icons/fi";

export const Login = () => {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar filmes e séries</p>
                <Input icon={FiMail} placeholder="E-mail" />
                <Input type="password" icon={FiLock} placeholder="Senha" />
                <Button title="Entrar" />
                <BotaoDeTexto title="Criar conta" >
                    <Link to="/cadastrar" />
                </BotaoDeTexto>

            </Form>
            <PlanoDeFundo/>
        </Container>
    );
}