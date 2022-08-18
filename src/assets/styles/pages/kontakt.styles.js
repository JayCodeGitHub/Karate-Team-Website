import styled from 'styled-components';
import Icon from 'components/Icon/Icon';

export const Wrapper = styled.main`
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.white};
    padding: 5vw;
    display: grid;
    grid-template-columns: repeat(1, 1fr); 
    grid-template-rows: repeat(8, 1fr);
    ${({ theme }) => theme.mq.bigDesktop} {
        grid-template-columns: repeat(2, 1fr); 
        grid-template-rows: repeat(4, 1fr);
        padding: 5vw 12vw 5vw 12vw;
        min-height: 90vh;
    }
`;

export const SocialMediaIconsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
    grid-column: 1 / span 1;
    grid-row: 4 / span 1;
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 0 100px;
    }
`;

export const StyledMap = styled.iframe`
    width: 100%;
    height: 100%;
`;

export const MapWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 1 / span 1;
    grid-row: 5 / span 4;
    border-top: 3px white solid;
    border-left: none;
    ${({ theme }) => theme.mq.bigDesktop} {
        border-top: none;
        border-left: 3px white solid;
        grid-column: 2 / span 1;
        grid-row: 1 / span 4;
        padding: 60px;
    }
`;

export const ContactIconsWrapper = styled.div`
    grid-column: 1 / span 1;
    grid-row: 1 / span 3;
    display: flex;
    padding: 25px 0;
    min-height: 50vh;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    font-size: ${({ theme }) => theme.font.size.xxs};
    ${({ theme }) => theme.mq.bigDesktop} {
        grid-column: 1 / span 1;
        grid-row: 1 / span 3;
        padding: 50px 0;
        h2 {
            font-size: ${({ theme }) => theme.font.size.s};
        }
    }
`;

export const StyledIcon = styled(Icon)`
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.white};
        justify-content: center;
        align-items: center;
        display: flex;
    }
`;
