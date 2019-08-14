import * as React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import { common } from '../themes/default/palette'

export const LinkedinIcon = (props: any) => {
  return (
    <SvgIcon width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
        fill={common.black}
      />
      <path
        d="M9.66699 6.33325C10.33 6.33325 10.9659 6.59664 11.4348 7.06549C11.9036 7.53433 12.167 8.17021 12.167 8.83325V11.7499H10.5003V8.83325C10.5003 8.61224 10.4125 8.40028 10.2562 8.244C10.1 8.08772 9.88801 7.99992 9.66699 7.99992C9.44598 7.99992 9.23402 8.08772 9.07774 8.244C8.92146 8.40028 8.83366 8.61224 8.83366 8.83325V11.7499H7.16699V8.83325C7.16699 8.17021 7.43038 7.53433 7.89923 7.06549C8.36807 6.59664 9.00395 6.33325 9.66699 6.33325Z"
        stroke={common.white}
        fill={common.black}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.49967 6.75H3.83301V11.75H5.49967V6.75Z"
        stroke={common.white}
        fill={common.black}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.66634 5.49992C5.12658 5.49992 5.49967 5.12682 5.49967 4.66659C5.49967 4.20635 5.12658 3.83325 4.66634 3.83325C4.2061 3.83325 3.83301 4.20635 3.83301 4.66659C3.83301 5.12682 4.2061 5.49992 4.66634 5.49992Z"
        stroke={common.white}
        fill={common.black}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIcon>
  )
}
