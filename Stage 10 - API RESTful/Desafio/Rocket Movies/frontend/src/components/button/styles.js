import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.CORES.ROSA_PRINCIPAL};
    border: none;
    border-radius: 0.8rem;
    color: ${({ theme }) => theme.CORES.FUNDO_ESCURO};
    font-size: 1.6rem;
    font-weight: 500;
    cursor: pointer;
    align-items: center;
    transition: filter 0.2s;
    &:hover {
        filter: brightness(0.9);
    }



    > svg {
        margin-right: 0.8rem;
        color: ${({ theme }) => theme.CORES.FUNDO_ESCURO};
        
    }
`;