import React from 'react'
import { GithubIcon } from '../../icons/github'
import { LinkedinIcon } from '../../icons/linkedin'
import { WebsiteIcon } from '../../icons/website'


import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Avatar,
  makeStyles,
  Grid,
  CardActions,
} from '@material-ui/core'

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
    <Grid container item xs={12}>
      <Card>
        <CardActionArea>
          <Grid item xs={12}>
            <Avatar src={props.image} />
          </Grid>
          <CardContent component="div">
            {props.name && (
              <div>
                <p>{props.name}</p>
              </div>
            )}
            {props.content && <p>{props.content}</p>}
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
