import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Conteudo, Form, Tags, Botoes } from "./styles";
import { Header } from "../../components/header";
import { BotaoDeTexto } from "../../components/textButton";
import { FiArrowLeft, FiStar } from "react-icons/fi";
import { MdMovie } from "react-icons/md";
import { Button } from "../../components/button";
import { AreaDeTexto } from "../../components/AreaDeTexto";
import { Input } from "../../components/input";


export const Novo = () => {
    return (
        <Container>
            <Header />
            <Conteudo> 

                <BotaoDeTexto icon={FiArrowLeft} title="Voltar" />
                <h2>Novo Filme</h2>

                <Form>
                    <Input icon={MdMovie} placeholder="Nome do Filme"/>
                    <Input icon={FiStar} placeholder="Sua nota de 0 a 5"/>
                    <AreaDeTexto placeholder={"Sinopse do filme"}/> 
                </Form>

                <Tags>
                    <h2>Marcadores</h2>
                    <div>
                        <button>Ação</button>
                        <button>Novo marcador</button>
                    </div>

                </Tags>


                <Botoes>
                    {/* Botão de Excluir filme */}
                    <Button title={"Excluir filme"}></Button>
                    {/* Botao de Salvar filme */}
                    <Button title={"Salvar alterações"}></Button>

                </Botoes>

            </Conteudo>
        </Container>
    );
}