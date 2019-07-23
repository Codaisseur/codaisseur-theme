import { createGenerateClassName, jssPreset } from '@material-ui/styles'
import { StylesOptions } from '@material-ui/styles/StylesProvider'
import { create, SheetsRegistry } from 'jss'
import { GenerateClassNameOptions } from '@material-ui/styles/createGenerateClassName'
import jssExtend from 'jss-plugin-extend'

const jss = create({
  plugins: [jssExtend(), ...jssPreset()],
})

/**
 * Convert Pixel to Point (spacing unit)
 *
 * @alias px2unit
 * @param {number} px The size in pixels.
 * @returns {number} Spacing unit
 */
export const px2pt = (px: number) => {
  return px / 8 + 'rem'
}
export const px2unit = px2pt

export const getBreakpoint = () => {
  if (typeof window !== 'undefined' && window) {
    const width = window.innerWidth
    if (width <= 600) {
      return 'xs'
    } else if (width < 960) {
      return 'sm'
    } else if (width < 1280) {
      return 'md'
    } else if (width < 1920) {
      return 'lg'
    } else {
      return 'xl'
    }
  }
}

/**
 * Default settings of the withRoot, for SSR.
 * https://material-ui.com/styles/api/#stylesprovider
 *
 * @param {StylesOptions} options Override default settings.
 * @param {GenerateClassNameOptions} options Override default settings.
 */

export const createPageContext = (
  options?: StylesOptions,
  classNameOptions?: GenerateClassNameOptions
): StylesOptions => ({
  jss,
  sheetsManager: new Map(),
  sheetsRegistry: new SheetsRegistry(),
  generateClassName: createGenerateClassName({ ...classNameOptions }),
  ...options,
})

/**
 * Handler for the Page Context, making sure the Context is only created when needed.
 * https://material-ui.com/styles/api/#stylesprovider
 */

export const getPageContext = (
  options?: StylesOptions,
  classNameOptions?: GenerateClassNameOptions
): StylesOptions => {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!(process as any).browser) {
    return createPageContext(options, classNameOptions)
  }

  // Reuse context on the client-side.
  if (!(global as any).__INIT_MATERIAL_UI__) {
    ;(global as any).__INIT_MATERIAL_UI__ = createPageContext(options, classNameOptions)
  }

  return (global as any).__INIT_MATERIAL_UI__
}
