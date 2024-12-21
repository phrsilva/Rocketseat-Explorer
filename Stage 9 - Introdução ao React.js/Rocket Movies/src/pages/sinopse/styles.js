import styled from "styled-components";

export const Container = styled.div``;

export const Conteudo = styled.div`
    max-width: 113.7rem;
    margin: 0 auto;
    
`;

export const Avaliacao = styled.div`
    width: 50.8rem;
    height: 13.5rem;
    padding: 2.4rem;

    p {
        color: ${({ theme }) => theme.CORES.TEXTO_CINZA};

        > span {
            font-weight: 500;
            margin-right: .8rem;
            padding: .8rem;
            align-items: center;
        }
    }

    img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.CORES.TEXTO_CINZA};
    }


`;

export const Marcadores = styled.div`
    display: flex;
    flex-direction: row;
    gap: .2rem;
    margin-bottom: 2.4rem;

    span {
        background-color: ${({ theme }) => theme.CORES.FUNDO_CLARO};
        color: ${({ theme }) => theme.CORES.TEXTO_CINZA};
        border-radius: 0.8rem;
        padding: 1.2rem 1.6rem;
        font-size: 1.4rem;
    }
    `;

export const Resumo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2.4rem;
    padding: 2.4rem 1.2rem;

    text-align: justify;

`;

