
import * as parse from '../modules/api/parser';
export class Service{
    request:any;response:any;version:string;
    //initialISATION
    constructor(req:any,res:any,v:string){
        this.request = req;
        this.response = res;
        this.version =v;

    }
    routes= function(){
    if (this.request.body.data){
        let data = new parse.Parser();
        // @ts-ignore
        data = data.validate(this.request.body.data, this.version);
        //return success statuscode with validating as per version
        this.response.status(200).end(JSON.stringify({statusCode:200 ,data}));
    }
    else{
        //return missing error
        this.response.status(422).end(JSON.stringify({statusCode:422 ,Message:"Missing parameters"}));
    }
};


}

// module.exports = service;
