import styled from 'styled-components';

export const Wrapper = styled.main` 
    background-color: ${({ theme }) => theme.secondary};
    margin-top: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 8px 20px;
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 10px 10vw 10px 10vw;
    }
`;

export const Header = styled.header`
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.font.size.m};
    margin: 7vw 0;
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.m};
        margin: 2.5vw 0;
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        font-size: ${({ theme }) => theme.font.size.l};
    }
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.white};
    margin: 2vw 0;
    font-size: ${({ theme }) => theme.font.size.xs};
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.s};
    }
`;

export const InstructorSection = styled.section`
    width: 100%;
    ${({ theme }) => theme.mq.desktop} {
        height: 35vw;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(5, 1fr);
        margin: 100px 0;
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        margin: 50px 0;
    }
`;

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.primary};
    ${({ theme }) => theme.mq.desktop} {
        grid-column-start: ${({ order }) => (order % 2 === 0 ? '1' : '2')};
        grid-row: 1 / span 2;
        margin: 0;
        font-size: ${({ theme }) => theme.font.size.m};
    }
`;

export const Description = styled.p`
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.font.size.xs};
    margin: 25px 0;
    ${({ theme }) => theme.mq.desktop} {
        grid-column-start: ${({ order }) => (order % 2 === 0 ? '1' : '2')};
        grid-row: 3 / span 3;
        padding: 0 50px;
        margin: 0;
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        font-size: ${({ theme }) => theme.font.size.s};
    }
`;

export const Photo = styled.img`
    width: 100%;
    border: solid 2px red;
    border-radius: 15px;
    ${({ theme }) => theme.mq.desktop} {
        margin: auto;
        grid-column-start: ${({ order }) => (order % 2 === 0 ? '2' : '1')};
        grid-row: 1 / span 5;
        width: 95%;
        height: auto;
        max-height: 100%;
        object-fit: cover;
    }
`;
