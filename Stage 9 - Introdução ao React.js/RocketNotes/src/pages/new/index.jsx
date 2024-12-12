import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { TextArea } from "../../components/textArea";
import { NoteItem } from "../../components/noteItem";
import { Section } from '../../components/section'
import { Button } from "../../components/button";
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
                    <TextArea ></TextArea>

                    <Section title="Links úteis">
                        <NoteItem isNew placeholder="Novo link" />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem isNew placeholder="Novo marcador" />

                        </div>
                    </Section>

                    <Button title="Salvar" />

                </Form>

            </main>
        </Container>
    );
}