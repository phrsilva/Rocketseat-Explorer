import { Container } from "./styles"
import { Button } from "../../components/button"

export function Details() {
  return (
    <Container>
      <h1>rocketnotes</h1>
      <p>um aplicativo de anotações para o dia-a-dia</p>
      <Button title="Cadastrar" loading></Button>


    </Container>
  ); 
}