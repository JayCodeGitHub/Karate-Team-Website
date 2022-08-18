import styled from 'styled-components';

export const IconWrapper = styled.span`
 svg {
    width: ${({ secondary }) => (secondary ? '60px' : '35px')};
    height: auto;
  }
`;
