import React from 'react';
import { Link } from 'gatsby';
import { NavigationItems } from 'assets/items/NavigationItems/NavigationItems';
import FacebookIcon from 'assets/icons/facebook.svg';
import YoutubeIcon from 'assets/icons/youtube.svg';
import InstagramIcon from 'assets/icons/Instagram.svg';
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
        {NavigationItems.map((item) => (
          <li key={item.name}>
            <Link to={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </StyledNavigation>
    <IconsWrapper>
      <StyledIcon>
        <a
          href="https://www.facebook.com/karateteamoborniki/"
          target="_blank"
          rel="noreferrer"
          aria-label="facebook Link"
        >
          <FacebookIcon />
        </a>
      </StyledIcon>
      <StyledIcon>
        <a
          href="https://www.instagram.com/karateteamoborniki/?hl=pl"
          target="_blank"
          rel="noreferrer"
          aria-label="instagram Link"
        >
          <InstagramIcon />
        </a>
      </StyledIcon>
      <StyledIcon>
        <a
          href="https://www.youtube.com/channel/UClowW1j40-wJWn2CBrT8g9Q"
          target="_blank"
          rel="noreferrer"
          aria-label="youtube Link"
        >
          <YoutubeIcon />
        </a>
      </StyledIcon>
    </IconsWrapper>
    <Author>Created by JayCode</Author>
  </FooterWrapper>
);

export default Footer;
