import React, { useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import gsap from 'gsap';
import LinkIcon from 'assets/icons/link.svg';
import {
  Wrapper,
  Photo,
  Header,
  PhotosWrapper,
  GaleryLink,
} from 'assets/styles/pages/galeria.styles';

function galeriaPage({ data }) {
  const galleryWrapper = useRef(null);

  useEffect(() => {
    const galleryHeader = galleryWrapper.current.getElementsByTagName('h1');
    const galleryImages = galleryWrapper.current.getElementsByTagName('img');

    gsap.set([galleryHeader, galleryImages], { autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    tl.fromTo(
      [galleryHeader, galleryImages],
      { opacity: 0 },
      {
        duration: 0.5,
        opacity: 1,
        autoAlpha: 1,
      },
    );
  });
  return (
    <Wrapper ref={galleryWrapper}>
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
}

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
