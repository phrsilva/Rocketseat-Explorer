import { Routes, Route } from "react-router-dom";
import { Container } from "./styles";
import { Header } from "../../components/header";
import { BotaoDeTexto } from "../../components/textButton";
import { FiArrowLeft } from "react-icons/fi";
import { Section } from "../../components/section";

export const Novo = () => {
    return (
        <Container>
            <Header />
            <BotaoDeTexto icon={FiArrowLeft} title="Voltar" />
            <h1>Novo Filme</h1>
            
        </Container>
    );
}