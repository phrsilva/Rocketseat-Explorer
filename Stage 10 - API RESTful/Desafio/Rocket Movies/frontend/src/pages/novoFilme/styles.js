import styled from "styled-components";

export const Container = styled.div`

  
`;

export const Conteudo = styled.div`
    width: 100%;
    max-width: 113.7rem;
    margin: 0 auto;
    
    > h2 {
        margin-top: 2rem;
        font-size: 2rem;
        
    };


`;


export const Form = styled.form`
  display: grid;
  grid-template-areas: 
  "input input"
  "textarea textarea";
  gap: 2.4rem;
  margin-top: 2rem;

  > input {
    grid-area: input;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 4.6rem;
    background-color: ${({ theme }) => theme.CORES.FUNDO_CLARO};
    border-radius: 0.8rem;
    border: none;

  } 

  > textarea {
    grid-area: textarea;
    width: 113.7rem;

  }
`;

export const Tags = styled.div`

  margin-top: 2rem;

  > h2 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.CORES.TEXTO_CINZA};
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.CORES.FUNDO_CLARO};
    border-radius: 0.8rem;
    height: 8.8rem;
    margin: 1.6rem auto;
    padding: 1.6rem;
    gap: 2.4rem;
    align-items: center;
  
    button {
      background-color: ${({ theme }) => theme.CORES.FUNDO_ESCURO};
      border-radius: 0.8rem;
      height: 4.8rem;
      border: none;
      color: ${({ theme }) => theme.CORES.TEXTO_CINZA};
      font-size: 1.6rem;
      cursor: pointer;
      align-items: center;
      padding: 1.2rem 1.6rem;
      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.9);
      }

      &:last-child {
        background-color: transparent;
        border: 2px dashed ${({ theme }) => theme.CORES.ROSA_PRINCIPAL};
        &:hover {
            background-color: ${({ theme }) => theme.CORES.FUNDO_CLARO};
            color: ${({ theme }) => theme.CORES.TEXTO_BRANCO};
        }
      }

      
    }

    

}

`;


export const Botoes = styled.button`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 2.4rem;

    button:first-child {
        background-color: transparent;
        border: 1px solid ${({ theme }) => theme.CORES.ROSA_PRINCIPAL};
        color: ${({ theme }) => theme.CORES.ROSA_PRINCIPAL};

        &:hover {
            background-color: ${({ theme }) => theme.CORES.FUNDO_CLARO};
            color: ${({ theme }) => theme.CORES.TEXTO_BRANCO};
        }
    }



`;
