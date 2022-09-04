import React from 'react';
import { graphql, Link } from 'gatsby';

import {
  Wrapper,
  AboutSection,
  BackgroundPhotoSection,
  HeroSection,
  WindowsSection,
  AchivementsSection,
} from 'assets/styles/pages/homepage.styles';

const homePage = ({ data }) => (
  <>
    <HeroSection background={data.datoCmsHome.heroImage.fluid.src}>
      <div>
        <h1>{data.datoCmsHome.heroTitle}</h1>
        <Link to={data.datoCmsHome.heroButtonUrl}>
          {data.datoCmsHome.heroButton}
        </Link>
      </div>
    </HeroSection>
    <Wrapper>
      {data.datoCmsHome.modularContent.map(
        ({
          __typename,
          id,
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
          firstIcon,
          secondText,
          secondIcon,
          thirdText,
          thirdIcon,
        }) => {
          switch (__typename) {
            case 'DatoCmsAchievementsSection':
              return (
                <AchivementsSection>
                  <h1>{title}</h1>
                  <h2>{description}</h2>
                  <div>
                    <h3>{firstQuantity}</h3>
                    <h4>{firstAchievement}</h4>
                  </div>
                  <div>
                    <h3>{secondQuantity}</h3>
                    <h4>{secondAchievement}</h4>
                  </div>
                  <div>
                    <h3>{thirdQuantity}</h3>
                    <h4>{thirdAchievement}</h4>
                  </div>
                  <div>
                    <h3>{fourthQuantity}</h3>
                    <h4>{fourthAchievement}</h4>
                  </div>
                </AchivementsSection>
              );
            case 'DatoCmsBackgroundphoto':
              return (
                <BackgroundPhotoSection key={id} background={photo.fluid.src}>
                  <div>
                    <p>{description}</p>
                  </div>
                </BackgroundPhotoSection>
              );
            case 'DatoCmsWindowsSection':
              return (
                <WindowsSection>
                  <h1>{title}</h1>
                  <div>
                    <div>
                      <img src={firstIcon.url} alt="" />
                      <h3>{firstText}</h3>
                    </div>
                    <div>
                      <img src={secondIcon.url} alt="" />
                      <h3>{secondText}</h3>
                    </div>
                    <div>
                      <img src={thirdIcon.url} alt="" />
                      <h3>{thirdText}</h3>
                    </div>
                  </div>
                </WindowsSection>
              );
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
            default:
              return '';
          }
        },
      )}
    </Wrapper>
  </>
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
          firstIcon {
            url
          }
          secondText
          secondIcon {
            url
          }
          thirdText
          thirdIcon {
            url
          }
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
