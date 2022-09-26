import React, { useState } from 'react';
import { Link } from 'gatsby';
import Logo from 'assets/images/logo.jpeg';
import { NavigationItems } from 'assets/items/NavigationItems/NavigationItems';
import { SocialMediaItems } from 'assets/items/SocialMediaItems/SocialMediaItems';
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
        </div>
      </Wrapper>
    </OuterWrapper>
  );
};

export default Navigation;
