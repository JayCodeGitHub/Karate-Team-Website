import React from 'react';
import { Link } from 'gatsby';
import { NavigationItems } from 'assets/items/NavigationItems/NavigationItems';
import { SocialMediaItems } from 'assets/items/SocialMediaItems/SocialMediaItems';
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
