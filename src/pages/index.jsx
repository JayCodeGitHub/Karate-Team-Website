import * as React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.font.size.m};
`;

const HomePage = () => (
  <main>
    <H1>Karate</H1>
  </main>
);

export default HomePage;

export function Head() {
  return <title>Home Page</title>;
}
