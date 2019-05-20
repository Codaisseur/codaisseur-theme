import React from 'react'

import { ThemeProvider } from './index'
import { CssBaseline, Typography, Grid, Container, Paper } from '@material-ui/core'

import theme from './themes/codaisseur'

import { Button as StyledButton } from '.'

const colors = ['primary', 'secondary', 'default', 'inherit']
const variants = ['text', 'outlined', 'contained']
const sizes = ['small', 'medium', 'large']

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={'md'}>
        <Paper>
          <Typography variant="h1">h1</Typography>
          <Typography variant="h2" color="primary">
            h2
          </Typography>
          <Typography variant="h3" color="secondary">
            h3
          </Typography>
          <Typography variant="h4" color="primary">
            h4
          </Typography>
          <Typography variant="h5" color="primary">
            h5
          </Typography>
          <Typography variant="h6" color="primary">
            h6
          </Typography>
          <Typography variant="body1" color="primary">
            body1
          </Typography>
          <Typography variant="body2" color="primary">
            body2
          </Typography>
          <Typography variant="subtitle1" color="primary">
            subtitle1
          </Typography>
          <Typography variant="subtitle2" color="primary">
            subtitle2
          </Typography>
          <Typography variant="button" color="primary">
            button
          </Typography>
        </Paper>
        <Paper>
          <Typography variant="h2">Buttons</Typography>
          {colors.map((color: any, key) => (
            <Grid key={key} container alignItems="flex-end">
              <Grid item xs={12}>
                {console.log(color)}
                <Typography color={color} variant="h3">
                  {color}
                </Typography>
              </Grid>
              {variants.map((variant: any) => (
                <>
                  <Grid item xs={3}>
                    <Typography variant="h4">{variant}</Typography>
                  </Grid>
                  {sizes.map((size: any, key2) => (
                    <Grid key={key2} item xs={3}>
                      <StyledButton color={color} variant={variant} size={size}>
                        {size}
                      </StyledButton>
                    </Grid>
                  ))}
                </>
              ))}
            </Grid>
          ))}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
