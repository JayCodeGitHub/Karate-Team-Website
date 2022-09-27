import React from 'react';
import { Link } from 'gatsby';
import { NavigationItems } from 'assets/items/NavigationItems/NavigationItems';
import InstagramIcon from 'assets/icons/instagram.svg';
import YoutubeIcon from 'assets/icons/youtube.svg';
import FacebookIcon from 'assets/icons/facebook.svg';
import {
  StyledNavigation,
  FooterWrapper,
  Author,
  IconsWrapper,
  StyledIcon,
} from './Footer.styles';

export const SocialMediaItems = [
  {
    aria: 'Facebook Link',
    href: 'https://www.facebook.com/karateteamoborniki/',
    icon: <FacebookIcon />,
  },
  {
    aria: 'Instagram Link',
    href: 'https://www.instagram.com/karateteamoborniki/?hl=pl',
    icon: <InstagramIcon />,
  },
  {
    aria: 'Youtube Link',
    href: 'https://www.youtube.com/channel/UClowW1j40-wJWn2CBrT8g9Q',
    icon: <YoutubeIcon />,
  },
];

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
      {SocialMediaItems.map((item) => (
        <StyledIcon>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.aria}
          >
            {item.icon}
          </a>
        </StyledIcon>
      ))}
    </IconsWrapper>
    <Author>Created by JayCode</Author>
  </FooterWrapper>
);

export default Footer;
