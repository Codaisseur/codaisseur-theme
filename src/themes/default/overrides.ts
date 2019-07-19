// Override of base components of MUI.
// Using this instead of making our own custom components, we don't even need to modify our existing code base (except for using this theme provider)
// Using root: {} you override every variant, outside of root you only modify the 'default' variant.
import { grey, common } from '../default/colors'
export const MuiButtonBase = {
  // node_modules/@material-ui/core/ButtonBase/ButtonBase.js
  root: {},
}

export const MuiButton = {
  // node_modules/@material-ui/core/Button/Button.js
  root: {
    borderRadius: '2rem',
    padding: '14px 22px',
    // disableFocusRipple: true,
    // disableRipple: 'true',
  },
  contained: {
    boxShadow: '4px 0px 2px rgba(0, 0, 0, 0.05)',
    disableRipple: 'true',
    disableFocusRipple: true,
  },
  outlined: {
    padding: '14px 22px',
    '&:hover': {
      background: 'none',
    },
  },
  text: {
    padding: '14px 22px',
    '&:hover': {
      background: grey[300],
      color: common.white,
    },
  },
}

export const MuiCard = {
  // node_modules/@material-ui/core/Card/Card.js
  root: {
    boxShadow: '4px 0px 40px rgba(0, 0, 0, 0.25)',
    borderRadius: '8px',
  },
}

export const MuiCardContent = {
  // node_modules/@material-ui/core/CardContent/CardContent.js
  root: {
    padding: '32px 32px 16px 32px',
    disableRipple: 'true',
  },
}

export const MuiCardActions = {
  // node_modules/@material-ui/core/CardActions/CardActions.js
  root: {
    justifyContent: 'flex-end',
    paddingRight: '32px',
  },
}

export const MuiPaper = {
  root: {},
}

export const MuiTouchRipple = {
  root: {
    display: 'none',
  },
}
