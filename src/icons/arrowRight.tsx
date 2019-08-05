import * as React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import { primary } from '../themes/default/palette'
import { makeStyles } from '@material-ui/core'

export const RightArrowIcon = (props: any) => {
  const useStyles = makeStyles(() => ({
    move: {
      '&:hover': {
        left: '10px',
      },
    },
  }))

  const classes = useStyles()
  return (
    <SvgIcon
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={primary.main}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={classes.move}
      class="feather feather-arrow-right"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </SvgIcon>
  )
}
