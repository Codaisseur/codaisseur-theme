import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from '@material-ui/core'

const genButtons = (color: any) => {
  return ['text', 'outlined', 'contained'].map((variant: any, key) => (
    <div key={key}>
      <Button variant={variant} color={color}>
        {variant}
      </Button>
      <Button variant={variant} color={color} disabled>
        {variant}
      </Button>
    </div>
  ))
}
const genTypographys = (color: any) =>
  [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
    'inherit',
  ].map((variant: any, key) => (
    <div key={key}>
      <Typography color={color} variant={variant}>
        {variant} - The quick brown fox jumps over the lazy dog
      </Typography>
    </div>
  ))

const genCards = () => {
  return (
    <Grid xs={6}>
      <Card>
        <CardActionArea>
          <CardMedia src="https://www.iamexpat.nl/sites/default/files/styles/article--full/public/dutch-school-types.jpg" />
          <CardContent>
            <Typography variant="h5">React and Redux Bootcamp</Typography>
            <Typography variant="overline">Intermediate</Typography>
            <Typography variant="body1">
              Collaborate with others to build and deploy different types of web
              applications.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button color="default">Learn more -></Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

storiesOf('Override Buttons', module)
  .add('Primary', () => genButtons('primary'))
  .add('Secondary', () => genButtons('secondary'))
  .add('Default', () => genButtons('default'))
  .add('Inherit', () => genButtons('inherit'))

storiesOf('Override Typography', module)
  .add('Primary', () => genTypographys('primary'))
  .add('Secondary', () => genTypographys('secondary'))
  .add('Initial', () => genTypographys('initial'))
  .add('Inherit', () => genTypographys('inherit'))
  .add('TextPrimary', () => genTypographys('textPrimary'))
  .add('TextSecondary', () => genTypographys('textSecondary'))
  .add('Error', () => genTypographys('error'))

storiesOf('Override Cards', module).add('Main', () => genCards())
