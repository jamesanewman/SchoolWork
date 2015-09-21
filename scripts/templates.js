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
			var store = R.partial( storeTemplate, name );
			return $.get( uri ).then( store );
		}

		instance.runTemplate = function( name,data ){
			return templates[name]( data );
		}

		function storeTemplate( name,text ){
			var template = Handlebars.compile( text );
			templates[ name ] = template;
			return text;
		}

	};


	return new Templates();
}());