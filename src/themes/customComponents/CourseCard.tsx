import React from 'react'
import { ClockIcon } from '../../icons/clock'
import { TagIcon } from '../../icons/tag'
import { CalendarIcon } from '../../icons/calendar'
import { GlobeIcon } from '../../icons/globe'
import { RightArrowIcon } from '../../icons/arrowRight'
import { Button } from '../codaisseur/index'
import { grey } from '../default/palette'
import classnames from 'classnames'
import breakpoints from '../default/breakpoints'

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
    '&:hover > span > svg': {
      transform: 'translate(7px, 0px)',
      transition: 'transform .2s ease-in-out',
      stroke: 'blue',
    },
  },
  button: {
    textAlign: 'right',
  },
  container: {
    flexGrow: 1,
  },
  image: {
    backgroundColor: '#333',
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    minHeight: '18rem',
    height: 'auto',
  },
  icons: {
    color: grey[500],
    marginTop: '4%',
  },
  iconDiv: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20px',
  },
}))

export interface ICourseCard {
  image?: string
  duration?: number
  description?: string
  landingPageUrl?: string
  color?: string
  classes?: any
  title?: string
  language?: string
  price?: string
  date?: string
  level?: any
  type?: string
}

export const CourseCard = (props: ICourseCard) => {
  const classes = useStyles()
  const academySection = props.type === 'Academy'

  return (
    <Grid container item xs={12} md={academySection ? 12 : 6}>
      <Card className={props.classes}>
        <CardActionArea className={props.classes}>
          <Grid container item className={classes.container}>
            <Grid
              xs={12}
              item
              md={academySection ? 8 : 5}
              className={classes.image}
              style={{ backgroundImage: `url(${props.image})` }}
            />
            <Grid
              xs={12}
              item
              md={academySection ? 4 : 7}
              className={props.classes}
              direction="column"
            >
              <CardContent className={props.classes}>
                <Typography variant="h5">{props.title}</Typography>
                <Typography variant="overline" style={{ color: props.color }}>
                  {props.level}
                </Typography>
                <Typography variant="body1">{props.description}</Typography>
                <Typography variant="body1" className={classes.icons}>
                  <Grid container item direction="row" xs={12}>
                    <div className={classes.iconDiv}>
                      <span>
                        <ClockIcon /> {props.duration} weeks
                      </span>
                      <span>
                        <CalendarIcon /> {props.date}
                      </span>
                    </div>
                    <div className={classes.iconDiv}>
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
