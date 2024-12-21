import { Container, Conteudo, Avaliacao, Marcadores, Resumo } from "./styles";
import { Header } from "../../components/header";
import { Tags } from "../../components/tags";
import { BotaoDeTexto } from "../../components/textButton";
import { FiArrowLeft, FiStar, FiClock } from "react-icons/fi";

export const Sinopse = () => {
    return (
        <Container>
            <Header />
            <Conteudo>
                <Avaliacao>
                    <BotaoDeTexto icon={FiArrowLeft} title="Voltar" />
                    <h2>O Senhor dos Anéis: As Duas Torres</h2>
                    <div className="note">
                        <FiStar color="#FF859B" fill="#FF859B" />
                        <FiStar color="#FF859B" fill="#FF859B" />
                        <FiStar color="#FF859B" fill="#FF859B" />
                        <FiStar color="#FF859B" fill="#FF859B" />
                        <FiStar color="#FF859B" fill="#FF859B" />
                    </div>
                    <p>
                        <img src="https://github.com/phrsilva.png" alt="Foto de Perfil" />
                        <span>por Pedro Henrique</span>
                        <FiClock></FiClock>
                        <span> às 18:53 de 21/12/2024</span>
                    </p>
                    <p>
                    </p>
                </Avaliacao>

                <Marcadores>
                    <Tags><span>Ação</span></Tags>
                    <Tags><span>Fantasia</span></Tags>                  
                </Marcadores>

                <Resumo>
                    <p>
                        Após tentar tirar o Anel de Frodo, Boromir é alvejado e morto por um grupo de orques, os Uruk-hai, mandados por Saruman. Eles capturam Merry e Pippin e começam a voltar para Isengard. Aragorn, Legolas e Gimli encontram o corpo de Boromir e lhe preparam um funeral no rio Anduin. O grupo então decide perseguir os orques e resgatar os hobbits. No Reino de Rohan, os orques são mortos pelos Cavaleiros de Rohan, liderados por Éomer. Merry e Pippin fogem para a Floresta de Fangorn, onde encontram Barbárvore, um ent, que os leva para sua casa na floresta. Aragorn, Legolas e Gimli rastreiam os hobbits até a Floresta de Fangorn, onde inesperadamente encontram Gandalf.

                        Gandalf explica que matou o Balrog, e que ele próprio também morreu na luta, mas que foi mandado de volta à Terra Média para completar sua missão e que agora se tornou Gandalf, o Branco, substituindo Saruman como chefe dos magos. Ele assegura que Merry e Pippin estão seguros e leva o grupo para Edoras, onde livra o Rei Théoden da influência maligna de Gríma Língua-de-Cobra. Théoden convoca os Rohirrim para defenderem o Abismo de Helm e atacarem Isengard.

                        Quando chegam em Isengard, encontram-na destruída e inundada pelos ents, com Saruman preso em sua torre. Théoden, Aragorn, Legolas, Gimli e Gandalf encontram Merry e Pippin relaxando nas ruínas, onde contam suas respectivas jornadas até ali. Em Orthanc, Gandalf oferece uma chance para que Saruman se junte ao lado do bem, mas Saruman recusa e Gandalf quebra-lhe o cajado. Ao saírem, Língua-de-Cobra atira um objeto duro e esférico para matar Gandalf, mas erra o alvo, e Pippin apodera-se do objeto. Gandalf decide guardá-lo, mas Pippin, curioso, o furta à noite. É revelado que o objeto é um palantír, uma pedra que Saruman usava para se comunicar com Sauron. Sauron vê Pippin, e pensa que ele está preso em Orthanc. Gandalf parte imediatamente com Pippin a Minas Tirith.
                    </p>
                </Resumo>

                
            </Conteudo>


        </Container>
    );
}