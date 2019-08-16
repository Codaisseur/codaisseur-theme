import React from 'react'
import { storiesOf } from '@storybook/react'
import { CourseCard } from './themes/customComponents/CourseCard'
import { PeopleCard } from './themes/customComponents/PeopleCard'
import { ImageTextCard } from './themes/customComponents/ImageTextCard'
import {
  arrayOfStacks,
  arrayOfNames,
  arrayOfTitles,
  arrayOfDescriptions,
} from './collections'

import { Button, Typography, Grid } from '@material-ui/core'
import { primary, secondary } from './themes/default/palette'

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
    <Grid container>
      <CourseCard
        duration={11}
        color={primary.main}
        title="Code Academy"
        language="English"
        date="26 Aug 2019"
        price="800"
        type={type}
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => alert('click!')}
        level="No experience needed!"
        description="Our intensive 11 week Javascript curriculum will set you up for success as a full-stack developer. You will learn how to build complex websites, and even multiplayer games with databases, APIs, and modern front-end technology."
        image="https://codaisseur-website.cdn.prismic.io/codaisseur-website/79f7c9962dea2344b5e30168a44791eb8396f4db_dsc01428.jpg"
      />
      <CourseCard
        duration={11}
        color={secondary.main}
        title="Code Academy Bootcamp"
        language="English"
        date="5 Sept 2019"
        price="800"
        type={type}
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => alert('click!')}
        level="Beginner Bootcamp"
        description="Our intensive 11 week Javascript curriculum will set you up for success as a full-stack developer. You will learn how to build complex websites, and even multiplayer games with databases, APIs, and modern front-end technology. Our intensive 11 week Javascript curriculum will set you up for success as a full-stack developer."
        image="https://prismic-io.s3.amazonaws.com/codaisseur-website%2F45851e60-1247-424f-bebd-d60f382f10b8_dsc02017.jpg"
      />
    </Grid>
  )
}
export const genPeople = (name: any, content: any) => {
  return (
    <PeopleCard
      name={name}
      content={content}
      github="https://material.io"
      linkedin="https://linkedin.com"
      website="https://google.com"
      image="https://prismic-io.s3.amazonaws.com/codaisseur-website%2F6400efc3-67c6-418a-ac90-5deafc590e8a_irene+dn.jpg"
      // tslint:disable-next-line:jsx-no-lambda
      onClick={() => alert('click!')}
    />
  )
}

export const genImageTextCards = (title: any, content: any) => {
  return (
    <ImageTextCard
      title={title}
      content={content}
      image="https://prismic-io.s3.amazonaws.com/codaisseur-website%2F6c321f36-95d4-4a01-a447-100f565a3624_step1.png"
      // tslint:disable-next-line:jsx-no-lambda
    />
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

storiesOf('Cards', module)
  .add('CourseCard wide', () => genCards('Academy'))
  .add('CourseCard small', () => genCards('Bootcamp'))
  .add('PeopleCard', () => (
    <Grid container justify="center">
      {arrayOfStacks.map((content: any) =>
        arrayOfNames.map((name: any) => genPeople(name, content))
      )}
    </Grid>
  ))
  .add('ImageTextCard', () => (
    <Grid container justify="center">
      {arrayOfTitles.map((title: any) =>
        arrayOfDescriptions.map((content: any) => genPeople(title, content))
      )}
    </Grid>
  ))
