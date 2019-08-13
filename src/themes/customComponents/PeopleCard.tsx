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
  CardActions,
} from '@material-ui/core'

import Avatar from './Avatar'

const useStyles = makeStyles(() => ({}))

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
    <Grid item xs={12} sm={6} md={2} lg={1} xl={1}>
      <Card>
        <CardActionArea>
          <Center>
            <Avatar size="100px">
              <img src={props.image} />
            </Avatar>
          </Center>
          <CardContent component="div">
            {props.name && <Typography variant="body2">{props.name}</Typography>}
            {props.content && <Typography variant="caption">{props.content}</Typography>}
          </CardContent>
          <CardActions>
            <CardActions>
              <GithubIcon style={{ height: '16px', width: '16px' }} />
              <LinkedinIcon style={{ height: '16px', width: '16px' }} />
              <WebsiteIcon style={{ height: '16px', width: '16px' }} />
            </CardActions>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
