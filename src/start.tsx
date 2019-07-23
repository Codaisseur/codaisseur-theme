import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from './index'
import { genTypographys } from './index.stories'
require('./serviceWorker')

ReactDOM.render(
  // tslint:disable-next-line: jsx-wrap-multiline
  <ThemeProvider>
    {[
      'primary',
      'secondairy',
      'initial',
      'inherit',
      'textPrimary',
      'textSecondary',
      'error',
    ].map((color: string) => (
      <>
        <div style={{ border: '5px solid black' }}>
          <h1>{color}</h1>
        </div>
        {genTypographys('color')}
      </>
    ))}
  </ThemeProvider>,
  document.getElementById('root')
)
