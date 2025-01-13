import { Container, Profile } from "./styles";
import { Input } from "../input";
import { FiSearch } from "react-icons/fi";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { usarAutenticacao } from "../../hooks/aut";


export function Header() {
    
    const { user } = usarAutenticacao();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : null;

    const navigate = useNavigate();

    
    
    return (
        <Container>
            
            <h1 onClick={() => navigate("/")}>RocketMovies</h1>

            <Input icon={FiSearch} placeholder="Pesquisar pelo título"></Input>

            <Profile>
                <div>
                    <span>
                        {user.name}
                    </span>
                    <a href="#">Sair</a>
                </div>
                    
                    <img src={avatarUrl} alt="Foto de perfil" onClick={() => navigate("/perfil")} />

            </Profile>

            

        </Container>
    );
}