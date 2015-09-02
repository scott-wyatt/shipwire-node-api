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
var Shipwire = require('shipwire-node-api').Shipwire;
// Configure Shipwire api
module.exports = new Shipwire(<username>, <password>, <sandbox>);
```

##Orders
###orders.create

Creates a new Order

```js
	Shipwire.orders.create({
		
		orderNo:'foobar1',
		externalId: 'rFoobar1',
		items: [<array_of_items>]

	}, function(err, order){
		//asynchronously called
		if(err){
			//handle err
		}
		//handle order
	});
```
###orders.findOne

Finds an Order

###orders.find
Finds multiple Orders

###orders.cancel
Cancels an Order

###orders.holds
Get the list of holds, if any, on an Order

###orders.holdsClear
Clear holds on an Order

###orders.items
Get the contents of an Order

###orders.returns
Get any returns associated with an Order

###orders.splitOrders
Get splitOrders information about an Order

###orders.trackings
Get Tracking Information of an Order

###orders.update
Modifies Information about an Order

##Change Log

###v0.0.12
POST/PUT as JSON. Order API complete.

###v0.0.3
Standarize output

###v0.0.2
Add Support for Order API

###v0.0.1
Initial Upload of API