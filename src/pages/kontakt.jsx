import React from 'react';
import { graphql } from 'gatsby';

const kontaktPage = ({ data }) => (
  <main>
    <h1>Kontakt</h1>
    <h4>{data.datoCmsContact.email}</h4>
    <h4>{data.datoCmsContact.location}</h4>
    <h4>{data.datoCmsContact.phone}</h4>
    <h6>{data.datoCmsContact.youtube}</h6>
    <h6>{data.datoCmsContact.facebook}</h6>
    <h6>{data.datoCmsContact.instagram}</h6>
  </main>
);

export const query = graphql`
  query {
    datoCmsContact {
      facebook
      instagram
      youtube
      email
      location
      phone
    }
  }
`;
export default kontaktPage;

export const Head = () => <title>Kontakt</title>;
