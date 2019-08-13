// Override of base components of MUI.
import { secondary } from './palette'
export const MuiButtonBase = {
  // node_modules/@material-ui/core/ButtonBase/ButtonBase.js
  root: {},
}

export const MuiButton = {
  // node_modules/@material-ui/core/Button/Button.js
  root: {
    borderRadius: '2rem',
    padding: '14px 22px',
  },
  contained: {
    boxShadow: '4px 0px 2px rgba(0, 0, 0, 0.05)',
    disableRipple: 'true',
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
      background: 'none',
      color: secondary.main,
    },
  },
}

export const MuiCard = {
  // node_modules/@material-ui/core/Card/Card.js
  root: {
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
    borderRadius: '8px',
  },
}

export const MuiCardContent = {
  // node_modules/@material-ui/core/CardContent/CardContent.js
  root: {
    padding: '32px 32px 16px 32px',
  },
}

export const MuiCardActions = {
  // node_modules/@material-ui/core/CardActions/CardActions.js
  root: {
    justifyContent: 'flex-end',
    paddingRight: '32px',
  },
}

export const MuiTouchRipple = {
  root: {
    display: 'none',
  },
}

export const MUIDataTable = {
  // mui-data-table package, used in Codmin
  paper: {
    boxShadow: 'none',
  },
}
