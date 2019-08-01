# Codaisseur Theme
This pacakage is a wrapper around material UI to provide consistency accross all our products.

## What does this repo do
Thanks to our Codaisseur theme, you'll be sure that your (new) project will now be visually consistent with the other Codaisseur applications. For example, you'll be able to update your project with colors, typography, UI elements, etc. easily and quickly, plus they will be visually relevant with the rest of the Codaisseur branding, guaranteeing consistency across multiple applications. This is possible because the @codaisseur/theme is also published as an npm package, so just use it as any other dependency of your project.

## Styleguide
This determins how everything should look like, it determins what our brand looks like. All style guides can be found in the following Figma file:

https://www.figma.com/file/VGMnY53gxNur3ad8cbNpT9/Codaisseur-Design-System?node-id=0%3A1

## Set up the project

- Clone this repo
- `$ yarn install`

## Run it
To start the application you have 2 options:

1) Storybook - simply run `yarn storybook` and visit the address that will open automatically. This is super useful if you wanna test components independently.
2) `yarn start` requires an uncomment of the code on main index.tsx: make sure to uncomment `import('./start').catch(() => ({}))`, which is located at the bottom of the index file.
```
// if index is loaded during API call, we dont want code to run
// start is in .npmignore, try or fail
// import('./start').catch(() => ({}))
```
Then save and run the command. **Please make sure that line is commented out again when releasing a package**

## Deploy it
1. Run a `yarn build` and check if your latest changes appear in the `dist` directory.
2. Add, commit, push and merge your changes on Github
3. Checkout on master and pull the latest version you just merged (you need to be on master in order to run the next comands). 4. Run `np` (which is a 'better' `npm publish`) to publish the changes as a new version on NPM, and then choose which kind of release you're about to publish. Options are patch | minor | major | prepatch | preminor | premajor | prerelease. For smaller changes choose `patch`. E.g., if the current version is 1.2.3, a 'patch' will make it 1.2.4 Additional info about `np` can be found [HERE](https://github.com/sindresorhus/np). Make sure the @codaisseur/theme is properly updated on npm.
5. Update the github tag (you will be prompted to do so every time you publish a new npm package version).

### Test it on your project
If you want to test how your changes would look like on your application, `cd` into your project and run `yarn add @codaisseur/theme`. If you are already using the theme and you want to update it with the latest version, run `yarn upgrade @codaisseur/theme`. You can also choose to use a specific version, such as `yarn upgrade @codaisseur/theme@1.2.3`.

### The data flow
Our custom components are defined in the homonym directory. The 'theme' object is created in the themes/codaisseur/index.ts file. The 'theme' is defined using our custom components, overrides, typography, colors, etc. that are imported in this file. Basically, if you want to update this repo with a new feature, make sure it's included in this 'theme' object. The 'theme' is then exported to the general index.tsx. This is where the ThemeProvider is, which is the wrapper of our own custom theme.

### How to use a custom component in your project
- `$ npm install @codaisseur/theme` or `$ yarn add @codaisseur/theme`
Once this is done, you can import components from the theme straight in your project. E.g., 
`import { Button } from '@codaisseur/theme'` and then use it like you would normally do with any Material UI component.

### Additional good-to-know (Material UI)
In themes/default/index.ts we create all the "default" objects like palette, typography, breakpoints, etc. that will then become the keys of the final 'theme' object, declared and exported in themes/codaisseur/index.ts. 
Though custom components have their own directory, in the default directory you'll see an 'overrides' file. Use this any time you need to override the base components of a MUI element, rather than creating a completely new custom component.



