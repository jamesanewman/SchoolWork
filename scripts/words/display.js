/**
Simple drawer for the word lists
**/

var WordDisplay = (function() {
  'use strict';

  function WordDisplay( elementId,template ) {
    // enforces new
    if (!(this instanceof WordDisplay)) {
        return new WordDisplay(elementId);
    }

    this.root = document.getElementById( elementId );
    this.template = template;
  }

  WordDisplay.prototype.clear = function() {
      $( this.root ).empty();
  }

  WordDisplay.prototype.draw = function( wordlist ){
    if( !wordlist ) return;

    this.clear();
    console.log("WL: ", wordlist);
    this.root.innerHTML = Templates.runTemplate( this.template , wordlist );;
  }

  return WordDisplay;

}());
