import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { usarAutenticacao } from "../../hooks/aut";
import { Container, Header, Avatar, Form } from "./styles";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { BotaoDeTexto } from "../../components/textButton";
import {FiArrowLeft, FiCamera, FiMail, FiLock, FiUser} from "react-icons/fi"
import avatarProvisorio from "../../assets/avatarProvisorio.svg";
import { api } from "../../../services/api";

export const Perfil = () => {

    const { user, atualizarPerfil } = usarAutenticacao();

    const navigate = useNavigate();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [currentPassword, setCurrentPassword] = useState("");
    const avatarURL = user.avatar ? `${user.avatar}` : avatarProvisorio;
    const [newPassword, setNewPassword] = useState("");
    const [previaAvatar, setPreviaAvatar] = useState(null);
    const [avatar, setAvatar] = useState(user.avatar);




    function mudarAvatar(e) {
        const file = e.target.files[0];
        setPreviaAvatar(file);

        const previaPerfil = URL.createObjectURL(file);
        setAvatar(previaPerfil);
    }


    async function lidarComAtualizacao(e) {
        // avaliar comportamento do avatar e previa avatar
        const user = {
            name,
            email,
            password: currentPassword,
            newPassword: newPassword,
            avatar: previaAvatar
        }

        
        e.preventDefault();

       await atualizarPerfil({user, previaAvatar});
       navigate(-1)
    }
    
    return (
        <Container>
            <Header>
                <BotaoDeTexto icon={FiArrowLeft} title="Voltar" onClick={() => navigate(-1)}/>
            </Header>
                     
            <Form>

                <Avatar>
                        <img src={previaAvatar ? avatar : avatarURL} alt="Foto de perfil" />
                        <label htmlFor="avatar">
                        <FiCamera />
                        <input 
                        id="avatar"
                        type="file"
                        onChange={mudarAvatar} />
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