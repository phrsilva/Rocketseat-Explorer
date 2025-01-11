import { Container, Profile } from "./styles";
import { Input } from "../input";
import { FiSearch } from "react-icons/fi";

export function Header() {
    return (
        <Container>
            
            <h1>RocketMovies</h1>

            <Input icon={FiSearch} placeholder="Pesquisar pelo título"></Input>

            <Profile>
                <div>
                    <span>
                        Pedro Henrique
                    </span>
                    <a href="#">Sair</a>
                </div>
                    
                    <img src="https://github.com/phrsilva.png" alt="Foto de perfil" />

            </Profile>

            

        </Container>
    );
}