import { createMuiTheme, withStyles, Theme } from '@material-ui/core/styles'
import { Button as MuiButton } from '@material-ui/core'

import { palette, typography, overrides } from '../default'
import { IPalette } from '../default/palette'
import { ITypography } from '../default/typography'
import {
  CourseCard as CustomCourseCard,
  ICourseCard as ICustomCourseCard,
} from '../customComponents/CourseCard'

export interface ITheme extends Theme {
  // Custom
  palette: IPalette

  // Rest
  // shape: Shape
  // breakpoints: Breakpoints
  // direction: Direction
  // mixins: Mixins
  // overrides?: Overrides
  // props?: ComponentsProps
  // shadows: Shadows
  // spacing: Spacing
  // transitions: Transitions
  // typography: Typography
  // zIndex: ZIndex
}

export const theme = {
  palette: {
    ...palette,
  } as IPalette,

  typography: {
    ...typography,
  } as ITypography,

  overrides: {
    ...overrides,
  },

  shape: {
    borderRadius: 24,
  },
}
export default createMuiTheme(theme) as ITheme

// Create custom component
export const Button = withStyles({
  label: {
    textTransform: 'uppercase',
  },
})(MuiButton)

export const CourseCard = withStyles({})(CustomCourseCard)
export interface ICourseCard extends ICustomCourseCard {}
