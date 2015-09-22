/*
Word list manager
*/
'use strict';

var Wordlist = (function() {

    var WL = {};

    WL.getWordlists = function(){
        return $.getJSON( 'data/wordlist.json').then( function( wordlists ){
            //console.log("Word lists: ", wordlists);
            return wordlists;
        });
    };

    WL.getWordlist = function(uri){
        return $.getJSON( uri ).then( function( wordlist ){
            //console.log("Word list: ", wordlist);
            return wordlist;
        });
    };

    return WL;

}());
