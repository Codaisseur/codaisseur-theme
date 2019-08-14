import React from 'react'
import { GithubIcon } from '../../icons/github'
import { LinkedinIcon } from '../../icons/linkedin'
import { WebsiteIcon } from '../../icons/website'
import Center from './Center'

import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  makeStyles,
  Grid,
} from '@material-ui/core'

import Avatar from './Avatar'

const useStyles = makeStyles(() => ({
  root: {
    margin: '8px',
  },
  card: {
    width: '120px',
    height: '265px',
  },
  content: {
    padding: '16px',
    height: '120px',
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
  name: {
    wordWrap: 'break-word',
    marginBottom: '5px',
  },
  stack: {
    marginTop: '13px',
  },
}))

export interface IPeopleCard {
  image?: any
  classes?: any
  style?: any
  name?: any
  content?: any
  linkedin?: any
  github?: any
  website?: any
}

export const PeopleCard = (props: IPeopleCard) => {
  const classes = useStyles()
  return (
    <Grid item className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea>
          {props.image && (
            <Center>
              <Avatar size="90px">
                <img src={props.image} alt={props.name} className={classes.image} />
              </Avatar>
            </Center>
          )}
          <Grid container item>
            <CardContent className={classes.content}>
              {props.name && (
                <Center>
                  <Typography variant="body2" className={classes.name}>
                    {props.name}
                  </Typography>
                </Center>
              )}
              {props.content && (
                <Center>
                  <Typography variant="caption" className={classes.stack}>
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
            {props.github && <GithubIcon className={classes.icons} />}
            {props.linkedin && <LinkedinIcon className={classes.icons} />}
            {props.website && <WebsiteIcon className={classes.icons} />}
          </Center>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
