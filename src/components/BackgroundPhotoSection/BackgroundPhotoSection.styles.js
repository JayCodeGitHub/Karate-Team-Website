import styled from 'styled-components';

export const BackgroundPhotoSection = styled.section`
    width: 100%;
    height: 40vh;
    border-radius: 25px;
    overflow: hidden;
    margin: 10vh 0;
    div {
        width: 100%;
        height: 100%;
        background-image: url(${({ background }) => background});
        background-attachment: fixed;
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
            font-size: ${({ theme }) => theme.font.size.xs};
        }
    }
    ${({ theme }) => theme.mq.desktop} {
        margin: 0;
        width: 100%;
        height: 70vh;
        div {
            background-position: center;
            p {
            z-index: 2;
            font-size: ${({ theme }) => theme.font.size.s};
        }
    }
    }
`;
