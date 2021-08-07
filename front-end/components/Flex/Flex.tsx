import { Box, BoxProps } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export const Flex = (props: BoxProps) => {
  return <Box display="flex" boxSizing="border-box" {...props} />;
};
export const CenterFlex = (props: BoxProps) => {
  return <Box display="flex" boxSizing="border-box" justifyContent="center" alignItems="center" {...props} />;
};

export const PointerFlex = styled(Flex)`
  cursor: pointer;
`;
