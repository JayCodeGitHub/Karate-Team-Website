import React, { useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import gsap from 'gsap';
import Icon from 'components/Icon/Icon';
import FacebookIcon from 'assets/icons/facebook.svg';
import YoutubeIcon from 'assets/icons/youtube.svg';
import InstagramIcon from 'assets/icons/Instagram.svg';
import EmailIcon from 'assets/icons/Email.svg';
import LocationIcon from 'assets/icons/location.svg';
import PhoneIcon from 'assets/icons/phone.svg';
import {
  Wrapper,
  SocialMediaIconsWrapper,
  StyledMap,
  MapWrapper,
  ContactIconsWrapper,
  StyledIcon,
} from 'assets/styles/pages/kontakt.styles';

function kontaktPage({ data }) {
  const contactWrapper = useRef(null);

  useEffect(() => {
    const contact = contactWrapper.current.getElementsByTagName('div');

    gsap.set([contact], { autoAlpha: 0 });

    const tl = gsap.timeline({ dafaults: { ease: 'power3.inOut' } });

    tl.fromTo(
      contact,
      { opacity: 0 },
      { duration: 0.5, opacity: 1, autoAlpha: 1 },
    );
  });

  return (
    <Wrapper ref={contactWrapper}>
      <ContactIconsWrapper>
        <StyledIcon secondary>
          <LocationIcon />
          <h2>{data.datoCmsContact.location}</h2>
        </StyledIcon>
        <StyledIcon secondary>
          <a href="mailto: blochacademy@gmail.com" area-label="Email">
            <EmailIcon />
            <h2>{data.datoCmsContact.email}</h2>
          </a>
        </StyledIcon>
        <StyledIcon secondary>
          <a href="tel: +696162080" area-label="Numer Telefonu">
            <PhoneIcon />
            <h2>{data.datoCmsContact.phone}</h2>
          </a>
        </StyledIcon>
      </ContactIconsWrapper>
      <SocialMediaIconsWrapper>
        <Icon secondary>
          <a
            href={data.datoCmsContact.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook Link"
          >
            <FacebookIcon />
          </a>
        </Icon>
        <Icon secondary>
          <a
            href={data.datoCmsContact.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram Link"
          >
            <InstagramIcon />
          </a>
        </Icon>
        <Icon secondary>
          <a
            href={data.datoCmsContact.youtube}
            target="_blank"
            rel="noreferrer"
            aria-label="Youtube Link"
          >
            <YoutubeIcon />
          </a>
        </Icon>
      </SocialMediaIconsWrapper>
      <MapWrapper>
        <StyledMap
          title="mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2420.984138782941!2d16.81528761613564!3d52.64219957983751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47046cb8d617b447%3A0xb0787118b66f1468!2sGo%C5%82aszy%C5%84ska%2035%2C%2064-600%20Oborniki!5e0!3m2!1spl!2spl!4v1660782076893!5m2!1spl!2spl"
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></StyledMap>
      </MapWrapper>
    </Wrapper>
  );
}

export const query = graphql`
  query {
    datoCmsContact {
      facebook
      instagram
      youtube
      email
      location
      phone
    }
  }
`;
export default kontaktPage;

export const Head = () => <title>Kontakt</title>;
