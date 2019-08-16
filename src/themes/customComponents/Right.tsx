import React from 'react'
import { Grid } from '@material-ui/core'

/**
 * this is a grid container pulling elements inside it to the right
 * @params MUI grid container props
 */
export default ({ children, ...rest }: any) => (
  <Grid
    container
    item
    spacing={0}
    align="right"
    justify="right"
    direction="column"
    {...rest}
  >
    {children}
  </Grid>
)
