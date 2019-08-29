import React from 'react'
import { Grid } from '@material-ui/core'

export const Center = ({ children, ...rest }: any) => (
  <Grid
    container
    item
    spacing={0}
    align="center"
    justify="center"
    direction="column"
    {...rest}
  >
    {children}
  </Grid>
)
