import styled from 'styled-components';
import Icon from 'components/Icon/Icon';

export const FooterWrapper = styled.footer`
    width: 100%;
    height: 400px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    background-color: ${({ theme }) => theme.secondary};
    border-top: solid 3px ${({ theme }) => theme.primary};
    ${({ theme }) => theme.mq.desktop} {
        height: 150px;
    }
`;

export const StyledNavigation = styled.nav`
    grid-column: 1 / span 2;
    grid-row: 1 / span 3;
    ul {
        width: 100%;
        height: 100%;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 0;
        flex-wrap: wrap;
        padding: 0 100px;
    }
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.primary};
        font-size: ${({ theme }) => theme.font.size.s};
    }
    ${({ theme }) => theme.mq.desktop} {
        grid-column: 1 / span 1;
        grid-row: 1 / span 4;
        ul {
            padding: 0 80px;
            flex-wrap: none;
        }
        a {
            font-size: ${({ theme }) => theme.font.size.xs};
        }
    }
`;

export const IconsWrapper = styled.div`
    padding: 0 25%;
    grid-column: 1 / span 2;
    grid-row: 4 / span 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    ${({ theme }) => theme.mq.desktop} {
        grid-column: 2 / span 1;
        grid-row: 1 / span 4;
    }
`;

export const StyledIcon = styled(Icon)`
    cursor: pointer;
`;

export const Author = styled.div`
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.font.size.xs};
    grid-column: 1 / span 2;
    grid-row: 5 / span 1;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
    ${({ theme }) => theme.mq.desktop} {
        grid-column: 1 / span 2;
        grid-row: 5 / span 1;
    }
`;
