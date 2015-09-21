/**
Simple drawer for the word lists
**/

var WordDisplay = (function() {
  'use strict';

  function WordDisplay( elementId ) {
    // enforces new
    if (!(this instanceof WordDisplay)) {
        return new WordDisplay(elementId);
    }

    this.root = document.getElementById( elementId );
  }

  WordDisplay.prototype.clear = function() {
      $( this.root ).empty();
  }

  WordDisplay.prototype.create = function( wordFunc, wordlist ){
      if( !wordlist ) return;
      console.log("Creating word list...");
      this.clear();
      return R.reduce( function( wrapper , wordDefinition ){
          console.log("Word -> ", wordDefinition.word);
          wrapper.appendChild( wordFunc( wordDefinition.word ) );
          return wrapper;
      }, this.root, wordlist );
  };

  WordDisplay.hidden = function( word ){
      // Simple word display
      console.log("hidden Word");
  };

  WordDisplay.simple = function( word ){
    // Simple word display
    console.log('Simple Word ', word);
    var wrapper = document.createElement( 'div' ),
        wordView = document.createElement( 'span' ),
        playBtn = document.createElement( 'span' );

    console.log('Word -> ', word);
    wrapper.appendChild( wordView );
    wrapper.appendChild( playBtn );

    wrapper.classList.add( 'spelling' );
    wordView.classList.add( 'word-view' );
    wordView.innerText = word;
    playBtn.classList.add( 'btn','play-btn' );
    playBtn.innerText = 'Play';

    return wrapper;
};

  return WordDisplay;

  function createWord( word ){

      var wrapper = document.createElement( "div" ),
          wordView = document.createElement( "span" ),
          playBtn = document.createElement( "span" );

      console.log("Word -> ", word);
      wordDisplay.appendChild( wrapper );
      wrapper.appendChild( wordView );
      wrapper.appendChild( playBtn );

      wrapper.classList.add( "spelling" );
      wordView.classList.add( "word-view" );
      wordView.innerText = word;
      playBtn.classList.add( "btn","play-btn" );
      playBtn.innerText = "Play";

      return wrapper;

  }
}());
