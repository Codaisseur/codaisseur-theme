import * as React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import { secondary } from '../themes/default/palette'

export const RightArrowIcon = (props: any) => {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path
        fill={secondary.main}
        d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
      />
    </SvgIcon>
    // <SvgIcon
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   stroke={secondary.main}
    //   stroke-width="2"
    //   stroke-linecap="round"
    //   stroke-linejoin="round"
    //   class="feather feather-arrow-right"
    //   {...props}
    // >
    //   <g>
    //     <line x1="5" y1="12" x2="19" y2="12" />
    //     <polyline points="12 5 19 12 12 19" />
    //   </g>
    // </SvgIcon>
  )
}
