import { useState } from "react";

import { Container , Form, Avatar} from "./style";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";

import { useAuth } from "../../../../backend/src/hooks/auth";

export function Profile() {

    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState()
    const [newPassword, setNewPassword] = useState()
   

    async function handleUpdate() {
        const user = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        }
        await updateProfile({user});
    }


    return (
        <Container>
            <header>
                <Link to="/"><FiArrowLeft /></Link>
            </header>
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

                <Input 
                placeholder="Nome"
                type="text"
                icon={FiUser}
                value={name}
                onChange={e => setName(e.target.value)}
                />

                <Input 
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                value={email}
                onChange={e => setEmail(e.target.value)}
                />

                <Input 
                placeholder="Senha Atual"
                type="password"
                icon={FiLock}
                onChange={e => setOldPassword(e.target.value)}

                />

                <Input
                placeholder="Nova Senha"
                type="password"
                icon={FiLock}
                onChange={e => setNewPassword(e.target.value)}


                />

                <Button title="Salvar" onClick={handleUpdate}/>

            </Form>
        </Container>
    );
}