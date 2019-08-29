import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from './index'
import {
  genTypographys,
  genButtons,
  genCards,
  genPeople,
  genImageTextCards,
  genEventCards,
  genTextCards,
} from './index.stories'
import {
  arrayOfStacks,
  arrayOfNames,
  arrayOfTitles,
  arrayOfDescriptions,
  arrayOfEvents,
  arrayOfEventsDescriptions,
  arrayOfCtas,
} from './collections'

import { Grid } from '@material-ui/core'

require('./serviceWorker')

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
        {arrayOfStacks.map((content: any) =>
          arrayOfNames.map((name: any) => genPeople(name, content))
        )}
      </Grid>
    </>
    <>
      <div style={{ border: '5px solid black' }}>
        <h1>ImageText Cards</h1>
      </div>

      <Grid container justify="center">
        {arrayOfTitles.map((title: any) =>
          arrayOfDescriptions.map((content: any) => genImageTextCards(title, content))
        )}
      </Grid>
    </>
    <>
      <div style={{ border: '5px solid black' }}>
        <h1>Event Cards</h1>
      </div>

      <Grid container justify="center">
        {arrayOfEvents.map((title: any) =>
          arrayOfEventsDescriptions.map((content: any) =>
            arrayOfCtas.map((cta: any) => genEventCards(title, content, cta))
          )
        )}
      </Grid>
    </>
    <>
      <div style={{ border: '5px solid black' }}>
        <h1>Text Cards</h1>
      </div>
      <Grid container justify="center">
        {genTextCards(
          'TypeScript & GraphQL Bootcamp',
          'Collaborate with others to build and deploy different types of web applications.',
          'Monday'
        )}
        {genTextCards(
          'Set Up Environment',
          'Collaborate with others to build and deploy different types of web applications. Collaborate with others to build and deploy different types of web applications.',
          'Day 1'
        )}
      </Grid>
    </>
  </ThemeProvider>,
  document.getElementById('root')
)
