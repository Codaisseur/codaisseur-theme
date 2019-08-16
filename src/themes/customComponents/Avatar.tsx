import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: ({ size }: any) => ({
    '& *': {
      borderRadius: '50%',
      height: size,
      width: size,
      objectFit: 'cover',
    },
  }),
})

export default ({ children, size }: any) => {
  const classes = useStyles({ size })
  return <div className={classes.root}>{children}</div>
}
