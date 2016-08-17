# Riot Redux Router Boilerplate

This is a boilerplate that uses:

  * Riot
  * Redux
  * Riot Router Tags

## Installation
You will need to install these globally:

  * NodeJS
  * Npm
  * JSPM (npm install jspm@beta)

Then you need to run:

```bash
npm install
jspm install
```

## Running the app
### In dev mode
Just start your favourite web server and point it to the root of the repository.

I use `npm install -g local-web-server` which allows me to run:

```bash
ws -s index.html
```

### In production mode
To build and bundle the app run the command below to create a `dist` folder with the bundled html and js:

```bash
npm run build
```


