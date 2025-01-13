import styled from "styled-components";

export const Container = styled.section`
    max-width: 113.7rem;
    justify-content: center;
    margin: 2rem auto;
    
    background-color: ${({ theme }) => theme.CORES.FUNDO_CLARO};
    border-radius: 0.8rem;
    padding: 2.4rem 3.2rem;

    > h2 {
        color: ${({ theme }) => theme.CORES.TEXTO_BRANCO};
        font-size: 2rem;
    }

    > p {
        color: ${({ theme }) => theme.CORES.TEXTO_CINZA};
        font-size: 1.6rem;
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.8rem;

    }
`;