import { Container, Links } from "./styles"
import { Header } from "../../components/header";
import { Button } from "../../components/button"
import { Section } from "../../components/section";
import { Tags } from "../../components/tags";
import { ButtonText } from "../../components/buttonText";

export function Details() {
  return (
    <Container>
      <Header />
      <ButtonText title="Excluir nota" />
      <Section title="Links úteis">
        <Links>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tags title="React" />
        <Tags title="React Native" />
        
      </Section>

      <Button title="Cadastrar" loading></Button>
    </Container>
  ); 
}