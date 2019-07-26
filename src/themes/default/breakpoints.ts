import {
  Breakpoints,
  BreakpointValues,
  Breakpoint,
  keys,
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
    function convertBreakpoints() {
      if (key === 'xs') {
        return breakpoints.values.xs
      } else if (key === 'sm') {
        return breakpoints.values.sm
      } else if (key === 'md') {
        return breakpointValues.md
      } else if (key === 'lg') {
        return breakpointValues.lg
      } else {
        return breakpointValues.xl
      }
    }
    const valueNumber = typeof key === 'string' ? convertBreakpoints() : key
    const value = valueNumber.toString()
    return '@media (min-width:'.concat(value).concat('px', ')')
  },
  down: (key: any) => {
    function convertBreakpoints() {
      if (key === 'xs') {
        return breakpoints.values.xs
      } else if (key === 'sm') {
        return breakpoints.values.sm
      } else if (key === 'md') {
        return breakpointValues.md
      } else if (key === 'lg') {
        return breakpointValues.lg
      } else {
        return breakpointValues.xl
      }
    }
    const valueNumber = typeof key === 'string' ? convertBreakpoints() : key
    const value = valueNumber.toString()
    return '@media (max-width:'.concat(value).concat('px', ')')
  },
  between: () => '',
  only: () => '',
  width: () => 0,
}

export default breakpoints
