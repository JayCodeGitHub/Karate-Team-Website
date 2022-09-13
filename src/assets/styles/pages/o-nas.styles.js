import styled, { keyframes } from 'styled-components';

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
    color: white;
`;

const Intro = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const Header = styled.header`
    animation-name: ${Intro};
    animation-duration: 1s;
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.font.size.m};
    margin: 10vw 0;
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.m};
        margin: 2.5vw 0;
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        font-size: ${({ theme }) => theme.font.size.l};
    }
`;

export const Paragraph = styled.p`
    animation-name: ${Intro};
    animation-duration: 1s;
    color: ${({ theme }) => theme.white};
    margin: 10vw 0;
    font-size: ${({ theme }) => theme.font.size.xs};
    ${({ theme }) => theme.mq.desktop} {
        margin: 2vw 0;
        font-size: ${({ theme }) => theme.font.size.s};
    }
`;
