import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'
import * as React from 'react'

export const Arrow = (props: SvgIconProps) => (
  <SvgIcon
    width="45"
    height="45"
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M41.25 22.5C41.25 12.1447 32.8553 3.74999 22.5 3.75C12.1447 3.75 3.75 12.1447 3.75 22.5C3.75 32.8553 12.1447 41.25 22.5 41.25C32.8553 41.25 41.25 32.8553 41.25 22.5Z"
      stroke="#1F28CE"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.5 30L30 22.5L22.5 15"
      stroke="#1F28CE"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 22.5001L30 22.5001"
      stroke="#1F28CE"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
)

export const ArrowDisabled = (props: SvgIconProps) => (
  <SvgIcon
    width="45"
    height="45"
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.75 22.5C3.74999 32.8553 12.1447 41.25 22.5 41.25C32.8553 41.25 41.25 32.8553 41.25 22.5C41.25 12.1447 32.8553 3.75 22.5 3.75C12.1447 3.75 3.75 12.1447 3.75 22.5Z"
      stroke="#E9E9E9"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.5 15L15 22.5L22.5 30"
      stroke="#E9E9E9"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30 22.4999L15 22.4999"
      stroke="#E9E9E9"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
)
