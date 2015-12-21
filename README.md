# verdant-prune (Work in progress)

A small proof-of-concept application using :
* Node v5.1 with ES6 (server) and TypeScript(client)
* Angular2 client,
* RESTFull API with access control using jwt,
* data storage with mongodb

## Editing confort with Atom

* Atom/linter-jshint setups for comfortable development,
* Uses Atom-typescript and linter-tslint for typescript
* Configuration disables compileOnSave for ts (since it is transpiled in the browser)
* npm install angular2 without the dependencies - used only for type checking

## What this application is supposed to do

Allow a multi-user, password control, access to a single-page application,
to enter/update the daily weight, and display various graphs and trends.

## Current status and TODOSll

First version of angular2 client is functionnal, (but visually ugly !)
