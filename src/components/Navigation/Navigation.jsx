import React from 'react';
import { Link } from 'gatsby';
import Logo from 'assets/images/logo.jpeg';
import { useHamburger } from 'src/hooks/useHamburger/useHamburger';
import { NavigationItems } from 'assets/items/NavigationItems/NavigationItems';
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
  const { isOpen, toggleNavigation, setIsOpenFalse } = useHamburger();
  return (
    <OuterWrapper>
      <Link to="/" aria-label="Logo" onClick={setIsOpenFalse}>
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
            {NavigationItems.map((item) => (
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
        </div>
      </Wrapper>
    </OuterWrapper>
  );
};

export default Navigation;
