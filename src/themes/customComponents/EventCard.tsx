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
    margin: '8px',
  },
}))

export interface IEventCard {
  classes?: any
  style?: any
  title?: any
  date?: any
  content?: any
  cta?: any
  onClick?: () => void
}

export const EventCard = (props: IEventCard) => {
  const classes = useStyles()
  return (
    <Grid item className={classes.root} md={6}>
      <Card>
        <CardActionArea onClick={props.onClick}>
          <Grid item justify="center" alignItems="center">
            <CardContent>
              {props.title && (
                <Center>
                  <Typography variant="h6">{props.title}</Typography>
                </Center>
              )}
              {props.content && (
                <Center>
                  <Typography variant="body1">{props.content}</Typography>
                </Center>
              )}
              {props.cta && (
                <div>
                  <Button variant="contained" color="secondary">
                    {props.cta}
                  </Button>
                </div>
              )}
            </CardContent>
          </Grid>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
