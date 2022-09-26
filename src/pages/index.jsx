import React, { useRef, useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { AboutSection } from 'components/AboutSection/AboutSection.styles';
import { BackgroundPhotoSection } from 'components/BackgroundPhotoSection/BackgroundPhotoSection.styles';
import {
  Wrapper,
  HeroSection,
  WindowsSection,
  AchivementsSection,
} from 'assets/styles/pages/homepage.styles';

gsap.registerPlugin(ScrollTrigger);

function homePage({ data }) {
  const heroWrapper = useRef(null);
  const windowsWrapper = useRef(null);
  const achivementsWrapper = useRef(null);

  useEffect(() => {
    const hero = heroWrapper.current;
    const windowsSection = windowsWrapper.current.children[1];
    const achivementsSection = achivementsWrapper.current;

    const heroHeader = hero.getElementsByTagName('h1');
    const heroButton = hero.getElementsByTagName('a');
    const windows = windowsSection.getElementsByTagName('div');
    const windowsHeader = windowsWrapper.current.getElementsByTagName('h1');

    gsap.set(
      [
        hero,
        heroHeader,
        heroButton,
        windowsHeader,
        windows,
        achivementsSection,
      ],
      {
        autoAlpha: 0,
      },
    );

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    tl.fromTo(
      hero,
      { opacity: 0 },
      { duration: 1, opacity: 1, autoAlpha: 1 },
    ).fromTo(
      [heroHeader, heroButton],
      { opacity: 0 },
      { duration: 0.5, opacity: 1, autoAlpha: 1 },
    );
    gsap.fromTo(
      achivementsSection,
      { opacity: 0 },
      {
        duration: 1,
        ease: 'easeInOut',
        delay: 0.2,
        opacity: 1,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: achivementsSection,
          start: 'top 80%',
        },
      },
    );
    gsap.fromTo(
      [windowsHeader, windows],
      { opacity: 0 },
      {
        duration: 0.5,
        stagger: 0.4,
        opacity: 1,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: windowsSection,
          start: 'top 80%',
        },
      },
    );
  });
  return (
    <>
      <HeroSection
        ref={heroWrapper}
        background={data.datoCmsHome.heroImage.fluid.src}
      >
        <h1>{data.datoCmsHome.heroTitle}</h1>
        <Link to={data.datoCmsHome.heroButtonUrl}>
          {data.datoCmsHome.heroButton}
        </Link>
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
                  <AchivementsSection ref={achivementsWrapper}>
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
                  <WindowsSection ref={windowsWrapper}>
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
}

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

export default homePage;

export const Head = () => <title>Karate Team Oborniki</title>;
