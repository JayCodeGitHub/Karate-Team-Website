import React from 'react';
import { graphql } from 'gatsby';

const instruktorzyPage = ({ data }) => (
  <main>
    <h1>{data.datoCmsInstructor.title}</h1>
    <h2>{data.datoCmsInstructor.paragraph}</h2>
    <div>
      {data.datoCmsInstructor.instructorModule.map(
        ({ id, title, description, photo, alt }) => (
          <div key={id}>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <img
              src={photo.fluid.src}
              srcSet={photo.fluid.srcSet}
              sizes={photo.fluid.sizes}
              alt={alt}
            />
          </div>
        ),
      )}
    </div>
  </main>
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
