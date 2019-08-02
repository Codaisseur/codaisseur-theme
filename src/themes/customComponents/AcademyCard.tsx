import React from 'react'
import { ClockIcon } from '../../icons/clock'
import { TagIcon } from '../../icons/tag'
import { CalendarIcon } from '../../icons/calendar'
import { GlobeIcon } from '../../icons/globe'

import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  SvgIcon,
} from '@material-ui/core'

export interface IAcademyCard {
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

export const AcademyCard = (props: IAcademyCard) => {
  return (
    <div>
      <Card className={props.classes}>
        <CardActionArea className={props.classes}>
          <CardMedia image={props.image} className={props.classes} title={props.title} />
          <CardContent className={props.classes}>
            <Typography variant="h5">{props.title}</Typography>
            <Typography variant="overline">{props.level}</Typography>
            <Typography variant="body1">{props.description}</Typography>
            <Typography variant="body1" color="initial">
              <ClockIcon /> {props.duration} weeks
              <TagIcon /> {props.price}€
              <CalendarIcon /> {props.date}
              <GlobeIcon /> {props.language}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions />
      </Card>
    </div>
  )
}
