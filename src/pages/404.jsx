import * as React from 'react';
import { Link } from 'gatsby';

function NotFoundPage() {
  return (
    <main>
      <h1>Nie Znaleziono</h1>
      <Link to="/">Strona Główna</Link>
    </main>
  );
}

export default NotFoundPage;

export function Head() {
  return <title>Not found</title>;
}
