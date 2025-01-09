import { useState } from "react";

import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { TextArea } from "../../components/textArea";
import { NoteItem } from "../../components/noteItem";
import { Section } from '../../components/section'
import { Button } from "../../components/button";
import { Container, Form } from "./styles";
import { Link } from "react-router-dom";


export function New() {
    
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState('');


    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink]);
        setNewLink('');
    }

    function handleRemoveLink(link) {
        setLinks(prevState => prevState.filter(item => item !== link));
    }
    
    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>Criar notas</h1>
                        <Link to="/">Voltar</Link>

                    </header>
                    <Input
                    placeholder="Título"
                    />
                    <TextArea ></TextArea>

                    <Section title="Links úteis">
                        {
                            links.map((link, index) => (
                                <NoteItem
                                key={String(index)}
                                value={link}
                                onClick={()=>handleRemoveLink(link)}
                                />
                            ))
                        }
                        <NoteItem
                        isNew
                        placeholder="Novo link"
                        value={newLink}
                        onChange={e => setNewLink(e.target.value)}
                        onClick={handleAddLink} 
                        />
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