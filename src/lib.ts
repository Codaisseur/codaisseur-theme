export const rgb = (r: number, g: number, b: number) => {
  return `rgb(${r},${g},${b})`
}

export const rgba = (r: number, g: number, b: number, a: number) => {
  return `rgba(${r},${g},${b},${a})`
}

export const px2pt = (px: number) => px / 8
