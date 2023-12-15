# SevenTeen App

SevenTeen App is for exploring Angular v17 newly added features.

Below shows list of new features:

- Standalone (full project)
- Standalone Migration
- Control flows - @for, @if, @switch
- Deferrable Views
- Signals
- SSR and SSG
- New Lifecycle Hooks

TODO:

- Add shell and login [Done]
- Add guard and API call
- Add Bootstrap Icon and replace with FA
- Add ESLint with Prettier rule
- Add environment files
- Folder Structure
- Budgeting
- Add global toaster
- API caching
- HTTP interceptor
- Azure App Insight

## Run App

Below command will run the project:

```
npm start
```

## Initial Setup

Below command executed to perform initial setup:

```
ng new seventeen-app
```

## Bundle Monitoring and Visualization

For monitoring the bundle size and visualization of components we can use 2 packages:

- Source Map Explorer
- Vite Bundle Visualizer

### 1. Source Map Explorer

For source map explorer follow below steps:

Install `source-map-explorer` as `devDependencies`:
```
npm i source-map-explorer -D
```

Add scripts in `package.json` file:
```
"scripts": {
  "build:analyze": "ng build --configuration production --source-map",
  "explorer": "npm run build:analyze && source-map-explorer dist/**/*.js"
}
```

### 2. Vite Bundle Visualizer

For `vite-bundle-visualizer` run below command after running the `build:analyze` command:

```
npx vite-bundle-visualizer --i C:\Zaki\Study\Angular\ng-seventeen-app\dist\seventeen-app\browser\index.html
```

## Prettier Formatter

Create a Prettier ignore file `.prettierignore`:
```
package.json
package-lock.json
.eslintrc.json
tsconfig.json
dist
/.angular/cache
eslint/reports/**
```

Create a Prettier config file `.prettierc.json`:
```
{
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "semi": true,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "trailingComma": "es5",
  "bracketSameLine": true,
  "printWidth": 80,
  "endOfLine": "auto",
  "overrides": [
    {
      "files": ["*.html", "*.ts"],
      "options": {
        "printWidth": 120
      }
    },
    {
      "files": "*.js",
      "options": {
        "printWidth": 80
      }
    }
  ]
}

```

## Dependencies

Below packages are added:

```
npm i bootstrap
```

### FontAwesome

Read the documentation from here:

https://github.com/FortAwesome/angular-fontawesome/blob/HEAD/docs/usage.md

```
npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/free-brands-svg-icons
npm install @fortawesome/free-regular-svg-icons
npm install @fortawesome/angular-fontawesome@latest
```

Import FontAwesomeModule to AppModule:

We are following the "Icon Library" approach:
https://github.com/FortAwesome/angular-fontawesome/blob/a20496d424c64478130c95f822fcbb23da0b5b8b/docs/usage/icon-library.md.

```
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faCoffee);
  }
}
```

Usage:

```
<fa-icon icon="coffee"></fa-icon>
<fa-icon [icon]="['fab', 'angular']" size="lg"></fa-icon>
```
