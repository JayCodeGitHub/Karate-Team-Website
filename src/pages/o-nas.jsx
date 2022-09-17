import React, { useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import gsap from 'gsap';
import { Wrapper, Header, Paragraph } from 'assets/styles/pages/o-nas.styles';
import { BackgroundPhotoSection } from 'components/BackgroundPhotoSection/BackgroundPhotoSection.styles';
import { AboutSection } from 'components/AboutSection/AboutSection.styles';

function onasPage({ data }) {
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
      <Header ref={headerWrapper}>{data.datoCmsAbout.title}</Header>
      <Paragraph ref={paragraphWrapper}>
        {data.datoCmsAbout.paragraph}
      </Paragraph>
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
}

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
