import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.CORES.FUNDO_CLARO};


    padding: 6.4rem 14.4rem 6.4rem 14.4rem;

`;


export const Avatar = styled.div`
    position: relative;
    margin: -11.2rem auto 3.2rem;
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;

    > img {
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 7px;
        right: 7px;
        cursor: pointer;
        background-color: ${({ theme }) => theme.CORES.ROSA_PRINCIPAL};

        input {
            display: none;
        }

        svg {
            width: 2.4rem;
            height: 2.4rem;
            color: ${({ theme }) => theme.CORES.FUNDO_ESCURO};

        }
    }
    
`;

export const Form = styled.form`
        display: flex;
        flex-direction: column;
        gap: .8rem;
        margin: 0 auto 2.4rem;
        width: 35rem;

        > button {
            margin-top: 2.4rem;
        }


        > svg {
            color: ${({ theme }) => theme.CORES.ROSA_PRINCIPAL};
            cursor: pointer;
            font-size: 2rem;
        }


`;