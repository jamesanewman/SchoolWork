'use strict';

$( document ).ready(init);

function init(){
    Templates.loadTemplate( 'word-playlist','views/word-playlist.hbs' );
    Templates.loadTemplate( 'word-scoreboard','views/word-scoreboard.hbs' );
}

function showPlaylist(){
    Templates.loadTemplate( 'word-playlist','views/word-playlist.hbs' ).then( function(){
        Wordlist.getWordlists().then( function( wordlists ){
            var firstList = wordlists.lists[0];
            return Wordlist.getWordlist( firstList.uri ).then( function(words){
                return {
                    info: firstList,
                    words: words
                }
            });
        }).then( function( wordlist ){
            console.log("wordlist ",wordlist)
            var wd = new WordDisplay( 'display','word-playlist' );
            wd.draw( wordlist );
        })
    })
}

function showScoreboard(){
    Templates.loadTemplate( 'word-scoreboard','views/word-scoreboard.hbs' ).then( function(){
        Wordlist.getWordlists().then( function( wordlists ){
            var firstList = wordlists.lists[0];
            return Wordlist.getWordlist( firstList.uri ).then( function(words){
                return {
                    info: firstList,
                    words: words
                }
            });
        }).then( function( wordlist ){
            //console.log("wordlist ",wordlist)
            var wd = new WordDisplay( 'display','word-scoreboard' );
            wd.draw( wordlist );
        })
    })
}
