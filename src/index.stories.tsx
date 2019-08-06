import React from 'react'
import { storiesOf } from '@storybook/react'
import { CourseCard } from './themes/customComponents/CourseCard'

import { Button, Typography } from '@material-ui/core'
import { primary } from './themes/default/palette'

export const genButtons = (color: any) => {
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
export const genTypographys = (color: any) =>
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

export const genCards = (type: any) => {
  return (
    <div>
      <CourseCard
        duration={11}
        color={primary.main}
        title="Code Academy"
        language="English"
        date="26 August 2019"
        price="800"
        type={type}
        level="No experience needed!"
        description="Our intensive 11 week Javascript curriculum will set you up for success as a full-stack developer. You will learn how to build complex websites, and even multiplayer games with databases, APIs, and modern front-end technology."
        image="https://codaisseur-website.cdn.prismic.io/codaisseur-website/79f7c9962dea2344b5e30168a44791eb8396f4db_dsc01428.jpg"
      />
    </div>
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

storiesOf('Override Cards', module)
.add('CourseCard wide', () => genCards('Academy'))
.add('CourseCard small', () => genCards('Bootcamp'))
