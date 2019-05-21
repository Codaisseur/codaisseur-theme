import { configure, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { theme } from '../src/themes/codaisseur'

const req = require.context('../src', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(muiTheme([
  { themeName: "Codaisseur", ...theme},
]));

configure(loadStories, module);