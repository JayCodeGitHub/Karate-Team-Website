import styled from 'styled-components';

export const Wrapper = styled.main`
    background-color: ${({ theme }) => theme.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 8px 20px;
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 10px 10vw 10px 10vw;
    }
`;

export const Header = styled.h1`
    margin: 0;
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.font.size.m};
    margin: 7vw 0;
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.l};
        margin: 2.5vw 0;
    }
`;

export const PhotosWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;

export const Photo = styled.img`
    height: auto;
    border: solid 2px red;
    border-radius: 15px;
    margin: 10px 0;
    object-fit: cover;
    width: 90vw;
    height: 67.5vw;
    ${({ theme }) => theme.mq.desktop} {
        width: 30vw;
        height: 22.5vw;
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        width: 25vw;
        height: 18vw;
    }
`;

export const GaleryLink = styled.a`
    text-decoration: none;
    width: 70vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.white};
    h2 {
        font-size: ${({ theme }) => theme.font.size.xs};
        margin: 7vw 0;
    }
    ${({ theme }) => theme.mq.desktop} {
        h2 {
            font-size: ${({ theme }) => theme.font.size.s};
            margin: 5vw 0;
        }
    }
`;
