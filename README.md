# mevn-stack

> A Vue.js project
## required steps
create a .env file in the project root and add a connection string for either a local (mongo)db or a external one (mlab.com)
that looks like this: `MURI="connectionstring"` this is also where you will put any other (development)environment variable's -production variables should be added in the production environment-
## commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
