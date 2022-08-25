import React from 'react';
import { graphql } from 'gatsby';
import {
  Wrapper,
  Header,
  Paragraph,
  Title,
  Description,
  Photo,
  InstructorSection,
} from 'assets/styles/pages/instruktorzy.styles';

const instruktorzyPage = ({ data }) => (
  <Wrapper>
    <Header>{data.datoCmsInstructor.title}</Header>
    <Paragraph>{data.datoCmsInstructor.paragraph}</Paragraph>
    {data.datoCmsInstructor.instructorModule.map(
      ({ id, title, description, photo, alt }, i) => (
        <InstructorSection key={id}>
          <Title order={i}>{title}</Title>
          <Description order={i}>{description}</Description>
          <Photo
            order={i}
            src={photo.fluid.src}
            srcSet={photo.fluid.srcSet}
            sizes={photo.fluid.sizes}
            alt={alt}
          />
        </InstructorSection>
      ),
    )}
  </Wrapper>
);

export const query = graphql`
  query {
    datoCmsInstructor {
      id
      title
      paragraph
      instructorModule {
        title
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
    }
  }
`;

export default instruktorzyPage;

export const Head = () => <title>Instruktorzy</title>;
