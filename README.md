# [Pinder](https://pinder.forst.pw/)
![Deploy to GitHub Pages](https://github.com/LukasForst/pinder/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)

Pinder is simple application that chooses the name of your project for you!
Use slider to select the project size and let the Pinder generate the project name.
Pinder is hosted on Github Pages and is deployed [here](https://pinder.forst.pw/).

It uses [this](https://stackoverflow.com/a/49434653/7169288) random number generator
which allows the get random number from the shifted [Gaussian Distribution](https://en.wikipedia.org/wiki/Normal_distribution)
where the mean value is value of slider extrapolated to the size of the planet database, 
that was taken from [here](https://github.com/devstronomy/nasa-data-scraper/tree/master/data/json).

## Development
Vue JS with yarn.
### Project setup
```
yarn install
```

#### Compiles and hot-reloads for development
```
yarn serve
```

#### Compiles and minifies for production
```
yarn build
```

#### Lints and fixes files
```
yarn lint
```
