import React from 'react'
import { ClockIcon } from '../../icons/clock'
import { TagIcon } from '../../icons/tag'
import { CalendarIcon } from '../../icons/calendar'
import { GlobeIcon } from '../../icons/globe'
import { RightArrowIcon } from '../../icons/arrowRight'
import { Button } from '../codaisseur/index'

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  Grid,
  Box,
} from '@material-ui/core'

const useStyles = makeStyles(({ palette }) => ({
  container: {
    flexGrow: 1,
  },
  image: {
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '18rem',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    display: 'flex',
    flexFlow: 'row nowrap',
  },
}))

export interface ICourseCard {
  image: string
  duration: number
  description: string
  landingPageUrl?: string
  color?: string
  classes?: any
  title: string
  language: string
  price: string
  date: string
  level: any
}

export const CourseCard = (props: ICourseCard) => {
  const classes = useStyles()
  return (
    <Card className={props.classes}>
      <CardActionArea className={props.classes}>
        <Grid container item xs={12} className={classes.container}>
          <Grid item className={props.classes} md={8}>
            <CardMedia>
              <img src={props.image} alt={props.image} className={classes.image} />
            </CardMedia>
          </Grid>
          <Grid item className={props.classes} md={4} direction="column">
            <CardContent className={props.classes}>
              <Typography variant="h5">{props.title}</Typography>
              <Typography variant="overline">{props.level}</Typography>
              <Typography variant="body1">{props.description}</Typography>
              <Typography variant="body1" color="initial">
                <Box>
                  <ClockIcon />
                  {props.duration} weeks
                  <TagIcon /> {props.price}€
                </Box>
                <Box>
                  <CalendarIcon /> {props.date}
                  <GlobeIcon /> {props.language}
                </Box>
              </Typography>
            </CardContent>
            <Button variant="text">
              LEARN MORE
              <RightArrowIcon />
            </Button>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  )
}
