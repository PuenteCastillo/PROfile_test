# PROfile Demo App

## Node version

Make sure you're on a recent version of Node (e.g., 18.14.0).

To use NVM for Windows, in a Command Prompt, run the following commands:
- List installed versions of Node:  `nvm ls`
- Use a specific Node version:  `nvm use 18.14.0`

## Installation

Install all project dependencies:

```
npm i
```

You can build the JS for production:

```
npm run build
```

Or run a local development server (defaults to [port 5173](http://localhost:5173)):

```
npm run dev
```

### Run Locally with LAN Access

If you have more than one device on your LAN and want to test live updates on all of them you can use these commands to run your Vite server so it's exposed to the LAN

```
npm run devlan

OR

vite --host
```

This will create a `local` and `network` host so other devices can connect to your primary's Vite server

## Deploy and CI/CD

Automatic deploy to Firebase hosting handled by Gitlab Pipelines. You can access deploy config file [HERE](https://gitlab.com/stellar14/profile-demo/-/blob/develop/.gitlab-ci.yml). Gitlab creates new pipeline each time you create new pull request or push something to develop branch. If you want to host an application on your own Firebase console account please follow this 2 steps:
- set your own developer API key to **FIREBASE_TOKEN** CI/CD variable in your repository settings
- set your own Firebase console project name to **.gitlab-ci.yml** file

## Manual Deploy

NOTE: This method should not be used in general. It's just an option provided for those with Gcloud access

1. `npm run build` - build the project into the `/dist` folder
2. `mv dist/index.html functions/` - move the index.html file into functions folder so the global redirect to the function works ( https://stackoverflow.com/questions/44871075/redirect-firebase-hosting-root-to-a-cloud-function-is-not-working )
3. `cd functions` - change to functions directory
4. `npm i` - run npm install in the functions directory
5. `cd ..` - go back to project root
6. `firebase deploy` - deploy to Firebase

## Basic auth

Basic authorization handled through Firebase cloud function. You can access it's source [HERE](https://gitlab.com/stellar14/profile-demo/-/blob/develop/functions/index.js).
# PROfile_test
