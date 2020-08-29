import * as express from "express";
import * as  service from '../services/services';
export const route = ( app: express.Application ) => {

    // route to handle version1 api
    app.post( "/api/v1/parse",  ( req: any, res ) => {
        //instance to access service
        const serv  = new service.Service(req, res, 'v1');
        return serv.routes();
    } );

    // route to handle version 2 api
    app.post( "/api/v2/parse", ( req: any, res ) => {
        //instance to access service
        const serv  = new service.Service(req, res, 'v2');
        return serv.routes();
    } );
};
