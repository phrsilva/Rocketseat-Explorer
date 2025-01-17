import { useState } from "react";
import { Container, Conteudo, Form, Tags, Botoes } from "./styles";
import { Header } from "../../components/header";
import { BotaoDeTexto } from "../../components/textButton";
import { FiArrowLeft, FiStar } from "react-icons/fi";
import { MdMovie } from "react-icons/md";
import { Button } from "../../components/button";
import { AreaDeTexto } from "../../components/AreaDeTexto";
import { Input } from "../../components/input";
import { useNavigate } from "react-router-dom";


export function Novo() {

    const navigate = useNavigate();
    
    const [tags, setTags] = useState([]);
    const [novaTag, setNovaTag] = useState("");

    function adicionarTag() {
        setTags(estadoAnterior => [...estadoAnterior, novaTag]);
        setNovaTag("");
    }
    
    return (
        <Container>
            <Header />
            <Conteudo> 

                <BotaoDeTexto icon={FiArrowLeft} title="Voltar" onClick={() => navigate(-1)}/>
                <h2>Novo Filme</h2>

                <Form>
                    <Input icon={MdMovie} placeholder="Nome do Filme"/>
                    <Input icon={FiStar} placeholder="Sua nota de 0 a 5"/>
                    <AreaDeTexto placeholder="Análise do Filme" /> 
                </Form>

                <Tags>
                    <h2>Marcadores</h2>
                    <div>
                        <button>Ação</button>
                        <button>Novo marcador</button>
                    </div>

                </Tags>


                <Botoes>
                    
                    <Button title={"Excluir filme"}></Button>
           
                    <Button title={"Salvar alterações"}></Button>

                </Botoes>

            </Conteudo>
        </Container>
    );
}