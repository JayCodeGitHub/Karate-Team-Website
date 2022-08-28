import React from 'react';
import { graphql } from 'gatsby';
import { Wrapper } from 'assets/styles/pages/homepage.styles';

const homePage = ({ data }) => (
  <Wrapper>
    <h1>{data.datoCmsHome.heroTitle}</h1>
    <h2>{data.datoCmsHome.heroButton}</h2>
    <h3>{data.datoCmsHome.heroButtonUrl}</h3>
    <img
      alt={data.datoCmsHome.alt}
      src={data.datoCmsHome.heroImage.fluid.src}
      srcSet={data.datoCmsHome.heroImage.fluid.srcSet}
      sizes={data.datoCmsHome.heroImage.fluid.sizes}
    />
    {data.datoCmsHome.modularContent.map(
      ({
        __typename,
        title,
        description,
        firstAchievement,
        firstQuantity,
        secondAchievement,
        secondQuantity,
        thirdAchievement,
        thirdQuantity,
        fourthAchievement,
        fourthQuantity,
        photo,
        alt,
        firstText,
        secondText,
        thirdText,
      }) => {
        switch (__typename) {
          case 'DatoCmsAchievementsSection':
            return (
              <div>
                <h1>{title}</h1>
                <h2>{description}</h2>
                <h3>{firstAchievement}</h3>
                <h3>{firstQuantity}</h3>
                <h3>{secondAchievement}</h3>
                <h3>{secondQuantity}</h3>
                <h3>{thirdAchievement}</h3>
                <h3>{thirdQuantity}</h3>
                <h3>{fourthAchievement}</h3>
                <h3>{fourthQuantity}</h3>
              </div>
            );
          case 'DatoCmsBackgroundphoto':
            return (
              <div>
                <h1>{description}</h1>
                <img
                  alt={alt}
                  src={photo.fluid.src}
                  srcSet={photo.fluid.srcSet}
                  sizes={photo.fluid.sizes}
                />
              </div>
            );
          case 'DatoCmsWindowsSection':
            return (
              <div>
                <h1>{title}</h1>
                <h3>{firstText}</h3>
                <h3>{secondText}</h3>
                <h3>{thirdText}</h3>
              </div>
            );
          case 'DatoCmsPhotoDescriptionAbout':
            return (
              <div>
                <h1>{title}</h1>
                <h3>{description}</h3>
                <img
                  alt={alt}
                  src={photo.fluid.src}
                  srcSet={photo.fluid.srcSet}
                  sizes={photo.fluid.sizes}
                />
              </div>
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
    datoCmsHome {
      heroTitle
      heroImage {
        fluid(maxWidth: 800, maxHeight: 1200) {
          src
          srcSet
          sizes
        }
      }
      alt
      heroButton
      heroButtonUrl
      modularContent {
        ... on DatoCmsAchievementsSection {
          __typename
          title
          description
          firstAchievement
          firstQuantity
          secondAchievement
          secondQuantity
          thirdAchievement
          thirdQuantity
          fourthAchievement
          fourthQuantity
        }
        ... on DatoCmsBackgroundphoto {
          __typename
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
        ... on DatoCmsWindowsSection {
          __typename
          title
          firstText
          secondText
          thirdText
        }
        ... on DatoCmsPhotoDescriptionAbout {
          __typename
          title
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

export default homePage;

export const Head = () => <title>Karate Team Oborniki</title>;
