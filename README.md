# Friend list App.

The same App built with React, Angular, Vue.

Angular Online Demo  ->  [angular demo]

React Online Demo  ->  [react demo]

Vue Online Demo  ->  [vue demo]


## Use React App (v 16.x):

cd react/app-list/

`npm start`

visit  --> localhost:8080

### Build

specify   "homepage" into the package.json file:

"homepage": "./"

`npm run build`

then use build folder


## Use Angular App (v 5.x):

cd angular/app-list/

`npm start`

visit  --> localhost:8080

### Build

`ng build --base-href=./`

----------------
anglular-cli.json file
"defaults": {
    "serve": {
      "port": 8080
    }
  }


## Use Vue App  (v 2.x):

cd vue/app-list/

`npm start`

visit  --> localhost:8080

### Build

update the file app/config/index.js

assetsPublicPath: './'

`npm run build`

then use dist folder


[angular demo]: <https://albertopiras.github.io/react-angular-vue-same-app/angular/app-list/dist/>
[react demo]: <https://albertopiras.github.io/react-angular-vue-same-app/react/app-list/build/>
[vue demo]: <https://albertopiras.github.io/react-angular-vue-same-app/vue/app-list/dist/>

