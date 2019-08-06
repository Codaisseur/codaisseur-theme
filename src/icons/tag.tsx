import * as React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import { grey } from '../themes/default/palette'

export const TagIcon = (props: any) => {
  return (
    <SvgIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={grey[500]}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-tag"
      {...props}
    >
      <g>
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7" y2="7" />
      </g>
    </SvgIcon>
  )
}
