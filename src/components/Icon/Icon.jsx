import React from 'react';
import PropTypes from 'prop-types';
import { IconWrapper } from './Icon.styles';

const Icon = ({ children, ...props }) => (
  <IconWrapper {...props}>{children}</IconWrapper>
);

Icon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Icon;
