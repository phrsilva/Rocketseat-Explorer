import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { TextArea } from "../../components/textArea";
import { Container, Form } from "./styles";


export function New() {
    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>Criar notas</h1>
                        <a href="/">Voltar</a>

                    </header>
                    <Input
                    placeholder="Título"
                    />
                    <TextArea >
                        

                    </TextArea>
                </Form>

            </main>
        </Container>
    );
}