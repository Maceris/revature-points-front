# RevaPoints

## Contributing
1. Create your feature branch: `git checkout -b new_branch_name`
2. Stage your changes for commit `git add .`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin new_branch_name`
5. Submit a pull request to the Master Branch when you are done with your feature, do NOT push directly

## Development Workflow

* The `master` branch at any time represents a stable (and tested) build of the code base.
* All development work should be performed in feature branches. In most cases, feature branches will be branched off of the `master` branch. Naming of the feature branches is up to the developer. Using your initials is helpful so we know who is working where, but not crucial. (Ex: `ma-feature_name`)
* Pull from `master` often, and especially before submitting a pull request to make sure your feature branch has the latest codebase.   
* When commits are made be sure to describe what is done
* BEFORE submitting a pull request, ensure that your branch is up to date with `master`
* When a feature branch is ready and up to date with `master`, submit a pull request detailing the changes made, any dependency updates, and any other information to help with the merge.
* The repo admin will be responsible for merging all pull requests, enforcing coding standards and generally keeping `master` stable and clean. In most cases the repo admin will be responsible for upgrading dependencies as well.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

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
