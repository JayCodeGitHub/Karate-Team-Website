import React from 'react';
import { Link } from 'gatsby';
import FacebookIcon from 'assets/icons/facebook.svg';
import YoutubeIcon from 'assets/icons/youtube.svg';
import InstagramIcon from 'assets/icons/instagram.svg';
import {
  StyledNavigation,
  FooterWrapper,
  Author,
  IconsWrapper,
  StyledIcon,
} from './Footer.styles';

const Footer = () => (
  <FooterWrapper>
    <StyledNavigation>
      <ul>
        <li>
          <Link to="/o-nas">O nas</Link>
        </li>
        <li>
          <Link to="/instruktorzy">Instruktorzy</Link>
        </li>
        <li>
          <Link to="/galeria">Galeria</Link>
        </li>
        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </StyledNavigation>
    <IconsWrapper>
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
    </IconsWrapper>
    <Author>Created by JayCode</Author>
  </FooterWrapper>
);

export default Footer;

/*
<IconsWrapper>
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
</IconsWrapper>
<Author>Created by JayCode</Author>
*/
