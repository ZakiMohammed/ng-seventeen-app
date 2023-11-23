# SevenTeen App

App for exploring Angular v17 features.

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