import styled from "styled-components";

export const Container = styled.button`
    height: 4.8rem;
    display: inline;
    margin-top: 2rem;
    margin-right: .8rem;
    padding: 0 1.6rem;

   

    background-color: ${({ theme }) => theme.CORES.FUNDO_ESCURO};
    
    border: none;
    border-radius: 0.8rem;
    
    
    color: ${({ theme }) => theme.CORES.TEXTO_CINZA};
    font-size: 1.6rem;
    cursor: pointer;

    align-items: center;
    transition: filter 0.2s;
    &:hover {
        filter: brightness(0.9);
    }
`;