import React from 'react';
import { graphql } from 'gatsby';
import { Wrapper, Header, Paragraph } from 'assets/styles/pages/o-nas.styles';
import { BackgroundPhotoSection } from 'components/BackgroundPhotoSection/BackgroundPhotoSection.styles';
import { AboutSection } from 'components/AboutSection/AboutSection.styles';

const onasPage = ({ data }) => (
  <Wrapper>
    <Header>{data.datoCmsAbout.title}</Header>
    <Paragraph>{data.datoCmsAbout.paragraph}</Paragraph>
    {data.datoCmsAbout.instructorModule.map(
      ({ __typename, id, title, description, photo, alt }) => {
        switch (__typename) {
          case 'DatoCmsPhotoDescriptionAbout':
            return (
              <AboutSection key={id}>
                <h1>{title}</h1>
                <p>{description}</p>
                <img
                  alt={alt}
                  src={photo.fluid.src}
                  srcSet={photo.fluid.srcSet}
                  sizes={photo.fluid.sizes}
                />
              </AboutSection>
            );
          case 'DatoCmsBackgroundphoto':
            return (
              <BackgroundPhotoSection key={id} background={photo.fluid.src}>
                <div>
                  <p>{description}</p>
                </div>
              </BackgroundPhotoSection>
            );
          default:
            return '';
        }
      },
    )}
  </Wrapper>
);

export const query = graphql`
  query {
    datoCmsAbout {
      title
      paragraph
      instructorModule {
        ... on DatoCmsBackgroundphoto {
          __typename
          id
          description
          alt
          photo {
            fluid(maxWidth: 800, maxHeight: 1200) {
              src
              srcSet
              sizes
            }
          }
        }
        ... on DatoCmsPhotoDescriptionAbout {
          __typename
          id
          title
          alt
          description
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

export default onasPage;

export const Head = () => <title>O nas</title>;
