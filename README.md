# Portfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# Components and Classes

There are some small complexities that I don't trust myself to remember when using the components that I've created

## Paragraphs

Paragraphs have two modes:
 * normal - a level 3 color (dark or light) 
 * important - a level 1 color (dark or light)

## Hyperlinks

Is contained in the global styles
has .secondary

## Buttons

Is contained in the global styles
has .secondary

## ProjectMini

Project Mini uses two ng-contents:
* the header is controlled in parent by: 
```html
<span class=".project-header">input text</span>
```
* the body is controlled by:
```html
<p>input text</p>
```

## input

### text 

Text inputs should use ngModel and FormsModule to do two way binding for the back end.
has .secondary


# Cloudflare

## Restarting Server
In the case of needing to restart the publically hosted server, follow the following:
1. Connect to server
2. Ensure both a cmd and a terminal are running, if not you will have to open them
    - if they are running run ctrl + c to end proccesses
3. For the angular app, in the cmd, path find to porfolio page and run:
```bash
ng serve --host 0.0.0.0
```
4. For the terminal run:
```bash
cloudflared tunnel run
```
5. Open a browser and ensure that carterbhorton.com is running


