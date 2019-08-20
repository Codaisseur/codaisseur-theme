import React from 'react'

import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  makeStyles,
  Grid,
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    margin: '7px',
  },
  actionArea: {
    color: 'transparent',
    '&:hover': {
      color: 'transparent',
      cursor: 'auto',
    },
  },
  title: {
    marginTop: '-10px',
    marginBottom: '8px',
  },
  content: {
    marginTop: '5px',
  },
}))

export interface ITextCard {
  classes?: any
  style?: any
  title?: any
  subtitle?: any
  content?: any
}

export const TextCard = (props: ITextCard) => {
  const classes = useStyles()
  return (
    <Grid container item className={classes.root}>
      <Card>
        <CardActionArea className={classes.actionArea}>
          <CardContent>
            <Grid container item>
              <Grid item direction="column">
                {props.title && (
                  <Typography variant="h6" className={classes.title}>
                    {props.title}
                  </Typography>
                )}
                {props.subtitle && (
                  <Typography variant="overline" color="secondary">
                    {props.subtitle}
                  </Typography>
                )}
                {props.content && (
                  <Typography variant="body1" className={classes.content}>
                    {props.content}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
