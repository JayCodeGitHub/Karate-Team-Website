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

const navigationList = [
  {
    name: 'O nas',
    href: '/o-nas/',
  },
  {
    name: 'Instruktorzy',
    href: '/instruktorzy/',
  },
  {
    name: 'Galeria',
    href: '/galeria/',
  },
  {
    name: 'Kontakt',
    href: '/kontakt/',
  },
];

const socialMediaList = [
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
    name: 'Youtube Link',
    href: 'https://www.youtube.com/channel/UClowW1j40-wJWn2CBrT8g9Q',
    icon: <YoutubeIcon />,
  },
];

const Footer = () => (
  <FooterWrapper>
    <StyledNavigation>
      <ul>
        {navigationList.map((item) => (
          <li key={item.name}>
            <Link to={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </StyledNavigation>
    <IconsWrapper>
      {socialMediaList.map((item) => (
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
