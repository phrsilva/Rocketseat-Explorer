import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    height: 10.5rem;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    display: flex;
    justify-content: space-between;

    padding: 0 4rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 1.6rem;
        line-height: 2.4rem;
    }

    > div span {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > div strong {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }



`;

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 3.6rem;
        
    }
`;