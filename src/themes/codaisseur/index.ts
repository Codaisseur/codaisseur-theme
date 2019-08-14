import { createMuiTheme, withStyles, Theme } from '@material-ui/core/styles'
import { Button as MuiButton } from '@material-ui/core'

import { palette, typography, overrides } from '../default'
import { IPalette } from '../default/palette'
import { IBreakpoints } from '../default/breakpoints'
import { ITypography } from '../default/typography'
import {
  CourseCard as CustomCourseCard,
  ICourseCard as ICustomCourseCard,
} from '../customComponents/CourseCard'
import {
  PeopleCard as CustomPeopleCard,
  IPeopleCard as ICustomPeopleCard,
} from '../customComponents/PeopleCard'
import {
  ImageTextCard as CustomImageTextCard,
  IImageTextCard as ICustomImageTextCard,
} from '../customComponents/ImageTextCard'

export interface ITheme extends Theme {
  palette: IPalette
  breakpoints: IBreakpoints
  // direction: Direction
  // mixins: Mixins
  // overrides?: Overrides
  // props?: ComponentsProps
  // shadows: Shadows
  // spacing: Spacing
  // transitions: Transitions
  typography: ITypography
  // zIndex: ZIndex
}

export const theme = {
  palette: {
    ...palette,
  } as IPalette,

  // breakpoints: {
  //   ...breakpoints,
  // } as IBreakpoints,

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

export const PeopleCard = withStyles({})(CustomPeopleCard)
export interface IPeopleCard extends ICustomPeopleCard {}

export const ImageTextCard = withStyles({})(CustomImageTextCard)
export interface IImageTextCard extends ICustomImageTextCard {}
