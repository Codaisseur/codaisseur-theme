import React from 'react'
import Center from './Center'

import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  makeStyles,
  Grid,
} from '@material-ui/core'

import { Button } from '../codaisseur/index'

const useStyles = makeStyles(() => ({
  root: {
    margin: '7px',
  },
  button: {
    marginTop: '-15px',
    paddingLeft: '8px',
  },
  title: {
    marginTop: '-10px',
    marginBottom: '8px',
  },
  content: {
    marginTop: '5px',
  },
}))

export interface IEventCard {
  classes?: any
  style?: any
  title?: any
  date?: any
  content?: any
  cta?: any | 'RSVP'
  onClick?: () => void
}

export const EventCard = (props: IEventCard) => {
  const classes = useStyles()
  return (
    <Grid container item className={classes.root}>
      <Card>
        <CardActionArea onClick={props.onClick}>
          <CardContent>
            <Grid container item>
              <Grid item xs={8} md={10} direction="column">
                {props.title && (
                  <Typography variant="h6" className={classes.title}>
                    {props.title}
                  </Typography>
                )}
                {props.date && (
                  <Typography variant="overline" color="secondary">
                    {props.date}
                  </Typography>
                )}
                {props.content && (
                  <Typography variant="body1" className={classes.content}>
                    {props.content}
                  </Typography>
                )}
              </Grid>
              <Center xs={4} md={2} className={classes.button}>
                <Button variant="contained" color="secondary" size="small">
                  {props.cta}
                </Button>
              </Center>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
