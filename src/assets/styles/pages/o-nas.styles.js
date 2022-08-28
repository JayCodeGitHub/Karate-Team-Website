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
    color: white;
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

export const AboutSection = styled.section`
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
    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({ theme }) => theme.primary};
        font-size: ${({ theme }) => theme.font.size.m};
        ${({ theme }) => theme.mq.desktop} {
            grid-column-start: ${({ order }) => (order % 2 === 0 ? '1' : '2')};
            grid-row: 1 / span 2;
            margin: 0;
            font-size: ${({ theme }) => theme.font.size.m};
        }
    }
    img {
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
    }
    p {
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
    }
`;

export const BackgroundPhotoSection = styled.section`
    width: 100%;
    height: 70vh;
    border-radius: 25px;
    overflow: hidden;
    margin: 20vw 0;
    ${({ theme }) => theme.mq.desktop} {
        margin: 0;
    }
    div {
        width: 100%;
        height: 100%;
        background-image: url(${({ background }) => background});
        background-attachment: fixed;
        background-position: center ;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: relative;
        padding: 0 5%;
        ${({ theme }) => theme.mq.desktop} {
            padding: 0 20%;
        }
        &:before {
            content: '';
            z-index: 1;
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: black;
            opacity: 0.5;
        }
        p {
            z-index: 2;
            font-size: ${({ theme }) => theme.font.size.s};
        }
}
`;
