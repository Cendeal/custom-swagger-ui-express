# Custom Swagger UI Express

Installation

```cmd
npm i custom-swagger-ui-express -S
```

Usage

```javascript
const app = express();
const swaggerUI = require('custom-swagger-ui-express');
swaggerUI.registerSwaggerUI(app, {
    route: {
    	url:'/swagger', // the swagger page link for user to visit
    	docs:'/swagger.json',// where is the swagger json file
    },
    layer: 3, // flatten data deepth
    filter: {
        common: ['_id'], // all columns will not show this list data
        route: {}, // for example: {'/xx/xx':['_id']} // appoint filter for route
    },
    rootElements:{
    	common:['data.result','data'], // skip data by root elements, in this list they has their own priority, the first is higher after, once find root element, it will not to find the next one
    	route:{} // appoint root element for route
    }
});
```
You can use [Express-swagger-generator](https://www.npmjs.com/package/express-swagger-generator) to generate json file.

You can use [Customer Swagger UI ](https://github.com/Cendeal/customer-swagger-ui.git) desgin your own swagger UI
