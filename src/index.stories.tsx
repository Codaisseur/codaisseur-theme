import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button, Typography } from '@material-ui/core'
import { Logo } from './images/icons/Codaisseur'
import { Menu, MenuClose } from './images/icons/Menu'
import { ArrowButton } from './themes/codaisseur'
import { Luggage } from './images/humans/Luggage'

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

const genLogo = () => (
  <div>
    <Logo />
  </div>
)

const genMenu = () => (
  <div>
    <Menu />
  </div>
)

const genMenuClose = () => (
  <div>
    <MenuClose />
  </div>
)

const genArrow = () => (
  <div>
    <ArrowButton rotate={0.3} direction="right" />
    <ArrowButton disabled />
  </div>
)

const genHumans = () => (
  <div>
    <Luggage />
  </div>
)

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
    // 'srOnly',
    'inherit',
  ].map((variant: any, key) => (
    <div key={key}>
      <Typography color={color} variant={variant}>
        {variant} - The quick brown fox jumps over the lazy dog
      </Typography>
    </div>
  ))

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

storiesOf('Icons', module)
  .add('Logo', () => genLogo())
  .add('Menu', () => genMenu())
  .add('MenuClose', () => genMenuClose())
  .add('Arrow', () => genArrow())

storiesOf('Images', module).add('Humans Luggage', () => genHumans())
