import React from 'react'
import { GithubIcon } from '../../icons/github'
import { LinkedinIcon } from '../../icons/linkedin'
import { WebsiteIcon } from '../../icons/website'
import Center from './Center'
import SwipeableViews from 'react-swipeable-views'

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
    margin: '8px',
  },
  actionArea: {
    color: 'white',
    '&:hover': {
      color: 'white',
      cursor: 'auto',
    },
  },
  card: {
    width: '190px',
    height: '400px',
  },
  content: {
    padding: '16px',
  },
  icons: {
    width: '16px',
    height: '16px',
    margin: '8px',
  },
  iconArea: {
    marginTop: '5px',
    marginBottom: '20px',
  },
  image: {
    marginTop: '10px',
  },
  title: {
    wordWrap: 'break-word',
    marginBottom: '5px',
  },
  description: {
    marginTop: '10px',
  },
}))

export interface IImageTextCard {
  image?: any
  classes?: any
  style?: any
  title?: any
  content?: any
  linkedin?: any
  github?: any
  website?: any
  onClick?: () => void
}

export const ImageTextCard = (props: IImageTextCard) => {
  const classes = useStyles()
  return (
    <SwipeableViews
      axis="x"
      // index={activeStep}
      // onChangeIndex={this.handleStepChange}
      enableMouseEvents
      // className={classes.swipeable}
    >
      <Grid item className={classes.root}>
        <Card className={classes.card}>
          <CardActionArea onClick={props.onClick} className={classes.actionArea}>
            {props.image && (
              <Center size="160px">
                <img src={props.image} alt={props.title} className={classes.image} />
              </Center>
            )}
            <Grid item justify="center" alignItems="center">
              <CardContent className={classes.content}>
                {props.title && (
                  <Center>
                    <Typography variant="h6" className={classes.title}>
                      {props.title}
                    </Typography>
                  </Center>
                )}
                {props.content && (
                  <Center>
                    <Typography variant="body2" className={classes.description}>
                      {props.content}
                    </Typography>
                  </Center>
                )}
              </CardContent>
            </Grid>
            <Center
              direction="row"
              justify="center"
              spacing={2}
              className={classes.iconArea}
            >
              {props.github && (
                <a href={props.github}>
                  <GithubIcon className={classes.icons} />
                </a>
              )}
              {props.linkedin && (
                <a href={props.linkedin}>
                  <LinkedinIcon className={classes.icons} />
                </a>
              )}
              {props.website && (
                <a href={props.website}>
                  <WebsiteIcon className={classes.icons} />
                </a>
              )}
            </Center>
          </CardActionArea>
        </Card>
      </Grid>
    </SwipeableViews>
  )
}
