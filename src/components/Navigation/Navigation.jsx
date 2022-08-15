import React from 'react';
import { Link, graphql } from 'gatsby';
import Logo from 'assets/images/logo.jpeg';
import FacebookIcon from 'assets/icons/facebook.svg';
import YoutubeIcon from 'assets/icons/youtube.svg';
import InstagramIcon from 'assets/icons/instagram.svg';
import {
  Wrapper,
  OuterWrapper,
  StyledLogo,
  StyledNavigation,
  StyledIcon,
} from './Navigation.syles';

const Navigation = () => (
  <OuterWrapper>
    <Wrapper>
      <Link to="/">
        <StyledLogo src={Logo} alt="Karate Team Oborniki Logo" />
      </Link>
      <StyledNavigation>
        <ul>
          <li>
            <Link to="/o-nas" activeClassName="active">
              O nas
            </Link>
          </li>
          <li>
            <Link to="/instruktorzy" activeClassName="active">
              Instruktorzy
            </Link>
          </li>
          <li>
            <Link to="/galeria" activeClassName="active">
              Galeria
            </Link>
          </li>
          <li>
            <Link to="/kontakt" activeClassName="active">
              Kontakt
            </Link>
          </li>
        </ul>
      </StyledNavigation>
      <div>
        <StyledIcon>
          <a
            href="https://www.facebook.com/karateteamoborniki/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
        </StyledIcon>
        <StyledIcon>
          <a
            href="https://www.instagram.com/karateteamoborniki/?hl=pl"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
        </StyledIcon>
        <StyledIcon>
          <a
            href="https://www.youtube.com/channel/UClowW1j40-wJWn2CBrT8g9Q"
            target="_blank"
            rel="noreferrer"
          >
            <YoutubeIcon />
          </a>
        </StyledIcon>
      </div>
    </Wrapper>
  </OuterWrapper>
);

export const query = graphql`
  query {
    datoCmsContact {
      facebook
      instagram
      youtube
    }
  }
`;

export default Navigation;
