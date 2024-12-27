import { Container, Links, Content } from "./styles"
import { Header } from "../../components/header";
import { Button } from "../../components/button"
import { Section } from "../../components/section";
import { Tags } from "../../components/tags";
import { ButtonText } from "../../components/buttonText";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>

        <ButtonText title="Excluir nota" />
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae incidunt, delectus non sunt quaerat architecto. Quam deleniti, nostrum saepe magni magnam delectus incidunt eum voluptas porro! Sequi soluta ex ipsam?</p>


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

        <Button title="Excluir nota" loading></Button>


        </Content>
      </main>
      

    </Container>
  ); 
}