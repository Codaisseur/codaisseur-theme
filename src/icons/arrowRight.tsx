import * as React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import { secondary } from '../themes/default/palette'

export const RightArrowIcon = (props: any) => {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path
        fill={secondary.main}
        d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
      />
    </SvgIcon>
  )
}
