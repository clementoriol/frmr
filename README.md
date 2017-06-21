# Frmr

*Frmr* is a javascript architecture solution for your vanillajs / jQuery apps.
It's intented be used with server-side rendered apps, where organising front-end code can be a pain.

**/!\ This is a work in progress, the API is subject to change, DO NOT use yet.**

## How to use
*TODO*

## How to contribue

### Setup the project

- Clone the repo

- Install [NVM](https://github.com/creationix/nvm) which allows you to manage your node version
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```

- (In the project folder) Install the node version specified for the project
```
nvm install
```

-(Optional) [Install AVN](https://github.com/wbyoung/avn) which allows you to automatically switch node version to the version specified in the `.nvmrc` file when switching between project folders

- Install the dependencies using yarn
```
yarn install
```

### Development
Start the local server
```
npm start
```

And check [http://localhost:3000](http://localhost:3000) in your browser.

## Building
Builds the project in the `/dist` folder using:
```
npm run build
```

Build the project and analyze its dependencies (useful when debugging bundle size)
```
npm run build:analyze
```
And check [http://localhost:8888](http://localhost:8888) in your browser.
