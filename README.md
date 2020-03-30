# Lyrad Digital Devops

This project is used to show how to deploy a static website to AWS.

## Pre-requisites

- Node (*tested on version 12.16.0*)
- NPM (*tested on version 6.14.4*)

## How to run locally

Open up a terminal (*command prompt on Windows*) and run the following npm commands.

```
npm install
npm start
```

## How to run a production build

Once again open up a terminal and run the following command.

```
npm run build:prod
```

This will run the Angular CLI performing a production build. Once the build is complete you can get access to the files you need to deploy inside of the **dist/lyrad-digital-devops** folder.