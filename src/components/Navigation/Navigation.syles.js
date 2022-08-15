import styled from 'styled-components';
import Icon from '../Icon/Icon';

export const OuterWrapper = styled.div`
    width: 100vw;
    padding: 8px 10vw 8px 10vw;
    background-color: ${({ theme }) => theme.secondary};
    border-bottom: solid 2px ${({ theme }) => theme.grey};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const StyledLogo = styled.img`
    width: 70px;
    border-radius: 100%;
`;

export const StyledNavigation = styled.nav`
    margin-right: auto;
    ul {
        display: flex;
        list-style: none;
        text-align: center;
    }
    a {
        text-decoration: none;
        margin: 0 15px;
        color: ${({ theme }) => theme.white};
        font-size: ${({ theme }) => theme.font.size.xs};
        transition: color .12s  ease-in-out;
        &:hover {
            color: ${({ theme }) => theme.primary}
        }
        &.active {
            color: ${({ theme }) => theme.primary}
        }
    }
`;

export const StyledIcon = styled(Icon)`
    margin: 0 15px;
`;
