import styled from 'styled-components';

export const Wrapper = styled.main`
    background-color: ${({ theme }) => theme.secondary};
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.white};
    flex-direction: column;
    padding: 8px 20px;
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 10px 10vw 10px 10vw;
    }
`;

export const HeroSection = styled.section`
    width: 100%;
    height: 100vh;
        background-image: url(${({ background }) => background});
        background-position: center ;
        background-size: cover;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: flex-start;
        text-align: center;
        position: relative;
        &:before {
            content: '';
            z-index: 1;
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: black;
            opacity: 0.5;
            align-self: center;
        }
    h1 {
        margin: 5%;
        z-index: 2;
        color: ${({ theme }) => theme.white};
        font-size: ${({ theme }) => theme.font.size.s};
        text-align: left;
        width: 90%;
    }
    a {
        z-index: 2;
        margin: 50px 10px;
        border-radius: 15px;
        padding: 20px 40px;
        color: ${({ theme }) => theme.white};
        font-size: ${({ theme }) => theme.font.size.xs};
        background-color: transparent;
        border: solid 3px red;
        text-decoration: none;
    }
    ${({ theme }) => theme.mq.desktop} {
        h1 {
            font-size: ${({ theme }) => theme.font.size.l};
            width: 65%;
        }
        a {
            margin: 50px 200px;
            font-size: ${({ theme }) => theme.font.size.s};
        }
        }
        ${({ theme }) => theme.mq.bigDesktop} {
            h1 {
                font-size: ${({ theme }) => theme.font.size.xl};
            }
        }
`;

export const AchivementsSection = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 70vh;
    h1 {
        margin: 0;
        padding: 0 10px;
        grid-column: 1 / span 2;
        display: flex;
        align-items: center;
        justify-content: flex-start;    
        font-size: ${({ theme }) => theme.font.size.m};
    }
    h2 {
        margin-top: 25px;
        grid-column: 1 / span 2;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        font-size: ${({ theme }) => theme.font.size.s};
    }
    div {
        padding-top: 10%;
        display: flex;
        align-content: flex-start;
        flex-wrap: wrap;
        h3 {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            &:before {
                content: '';
                width: 70%;
                height: 10px;
                display: block;
                border-radius: 10px;
                margin-right: 10px;
                background-image: linear-gradient(to right, ${({ theme }) => theme.primary}, ${({ theme }) => theme.tertiary} );
            }
        }
        h4 {
                padding: 0;
                margin: 0;
                font-size: ${({ theme }) => theme.font.size.xs};
            }
    }
    ${({ theme }) => theme.mq.desktop} {
        height: 50vh;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        h1 {
            grid-row: 1 / span 1;
            grid-column: 1 / span 2;    
            padding: 0 60px;
            font-size: ${({ theme }) => theme.font.size.m};
        }
        h2 {
            grid-row: 2 / span 3;
            grid-column: 1 / span 2;
            padding: 100px 40px;
        }
        div {
            grid-row: span 2 / auto;
            h4 {
                padding: 5px 15px;
                font-size: ${({ theme }) => theme.font.size.xs};
            }
        }
    }
`;

export const WindowsSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    h1 {
        margin: 50px 0;
        font-size: ${({ theme }) => theme.font.size.m};
    }
    div {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        img {
            width: 8rem;
            height: 8rem;
            margin: 100px 10px;
        }
        div {
            width: 90%;
            min-height: 60vh;
            margin: 10vw 0;
            padding: 10px;
            border-radius: 15px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            font-size: ${({ theme }) => theme.font.size.s};
            box-shadow: ${({ theme }) => theme.primary} 3px 1px 8px 0px, ${({ theme }) => theme.primary} -3px -1px 8px 0px;
        }
    }
    ${({ theme }) => theme.mq.desktop} {
        margin: 50px 0;
        div {
            align-items: flex-start;
            flex-direction: row;
            img {
                width: 6rem;
                height: 6rem;
                margin: 50px 10px;
            }
            div {
                font-size: ${({ theme }) => theme.font.size.xs};
                width: 25%;
                margin: 0;
                min-height: 40vh;
            }
        }
    }
`;
