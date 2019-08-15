import React from 'react'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import { StylesProvider } from '@material-ui/styles'

import {
  getPageContext as importGetPageContext,
  createPageContext as importCreatePageContext,
} from './lib'

// We only have 1 theme, KISS.
import theme, {
  Button as StyledButton,
  CourseCard as StyledCourseCard,
  ICourseCard as ICustomCourseCard,
  PeopleCard as StyledPeopleCard,
  IPeopleCard as ICustomPeopleCard,
  ImageTextCard as StyledImageTextCard,
  IImageTextCard as ICustomImageTextCard,
  ITheme,
} from './themes/codaisseur'

/**
 * wrapper of our own custom theme with baselining included.
 * The children are rendered after baseline.
 * @param {ThemeProviderProps<Theme>} props The props passed into MuiThemeProvider
 */
export const ThemeProvider = (props: any): JSX.Element => (
  <MuiThemeProvider {...props} theme={theme}>
    <CssBaseline />
    {props.children}
  </MuiThemeProvider>
)

export const getPageContext = importGetPageContext
export const createPageContext = importCreatePageContext

/**
 * withRoot is needed for gatsby server sided rendering.
 * It will strip of any server sided JSS.
 * @param Component Component to render inside provider
 */
export const withRoot = (Component: React.ComponentType<any>) => {
  return class extends React.Component {
    public muiPageContext: any

    constructor(props: any) {
      super(props)
      this.muiPageContext = getPageContext()
    }
    public componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    public render() {
      return (
        <StylesProvider {...this.muiPageContext}>
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <ThemeProvider theme={theme}>
            <Component {...this.props} />
          </ThemeProvider>
        </StylesProvider>
      )
    }
  }
}

export interface Theme extends ITheme {}
export const Button = StyledButton
export const CourseCard = StyledCourseCard
export interface ICourseCard extends ICustomCourseCard {}

export const PeopleCard = StyledPeopleCard
export interface IPeopleCard extends ICustomPeopleCard {}

export const ImageTextCard = StyledImageTextCard
export interface IImageTextCard extends ICustomImageTextCard {}

// if index is loaded during API call, we dont want code to run
// start is in .npmignore, try or fail
import('./start').catch(() => ({}))
