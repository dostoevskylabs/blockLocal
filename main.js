let script 	= document.createElement( "script" );
let code 	= document.createTextNode( `(function(){
let evil = ['localhost', '127.0.0.1'];
  let defaultFetch = fetch;
  fetch = function( ... params ) {
     let url = params[0];
     url = ( url.indexOf("://") > -1 ? url.split("/")[2] : url.split("/")[0] ).split(":")[0].split("?")[0];
     if ( evil.includes( url ) ) {
       console.log('blocked request');
       return false;
     }
     return defaultFetch(params);
  }
})();` );
script.appendChild( code );
(document.body || document.head || document.documentElement).appendChild( script );
