import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from './index'
import { genTypographys, genButtons, genCards } from './index.stories'
import { AcademyCard } from './themes/customComponents/AcademyCard'

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
    <AcademyCard
      duration={11}
      title="Code Academy"
      language="English"
      date="26 August 2019"
      price="800"
      level="No experience needed!"
      description="Collaborate with others to build and deploy different types of web applications."
      image="https://www.teacher.org/wp-content/uploads/2018/02/Teachers-Professionals-1024x676.jpg"
    />
  </ThemeProvider>,
  document.getElementById('root')
)
