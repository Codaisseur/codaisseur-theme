import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from '@material-ui/core'
import { TextField, FormControlLabel, Checkbox } from '@material-ui/core'

storiesOf('Button', module)
  .add('primary', () => (
    <Button variant="contained" color="primary">
      Primary
    </Button>
  ))
  .add('secondary', () => (
    <Button variant="contained" color="secondary">
      Secondary
    </Button>
  ))
  .add('default', () => <Button variant="outlined">Default</Button>)

storiesOf('Checkbox', module).add('default', () => (
  <>
    <FormControlLabel
      control={<Checkbox checked={false} color="secondary" />}
      label="Secondary"
    />
    <FormControlLabel
      control={<Checkbox checked={true} color="secondary" />}
      label="Secondary"
    />
    <FormControlLabel
      control={<Checkbox checked={true} color="primary" />}
      label="Primary"
    />
     <FormControlLabel
      control={<Checkbox checked={true} color="primary" disabled />}
      label="Primary"
    />
  </>
))
