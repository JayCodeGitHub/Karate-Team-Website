import styled from 'styled-components';

export const AboutSection = styled.section`
    width: 100%;
    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({ theme }) => theme.primary};
        font-size: ${({ theme }) => theme.font.size.m};
    }
    img {
        width: 100%;
        height: 100%;
        border: solid 2px red;
        border-radius: 15px;
    }
    p {
        display: flex;
        justify-content: center;
        color: ${({ theme }) => theme.white};
        font-size: ${({ theme }) => theme.font.size.xs};
        margin: 25px 0;
        text-indent: 1.25rem;
    }
    ${({ theme }) => theme.mq.desktop} {
        height: 35vw;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(5, 1fr);
        h1 {
            grid-column-start: ${({ order }) => (order % 2 === 0 ? '1' : '2')};
            grid-row: 1 / span 2;
            margin: 0;
            font-size: ${({ theme }) => theme.font.size.m};
        }
        img {
            margin: auto;
            grid-column-start: ${({ order }) => (order % 2 === 0 ? '2' : '1')};
            grid-row: 1 / span 5;
            width: 38vw;
            height: 24vw;
            max-height: 100%;
            object-fit: cover;
        }
        p {
            grid-column-start: ${({ order }) => (order % 2 === 0 ? '1' : '2')};
            grid-row: 3 / span 3;
            padding: 0 50px;
            margin: 0;
            text-indent: 2.5rem;
        }
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        margin: 50px 0;
        p {
            font-size: ${({ theme }) => theme.font.size.s};
        }
    }
`;
