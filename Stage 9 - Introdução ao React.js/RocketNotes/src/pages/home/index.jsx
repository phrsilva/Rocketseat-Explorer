import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/header";
import { ButtonText } from "../../components/buttonText";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Input } from "../../components/input";


export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header>

            </Header>

            <Menu> 
                <li><ButtonText title="Todos" isActive /></li>
                
            </Menu>

            <Search>

                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>

            </Search>

            <Content>

            </Content>

            <NewNote>

                <FiPlus />
                Criar nota

            </NewNote>


        </Container>
    );
}
