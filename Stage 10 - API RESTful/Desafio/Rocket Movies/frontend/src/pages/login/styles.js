import styled from "styled-components";
import bgImg from "../../assets/bgImg.png";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;

`;

export	const Form = styled.form`
    padding: 0 10rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;    
    text-align: center;

    > h1 {
        font-size: 4.8rem;
        color: ${({ theme }) => theme.CORES.ROSA_PRINCIPAL};
    }



    > p {
        font-size: 1.6rem;
        margin: 0.8rem auto 4.8rem;


    }

    > a {
        margin-top: 2.2rem;
    }

    
`;

export const PlanoDeFundo = styled.div`
   flex: 1;
   background: url(${bgImg}) no-repeat center center;
   background-size: cover;


`;