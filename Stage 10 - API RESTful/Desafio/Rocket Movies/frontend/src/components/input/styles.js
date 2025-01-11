import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 63rem;

    > input {
        
        flex: 1;
        background: transparent;
        border: none;
        border-radius: 0.8rem;
        height: 4.6rem;
        font-size: 1.6rem;
        background-color: ${({ theme }) => theme.CORES.FUNDO_CLARO};
        color: ${({ theme }) => theme.CORES.TEXTO_BRANCO};
        padding: 0 1.6rem 0 4.6rem;
    }

        &::placeholder {
            color: ${({ theme }) => theme.CORES.TEXTO_CINZA};
        }

        &::focus {
            outline: none;
        }

    > svg {
        position: absolute;
        margin: 0 1.6rem;
        color: ${({ theme }) => theme.CORES.TEXTO_CINZA};
        font-size: 2rem;
    }

`;

    


