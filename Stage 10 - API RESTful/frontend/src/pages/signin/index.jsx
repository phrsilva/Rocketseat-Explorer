import { Container, Form, Background } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { FiMail, FiLock  } from "react-icons/fi";
import { Link } from "react-router-dom";


export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>RocketNotes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

                <Input type="text"
                placeholder="E-mail"
                icon={FiMail}
                />

                <Input type="password"
                placeholder="Senha"
                icon={FiLock}
                />

                <Button title={"Entrar"}/>
                <Link to="/register">Criar conta</Link>
                    
            </Form>

            <Background />  

        </Container>
    );
}