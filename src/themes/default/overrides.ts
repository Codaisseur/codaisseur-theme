// Override of base components of MUI.
export const BuiButtonBase = {
  root: {
    boxShadow: 'none',
    border: '10px solid black',
    alignItems: 'right',
  },
}

export const MuiButton = {
  root: {
    color: 'pink',
    border: '1px dotted purple',
  },
  // anything outside of root will be treated as the default variant.
  text: {
    // Name of the rule
    color: 'yellow', // Some CSS
  },
  border: 0,
  boxShadow: 'none',
}

export const MuiCard = {
  root: {
    boxShadow: 'none',
  },
}

export const MuiPaper = {
  root: {
    border: '5px solid black',
    boxShadow: 'none',
  },
}
