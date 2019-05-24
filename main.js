let blockLocal_Script	= document.createElement( "script" );
let blockLocal_Code = document.createTextNode( `(function(){
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
blockLocal_Script.appendChild( blockLocal_Code );
(document.head || document.body || document.documentElement).appendChild( blockLocal_Script );
