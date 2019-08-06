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

function convertBreakpoints(breakpoint: any) {
  if (breakpoint === 'xs') {
    return breakpoints.values.xs
  } else if (breakpoint === 'sm') {
    return breakpoints.values.sm
  } else if (breakpoint === 'md') {
    return breakpointValues.md
  } else if (breakpoint === 'lg') {
    return breakpointValues.lg
  } else {
    return breakpointValues.xl
  }
}
const breakpoints: Breakpoints = {
  values: breakpointValues,
  keys: [xs, sm, md, lg, xl],
  up: (key: any) => {
    const valueNumber = typeof key === 'string' ? convertBreakpoints(key) : key
    const value = valueNumber.toString()
    return '@media (max-width:'.concat(value).concat('px', ')')
  },
  down: (key: any) => {
    const valueNumber = typeof key === 'string' ? convertBreakpoints(key) : key
    const value = valueNumber.toString()
    return '@media (max-width:'.concat(value).concat('px', ')')
  },
  between: (start: string, end: any) => {
    const valueNumberStart = typeof start === 'string' ? convertBreakpoints(start) : start
    const valueNumberEnd = typeof end === 'string' ? convertBreakpoints(end) : end

    const valueStart = valueNumberStart.toString()
    const valueEnd = valueNumberEnd.toString()
    return '@media (min-width:'
      .concat(valueStart)
      .concat('px) and')
      .concat(' (max-width:'.concat(valueEnd).concat('px', ')'))
  },
  only: () => '',
  width: () => 0,
}
export default breakpoints
