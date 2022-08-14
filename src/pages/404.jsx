import React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <main>
    <h1>Nie Znaleziono</h1>
    <Link to="/">Strona Główna</Link>
  </main>
);

export default NotFoundPage;

export const Head = () => <title>Nie Znaleziono</title>;
