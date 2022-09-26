import React, { useState } from 'react';
import { Link } from 'gatsby';
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
  StyledBurger,
  BurgerWrapper,
} from './Navigation.syles';

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

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };
  const setIsOpenFalse = () => {
    setIsOpen(false);
  };
  return (
    <OuterWrapper>
      <Link to="/" aria-label="Logo" onClick={() => setIsOpen(false)}>
        <StyledLogo src={Logo} alt="Karate Team Oborniki Logo" isMobile />
      </Link>
      <BurgerWrapper onClick={toggleNavigation} aria-label="Hamburger Menu">
        <StyledBurger isOpen={isOpen} />
      </BurgerWrapper>
      <Wrapper isOpen={isOpen}>
        <Link to="/" aria-label="Logo">
          <StyledLogo src={Logo} alt="Karate Team Oborniki Logo" />
        </Link>
        <StyledNavigation>
          <ul>
            {navigationList.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  activeClassName="active"
                  onClick={setIsOpenFalse}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </StyledNavigation>
        <div>
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
        </div>
      </Wrapper>
    </OuterWrapper>
  );
};

export default Navigation;
