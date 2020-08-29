import express from "express";
import * as routes from "./routes/routes";
const app = express();
const port = 5000; // port where server runs

app.use( express.json());
// routes
routes.route( app );

// default route
app.get( "/", ( req, res ) => {
    res.send( "Home" );
} );

// starting the server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
