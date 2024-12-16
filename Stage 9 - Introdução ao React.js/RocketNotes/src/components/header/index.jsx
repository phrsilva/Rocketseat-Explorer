import {RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <Container>
            <Profile to ="/profile" >
                <img src="https://github.com/phrsilva.png" alt="Foto de perfil" />
                <div>
                    <span>Bem-vindo,</span>
                    <strong>Pedro Henrique</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}