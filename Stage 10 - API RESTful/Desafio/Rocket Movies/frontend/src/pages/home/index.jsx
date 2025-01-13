import { Routes, Route } from "react-router-dom";
import { Container } from "./styles";
import { Section } from "../../components/section";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { FiPlus, FiStar } from "react-icons/fi";
import { Tags } from "../../components/tags";
import { Link } from "react-router-dom";


export const Home = () => {
    return (
        <Container>
            <Header />
            
            <div>
                
                <h2>Meus filmes</h2>
                <Button icon={FiPlus} title="Novo Filme"></Button>
                

            </div>
            
            <Section title={"Interestellar"}>

                <FiStar color="#FF859B" fill="#FF859B"/>
                <FiStar color="#FF859B" fill="#FF859B"/>

                <FiStar color="#FF859B" fill="#FF859B"/>

                <FiStar color="#FF859B" fill="#FF859B"/>

                <FiStar color="#FF859B" fill="#FF859B"/>


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
                <FiStar color="#FF859B" fill="#FF859B"/>
                <FiStar color="#FF859B" fill="#FF859B"/>

                <FiStar color="#FF859B" fill="#FF859B"/>

                <FiStar color="#FF859B" fill="#FF859B"/>

                <FiStar color="#FF859B" fill="#FF859B"/>

                <p>Matrix (1999)</p>
                <Tags><span>Ação</span></Tags>
                <Tags><span>Aventura</span></Tags>
            </Section>
            <Section title={"Star Wars"}>
                <FiStar color="#FF859B" fill="#FF859B"/>

                <FiStar color="#FF859B" fill="#FF859B"/>

                <FiStar color="#FF859B" fill="#FF859B"/>

                <FiStar color="#FF859B" fill="#FF859B"/>

                <FiStar color="#FF859B" fill="#FF859B"/>

                <p>Star Wars (1977)</p>
                <Tags><span>Aventura</span></Tags>
                <Tags><span>Ficção Científica</span></Tags>
            </Section>
            
            

        </Container>
        
    );
}