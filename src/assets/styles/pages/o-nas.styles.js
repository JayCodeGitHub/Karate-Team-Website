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

`;

export const Paragraph = styled.p``;

export const AboutSection = styled.section`
img {
    max-width: 80%;
}
`;

export const BackgroundPhotoSection = styled.section`
img {
    max-width: 80%;
}
`;
