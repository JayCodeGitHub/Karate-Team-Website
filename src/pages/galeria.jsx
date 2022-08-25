import React from 'react';
import { graphql } from 'gatsby';
import LinkIcon from 'assets/icons/link.svg';
import {
  Wrapper,
  Photo,
  Header,
  PhotosWrapper,
  GaleryLink,
} from 'assets/styles/pages/galeria.styles';

const galeriaPage = ({ data }) => (
  <Wrapper>
    <Header>Galeria</Header>
    <PhotosWrapper>
      {data.allDatoCmsGallery.edges.map(({ node }) => (
        <Photo
          src={node.photo.fluid.src}
          srcSet={node.photo.fluid.srcSet}
          sizes={node.photo.fluid.sizes}
          alt={node.alt}
          key={node.id}
        />
      ))}
    </PhotosWrapper>
    <GaleryLink
      href="https://www.facebook.com/karateteamoborniki/photos"
      target="_blank"
      rel="noreferrer"
    >
      <h2>Zobacz więcej na naszym Facebooku</h2>
      <LinkIcon />
    </GaleryLink>
  </Wrapper>
);

export const query = graphql`
  query {
    allDatoCmsGallery {
      edges {
        node {
          id
          alt
          photo {
            fluid(maxWidth: 800, maxHeight: 1200) {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`;

export default galeriaPage;

export const Head = () => <title>Galeria</title>;
