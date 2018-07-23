# NgNgrxHighchartsExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



NOTE:

In order to properly utilize the HighMaps code snippet I had to install the following:
* npm install @types/node --save-dev  -> To use the require syntax
* npm install --save @uirouter/angular  -> To use the $q 
* npm install --save-dev @types/jquery -> To use the $ operator

To get the Material Icons to work
* npm install material-design-icons --save
* Add @import 'node_modules/material-design-icons/iconfont/material-icons.css'; to styles.css
