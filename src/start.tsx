import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from './index'
import { genTypographys, genButtons, genCards } from './index.stories'

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
    {['main'].map(() => (
      <>
        <div style={{ border: '5px solid black' }}>
          <h1>Cards</h1>
        </div>
        {genCards()}
      </>
    ))}
  </ThemeProvider>,
  document.getElementById('root')
)
