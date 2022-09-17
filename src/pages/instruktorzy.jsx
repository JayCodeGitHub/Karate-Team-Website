import React, { useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import gsap from 'gsap';
import {
  Wrapper,
  Header,
  Paragraph,
  Title,
  Description,
  Photo,
  InstructorSection,
} from 'assets/styles/pages/instruktorzy.styles';

function instruktorzyPage({ data }) {
  const headerWrapper = useRef(null);
  const paragraphWrapper = useRef(null);

  useEffect(() => {
    const header = headerWrapper.current;
    const paragraph = paragraphWrapper.current;

    gsap.set([header, paragraph], { autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    tl.fromTo(
      [header, paragraph],
      { opacity: 0 },
      { duration: 0.5, opacity: 1, autoAlpha: 1 },
    );
  }, []);
  return (
    <Wrapper>
      <Header ref={headerWrapper}>{data.datoCmsInstructor.title}</Header>
      <Paragraph ref={paragraphWrapper}>
        {data.datoCmsInstructor.paragraph}
      </Paragraph>
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
}

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
