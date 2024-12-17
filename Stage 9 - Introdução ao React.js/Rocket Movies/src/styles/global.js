import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Slab', serif;
        -webkit-font-smoothing: antialiased;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.CORES.FUNDO_ESCURO};
        color: ${({ theme }) => theme.CORES.TEXTO_BRANCO};
        font-size: 1.6rem;
    }

    a {
        
        text-decoration: none;
    }

    a, button {
        cursor: pointer; 
        transition: filter 0.2s;
    }

    button {
        border: none;
        background: none;
    }

    a:hover, button:hover {
        filter: brightness(0.9);
    }
`;