import React from 'react';
import LocationIcon from 'assets/icons/location.svg';
import EmailIcon from 'assets/icons/Email.svg';
import PhoneIcon from 'assets/icons/phone.svg';

export const ContactItems = [
  {
    title: 'Gołaszyńska 35, Oborniki',
    href: '',
    aria: 'Location Icon',
    icon: <LocationIcon />,
  },
  {
    title: 'blochacademy@gmail.com',
    href: 'mailto: blochacademy@gmail.com',
    aria: 'Email',
    icon: <EmailIcon />,
  },
  {
    title: '696 162 080',
    href: 'tel: +696162080',
    aria: 'Numer Telefonu',
    icon: <PhoneIcon />,
  },
];
