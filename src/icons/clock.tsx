import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon'
import { grey } from '../themes/default/palette'

export const ClockIcon = (props: any) => {
  return (
    <SvgIcon {...props}>
      <path
        fill={grey[500]}
        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
      />
      <path fill={grey[500]} d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
    </SvgIcon>
  )
}
