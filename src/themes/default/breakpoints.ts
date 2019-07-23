import {
  Breakpoints,
  BreakpointValues,
  Breakpoint,
} from '@material-ui/core/styles/createBreakpoints'

const xs: Breakpoint = 'xs'
const sm: Breakpoint = 'sm'
const md: Breakpoint = 'md'
const lg: Breakpoint = 'lg'
const xl: Breakpoint = 'xl'

const breakpointValues: BreakpointValues = {
  xs: 600,
  sm: 960,
  md: 1280,
  lg: 1920,
  xl: 10000,
}

const breakpoints: Breakpoints = {
  values: breakpointValues,
  keys: [xs, sm, md, lg, xl],
  up: (key: any) => {
    const valueNumber = typeof breakpointValues === 'string' ? breakpointValues[key] : key
    const value = valueNumber.toString()
    return '@media (min-width:'.concat(value).concat(')')
  },
  down: (key: any) => {
    const valueNumber = typeof breakpointValues === 'string' ? breakpointValues[key] : key
    const value = valueNumber.toString()
    return '@media (max-width:'.concat(value).concat('px', ')')
  },
  between: () => '',
  only: () => '',
  width: () => 0,
}

export default breakpoints
