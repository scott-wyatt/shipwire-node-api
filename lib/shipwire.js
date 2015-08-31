var request = require('request');

/**
 * Shipwire API client.
 * @param authorization: String authorization
 * @param secret: String api secret
 * @param sandbox: Boolean true uses sandbox, false/null uses production 
 */
var Shipwire = function(authorization, secret, sandbox) {
    var shipwire = this;
    this.configure({ authorization: authorization, secret: secret, hostname: sandbox ? 'api.beta.shipwire.com' : 'api.shipwire.com' });
}

exports.Shipwire = Shipwire;


(function() {
	
    shipwire.defaults = {
		hostname		: 'api.beta.shipwire.com', //api.beta.shipwire.com
		path			: 'api/v3',
		userAgent		: 'node-shipwire (https://github.com/scott-wyatt/shipwire-node-api)',
		authorization	: null,
		secret			: null
    };

	shipwire.configure = function(options) {
		var options = options || {};
		shipwire.options = {};

		for (var key in shipwire.defaults) {
			shipwire.options[key] = options[key] !== undefined ? options[key] : shipwire.defaults[key];
		}

		return shipwire;
	};


    /**
     * ORDERS API
     * 
     * https://www.shipwire.com/w/developers/orders/
     */
	shipwire.orders = {
    	
    	/**
    	 * orders.cancel
    	 * @parmas id, externalId
    	 */

		cancel: function(params, callback) {
			var id, url = 'orders/%s/cancel';

			id = typeof params.externalId !== 'undefined' ? 'E'+params.externalId : params.id;
			if(typeof id === 'undefined'){
				return callback({ status: 400, message: 'Missing either an id or externalId parameter'}); 
			}

			url = shipwire.format(url, id);

			shipwire.post(url, params, callback);
		},

    	/**
    	 * orders.create
    	 * @param: orderNo
    	 * @param: externalId 
    	 * @param: items
    	 * @param: options
    	 * @param: shipFrom
    	 * @param: shipTo
    	 * @param: commercialInvoice
    	 * @param: packingList
    	 */
		create: function(params, callback) {
			var url = 'orders';

			shipwire.post(url, params, callback);
		},

    	/**
    	 * orders.findOne
    	 * @param: id
    	 * @param: externalId
    	 * @param: expand
    	 */
		findOne: function(params, callback) {
			var id, url = 'orders/%s';
    		
			id = typeof params.externalId !== 'undefined' ? 'E'+params.externalId : params.id;
			if(typeof id === 'undefined'){
				return callback({ status: 400, message: 'Missing either an id or externalId parameter'}); 
			}
			delete params.id;
			delete params.externalId;

			url = shipwire.format(url, id);

			shipwire.get(url, params, callback);
		},

    	/**
    	 * orders.find
    	 * @param: commerceName
    	 * @param: transactionId
    	 * @param: orderId
    	 * @param: referrer
    	 * @param: externalId
    	 * @param: status
    	 * @param: updatedAfter
    	 * @param: warehouseId
    	 * @param: warehouseExternalId
    	 * @param: expand
    	 */
		find: function(params, callback) {
			var url = 'orders';

			shipwire.get(url, params, callback);
		},

    	/**
    	 * orders.holds
    	 * @param: id
    	 * @param: externalId
    	 * @param: includeCleared
    	 */
		holds: function(params, callback) {
			var id, url = 'orders/%s/holds';

			id = typeof params.externalId !== 'undefined' ? 'E'+params.externalId : params.id;
			if(typeof id === 'undefined'){
				return callback({ status: 400, message: 'Missing either an id or externalId parameter'}); 
			}
			delete params.id;
			delete params.externalId;

			url = shipwire.format(url, id);

			shipwire.get(url, params, callback);
		},

    	/**
    	 * orders.holdsClear
    	 * @param: id
    	 * @param: externalId
    	 */
		holdsClear: function(params, callback) {
			var id, url = 'orders/%s/holds/clear';

			id = typeof params.externalId !== 'undefined' ? 'E'+params.externalId : params.id;
			if(typeof id === 'undefined'){
				return callback({ status: 400, message: 'Missing either an id or externalId parameter'}); 
			}
			delete params.id;
			delete params.externalId;

			url = shipwire.format(url, id);

			shipwire.post(url, params, callback);
		},

    	/**
    	 * orders.items
    	 * @param: id
    	 * @param: externalId
    	 */
		items: function(params, callback) {
			var id, url = 'orders/%s/items';

			id = typeof params.externalId !== 'undefined' ? 'E'+params.externalId : params.id;
			if(typeof id === 'undefined'){
				return callback({ status: 400, message: 'Missing either an id or externalId parameter'}); 
			}
			delete params.id;
			delete params.externalId;

			url = shipwire.format(url, id);

			shipwire.get(url, params, callback);
		},

    	/**
    	 * orders.returns
    	 * @param: id
    	 * @param: externalId
    	 */
		returns: function(params, callback) {
			var id, url = 'orders/%s/returns';

			id = typeof params.externalId !== 'undefined' ? 'E'+params.externalId : params.id;
			if(typeof id === 'undefined'){
				return callback({ status: 400, message: 'Missing either an id or externalId parameter'}); 
			}
			delete params.id;
			delete params.externalId;

			url = shipwire.format(url, id);

			shipwire.get(url, params, callback);
		},

    	/**
    	 * orders.splitOrders
    	 * @param: id
    	 * @param: externalId
    	 */
		splitOrders: function(params, callback) {
			var id, url = 'orders/%s/splitOrders';

			id = typeof params.externalId !== 'undefined' ? 'E'+params.externalId : params.id;
			if(typeof id === 'undefined'){
				return callback({ status: 400, message: 'Missing either an id or externalId parameter'}); 
			}
			delete params.id;
			delete params.externalId;

			url = shipwire.format(url, id);

			shipwire.get(url, params, callback);
		},

    	/**
    	 * orders.trackings
    	 * @param: id
    	 * @param: externalId
    	 */
		trackings: function(params, callback) {
			var id, url = 'orders/%s/trackings';

			id = typeof params.externalId !== 'undefined' ? 'E'+params.externalId : params.id;
			if(typeof id === 'undefined'){
				return callback({ status: 400, message: 'Missing either an id or externalId parameter'}); 
			}
			delete params.id;
			delete params.externalId;

			url = shipwire.format(url, id);

			shipwire.get(url, params, callback);
		},

    	/**
    	 * orders.update
    	 * @param: id
    	 * @param: externalId
    	 * @param: expand 
    	 */
		update: function(params, callback) {
			var id, url = 'orders/%s';

			id = typeof params.externalId !== 'undefined' ? 'E'+params.externalId : params.id;
			if(typeof id === 'undefined'){
				return callback({ status: 400, message: 'Missing either an id or externalId parameter'}); 
			}
			delete params.id;
			delete params.externalId;

			url = shipwire.format(url, id);

			shipwire.put(url, params, callback);
		}

    };

    /**
     * STOCK API
     * 
     * https://www.shipwire.com/w/developers/stock/
     */
	shipwire.stock = function(url, params, callback) {

	};

    /**
     * RATE API
     * 
     * https://www.shipwire.com/w/developers/rate/
     */
	shipwire.rate = function(url, params, callback) {

	};

    /**
     * RECEIVINGS API
     * 
     * https://www.shipwire.com/w/developers/receivings/
     */
	shipwire.receivings = function(url, params, callback) {

	};

    /**
     * RETURNS API
     * 
     * https://www.shipwire.com/w/developers/returns/
     */
	shipwire.returns = function(url, params, callback) {

	};

    /**
     * PRODUCTS API
     * 
     * https://www.shipwire.com/w/developers/products/
     */
	shipwire.products = function(url, params, callback) {

	};

    /**
     * GET Request
     */
	shipwire.get = function(apiPath, params, callback) {
		return shipwire.send(apiPath, params, 'GET', callback);
	};
    
    /**
     * POST Request
     */
	shipwire.post = function(apiPath, params, callback) {
		return shipwire.send(apiPath, params, 'POST', callback);
	};

    /**
     * PUT Request
     */
	shipwire.put = function(apiPath, params, callback) {
		return shipwire.send(apiPath, params, 'PUT', callback);
	};

	/**
     * Format String
     */
	shipwire.format = function(string, replacement){
		var expression = /([A-z|0-9]+)=%s\b/g;
		string = string.replace(expression, replacement);

		return string;
	}

    /**
     * Send request to the Shipwire API
     */
    shipwire.send = function(apiPath, params, method, callback) {

		var path = 'https://' + shipwire.options.hostname + '/' + shipwire.options.path + '/' + apiPath;
		var auth = new Buffer(shipwire.options.authorization + ':' + shipwire.options.secret).toString('base64');

		var options = {
			url: path,
			headers: {
				'User-Agent': shipwire.defaults.userAgent,
				'Authorization': 'Basic ' + auth,
				'Content-Length': 0
			}
		};

		var args = [];
		for (var key in params) {
			args.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
		}
		var queryString = args.join('&');
		if (queryString) {
			switch (method) {
				case 'GET':
					options.url += '?' + queryString;
					break;
				case 'POST':
					options.headers['Content-Length'] = queryString.length;
					break;
				case 'PUT':
					options.headers['Content-Length'] = queryString.length;
					break;    
			}
		}

		function cb(error, response, body) {

			if (!error && response.statusCode > 200) {
				callback({ status: response.statusCode, message: body });   
			}
			else {
				callback(null, JSON.parse(body));
			}
		}

		console.log("Calling: "+options.url);
		request(options, cb);
	};


}).call(Shipwire.prototype);