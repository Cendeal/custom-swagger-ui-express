# Custom Swagger UI express

Installation

```cmd
npm i custom-swagger-ui-express -S
```

Usage

```javascript
const app = express();
const swaggerUI = require('express-swagger-generator');
swaggerUI(app, {
    route: options.route,
    layer: 3,
    filter: {
        common: ['_id'],
        route: {}, // for example: {'/xx/xx':['_id']}
    }
});
```
