const express = require( "express" ),
  app = express(),
  path = require( "path" ),
  PORT = 3000;

// register the location of the static assets
app.use( express.static( 'dist' ));

app.get( "/", ( req, res ) => {
  // send the HTML file in the API response
  res.sendFile( path.join( __dirname + "/dist/index.html" ));
});

// Start the API server!
app.listen( PORT, () => console.log( `👂 API server listening on port ${ PORT }` ) );
