import { useState } from "react";
import { Container, Conteudo, Form, Tags, Botoes } from "./styles";
import { Header } from "../../components/header";
import { BotaoDeTexto } from "../../components/textButton";
import { FiArrowLeft, FiStar } from "react-icons/fi";
import { MdMovie } from "react-icons/md";
import { Button } from "../../components/button";
import { AreaDeTexto } from "../../components/AreaDeTexto";
import {FiPlus, FiX} from 'react-icons/fi'


import { Input } from "../../components/input";
import { useNavigate } from "react-router-dom";


export function Novo() {

    

         const navigate = useNavigate();
    
        const [tags, setTags] = useState([]); // Lista de tags estáticas
        const [novaTag, setNovaTag] = useState(""); // Nova tag sendo digitada
    
        // Adicionar uma nova tag
        function adicionarTag() {
            if (novaTag.trim() === "") return; // Evitar adicionar tags vazias
            setTags(estadoAnterior => [...estadoAnterior, novaTag]); // Adiciona nova tag
            setNovaTag(""); // Limpa o campo de entrada
        }
    
        // Remover uma tag
        function removerTag(index) {
            setTags(estadoAnterior => estadoAnterior.filter((_, i) => i !== index));
        }
    
        // Salvar alterações
        function salvarAlteracoes() {
            console.log("Tags para enviar ao backend:", tags); // Substitua pelo envio real
            // Aqui você pode enviar as tags para o backend usando uma requisição
        }
    
        return (
            <Container>
                <Header />
                <Conteudo> 
    
                    <BotaoDeTexto icon={FiArrowLeft} title="Voltar" onClick={() => navigate(-1)}/>
                    <h2>Novo Filme</h2>
    
                    <Form>
                        <Input icon={MdMovie} placeholder="Nome do Filme" />
                        <Input icon={FiStar} placeholder="Sua nota de 0 a 5" />
                        <AreaDeTexto placeholder="Análise do Filme" /> 
                    </Form>
    
                    <Tags>
                        <h2>Marcadores</h2>
                        <div>
                            {/* Renderizar tags estáticas */}
                            {tags.map((tag, index) => (
                                <span key={index} style={{ marginRight: "10px" }}>
                                    {tag}
                                    <button onClick={() => removerTag(index)} style={{ marginLeft: "5px" }}>
                                        <FiX />
                                    </button>
                                </span>
                            ))}
    
                            {/* Campo para adicionar nova tag */}
                            <div className="tags-input">
                                <input
                                    type="text"
                                    placeholder="Novo Marcador"
                                    value={novaTag}
                                    onChange={e => setNovaTag(e.target.value)}
                                />
                                <button onClick={adicionarTag}>
                                    <FiPlus />
                                </button>
                            </div>

                        </div>
                    </Tags>
    
                    <Botoes>
                        <Button title={"Excluir filme"} />
                        <Button title={"Salvar alterações"} onClick={salvarAlteracoes} />
                    </Botoes>
                </Conteudo>
            </Container>
        );
   
    
}

