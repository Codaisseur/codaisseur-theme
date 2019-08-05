import React from 'react'
import { ClockIcon } from '../../icons/clock'
import { TagIcon } from '../../icons/tag'
import { CalendarIcon } from '../../icons/calendar'
import { GlobeIcon } from '../../icons/globe'
import { RightArrowIcon } from '../../icons/arrowRight'
import { Button } from '../codaisseur/index'
import { grey } from '../default/palette'
import classnames from 'classnames'

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  Grid,
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
  arrow: {
    '&:hover': {
      ['& > span']: {
        ['& > svg']: {
          transform: 'translate(10px, 0px)',
          transition: 'transform .2s ease-in-out',
        },
      },
    },
  },
  button: {
    textAlign: 'right',
  },
  container: {
    flexGrow: 1,
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    width: '100%',
    height: '18rem',
  },
  icons: {
    color: grey[500],
    marginTop: '4%',
  },
  iconDiv: {
    display: 'flex',
    flexDirection: 'column',
  },
  iconSpacing: {
    marginLeft: '10%',
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
  type?: string
}

export const CourseCard = (props: ICourseCard) => {
  const classes = useStyles()
  const academySection = props.type === 'Academy'

  return (
    <Grid container item xs={12} md={academySection ? 12 : 6}>
      <Card className={props.classes}>
        <CardActionArea className={props.classes}>
          <Grid container item direction="row" xs={12} className={classes.container}>
            <Grid item className={props.classes} md={academySection ? 8 : 5}>
              <CardMedia>
                <img src={props.image} alt={props.image} className={classes.image} />
              </CardMedia>
            </Grid>
            <Grid
              item
              className={props.classes}
              md={academySection ? 4 : 7}
              direction="column"
            >
              <CardContent className={props.classes}>
                <Typography variant="h5">{props.title}</Typography>
                <Typography variant="overline" style={{ color: props.color }}>
                  {props.level}
                </Typography>
                <Typography variant="body1">{props.description}</Typography>
                <Typography variant="body1" className={classes.icons}>
                  <Grid container item direction="row">
                    <div className={classes.iconDiv}>
                      <span>
                        <ClockIcon />
                        {props.duration} weeks
                      </span>
                      <span>
                        <CalendarIcon /> {props.date}
                      </span>
                    </div>
                    <div className={classnames(classes.iconSpacing, classes.iconDiv)}>
                      <span>
                        <TagIcon /> {props.price}€
                      </span>
                      <span>
                        <GlobeIcon /> {props.language}
                      </span>
                    </div>
                  </Grid>
                </Typography>
              </CardContent>
              <div className={classes.button}>
                <Button variant="text" className={classes.arrow}>
                  LEARN MORE
                  <RightArrowIcon />
                </Button>
              </div>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
