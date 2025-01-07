import {RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";
import { useAuth } from '../../../../backend/src/hooks/auth';
export function Header() {
    const { signOut } = useAuth();
    return (
        <Container>
            <Profile to ="/profile" >
                <img src="https://github.com/phrsilva.png" alt="Foto de perfil" />
                <div>
                    <span>Bem-vindo,</span>
                    <strong>Pedro Henrique</strong>
                </div>
            </Profile>
            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}