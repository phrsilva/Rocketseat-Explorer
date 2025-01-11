import styled from "styled-components";

export const Container = styled.textarea`

   
    height: 27.4rem;
    resize: none;
    border-radius: 0.8rem;
    border: none;
    padding: 1.6rem;
    background-color: ${({ theme }) => theme.CORES.FUNDO_CLARO};

    color: ${({ theme }) => theme.CORES.TEXTO_CINZA};
    font-size: 1.6rem;

`;