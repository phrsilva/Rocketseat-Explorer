import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    width: 63rem;




    > input {
        width: 100%;
        border-radius: 0.8rem;
        height: 4.6rem;
        font-size: 1.6rem;
        background-color: ${({ theme }) => theme.CORES.FUNDO_CLARO};
        border: none;
        color: ${({ theme }) => theme.CORES.TEXTO_BRANCO};
        padding: 0 1.6rem;
    }

    > input::placeholder {
        color: ${({ theme }) => theme.CORES.TEXTO_CINZA};
    }

    > input::focus {
        outline: none;
    }

    > svg {
        color: ${({ theme }) => theme.CORES.TEXTO_CINZA};
    }

    

`;

