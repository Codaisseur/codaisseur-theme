import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from './index'
import { genTypographys, genButtons } from './index.stories'
require('./serviceWorker')

console.log('loading...')

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
        {genTypographys(color)}
      </>
    ))}
    {['primary', 'secondairy', 'default', 'inherit'].map((color: string) => (
      <>
        <div style={{ border: '5px solid black' }}>
          <h1>{color}</h1>
        </div>
        {genButtons(color)}
      </>
    ))}
  </ThemeProvider>,
  document.getElementById('root')
)
