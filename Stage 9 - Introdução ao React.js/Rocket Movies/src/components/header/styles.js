import styled from "styled-components";

export const Container = styled.header`


    grid-area: header;
    height: 7.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.CORES.FUNDO_CLARO};
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 3.2rem 3rem;
    margin-bottom: 6rem;

    gap: 6.4rem;

    > h1 {
        color: ${({ theme }) => theme.CORES.ROSA_PRINCIPAL};
        font-size: 2rem;
    }
    
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;
    > img {
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.CORES.TEXTO_CINZA};
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 1.6rem;
        line-height: 2.4rem;
    }

    > div span {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.CORES.TEXTO_BRANCO};
    }

    > div a {
        
        font-size: 1.4rem;
        color: ${({ theme }) => theme.CORES.TEXTO_CINZA};
        text-decoration: none;
        text-align: right;
        
        

    }



`;