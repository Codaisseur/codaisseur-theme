import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from '@material-ui/core'

storiesOf('Button', module)
  .add('primary', () => (
    <Button variant="contained" color="primary">
      Primary
    </Button>
  ))
  .add('secondary', () => <Button variant="contained">Seondary</Button>)
