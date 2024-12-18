import styled from "styled-components";

export const Container = styled.div`

    
    > div {
        max-width: 113.7rem;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 70%;

        > h2 {
            color: ${({ theme }) => theme.CORES.ROSA_PRINCIPAL};
            font-size: 2rem;
        }

        
      
    }

    



`;
