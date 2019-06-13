import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import * as React from 'react';

export const Menu = (props: SvgIconProps) => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    color="primary"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </SvgIcon>
);

export const MenuClose = (props: SvgIconProps) => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    color="primary"
    {...props}
  >
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </SvgIcon>
)