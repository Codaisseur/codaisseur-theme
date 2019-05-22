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
