import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { usarAutenticacao } from "../../hooks/aut";
import { Container, Header, Avatar, Form } from "./styles";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { BotaoDeTexto } from "../../components/textButton";
import {FiArrowLeft, FiCamera, FiMail, FiLock, FiUser} from "react-icons/fi"
export const Perfil = () => {

    const { user, atualizarPerfil } = usarAutenticacao();

    const navigate = useNavigate();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");


    function lidarComAtualizacao(e) {
        
        const user = {
            name,
            email,
            password: currentPassword,
            newPassword: newPassword
        }
        
        e.preventDefault();

       atualizarPerfil({user});
    }
    
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


                <Input icon={FiUser} 
                type="text" 
                placeholder="Nome" 
                value={name}
                onChange={(e) => setName(e.target.value)}                
                />
                <Input icon={FiMail} 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </Form>

            <Form>
                <Input icon={FiLock} type="password" placeholder="Senha atual" onChange={(e) => setCurrentPassword(e.target.value)} />
                <Input icon={FiLock} type="password" placeholder="Nova Senha" onChange={(e) => setNewPassword(e.target.value)} />
                
                
                <Button title={"Salvar alterações"} onClick={lidarComAtualizacao}> </Button>

            </Form>



        </Container>

    );
}