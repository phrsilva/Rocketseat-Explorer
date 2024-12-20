import styled from "styled-components";

export const Container = styled.textarea`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 63rem;
    height: 10rem;
    background-color: ${({ theme }) => theme.CORES.FUNDO_CLARO};

`;