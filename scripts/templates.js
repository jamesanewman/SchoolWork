var Templates = (function() {
	'use strict';

	var instance,templates={};

	Templates = function(args) {
		if (instance) {
			return instance;
		}

		instance = this;

		// your code goes here

		instance.loadTemplate = function( name,uri ){
			if( templates[name] ){
				var dataPromise = $.Deferred();
				//console.log("Prm",dataPromise);
				dataPromise.resolve( templates[name] );
				return dataPromise;
			}
			var store = R.partial( storeTemplate, name );
			return $.get( uri ).then( store );
		}

		instance.loadPartial = function( name, uri ){
			var register = R.partial( registerPartial , name );
			return $.get( uri ).then( register );
		}

		instance.runTemplate = function( name,data ){
			// Need to change so run, loads and load stores a template object
			// load becomes add...
			console.log("Templates ", templates[ name ]);
			return templates[name]( data );
		}

		function storeTemplate( name,text ){
			var template = Handlebars.compile( text );
			templates[ name ] = template;
			return text;
		}

		function registerPartial( name,text ){
			Handlebars.registerPartial(name, text);
			return text;
		}
	};


	return new Templates();
}());
