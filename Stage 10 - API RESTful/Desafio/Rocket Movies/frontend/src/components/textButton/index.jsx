import { Container } from "./styles";

export function BotaoDeTexto ({ icon: Icon, title, isActive = false, ...rest}) {
    return (
        <Container
        type = "button"
        isActive = {isActive}
        {...rest}
        >
            {Icon && <Icon size={20} />}
            {title}
        </Container>
    )
}