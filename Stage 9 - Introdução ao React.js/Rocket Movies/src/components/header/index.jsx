import { Container } from "./styles";
import { Input } from "../input";

export function Header() {
    return (
        <Container>
            <div>
                <h1>Rocket Movies</h1>
                <Input></Input>
            </div>
        </Container>
    );
}