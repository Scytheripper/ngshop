# Angular Shop

This exercise has two parts:

1. Browsing dogs
2. Adding a "likes" feature

## Setup

```
git clone
cd ngshop
npm install
ng serve --open
```

# Objectives

We'll create a very simple application that displays a list of dogs. In this exercise you will:

* Create components
* Create services
* Implement Dependency Injection (DI)
* Explain services and DI

## Exercise

Finish this application. The main features:

- Displays all the dogs
- Visitors can like any of the dogs listed
- Visitors have a favorites list
- Notifications

#### Requirements

* displays all dogs with images and names
* Each dog has a like button and favorite button
* Use well styled, responsive layout (no ugly apps)
* like buttons have a counter to display the the number of likes
* notifications when a dog on visitors list receives a like

> IMPORTANT: `tsconfig.json` is has been configured with 3 properties to handle JSON files: `resolveJsonModule, esModuleInterop, and allowSyntheticDefaultImports`. 

With this configured, JSON files can be imported as follows: `import jsonName from path/to/json;`.

**`DogsService`**
- manages data sources for dogs
- has a private property `dogData` to `DogService` 
- has a `get()` method to retrieve dogs by their id
- has a `all()` method to retrieve all dogs

**`DogListComponent`**
- uses `DogService`
- has a method `getAll()` which returns all the dogs.
- has property `dogs` with value `this.getAll()`

**`Dog` (class)**
- has 3 properties: id, name and thumbnail, all are strings

#### Stretch Goals

- add a feature for users to have a Favorites list
- add a feature to notify users if a dog on their list has been liked.
