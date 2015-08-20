#Shipwire Node.js API Library

## Status

> ##### Stability: [1](http://nodejs.org/api/documentation.html#documentation_stability_index) - Experimental

shipwire-node-api is a node.js module for asynchronously communicating with the
[Shipwire APIs](https://www.shipwire.com/w/developers/client-libraries/). 

## Getting Started
Use NPM to download and install the API
```sh
npm install shipwire-node-api
```

Then include the Shipwire API in your script
```js
// Load Shipwire API
var Shipwire = require('shipwire').Shipwire;
// Configure Shipwire api
module.exports = new shipwire(<authroization>, <secret>, <sandbox>);
```