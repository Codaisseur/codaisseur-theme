import * as React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import { common } from '../themes/default/palette'

export const WebsiteIcon = (props: any) => {
  return (
    <SvgIcon width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
        fill={common.black}
      />
      <path
        d="M8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13Z"
        stroke={common.white}
        fill={common.black}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M3 8H13" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M8 3C9.25064 4.36918 9.96138 6.14602 10 8C9.96138 9.85398 9.25064 11.6308 8 13C6.74936 11.6308 6.03862 9.85398 6 8C6.03862 6.14602 6.74936 4.36918 8 3Z"
        stroke={common.white}
        fill={common.black}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIcon>
  )
}
