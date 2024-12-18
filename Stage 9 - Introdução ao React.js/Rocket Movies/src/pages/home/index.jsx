import { Routes, Route } from "react-router-dom";
import { Container } from "./styles";
import { Section } from "../../components/section";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { FiPlus, FiStar } from "react-icons/fi";
import { Tags } from "../../components/tags";


export const Home = () => {
    return (
        <Container>
            <Header />
            
            <div>
                
                <h2>Meus filmes</h2>
                <Button icon={FiPlus} title="Novo Filme"></Button>

            </div>
            
            <Section title={"Interestellar"}>

                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar />

                <p>Interestellar (2014)</p>
                <Tags>
                    <span>Ação</span>
                </Tags>
                <Tags>
                    <span>Aventura</span>
                </Tags>
                <Tags>
                    <span>Drama</span>
                </Tags>

            </Section>
            <Section title={"Matrix"}>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar />
                <p>Matrix (1999)</p>
                <Tags><span>Ação</span></Tags>
                <Tags><span>Aventura</span></Tags>
            </Section>
            <Section title={"Star Wars"}>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar />
                <p>Star Wars (1977)</p>
                <Tags><span>Aventura</span></Tags>
                <Tags><span>Ficção Científica</span></Tags>
            </Section>
            <Section title={"Avatar"}>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar />
                <p>Avatar (2009)</p>
                <Tags><span>Aventura</span></Tags>
                <Tags><span>Ficção Científica</span></Tags>
            </Section>
            <Section title={"O Senhor dos Aneis: A Socieade do Anel"}>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar />
                <p>O Senhor dos Aneis: A Sociedade do Anel (2001)</p>
                <Tags><span>Aventura</span></Tags>
                <Tags><span>Fantasia</span></Tags>
            </Section>
            <Section title={"Star Trek"}>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar />
                <p>Star Trek (2009)</p>
                <Tags><span>Aventura</span></Tags>
                <Tags><span>Ficção Científica</span></Tags>
            </Section>
            <Section title={"Scott Pilgrim"}>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar />
                <p>Scott Pilgrim (2010)</p>
                <Tags><span>Aventura</span></Tags>
                <Tags><span>Comedia</span></Tags>
            </Section>
            <Section title={"O Senhor dos Aneis: As Duas Torres"}>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar />
                <p>O Senhor dos Aneis: As Duas Torres (2002)</p>
                <Tags><span>Aventura</span></Tags>
                <Tags><span>Fantasia</span></Tags>
            </Section>
            

        </Container>
        
    );
}