import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/header";
import { ButtonText } from "../../components/buttonText";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Input } from "../../components/input";
import { Section } from "../../components/section";
import { Note } from "../../components/note";
import { Link } from "react-router-dom";



export function Home() {
    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
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
                <Section title="Minhas notas">
                    <Note data = {{title: "React", tags: [{id: 1, name: "React"}, {id: 2, name: "React Native"}]}} />


                </Section>

            </Content>

            <NewNote to="/new">

                <FiPlus />
                Criar nota

            </NewNote>


        </Container>
    );
}
