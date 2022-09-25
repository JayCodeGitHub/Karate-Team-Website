import styled from 'styled-components';
import Icon from '../Icon/Icon';

export const OuterWrapper = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.secondary};
    border-bottom: solid 2px ${({ theme }) => theme.grey};
    padding: 8px 20px;
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 10px 10vw 10px 10vw;
    }
`;

export const StyledLogo = styled.img`
    z-index: 100;
    height: 70px;
    width: 70px;
    border-radius: 100%;
    cursor: pointer;
    ${({ theme }) => theme.mq.desktop} {
        display: ${({ isMobile }) => (isMobile ? 'none' : 'intitail')}
    }
`;

export const BurgerWrapper = styled.button`
    display: flex;
    width: 3rem;
    height: 3rem;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
    ${({ theme }) => theme.mq.desktop} {
        display: none;
    }
`;

export const StyledBurger = styled.div`
    transition: background-color .15s .05s ease-in-out;
    background-color: ${({ isOpen, theme }) => (isOpen ? 'transparent' : theme.white)};
    width: 3rem;
    height: 0.2rem;
    border: none;
    padding: 0;
    &:before {
        content: '';
        width: 3rem;
        height: 0.2rem;
        background-color: white;
        display: block;
        transition: transform .15s .05s ease-in-out;
        transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-1rem')}) rotate(${({ isOpen }) => (isOpen ? '45deg' : '0deg')});
    }
    &:after {
        content: '';
        width: 3rem;
        height: 0.2rem;
        background-color: white;
        display: block;
        transition: transform .15s .05s ease-in-out;
        transform: translateY(${({ isOpen }) => (isOpen ? '-0.2rem' : '0.8rem')}) rotate(${({ isOpen }) => (isOpen ? '-45deg' : '0deg')});
    }
`;

export const Wrapper = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    background-color: ${({ theme }) => theme.secondary};
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: -1000;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
        display: none;
    }
    ${({ theme }) => theme.mq.desktop} {
        transform: translateY(0);
        position: static;
        background-color: transparent;
        display: flex;
        width: 100%;
        height: unset;
        flex-direction: row;
        img {
            display: block;
        }   
    }
`;

export const StyledNavigation = styled.nav`
    ul {
        height: 50vh;
        display: flex;
        list-style: none;
        text-align: center;
        flex-direction: column;
        margin-bottom: 100px;
        justify-content: space-around;
        padding: 0;
        cursor: pointer;
    }
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.white};
        font-size: ${({ theme }) => theme.font.size.s};
        transition: color .12s  ease-in-out;
        &:hover {
            color: ${({ theme }) => theme.primary};
        }
        &.active {
            color: ${({ theme }) => theme.primary};
        }
    }
    ${({ theme }) => theme.mq.desktop} {
        margin-right: auto;
        ul {
            flex-direction: row;
            padding: 0 40px;
            height: auto;
            margin: 0;
        }
        a {
            margin: 0 15px;
            font-size: ${({ theme }) => theme.font.size.xs};
        }
    }
`;

export const StyledIcon = styled(Icon)`
    margin: 0 15px;
    cursor: pointer;
`;
