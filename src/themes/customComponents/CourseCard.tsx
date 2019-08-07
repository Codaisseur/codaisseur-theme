import React from 'react'
import { ClockIcon } from '../../icons/clock'
import { TagIcon } from '../../icons/tag'
import { CalendarIcon } from '../../icons/calendar'
import { GlobeIcon } from '../../icons/globe'
import { RightArrowIcon } from '../../icons/arrowRight'
import { Button } from '../codaisseur/index'
import { grey } from '../default/palette'
import breakpoints from '../default/breakpoints'
import classnames from 'classnames'

import {
  Card,
  CardActionArea,
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
    margin: 0,
  },
  image: {
    backgroundColor: '#333',
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    minHeight: '16rem',
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
    [breakpoints.down(1130)]: {
      marginLeft: '10px',
    },
  },
  iconSpacing: {
    [breakpoints.down('sm')]: {
      marginLeft: '10%',
    },
  },
}))

export interface ICourseCard {
  image?: string | any
  duration?: number
  description?: string | JSX.Element | any
  landingPageUrl?: string
  color?: string
  classes?: any
  style?: any
  title?: string
  language?: string
  price?: string
  date?: string
  level?: any
  type?: string
}

const limitText = (text: string, type: string | undefined) => {
  if (type === 'Academy' || text.length < 226) {
    return text
  }
  return `${text.substr(0, 225)}...`
}

export const CourseCard = (props: ICourseCard) => {
  const classes = useStyles()
  const academySection = props.type === 'Academy'

  return (
    <Grid container item xs={12} md={academySection ? 12 : 6}>
      <Card className={classes.container}>
        <CardActionArea>
          <Grid container item>
            <Grid
              xs={12}
              item
              md={academySection ? 8 : 12}
              lg={academySection ? 8 : 5}
              className={classes.image}
              style={{ backgroundImage: `url(${props.image})` }}
            />
            <Grid
              xs={12}
              item
              md={academySection ? 4 : 12}
              lg={academySection ? 4 : 7}
              direction="column"
            >
              <CardContent>
                <Typography variant="h5">{props.title}</Typography>
                <Typography variant="overline" style={{ color: props.color }}>
                  {props.level}
                </Typography>
                <Typography variant="body1">
                  {limitText(props.description, props.type)}
                </Typography>
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
                    <div className={classnames(classes.iconDiv, classes.iconSpacing)}>
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
