# ngrx-books

This example application utilizes @ngrx libraries while showcasing common patterns and best practices.

**Take a look at the [live app](http://ngrx-books.npmstack.com).**

This app is a book collection manager. Using the Google Books API, the user can search for books and add them to their collection.

### Included
 - [ngrx/store](https://github.com/ngrx/store) - RxJS powered state management for Angular apps, inspired by Redux
 - [ngrx/effects](https://github.com/ngrx/effects) - Side effect model for @ngrx/store
 - [angular/router](https://github.com/angular/angular) - Angular Router
 - [ngrx/db](https://github.com/ngrx/db) - RxJS powered IndexedDB for Angular apps
 - [ngrx/store-devtools](https://github.com/ngrx/store-devtools) - Instrumentation for @ngrx/store enabling time-travel debugging
 - [codewareio/ngrx-store-freeze](https://github.com/codewareio/ngrx-store-freeze) - A @ngrx/store meta reducer that prevents state from being mutated
 - [reselect](https://github.com/reactjs/reselect) - Selector library for Redux

 ### Setup Instructions

 - The setup instructions assume you have added the Angular CLI globally.
 - If this is not the case you will need to install the [Angular CLI](https://cli.angular.io/):
 ```
 npm install -g @angular/cli
 ```
 - Clone the repo:
 ```
 git clone https://github.com/sethbergman/ngrx-books.git
 ```

 - Change to the repo directory and install the dependencies:
 ```
 cd ngrx-books && npm i
 ```
 - Start the server:
 ```
 ng serve
 ```
 - Navigate to [http://localhost:5000/](http://localhost:5000/) in your browser.

 ### Production Build

 - Run the build command:
 ```
 npm run build
 ```
 - Start the server:
 ```
 npm start
 ```
 -------
 @TODO:
 - [ ] Implement user auth and login pages
 - [ ] Implement better state management
 - [ ] Include deployment instructions
 - [ ] Add CONTRIBUTING.md page
 - [ ] Add waffle board
 - [ ] Add Slack team invitation
 - [ ] Add dependencies manager
 - [ ] Add documentation
 - [ ] Write tutorial blog post

 ### Want to contribute?
 __Pull Requests are encouraged!__ :rocket:
