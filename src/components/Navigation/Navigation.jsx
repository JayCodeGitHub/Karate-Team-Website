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
      <Link to="/" onClick={() => setIsOpen(false)}>
        <StyledLogo src={Logo} alt="Karate Team Oborniki Logo" isMobile />
      </Link>
      <BurgerWrapper onClick={toggleNavigation}>
        <StyledBurger isOpen={isOpen} />
      </BurgerWrapper>
      <Wrapper isOpen={isOpen}>
        <Link to="/">
          <StyledLogo src={Logo} alt="Karate Team Oborniki Logo" />
        </Link>
        <StyledNavigation>
          <ul>
            <li>
              <Link
                to="/o-nas"
                activeClassName="active"
                onClick={setIsOpenFalse}
              >
                O nas
              </Link>
            </li>
            <li>
              <Link
                to="/instruktorzy"
                activeClassName="active"
                onClick={setIsOpenFalse}
              >
                Instruktorzy
              </Link>
            </li>
            <li>
              <Link
                to="/galeria"
                activeClassName="active"
                onClick={setIsOpenFalse}
              >
                Galeria
              </Link>
            </li>
            <li>
              <Link
                to="/kontakt"
                activeClassName="active"
                onClick={setIsOpenFalse}
              >
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
};

export default Navigation;
