import React from 'react'

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

function TimeIcon(props: any) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  )
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
              <TimeIcon /> {props.duration} weeks
              <TimeIcon /> {props.price}€
              <TimeIcon /> {props.date}
              <TimeIcon /> {props.language}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions />
      </Card>
    </div>
  )
}
