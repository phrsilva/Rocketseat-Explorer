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
                    <Tags><span>tag</span></Tags>
                    <Tags><span>tag</span></Tags>                  
                </Marcadores>

                <Resumo>
                    <p>Sinopse</p>
                </Resumo>

                
            </Conteudo>


        </Container>
    );
}