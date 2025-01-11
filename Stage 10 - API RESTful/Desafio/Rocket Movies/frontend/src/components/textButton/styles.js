import styled from "styled-components";

export const Container = styled.button`
    background: none;
    color: ${({ theme, isActive }) => isActive ? theme.CORES.CINZA : theme.CORES.ROSA_PRINCIPAL};
    border: none;
    font-size: 2rem;
    font-weight: 500;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    gap: 1.8rem;
    transition: filter 0.2s;
    &:hover {
        filter: brightness(0.9);
    }

    > svg {
        margin-right: 0.8rem;
    }

`;