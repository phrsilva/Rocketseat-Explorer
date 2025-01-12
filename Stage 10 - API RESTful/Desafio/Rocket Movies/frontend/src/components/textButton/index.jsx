import { Container } from "./styles";

export function BotaoDeTexto ({ icon: Icon, title, $isactive = "false", ...rest}) {
    return (
        <Container
        type = "button"
        $isactive = {$isactive}
        {...rest}
        >
            {Icon && <Icon size={20} />}
            {title}
        </Container>
    )
}