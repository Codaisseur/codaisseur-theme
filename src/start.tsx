import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from './index'
import { genTypographys, genButtons, genCards, genPeople } from './index.stories'
import { Grid } from '@material-ui/core'

require('./serviceWorker')

const arrayOfNames = [
  'Irene',
  'Miloud',
  'Christopher',
  'Alessandro',
  'Johan',
  'Danny',
  'Luca Giammaria',
  'Wouter',
]
const contentArray = ['Backend or Front-end Development', 'Front-end Development']

ReactDOM.render(
  // tslint:disable-next-line: jsx-wrap-multiline
  <ThemeProvider>
    {[
      'primary',
      'secondary',
      'initial',
      'inherit',
      'textPrimary',
      'textSecondary',
      'error',
    ].map((color: string) => (
      <>
        <div style={{ border: '5px solid black' }}>
          <h1>Typography {color}</h1>
        </div>
        {genTypographys(color)}
      </>
    ))}
    {['primary', 'secondary', 'default', 'inherit'].map((color: string) => (
      <>
        <div style={{ border: '5px solid black' }}>
          <h1>Buttons {color}</h1>
        </div>
        {genButtons(color)}
      </>
    ))}
    {['Academy', 'Bootcamp'].map((type: string) => (
      <>
        <div style={{ border: '5px solid black' }}>
          <h1>{type} Cards</h1>
        </div>
        {genCards(type)}
      </>
    ))}
    <>
      <div style={{ border: '5px solid black' }}>
        <h1>People Cards</h1>
      </div>
      <Grid container justify="center">
        {contentArray.map((content: any) =>
          arrayOfNames.map((name: any) => genPeople(name, content))
        )}
      </Grid>
    </>
  </ThemeProvider>,
  document.getElementById('root')
)
