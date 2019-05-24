import { NONAME } from "dns";

// Override of base components of MUI.
// Using this instead of making our own custom components, we don't even need to modify our existing code base (except for using this theme provider)
// Using root: {} you override every variant, outside of root you only modify the 'default' variant.

export const MuiButtonBase = {
  // node_modules/@material-ui/core/ButtonBase/ButtonBase.js
  root: {
  },
}

export const MuiButton = {
  // node_modules/@material-ui/core/Button/Button.js
  root: {
    borderRadius: 24,
    boxShadow: 'none',
    color: 'green'
  },
  contained: {
    boxShadow: 'none',
  }
}

export const MuiCard = {
  root: {},
}

export const MuiIconButton = {
  label: {
    // padding: '10px'
  },
}

export const MuiPaper = {
  root: {},
}
