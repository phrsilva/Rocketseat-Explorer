import { useNavigate } from "react-router-dom";
import { Container, Header, Avatar, Form } from "./styles";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { BotaoDeTexto } from "../../components/textButton";
import {FiArrowLeft, FiCamera, FiMail, FiLock, FiUser} from "react-icons/fi"
export const Perfil = () => {

    const navigate = useNavigate();
    
    return (
        <Container>
            <Header>
                <BotaoDeTexto icon={FiArrowLeft} title="Voltar" onClick={() => navigate(-1)}/>
            </Header>
                     
            <Form>

                <Avatar>
                        <img src="https://github.com/phrsilva.png" alt="Foto de perfil" />
                        <label htmlFor="avatar">
                        <FiCamera />
                        <input 
                        id="avatar"
                        type="file" />
                    </label>
                </Avatar>


                <Input icon={FiUser} type="text" placeholder="Nome" />
                <Input icon={FiMail} type="email" placeholder="Email" />
            </Form>

            <Form>
                <Input icon={FiLock} type="password" placeholder="Senha atual" />
                <Input icon={FiLock} type="password" placeholder="Nova Senha" />
                <Button title={"Salvar alterações"}> </Button>

            </Form>

        </Container>
    );
}